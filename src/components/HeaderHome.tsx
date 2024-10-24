import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../redux/store';
import { getUserProfileApi } from '../redux/reducers/userReducer';
import { imgPath } from '../util/setting';
import { logoutAction } from '../redux/reducers/authReducer';

type Props = {}

const HeaderHome = (props: Props) => {
  const dispatch: DispatchType = useDispatch()
  const { userProfile } = useSelector((state: RootState) => state.userReducer)

  const getUserProfile = () => {
    const actionAsync = getUserProfileApi()
    dispatch(actionAsync)
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  // thêm class header khi scroll màn hình
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-home') as HTMLElement;
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // UserDropdown
  const renderLoginLink = () => {
    if (userProfile) {
      return <div className='profile-logged'>
        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={userProfile?.avatar ? `${imgPath}${userProfile.avatar}` : '/image/avatar-dep-84.jpg'} alt="avatar" /> <span>{userProfile.ten_nguoi_dung}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {
              userProfile.vai_tro == 'admin' ?
                <>
                  <li><NavLink className="dropdown-item" to="/admin/dashboard">Trang quản trị</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                </>
                : null
            }
            <li><NavLink className="dropdown-item" to="/profile">Thông tin tài khoản</NavLink></li>
            <li><a className="dropdown-item" href="#" onClick={
              logoutAction
            }>Đăng xuất</a></li>
          </ul>
        </div>
      </div>
    }
    else {
      return <div className='profile-dropdown'>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-user"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Đăng nhập</a></li>
            <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#registerModal">Đăng ký</a></li>
          </ul>
        </div>
      </div>
    }
  }

  return (
    <div className='header-home'>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <NavLink className="navbar-brand" to="/"><img src='/image/LogoRed.png'></img></NavLink>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" aria-current="page">Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className='profile-container'>
              {renderLoginLink()}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderHome