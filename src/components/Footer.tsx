import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-3 footer-col">
                            <h5>GIỚI THIỆU</h5>
                            <ul className='p-0'>
                                <li><a href='#'>Phương thức hoạt động của Airbnb</a></li>
                                <li><a href='#'>Trang tin tức</a></li>
                                <li><a href='#'>Nhà đầu tư</a></li>
                                <li><a href='#'>Airbnb Plus</a></li>
                                <li><a href='#'>Airbnb Luxe</a></li>
                                <li><a href='#'>HotelTonight</a></li>
                                <li><a href='#'>Airbnb for Work</a></li>
                                <li><a href='#'>Nhờ có Host, mọi điều đều có thể</a></li>
                                <li><a href='#'>Cơ hội nghề nghiệp</a></li>
                            </ul>
                        </div>
                        <div className="col-3 footer-col">
                            <h5>CỘNG ĐỒNG</h5>
                            <ul className='p-0'>
                                <li><a href='#'>Sự đa đạng và Cảm giác thân thuộc</a></li>
                                <li><a href='#'>Tiện nghi phù hợp cho người khuyết tật</a></li>
                                <li><a href='#'>Đối tác liên kết Airbnb</a></li>
                                <li><a href='#'>Chỗ ở cho tuyến đầu</a></li>
                                <li><a href='#'>Lượt giới thiệu của khách</a></li>
                                <li><a href='#'>Airbnb.org</a></li>
                            </ul>
                        </div>
                        <div className="col-3 footer-col">
                            <h5>ĐÓN TIẾP KHÁCH</h5>
                            <ul className='p-0'>
                                <li><a href='#'>Cho thuê nhà</a></li>
                                <li><a href='#'>Tổ chức Trải nghiệm trực tuyến</a></li>
                                <li><a href='#'>Tổ chức Trải nghiệm</a></li>
                                <li><a href='#'>Đón tiếp khách có trách nhiệm</a></li>
                                <li><a href='#'>Trung tâm tài nguyên</a></li>
                                <li><a href='#'>Trung tâm cộng đồng</a></li>
                            </ul>
                        </div>
                        <div className="col-3 footer-col">
                            <h5>HỖ TRỢ</h5>
                            <ul className='p-0'>
                                <li><a href='#'>Biện pháp ứng phó đại dịch COVID-19</a></li>
                                <li><a href='#'>Trung tâm trợ giúp</a></li>
                                <li><a href='#'>Các tùy chọn hủy</a></li>
                                <li><a href='#'>Hỗ trợ khu dân cư</a></li>
                                <li><a href='#'>Tin cây và an toàn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 footer-copyright">
                                <ul>
                                    <li>© 2022 Airbnb, Inc.</li>
                                    <li><a href='#'>Quyền riêng tư</a></li>
                                    <li><a href='#'>Điều khoản</a></li>
                                    <li><a href='#'>Sơ đồ trang web</a></li>
                                </ul>
                            </div>
                            <div className="col-6 footer-social">
                                <ul>
                                    <li><i className="fa fa-globe" /> <a href='#'>Tiếng Việt (VN)</a></li>
                                    <li><a href='#'>USD</a></li>
                                    <li><a href='#'>Hỗ trợ tài nguyên</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer