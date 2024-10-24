import { Form, Input, message } from 'antd';
import React from 'react'
import { updatePasswordApi } from '../redux/reducers/authReducer';

type Props = {}


const ChangePassword = (props: Props) => {

  const [formChangePwd] = Form.useForm()

  const onFinish = async (values: any) => {
    try {
      await updatePasswordApi(values)
    }catch (error) {
      message.error('Lỗi khi cập nhật mật khẩu!')
    }
  };

  return (
    <div className="modal fade" id="changePwdModal" tabIndex={-1} aria-labelledby="changePwdModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="changePwdModalLabel">Đổi mật khẩu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <Form
              name='changPwd'
              form={formChangePwd}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                name="mat_khau_hien_tai"
                label="Mật khẩu hiện tại"
                rules={[{ required: true, message: 'Không được để trống mật khẩu hiện tại!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="mat_khau"
                label="Mật khẩu mới"
                rules={[{ required: true, message: 'Không được để trống mật khẩu mới!' }]}
              >
                <Input.Password />
              </Form.Item>
            </Form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="button" className="btn btn-primary" onClick={() => formChangePwd.submit()}>Đổi mật khẩu</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword