import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BookingModelType } from '../../models/BookingModelType';
import { DispatchType } from '../store';
import { httpClient } from '../../util/setting';

export interface BookingStateType {
    arrBooking: BookingModelType[]
}

const initialState: BookingStateType = {
    arrBooking: [],
}

const bookingReducer = createSlice({
    name: 'bookingReducer',
    initialState,
    reducers: {
        setArrBookingAction: (state: BookingStateType, action: PayloadAction<BookingModelType[]>) => {
            state.arrBooking = action.payload
        }
    }
});

export const { setArrBookingAction } = bookingReducer.actions

export default bookingReducer.reducer

// --
export const getAllBookingApi = () => {
    return async(dispatch: DispatchType) => {
        const res = await httpClient.get('/api/dat-phong')
        const action:PayloadAction<BookingModelType[]> = setArrBookingAction(res.data)
        dispatch(action)
    }
}

export const getBookingByUserApi = (userId: number) => {
    return async (dispatch: DispatchType) => {
        const res = await httpClient.get(`/api/dat-phong/lay-theo-nguoi-dung/${userId}`)
        const action: PayloadAction<BookingModelType[]> = setArrBookingAction(res.data)
        dispatch(action)
    }
}