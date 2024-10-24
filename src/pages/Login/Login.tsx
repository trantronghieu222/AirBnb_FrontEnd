import React from 'react'
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { loginActionApi } from '../../redux/reducers/authReducer';
import { DispatchType } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type Props = {}

type FieldType = {
  email?: string;
  mat_khau?: string;
};

const Login = (props: Props) => {

  const dispatch: DispatchType = useDispatch()
  const navigate = useNavigate()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const actionAsync = loginActionApi(values as object)
    dispatch(actionAsync)
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">ĐĂNG NHẬP</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          {/* Form */}
          <div className="modal-body">
            <Form
              name="login"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 19 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Email không được để trống!' },
                  { type: 'email', message: 'Email không hợp lệ!' }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Mật khẩu"
                name="mat_khau"
                rules={[
                  { required: true, message: 'Mật khẩu không được để trống!' }
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Button type="primary" htmlType="submit" className='btn-login w-100'>
                  ĐĂNG NHẬP
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login