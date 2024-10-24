import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { DispatchType, RootState } from '../../redux/store'
import { getUserProfileApi } from '../../redux/reducers/userReducer'
import { imgPath } from '../../util/setting'

type Props = {}

const Sidebar = (props: Props) => {
    const dispatch: DispatchType = useDispatch()
    const {userProfile} = useSelector((state: RootState) => state.userReducer)

    useEffect(() => {
        dispatch(getUserProfileApi())
    }, [])

    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <NavLink to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline pt-2"><img src="/image/LogoRed.png" alt="..." /></span>
                </NavLink>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="bookingManagement" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Booking</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="locationManagement" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-geo-alt"></i> <span className="ms-1 d-none d-sm-inline">Location</span>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="roomManagement" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">Room</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="userManagement" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">User</span> 
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={`${imgPath}${userProfile?.avatar}`} alt="hugenerd" width={30} height={30} className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">{userProfile?.ten_nguoi_dung}</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar