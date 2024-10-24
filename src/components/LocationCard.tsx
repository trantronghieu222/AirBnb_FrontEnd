import React from 'react'
import { NavLink } from 'react-router-dom'
import { LocationModelType } from '../models/LocationModelType'

type Props = {
    location: LocationModelType
}

const LocationCard = (props: Props) => {
    const { location } = props
    return (
        <NavLink to={`/rooms/${location.ma_vi_tri}`}>
            <div className="row location-item">
                <div className="col-3 location-img">
                    <img src={location.hinh_anh} alt="" />
                </div>
                <div className='col-9 location-content p-0'>
                    <h5>{location.tinh_thanh}</h5>
                    <small>{location.ten_vi_tri}</small>
                </div>
            </div>
        </NavLink>
    )
}

export default LocationCard