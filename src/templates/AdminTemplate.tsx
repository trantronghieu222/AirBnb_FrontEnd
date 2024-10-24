import React from 'react'
import Sidebar from '../components/AdminComponent/Sidebar'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminTemplate = (props: Props) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <Sidebar></Sidebar>
                    <div className="col py-3">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminTemplate