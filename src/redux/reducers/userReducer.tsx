import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserModelType } from '../../models/UserModelType';
import { DispatchType, GetStateMethodType } from '../store';
import { httpClient } from '../../util/setting';

export interface UserStateType {
    userProfile: UserModelType | null,
    arrUser: UserModelType[]
}

const initialState: UserStateType = {
    userProfile: null,
    arrUser: []
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUserProfileApi: (state: UserStateType, action: PayloadAction<UserModelType>) => {
            state.userProfile = action.payload
        },
        setArrUserAction: (state: UserStateType, action: PayloadAction<UserModelType[]>) => {
            state.arrUser = action.payload
        }
    }
});

export const { setUserProfileApi, setArrUserAction } = userReducer.actions

export default userReducer.reducer

// --
export const getAllUserApi = () => {
    return async (dispatch: DispatchType) => {
        const res = await httpClient.get('api/users')
        const action: PayloadAction<UserModelType[]> = setArrUserAction(res.data)
        dispatch(action)
    }
}

export const getUserProfileApi = () => {
    return async (dispatch: DispatchType, getState: GetStateMethodType) => {
        const res = await httpClient.get('/api/users/thong-tin-tai-khoan')
        const action: PayloadAction<UserModelType> = setUserProfileApi(res.data)
        dispatch(action)
    }
}

export const uploadAvatar = async (file: File) => {
    const res = await httpClient.post('/api/users/upload-avatar', file)
    return res
}

export const updateProfile = async (id: number, userProf: object) => {
    const res = await httpClient.patch(`/api/users/${id}`, userProf)
    return res
}