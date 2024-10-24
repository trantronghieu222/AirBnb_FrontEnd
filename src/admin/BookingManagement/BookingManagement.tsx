import React, { useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { BookingModelType } from '../../models/BookingModelType';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/store';
import { getAllBookingApi } from '../../redux/reducers/bookingReducer';
import AddBooking from './addBooking';

const columns: TableProps<BookingModelType>['columns'] = [
  {
    title: 'Mã đặt phòng',
    dataIndex: 'ma_dat_phong',
    key: 'ma_dat_phong',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Mã phòng',
    dataIndex: 'ma_phong',
    key: 'ma_phong',
  },
  {
    title: 'Mã người dùng',
    dataIndex: 'ma_nguoi_dat',
    key: 'ma_nguoi_dat',
  },
  {
    title: 'Ngày đến',
    dataIndex: 'ngay_den',
    key: 'ngay_den',
  },
  {
    title: 'Ngày đi',
    dataIndex: 'ngay_di',
    key: 'ngay_di',
  },
  {
    title: 'Số lượnge khách',
    dataIndex: 'so_luong_khach',
    key: 'so_luong_khach',
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


type Props = {}

const BookingManagement = (props: Props) => {
  const dispatch: DispatchType = useDispatch()
  const {arrBooking} = useSelector((state: RootState) => state.bookingReducer)

  useEffect(() => {
    dispatch(getAllBookingApi())
  })

  return (
    <div className='bookingManagement'>
      <div className='bookingManagement-head d-flex justify-content-between p-4'>
        <h3>Quản lý đơn đặt phòng</h3>
        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addBookingModal">
          <i className="fa fa-plus"></i> Tạo đơn đặt
        </button>
      </div>
      <div className="bookingManagement-body">
        <Table<BookingModelType>
          columns={columns}
          dataSource={arrBooking}
          pagination={{
            defaultPageSize: 5,
            pageSizeOptions: ['5', '10', '20', '50'],
            showSizeChanger: true,
          }}
        />
      </div>
      <AddBooking></AddBooking>
    </div>
  )
}

export default BookingManagement