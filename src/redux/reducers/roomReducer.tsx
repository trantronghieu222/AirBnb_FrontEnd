import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RoomModelType } from '../../models/RoomModelType';
import { DispatchType, GetStateMethodType } from '../store';
import axios from 'axios';
import { httpClient } from '../../util/setting';

export interface RoomStateType {
  arrRoom: RoomModelType[]
  detailRoom: RoomModelType | null
}

const initialState: RoomStateType = {
  arrRoom: [],
  detailRoom: null
}

const roomReducer = createSlice({
  name: 'roomReducer',
  initialState,
  reducers: {
    setArrRoomAction: (state:RoomStateType, action:PayloadAction<RoomModelType[]>) => {
      state.arrRoom = action.payload;
    },
    setDetailRoomAction: (state:RoomStateType, action:PayloadAction<RoomModelType>) => {
      state.detailRoom = action.payload;
    }
  }
});

export const { setArrRoomAction, setDetailRoomAction } = roomReducer.actions

export default roomReducer.reducer

// -- -- -- -- 
export const getAllRoomApi = () => {
  return async (dispatch: DispatchType, getState: GetStateMethodType) => {
    const res = await httpClient.get('/api/phong-thue');
    const action:PayloadAction<RoomModelType[]> = setArrRoomAction(res.data.content);
    dispatch(action)
  }
}

export const getRoomByLocationId = (id: string) => {
  return async (dispatch: DispatchType, getState: GetStateMethodType) => {
    const res = await httpClient.get(`/api/phong-thue/lay-phong-theo-vi-tri/${id}`);
    const action:PayloadAction<RoomModelType[]> = setArrRoomAction(res.data.content);
    dispatch(action)
  }
}

export const getRoomByIdApi = (id: string) => {
  return async (dispatch: DispatchType, getState: GetStateMethodType) => {
    const res = await httpClient.get(`/api/phong-thue/${id}`);
    const action:PayloadAction<RoomModelType> = setDetailRoomAction(res.data.content)
    dispatch(action)
  }
}