import React, { useEffect } from 'react'
import SearchBox from '../../components/SearchBox'
import CardRoom from '../../components/CardRoom'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/store'
import { RoomModelType } from '../../models/RoomModelType'
import { getAllRoomApi, getRoomByLocationId } from '../../redux/reducers/roomReducer'
import { useParams } from 'react-router-dom'
import { getSelectedLocationApi } from '../../redux/reducers/locationReducer'

type Props = {}

const Search = (props: Props) => {
  const dispatch: DispatchType = useDispatch()

  const params = useParams();
  const {id} = params;

  const { arrRoom } = useSelector((state: RootState) => state.roomReducer)
  const {selectedLocation} = useSelector((state: RootState) => state.locationReducer)

  const getSelectedLocation = async () => {
    const actionAsync = getSelectedLocationApi(id as string)
    dispatch(actionAsync)
  }

  const getRoomByLocation = async () => {
    const actionAsync = getRoomByLocationId(id as string);
    dispatch(actionAsync)
  }

  useEffect(() => {
    getRoomByLocation();
  }, [])

  useEffect(() => {
    getSelectedLocation();
  }, [])

  return (
    <div className='search-page'>
      <div className='carousel-2'>
        <div className="carousel-title">
          <h1>{selectedLocation?.tinh_thanh}</h1>
        </div>
      </div>
      <SearchBox></SearchBox>
      <div className="row search-container">
        <div className="col-6 search-left">
          {/* Title */}
          <div className="search-title">
            <p>Có {arrRoom.length} chỗ ở tại {selectedLocation?.tinh_thanh} • 24/09/2024 – 01/10/2024</p>
            <h3>Chỗ ở tại khu vực bản đồ đã chọn</h3>
          </div>
          {/* Card */}
          {
            arrRoom.map((item:RoomModelType, index:number) => {
              return <div key={index}>
                <CardRoom room={item} location={selectedLocation}></CardRoom>
              </div>
            })
          }
        </div>
        <div className="col-6 search-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.520247967964!2d106.67818747465415!3d10.762622292307875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f405c3f7235%3A0x4ef5b21dba7db825!2sSaigon%20Notre-Dame%20Basilica!5e0!3m2!1sen!2s!4v1695402398824!5m2!1sen!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-100 h-100'>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Search