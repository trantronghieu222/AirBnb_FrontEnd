import React from 'react'
import { RoomModelType } from '../models/RoomModelType'
import { LocationModelType } from '../models/LocationModelType'
import { NavLink } from 'react-router-dom'

type Props = {
    room: RoomModelType
    location: LocationModelType | null
}

const CardRoom = (props: Props) => {
    let { room, location } = props
    return (
        <div className="card mb-3">
            <NavLink to={`/detail/${room.ma_phong}`}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={room.hinh_anh} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <small className="text-muted">Toàn bộ căn hộ dịch vụ tại {location?.tinh_thanh}</small>
                            <h5 className="card-title">{room.ten_phong}</h5>
                            <p className="card-text">{room.khach} khách • Phòng studio • {room.phong_ngu} phòng ngủ • {room.giuong} giường • {room.phong_tam} phòng tắm</p>
                            <p className="card-text price"><small className="text-muted">$ {room.gia_tien} / đêm</small></p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default CardRoom