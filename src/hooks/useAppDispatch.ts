import { useDispatch } from 'react-redux';
import { AppDispatch, IAppDispatch } from '@redux/store';

export const useAppDispatch = (): IAppDispatch => useDispatch<AppDispatch>();
