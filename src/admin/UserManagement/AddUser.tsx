import { Col, DatePicker, Form, Input, Radio, Row, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import React from 'react'

type Props = {}

const onFinish = (values: any) => {
    const initialValues = {
        ...values,
        gioi_tinh: values.gioi_tinh === 'true' ? true : false,
        ngay_sinh: values.ngay_sinh ? values.ngay_sinh.format('DD/MM/YYYY') : null,
    }
    console.log(initialValues);
};

const AddUser = (props: Props) => {
    const [formAddUser] = Form.useForm();

    return (
        <div className="modal fade" id="addUserModal" tabIndex={-1} aria-labelledby="addUserModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addUserModalLabel">Thêm người dùng</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <Form
                            form={formAddUser}
                            name="addUser"
                            onFinish={onFinish}
                            layout="vertical"
                        >
                            <Row gutter={[16, 0]}>
                                {/* Tên người dùng */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="ten_nguoi_dung"
                                        label="Tên người dùng"
                                        rules={[{ required: true, message: 'Không được để trống tên người dùng!' }]}
                                    >
                                        <Input placeholder='Nhập họ tên' />
                                    </Form.Item>
                                </Col>
                                {/* Email */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="email"
                                        label="Email"
                                        rules={[
                                            { required: true, message: 'Không được để trống Email!' },
                                            { type: 'email', message: 'Email không hợp lệ!' }
                                        ]}
                                    >
                                        <Input placeholder='Nhập Email' />
                                    </Form.Item>
                                </Col>
                                {/* Số điện thoại */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="so_dt"
                                        label="Số điện thoại"
                                        rules={[
                                            { required: true, message: 'Không được để trống số điện thoại!' },

                                        ]}
                                    >
                                        <Input type='number' placeholder='Nhập số điện thoại' />
                                    </Form.Item>
                                </Col>
                                {/* Mật khẩu */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="mat_khau"
                                        label="Mật khẩu"
                                        rules={[{ required: true, message: 'Không được để trống mật khẩu!' },]}
                                    >
                                        <Input.Password placeholder='************' />
                                    </Form.Item>
                                </Col>
                                {/* Giới tính */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="gioi_tinh"
                                        label="Giới tính"
                                        rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                                    >
                                        <Select placeholder="Chọn giới tính"
                                            getPopupContainer={(trigger) => trigger.parentElement as HTMLElement}
                                        >
                                            <Option value="true">Nam</Option>
                                            <Option value="false">Nữ</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                {/* Ngày sinh */}
                                <Col xs={24} sm={12}>
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
                                </Col>
                                {/* Vai trò */}
                                <Col>
                                    <Form.Item
                                        label="Vai trò"
                                        name="vai_tro"
                                        rules={[{ required: true, message: 'Vui lòng chọn vai trò!' }]}
                                    >
                                        <Radio.Group>
                                            <Radio value="admin"> Admin </Radio>
                                            <Radio value="user"> User </Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                        <button type="button" className="btn btn-primary" onClick={() => formAddUser.submit()}>Thêm người dùng</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddUser