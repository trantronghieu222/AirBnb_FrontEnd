import React, { useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { LocationModelType } from '../../models/LocationModelType';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/store';
import { getAllLocationApi } from '../../redux/reducers/locationReducer';
import { imgPath } from '../../util/setting';
import AddLocation from './AddLocation';

const columns: TableProps<LocationModelType>['columns'] = [
  {
    title: 'Mã vị trí',
    dataIndex: 'ma_vi_tri',
    key: 'ma_vi_tri',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Hình ảnh',
    dataIndex: 'hinh_anh',
    key: 'hinh_anh',
    render: (text) => <img src={`${text}`} alt="hinh anh vi tri" width={100} />
  },
  {
    title: 'Tỉnh thành',
    dataIndex: 'tinh_thanh',
    key: 'tinh_thanh',
  },
  {
    title: 'Quốc gia',
    dataIndex: 'quoc_gia',
    key: 'quoc_gia',
  },
  {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#addLocationModal"><i className="fa fa-edit"></i></a>
        <a className='btn btn-danger' href='#'><i className="fa fa-trash-alt"></i></a>
      </Space>
    ),
  },
];


type Props = {}

const LocationManagement = (props: Props) => {
  const dispatch: DispatchType = useDispatch()
  const { arrLocation } = useSelector((state: RootState) => state.locationReducer)

  useEffect(() => {
    dispatch(getAllLocationApi())
  }, [])

  return (
    <div className='locationManagement'>
      <div className='locationManagement-head d-flex justify-content-between p-4'>
        <h3>Quản lý vị trí</h3>
        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addLocationModal">
          <i className="fa fa-plus"></i> Thêm vị trí
        </button>
      </div>
      {/* Table */}
      <div className="locationManagement-body">
        <Table<LocationModelType>
          columns={columns}
          dataSource={arrLocation}
          pagination={{
            defaultPageSize: 5,
            pageSizeOptions: ['5', '10', '20', '50'],
            showSizeChanger: true,
          }}
        />
      </div>

      <AddLocation></AddLocation>
    </div>
  )
}

export default LocationManagement