import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LocationModelType } from '../../models/LocationModelType';
import { DispatchType, GetStateMethodType } from '../store';
import { httpClient } from '../../util/setting';

export interface LocationStateType {
    arrLocation: LocationModelType[],
    selectedLocation: LocationModelType | null
}

const initialState: LocationStateType = {
    arrLocation: [],
    selectedLocation: null
}

const locationReducer = createSlice({
    name: 'locationReducer',
    initialState,
    reducers: {
        setArrLocationAction: (state:LocationStateType, action:PayloadAction<LocationModelType[]>) => {
            state.arrLocation = action.payload
        },
        setSelectedLocation: (state:LocationStateType, action:PayloadAction<LocationModelType>) => {
            state.selectedLocation = action.payload
        }
    }
});

export const { setArrLocationAction, setSelectedLocation } = locationReducer.actions

export default locationReducer.reducer

export const getAllLocationApi = () => {
    return async(dispatch: DispatchType, getState: GetStateMethodType) => {
        const res = await httpClient.get('/api/vi-tri')
        const action:PayloadAction<LocationModelType[]> = setArrLocationAction(res.data)
        dispatch(action)
    }
}

export const getSelectedLocationApi = (id: string) => {
    return async(dispatch: DispatchType, getState: GetStateMethodType) => {
        const res = await httpClient.get(`/api/vi-tri/${id}`)
        const action:PayloadAction<LocationModelType> = setSelectedLocation(res.data)
        dispatch(action)
    }
}

export const addLoactionApi = async (location: object) => {
    const data = await httpClient.post('/api/vi-tri', location)
    return data
}

export const uploadLocationImageApi = async (id: number ,location: File) => {
    const data = await httpClient.post(`/api/vi-tri/upload-hinh-vi-tri/${id}`, location)
    return data
}

export const updateLocationApi = async (id: number, location: object) => {
    const data = await httpClient.patch(`/api/vi-tri/${id}`, location)
    return data
}