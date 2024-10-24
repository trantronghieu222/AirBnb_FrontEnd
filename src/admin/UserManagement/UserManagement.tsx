import React, { useEffect } from 'react'
import { Space, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { UserModelType } from '../../models/UserModelType';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/store';
import { getAllUserApi } from '../../redux/reducers/userReducer';
import AddUser from './AddUser';

const columns: TableColumnsType<UserModelType> = [
  {
    title: 'Mã người dùng',
    dataIndex: 'ma_nguoi_dung',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.ma_nguoi_dung - b.ma_nguoi_dung,
  },
  {
    title: 'Tên người dùng',
    dataIndex: 'ten_nguoi_dung'
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'ngay_sinh'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Vai trò',
    dataIndex: 'vai_tro',
    filters: [
      {
        text: 'Admin',
        value: 'admin',
      },
      {
        text: 'User',
        value: 'user',
      },
    ],
    onFilter: (value, record) => record.vai_tro.indexOf(value as string) === 0,
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

const onChange: TableProps<UserModelType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

type Props = {}

const UserManagement = (props: Props) => {
  const dispatch: DispatchType = useDispatch()
  const { arrUser } = useSelector((state: RootState) => state.userReducer)

  useEffect(() => {
    dispatch(getAllUserApi())
  }, [])

  return (
    <div className='userManagement'>
      <div className='userManagement-head d-flex justify-content-between p-4'>
        <h3>Quản lý người dùng</h3>
        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addUserModal">
          <i className="fa fa-plus"></i> Thêm người dùng
        </button>
      </div>
      {/* Table */}
      <div className='userManagement-body'>
        <Table<UserModelType>
          columns={columns}
          dataSource={arrUser}
          onChange={onChange}
          showSorterTooltip={{ target: 'sorter-icon' }}
          pagination={{
            defaultPageSize: 5,
            pageSizeOptions: ['5', '10', '20', '50'],
            showSizeChanger: true,
          }}
        />
      </div>

      <AddUser></AddUser>
    </div>
  )
}

export default UserManagement