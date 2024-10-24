import React, { useEffect } from 'react';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { RoomModelType } from '../../models/RoomModelType';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/store';
import { getAllRoomApi } from '../../redux/reducers/roomReducer';
import { imgPath } from '../../util/setting';
import { NavLink } from 'react-router-dom';
import { getAllLocationApi } from '../../redux/reducers/locationReducer';
import { LocationModelType } from '../../models/LocationModelType';
import AddRoom from './AddRoom';

type Props = {};

const RoomManagement = (props: Props) => {
    const dispatch: DispatchType = useDispatch();
    const { arrRoom } = useSelector((state: RootState) => state.roomReducer);
    const { arrLocation } = useSelector((state: RootState) => state.locationReducer)

    useEffect(() => {
        dispatch(getAllRoomApi());
        dispatch(getAllLocationApi());
    }, []);

    const columns: TableProps<RoomModelType>['columns'] = [
        {
            title: 'Mã phòng',
            dataIndex: 'ma_phong',
            key: 'ma_phong',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Tên phòng',
            dataIndex: 'ten_phong',
            key: 'ten_phong',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinh_anh',
            key: 'hinh_anh',
            render: (text) => <img src={`${imgPath}${text}`} alt="Hình ảnh" style={{ width: '100px' }} />,
        },
        {
            title: 'Tỉnh thành',
            dataIndex: 'ma_vi_tri',
            render: (ma_vi_tri) => {
                const location = arrLocation.find((loc: LocationModelType) => loc.ma_vi_tri === ma_vi_tri);
                return location ? location.tinh_thanh : 'Không xác định';
            },
        },
        {
            title: 'Thông tin',
            dataIndex: 'ma_phong',
            render: (text) => <NavLink className={'text-decoration-none'} to={`/detail/${text}`}>Chi tiết</NavLink>
        },
        {
            title: 'Hình động',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a className='btn btn-warning' href='#'><i className="fa fa-edit"></i></a>
                    <a className='btn btn-danger' href='#'><i className="fa fa-trash-alt"></i></a>
                </Space>
            ),
        },
    ];

    return (
        <div className='roomManagement'>
            <div className='roomManagement-head d-flex justify-content-between p-4'>
                <h3>Quản lý phòng</h3>
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addRoomModal">
                    <i className="fa fa-plus"></i> Thêm phòng
                </button>
            </div>
            <div className="roomManagement-body">
                <Table<RoomModelType>
                    columns={columns}
                    dataSource={arrRoom}
                    rowKey="ma_phong"
                    pagination={{
                        defaultPageSize: 5,
                        pageSizeOptions: ['5', '10', '20', '50'],
                        showSizeChanger: true,
                    }}
                    scroll={{ x: 'max-content' }}                    
                />
            </div>

            <AddRoom></AddRoom>
        </div>
    );
};

export default RoomManagement;