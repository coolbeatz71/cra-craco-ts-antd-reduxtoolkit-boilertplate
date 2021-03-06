import { TOKEN_INVALID_EXPIRED } from '@constants/api';
import { LOGIN_PATH } from '@constants/paths';
import { API_TOKEN, API_URL } from '@constants/platform';
import getToken from '@helpers/getToken';
import axios, { AxiosError, AxiosResponse } from 'axios';

const token = getToken();

const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

const responseHandler = (response: AxiosResponse): AxiosResponse => response.data;
const errorHandler = async (error: AxiosError): Promise<AxiosError> => {
    if (error?.message === TOKEN_INVALID_EXPIRED) {
        localStorage.removeItem(API_TOKEN);
        window.location.href = LOGIN_PATH;
    }
    const errorResponse = error.response ? error.response.data : error.message;
    return await Promise.reject(errorResponse);
};

api.interceptors.response.use(responseHandler, errorHandler);

export default api;
