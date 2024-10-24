import React, { useEffect } from 'react'
import { Image } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { getRoomByIdApi } from '../../redux/reducers/roomReducer';
import { getSelectedLocationApi } from '../../redux/reducers/locationReducer';
type Props = {}

const Detail = (props: Props) => {
  const dispatch: DispatchType = useDispatch()
  const params = useParams()
  const { id } = params

  const { detailRoom } = useSelector((state: RootState) => state.roomReducer)
  const {selectedLocation} = useSelector((state: RootState) => state.locationReducer)

  const getDetailRoom = () => {
    const actionAsync = getRoomByIdApi(id as string)
    dispatch(actionAsync)
  }

  const getSelectedLocation = () => {
    const actionAsync = getSelectedLocationApi(detailRoom?.ma_vi_tri as any)
    dispatch(actionAsync)
  }

  useEffect(() => {
    getDetailRoom()
  }, [id])

  useEffect(() => {
    getSelectedLocation()
  }, [detailRoom?.ma_vi_tri])

  return (
    <div className='detail'>
      <div className="detail-container">
        <div className="detail-title">
          <h1 className='mb-3'>{detailRoom?.ten_phong}</h1>
          <p><i className="fa fa-medal"></i> Chủ nhà siêu cấp &nbsp; <a href='#'>{selectedLocation?.tinh_thanh}, {selectedLocation?.quoc_gia}</a></p>
        </div>
        <div className='detail-image'>
          <Image
            src={detailRoom?.hinh_anh}
          />
        </div>
        <div className="detail-content">
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="detail-left">
                {/* Detail - 1 */}
                <div className="detail-room">
                  <div className="owner-content">
                    <h5>Toàn bộ căn hộ. Chủ nhà <u>NNHATSANG</u></h5>
                    <p>{detailRoom?.khach} Khách • {detailRoom?.phong_ngu} Phòng ngủ • {detailRoom?.giuong} giường • {detailRoom?.phong_tam} Phòng tắm</p>
                  </div>
                  <div className='owner-avatar'>
                    <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="..." width={50} />
                  </div>
                </div>
                {/* Detail - 2 */}
                <div className="detail-features">
                  <div className='feature-item'>
                    <div className="feature-icon">
                      <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M408 406.545V248H288v158.545ZM320 280h56v94.545h-56Z"></path><path fill="currentColor" d="M271.078 33.749a34 34 0 0 0-47.066.984L32 226.745V496h112V336h64v160h272V225.958ZM448 464H240V304H112v160H64V240L249.412 57.356V57.3L448 240Z"></path></svg>
                    </div>
                    <div className="feature-content">
                      <h5>Toàn bộ nhà</h5>
                      <small>Bạn sẽ có chung cư cao cấp cho riêng mình.</small>
                    </div>
                  </div>
                  <div className='feature-item'>
                    <div className="feature-icon">
                      <svg width="24" height="24" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M26 20h-6v-2h6zm4 8h-6v-2h6zm-2-4h-6v-2h6z"></path><path fill="currentColor" d="M17.003 20a4.895 4.895 0 0 0-2.404-4.173L22 3l-1.73-1l-7.577 13.126a5.699 5.699 0 0 0-5.243 1.503C3.706 20.24 3.996 28.682 4.01 29.04a1 1 0 0 0 1 .96h14.991a1 1 0 0 0 .6-1.8c-3.54-2.656-3.598-8.146-3.598-8.2m-5.073-3.003A3.11 3.11 0 0 1 15.004 20c0 .038.002.208.017.469l-5.9-2.624a3.8 3.8 0 0 1 2.809-.848M15.45 28A5.2 5.2 0 0 1 14 25h-2a6.5 6.5 0 0 0 .968 3h-2.223A16.617 16.617 0 0 1 10 24H8a17.342 17.342 0 0 0 .665 4H6c.031-1.836.29-5.892 1.803-8.553l7.533 3.35A13.025 13.025 0 0 0 17.596 28Z"></path></svg>
                    </div>
                    <div className="feature-content">
                      <h5>Vệ sinh tăng cường</h5>
                      <small>Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb. <u>Hiển thị thêm</u></small>
                    </div>
                  </div>
                  <div className='feature-item'>
                    <div className="feature-icon">
                      <svg width="24" height="24" viewBox="0 0 880 880" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64zm224-448V128H320v320a192 192 0 1 0 384 0m64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448z"></path></svg>
                    </div>
                    <div className="feature-content">
                      <h5>Phong là Chủ nhà siêu cấp</h5>
                      <small>Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.</small>
                    </div>
                  </div>
                  <div className='feature-item'>
                    <div className="feature-icon">
                      <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M26 20h-6v-2h6zm4 8h-6v-2h6zm-2-4h-6v-2h6z"></path><path fill="currentColor" d="M17.003 20a4.895 4.895 0 0 0-2.404-4.173L22 3l-1.73-1l-7.577 13.126a5.699 5.699 0 0 0-5.243 1.503C3.706 20.24 3.996 28.682 4.01 29.04a1 1 0 0 0 1 .96h14.991a1 1 0 0 0 .6-1.8c-3.54-2.656-3.598-8.146-3.598-8.2m-5.073-3.003A3.11 3.11 0 0 1 15.004 20c0 .038.002.208.017.469l-5.9-2.624a3.8 3.8 0 0 1 2.809-.848M15.45 28A5.2 5.2 0 0 1 14 25h-2a6.5 6.5 0 0 0 .968 3h-2.223A16.617 16.617 0 0 1 10 24H8a17.342 17.342 0 0 0 .665 4H6c.031-1.836.29-5.892 1.803-8.553l7.533 3.35A13.025 13.025 0 0 0 17.596 28Z"></path></svg>
                    </div>
                    <div className="feature-content">
                      <h5>Miễn phí hủy trong 48 giờ</h5>
                    </div>
                  </div>
                </div>
                {/* Detail - 3 */}
                <div className="detail-translate">
                  <a className="translate-btn" href="#" role="button">
                    <span>Dịch sang tiếng anh</span>
                    <div className="">
                      <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20 18h-1.44a.6.6 0 0 1-.4-.12a.8.8 0 0 1-.23-.31L17 15h-5l-1 2.54a.8.8 0 0 1-.22.3a.6.6 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56l-1.58 4.19zm-6.3-1.58a13.4 13.4 0 0 1-2.91-1.41a11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.2 17.2 0 0 1-5 2.1q.56.82.87 1.38a23.3 23.3 0 0 0 5.22-2.51a15.6 15.6 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 0 1-2.45 4.45a9.1 9.1 0 0 1-2.46-4.45"></path></svg>
                    </div>
                  </a>
                  <p className='translate-content'>{detailRoom?.mo_ta}</p>
                  <u><b>Hiển thị thêm</b></u>
                </div>
                {/* Detail - 4 */}
                <div className="detail-utilities">
                  {/* ulility-title */}
                  <h5 className='ulility-title'>Các tiện ích đi kèm</h5>
                  {/* ulility-content */}
                  <div className='ulility-content'>
                    <div className="utility-left">
                      <div className="utility-item">
                        <div className="utility-icon">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" className="svg-inline--fa fa-wifi w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"></path></svg>
                        </div>
                        <div className="utility-text"><span>Wifi</span></div>
                      </div>
                      <div className="utility-item">
                        <div className="utility-icon">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square-parking" className="svg-inline--fa fa-square-parking w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"></path></svg>
                        </div>
                        <div className="utility-text"><span>Bãi đỗ xe</span></div>
                      </div>
                      <div className="utility-item">
                        <div className="utility-icon">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="water-ladder" className="svg-inline--fa fa-water-ladder w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M128 127.7C128 74.9 170.9 32 223.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7V224H384V127.7C384 74.9 426.9 32 479.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7V361c-1.6 1-3.3 2-4.8 3.1c-18 12.4-40.1 20.3-59.2 20.3h0V288H192v96.5c-19 0-41.2-7.9-59.1-20.3c-1.6-1.1-3.2-2.2-4.9-3.1V127.7zM306.5 389.9C329 405.4 356.5 416 384 416c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 469.7 417 480 384 480c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 405.2 165.1 416 192 416c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"></path></svg>
                        </div>
                        <div className="utility-text">Hồ bơi</div>
                      </div>
                    </div>
                    <div className="utility-right">
                      <div className="utility-item">
                        <div className="utility-icon">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv" className="svg-inline--fa fa-tv w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg>
                        </div>
                        <div className="utility-text"><span>Tivi</span></div>
                      </div>
                      <div className="utility-item">
                        <div className="utility-icon">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bacon" className="svg-inline--fa fa-bacon w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M439.2 1.2c11.2-3.2 23.2-.1 31.4 8.1L518 56.7l-26.5 7.9c-58 16.6-98.1 39.6-129.6 67.4c-31.2 27.5-53.2 59.1-75.1 90.9l-2.3 3.3C241.6 288.7 195 356.6 72.8 417.7L37.9 435.2 9.4 406.6c-7.3-7.3-10.6-17.6-9-27.8s8.1-18.9 17.3-23.5C136.1 296.2 180.9 231 223.3 169.3l2.3-3.4c21.8-31.8 44.9-64.9 77.7-93.9c33.4-29.5 75.8-53.6 135.9-70.8zM61.8 459l25.4-12.7c129.5-64.7 179.9-138.1 223.8-202l2.2-3.3c22.1-32.1 42.1-60.5 69.9-85.1c27.5-24.3 63.4-45.2 117.3-60.6l0 0 .2-.1 43.1-12.9 23 23c8 8 11.2 19.7 8.3 30.7s-11.3 19.6-22.2 22.7c-51.9 14.8-85.6 34.7-111.1 57.2c-26.1 23-45.1 49.9-67.3 82.1l-2.2 3.2C327.8 365.9 275.5 442 142.3 508.6c-12.3 6.2-27.2 3.7-36.9-6L61.8 459z"></path></svg>
                        </div>
                        <div className="utility-text"><span>Bàn ủi</span></div>
                      </div>
                      <div className="utility-item">
                        <div className="utility-icon">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hands-bubbles" className="svg-inline--fa fa-hands-bubbles w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M416 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM160 464a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM32 160l.1 72.6c.1 52.2 24 101 64 133.1c-.1-1.9-.1-3.8-.1-5.7v-8c0-71.8 37-138.6 97.9-176.7l60.2-37.6c8.6-5.4 17.9-8.4 27.3-9.4l45.9-79.5c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8l-78 135.1c-3.3 5.7-10.7 7.7-16.4 4.4s-7.7-10.7-4.4-16.4l62-107.4c6.6-11.5 2.7-26.2-8.8-32.8S214 5 207.4 16.5l-68 117.8 0 0 0 0-43.3 75L96 160c0-17.7-14.4-32-32-32s-32 14.4-32 32zM332.1 88.5L307.5 131c13.9 4.5 26.4 13.7 34.7 27c.9 1.5 1.8 2.9 2.5 4.4l28.9-50c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8zm46.4 63.7l-26.8 46.4c-.6 6-2.1 11.8-4.3 17.4H352h13.3l0 0H397l23-39.8c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8zM315.1 175c-9.4-15-29.1-19.5-44.1-10.2l-60.2 37.6C159.3 234.7 128 291.2 128 352v8c0 8.9 .8 17.6 2.2 26.1c35.4 8.2 61.8 40 61.8 77.9c0 6.3-.7 12.5-2.1 18.4C215.1 501 246.3 512 280 512H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H364c-6.6 0-12-5.4-12-12s5.4-12 12-12H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H364c-6.6 0-12-5.4-12-12s5.4-12 12-12H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H364c-6.6 0-12-5.4-12-12s5.4-12 12-12H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H352l0 0 0 0H258.8L305 219.1c15-9.4 19.5-29.1 10.2-44.1z"></path></svg>
                        </div>
                        <div className="utility-text"><span>Máy giặt</span></div>
                      </div>
                    </div>
                  </div>
                  {/* utility-button */}
                  <a className="utility-btn" href="#" role="button">Ẩn bớt tiện nghi</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex flex-lg-row-reverse justify-content-center justify-content-lg-start">
              <div className="detail-right">
                <div className="detail-booking">
                  {/* 1 */}
                  <div className="booking-1 mb-2 d-flex justify-content-between">
                    <p><b>${detailRoom?.gia_tien}</b>/ night</p>
                    <div className="booking-1-right d-flex">
                      <p className='pe-2'>
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                        <b> 3.28</b>
                      </p>
                      <a href='#' className='text-decoration-none text-dark'><u>(13) Đánh giá</u></a>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="booking-2">
                    <div className="row booking-2-content mb-3">
                      <div className="booking-2-item col-6">
                        <h6>Nhận phòng</h6>
                        <p>24/09/2024</p>
                      </div>
                      <div className="booking-2-item col-6">
                        <h6>Trả phòng</h6>
                        <p>29/09/2024</p>
                      </div>
                      <div className="booking-2-item col-12">
                        <h6>Khách</h6>
                        <div className="booking-quan">
                          <button className='btn-plus'> <i className="fa fa-plus"></i> </button> <span>1 khách</span> <button className='btn-minus'> <i className="fa fa-minus"></i> </button>
                        </div>
                      </div>
                    </div>
                    {/* Button booking */}
                    <button className='w-100 btn-booking mb-3'>Đặt phòng</button>
                  </div>

                  {/* 3 */}
                  <div className="booking-3">
                    <p className='mb-4'>Bạn vẫn chưa bị trừ tiền</p>
                    <div className="booking-price d-flex justify-content-between">
                      <u>$28 X 3 nights</u>
                      <b>$ 84</b>
                    </div>
                    <div className="booking-fee d-flex justify-content-between">
                      <u>$Cleaning fee</u>
                      <b>$ 8</b>
                    </div>

                    <div className="booking-total d-flex justify-content-between py-4">
                      <h5>Total before taxes</h5>
                      <b>$ 92</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail