import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/store'
import { getUserProfileApi } from '../../redux/reducers/userReducer'
import { imgPath } from '../../util/setting'
import UpdateProfile from '../../components/UpdateProfile'
import { getBookingByUserApi } from '../../redux/reducers/bookingReducer'
import UploadAvatarModal from '../../components/UploadAvatarModal'
import { getAllRoomApi } from '../../redux/reducers/roomReducer'
import { BookingModelType } from '../../models/BookingModelType'
import { RoomModelType } from '../../models/RoomModelType'
import { NavLink } from 'react-router-dom'
import ChangePassword from '../../components/ChangePassword'

type Props = {}

const Profile = (props: Props) => {
  const dispatch: DispatchType = useDispatch()
  const { userProfile } = useSelector((state: RootState) => state.userReducer)
  const { arrBooking } = useSelector((state: RootState) => state.bookingReducer)
  const { arrRoom } = useSelector((state: RootState) => state.roomReducer)

  useEffect(() => {
    const actionAsync = getUserProfileApi()
    dispatch(actionAsync)
  }, [])

  useEffect(() => {
    const actionAsync = getBookingByUserApi(userProfile?.ma_nguoi_dung as number)
    dispatch(actionAsync)
  }, [dispatch, userProfile])

  useEffect(() => {
    dispatch(getAllRoomApi())
  }, [])

  return (
    <div className='profile'>
      {/* Carousel */}
      <div className='carousel-2'>
        <div className="carousel-title">
          <h1>Thông tin người dùng ( {userProfile?.ten_nguoi_dung} )</h1>
        </div>
      </div>

      {/* carousel content */}
      <div className="profile-content row">
        <div className="col-12 col-lg-4 col-xl-3">
          <div className="profile-info">
            <div className="profile-avatar">
              <img src={userProfile?.avatar ? `${imgPath}${userProfile.avatar}` : '/image/avatar-dep-84.jpg'} alt="avatar" />
              <p><a href="#" data-bs-toggle="modal" data-bs-target="#uploadAvatarModal">Cập nhật ảnh</a></p>
            </div>
            <div className="profile-verification">
              <h5><img src="https://cdn-icons-png.flaticon.com/512/5972/5972778.png" alt="" width={20} /> Xác minh danh tính</h5>
              <p>Xác minh danh tính của bạn với huy hiệu xác minh danh tính.</p>
              <a className="btn btn-outline-secondary" href="#" role="button">Nhận huy hiệu</a>
            </div>
            <h5 className='py-3 text-capitalize'>{userProfile?.ten_nguoi_dung} đã xác nhận</h5>
            <p><svg width={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg> &nbsp; Địa chỉ email ({userProfile?.email})</p>
          </div>
        </div>
        <div className="col-12 col-lg-8 col-xl-9">
          <div className="profile-overview">
            <div className="profile-edit">
              <h5>Xin chào, tôi là {userProfile?.ten_nguoi_dung}</h5>
              <span className='d-inline-block py-1'>Bắt đầu tham gia vào 2023</span>
              <p><a href="#" data-bs-toggle="modal" data-bs-target="#updateProfile">Chỉnh sửa hồ sơ</a> &nbsp; | &nbsp; <a href="#" data-bs-toggle="modal" data-bs-target="#changePwdModal">Đổi mật khẩu</a></p>

              <div className="profile-bookings">
                <h4>Phòng đã thuê</h4>
                {/* Card */}
                {
                  arrBooking.map((item: BookingModelType, index: number) => {
                    let roomBooking = arrRoom.find((room: RoomModelType) => room.ma_phong === Number(item.ma_phong))
                    return <div className="card mb-3" key={index}>
                      <NavLink to={`/detail/${roomBooking?.ma_phong}`}>
                        <div className="row g-0">
                          <div className="col-md-5">
                            <img src={`${imgPath}${roomBooking?.hinh_anh}`} className="img-fluid rounded-start" alt="..." />
                          </div>
                          <div className="col-md-7">
                            <div className="card-body">
                              <h5 className="card-title">{roomBooking?.ten_phong}</h5>
                              <p className="card-text">Ngày đến: {item.ngay_den} - Ngày đi: {item.ngay_di}</p>
                              <small className="text-muted">Số lượng khách ({item.so_luong_khach})</small>
                              <p className="card-text price"><small className="text-muted">$ 28 / đêm</small></p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <UploadAvatarModal></UploadAvatarModal>
      <UpdateProfile></UpdateProfile>
      <ChangePassword></ChangePassword>
    </div>
  )
}

export default Profile