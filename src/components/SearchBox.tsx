import React, { useState } from 'react'

type Props = {}

const SearchBox = (props: Props) => {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleClick = () => {
        setShowOverlay(!showOverlay);
    };
    return (
        <div className='searchBox'>
            <div className="container">
                <div className="search-content">
                    <div className="row m-0">
                        <div className="col search-item" onClick={handleClick}>
                            <p>Địa điểm</p>
                            <small>Bạn sắp đi đâu ?</small>
                            <div className={`overlay-child-1 ${showOverlay ? 'show' : ''}`}>
                                <p>Tìm hình theo khu vực</p>
                                <div className="row location-container">
                                    <div className="col-6 col-md-4 location-item">
                                        <img src='https://www.app-premantura.com/wp-content/themes/elemin/themify/img/non-skin.gif' alt='...' width={80} height={80}></img>
                                        <p>None</p>
                                    </div>
                                    <div className="col-6 col-md-4 location-item">
                                        <img src='https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg' alt='...' width={80} height={80}></img>
                                        <p>Hồ Chí Minh</p>
                                    </div>
                                    <div className="col-6 col-md-4 location-item">
                                        <img src='https://airbnbnew.cybersoft.edu.vn/images/vt2.jpg' alt='...' width={80} height={80}></img>
                                        <p>Cần Thơ</p>
                                    </div>
                                    <div className="col-6 col-md-4 location-item">
                                        <img src='https://airbnbnew.cybersoft.edu.vn/images/vt3.jpg' alt='...' width={80} height={80}></img>
                                        <p>Nha Trang</p>
                                    </div>
                                    <div className="col-6 col-md-4 location-item">
                                        <img src='https://airbnbnew.cybersoft.edu.vn/images/vt4.jpg' alt='...' width={80} height={80}></img>
                                        <p>Hà Nội</p>
                                    </div>
                                    <div className="col-6 col-md-4 location-item">
                                        <img src='https://airbnbnew.cybersoft.edu.vn/images/vt5.jpg' alt='...' width={80} height={80}></img>
                                        <p>Phú Quốc</p>
                                    </div>
                                    <div className="col-6 col-md-4 location-item">
                                        <img src='https://airbnbnew.cybersoft.edu.vn/images/vt6.jpg' alt='...' width={80} height={80}></img>
                                        <p>Đà Nẵng</p>
                                    </div>
                                    <div className="col-6 col-md-4 location-item">
                                        <img src='https://airbnbnew.cybersoft.edu.vn/images/vt7.jpg' alt='...' width={80} height={80}></img>
                                        <p>Đà Lạt</p>
                                    </div>
                                    <div className="col-6 col-md-4 location-item">
                                        <img src='https://airbnbnew.cybersoft.edu.vn/images/vt8.jpg' alt='...' width={80} height={80}></img>
                                        <p>Phan Thiết</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col search-item">
                            <p>Ngày đến - Ngày đi</p>
                        </div>
                        <div className="col search-item">
                            <p>Khách</p>
                            <div className='btn-search'>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="search-room">
                    <button type="button" className="btn">
                        Loại nơi ở
                    </button>
                    <button type="button" className="btn">
                        Giá
                    </button>
                    <button type="button" className="btn">
                        Đặt ngay
                    </button>
                    <button type="button" className="btn">
                        Phòng và phòng ngủ
                    </button>
                    <button type="button" className="btn">
                        Bộ lọc khác
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBox