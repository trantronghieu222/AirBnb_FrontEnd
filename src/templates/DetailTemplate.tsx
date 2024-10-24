import React from 'react'
import HeaderHome from '../components/HeaderHome'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

type Props = {}

const DetailTemplate = (props: Props) => {
  return (
    <div className='detail-template'>
        <HeaderHome></HeaderHome>
        <div>
            <Outlet></Outlet>
        </div>
        <Login></Login>
        <Register></Register>
        <Footer></Footer>
        <BackToTop></BackToTop>
    </div>
  )
}

export default DetailTemplate