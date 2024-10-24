import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginModelType } from '../../models/LoginModelType';
import { RegisterModelType } from '../../models/RegisterModelType';
import { DispatchType, GetStateMethodType } from '../store';
import { message } from 'antd';
import axios from 'axios';
import { setDataJsonStorage } from '../../util/utilMethod';
import { httpClient } from '../../util/setting';


export interface AuthStateType {
  userLogin: LoginModelType | null,
  userRegis: RegisterModelType | null
}

const initialState: AuthStateType = {
  userLogin: null,
  userRegis: null
}

const authReducer = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setLoginAction: (state: AuthStateType, action: PayloadAction<LoginModelType>) => {
      state.userLogin = action.payload
    },

    setRegisterAction: (state: AuthStateType, action: PayloadAction<RegisterModelType>) => {
      state.userRegis = action.payload
    }
  }
});

export const { setLoginAction, setRegisterAction } = authReducer.actions

export default authReducer.reducer

// Login Api
export const loginActionApi = (user: object) => {
  return async (dispatch: DispatchType, getState: GetStateMethodType) => {
    try {
      const res = await httpClient.post('/api/auth/signin', user)
      const action: PayloadAction<LoginModelType> = setLoginAction(res.data.content)
      dispatch(action)
      setDataJsonStorage('accessToken', res.data.token)
      setDataJsonStorage('userLogin', res.data.content)
      message.success('Đăng nhập thành công');

      setTimeout(() => {
        window.location.href = '/';
      }, 1000); 
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        message.error(error.response?.data?.message || 'Có lỗi xảy ra');
      } else {
        message.error('Có lỗi không xác định xảy ra');
      }
    }
  }
}

// Register Api
export const registerActionApi = (userRegis: object) => {
  return async (dispatch: DispatchType, getState: GetStateMethodType) => {
    try {
      const res = await httpClient.post('/api/auth/signup', userRegis)
      const action: PayloadAction<RegisterModelType> = setRegisterAction(res.data.content)
      dispatch(action)
      message.success('Đăng ký thành công')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        message.error(error.response?.data?.message || 'Có lỗi xảy ra');
      }
      else {
        message.error('Có lỗi không xác định xảy ra');
      }
    }
  }
}

// Logout
export const logoutAction = () => {
  localStorage.removeItem('userLogin');
  localStorage.removeItem('accessToken');
  message.success('Đăng xuất thành công');
  
  setTimeout(() => {
    window.location.href = '/';
  }, 1000); 
};

// Update Password
export const updatePasswordApi = async (newPwd: object) => {
  try {
    const res = await httpClient.patch('/api/auth/doi-mat-khau', newPwd)
    message.success('Đổi mật khẩu thành công')
    return res
  }catch (error) {
    if (axios.isAxiosError(error)) {
      message.error(error?.response?.data.message)
    }
    else {
      message.error('Có lỗi không xác định xảy ra')
    }
  }
}