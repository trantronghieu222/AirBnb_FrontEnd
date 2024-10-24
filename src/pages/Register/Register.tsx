import React from 'react'
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker
} from 'antd';
import { registerActionApi } from '../../redux/reducers/authReducer';
import { DispatchType } from '../../redux/store';
import { useDispatch } from 'react-redux';

type Props = {}

const { Option } = Select;

const Register = (props: Props) => {
  const [formRegister] = Form.useForm();

  const dispatch: DispatchType = useDispatch()

  const onFinish = (values: any) => {
    const initialValues = {
      ten_nguoi_dung: values.ten_nguoi_dung,
      email: values.email,
      mat_khau: values.mat_khau,
      so_dt: values.so_dt,
      ngay_sinh: values.ngay_sinh ? values.ngay_sinh.format('DD/MM/YYYY') : null,
      gioi_tinh: values.gioi_tinh === 'true' ? true : false
    }
    
    const actionAsync = registerActionApi(initialValues)
    dispatch(actionAsync)
  };

  return (
    <div className="modal fade" id="registerModal" tabIndex={-1} aria-labelledby="registerModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registerModalLabel">ĐĂNG KÝ</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          {/* Form */}
          <div className="modal-body">
            <Form
              form={formRegister}
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 17 }}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              {/* Tên người dùng */}
              <Form.Item
                name="ten_nguoi_dung"
                label="Họ tên"
                tooltip="Bạn muốn chúng tôi gọi bạn là gì?"
                rules={[{ required: true, message: 'Không được bỏ trống họ tên!', whitespace: true }]}
              >
                <Input />
              </Form.Item>
              {/* Email */}
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    type: 'email',
                    message: 'Email không hợp lệ!',
                  },
                  {
                    required: true,
                    message: 'Không được bỏ trống email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              {/* Mật khẩu */}
              <Form.Item
                name="mat_khau"
                label="Mật khẩu"
                rules={[
                  {
                    required: true,
                    message: 'Không được bỏ trống mật khẩu!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              {/* Xác nhận mật khẩu */}
              <Form.Item
                name="confirm"
                label="Xác nhận mật khẩu"
                dependencies={['mat_khau']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Không được để trống xác nhận mật khẩu!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('mat_khau') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Xác nhận mật khẩu không đúng!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              {/* Số điện thoại */}
              <Form.Item
                name="so_dt"
                label="Số điện thoại"
                rules={[
                  { required: true, message: 'Không được để trống số điện thoại !' }
                ]}
              >
                <Input type='number' style={{ width: '100%' }} />
              </Form.Item>
              {/* Ngày sinh */}
              <Form.Item
                name="ngay_sinh"
                label="Ngày sinh"
                rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
              >
                <DatePicker
                  format="DD/MM/YYYY"
                  getPopupContainer={(trigger) => trigger.parentElement as HTMLElement}
                />
              </Form.Item>
              {/* Giới tính */}
              <Form.Item
                name="gioi_tinh"
                label="Giới tính"
                rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
              >
                <Select
                  placeholder="Chọn giới tính"
                  getPopupContainer={(trigger) => trigger.parentNode}
                >
                  <Option value="true">Nam</Option>
                  <Option value="false">Nữ</Option>
                </Select>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Button className='btn-regis w-100' type="primary" htmlType="submit">
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register