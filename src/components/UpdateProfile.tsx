import React, { useEffect } from 'react'
import {
    DatePicker,
    Form,
    Input,
    Select,
    Row,
    Col,
    message,
} from 'antd';
import { DispatchType, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileApi, updateProfile } from '../redux/reducers/userReducer';
import moment from 'moment';

const { Option } = Select;

type Props = {}

const UpdateProfile = (props: Props) => {
    const dispatch: DispatchType = useDispatch()
    const { userProfile } = useSelector((state: RootState) => state.userReducer)

    useEffect(() => {
        const actionAsync = getUserProfileApi();
        dispatch(actionAsync)
    }, [])

    const [formProfile] = Form.useForm();

    useEffect(() => {
        if (userProfile) {
            formProfile.setFieldsValue({
                email: userProfile.email,
                ten_nguoi_dung: userProfile.ten_nguoi_dung,
                so_dt: userProfile.so_dt,
                ngay_sinh: userProfile.ngay_sinh ? moment(userProfile.ngay_sinh, 'DD/MM/YYYY') : null,
                gioi_tinh: userProfile.gioi_tinh === true ? 'Nam' : 'Nữ',
            });
        }
    }, [userProfile, formProfile]);

    const onFinish = async (values: any) => {
        const initialValues = {
            ten_nguoi_dung: values.ten_nguoi_dung,
            email: values.email,
            so_dt: values.so_dt,
            ngay_sinh: values.ngay_sinh ? values.ngay_sinh.format('DD/MM/YYYY') : null,
            gioi_tinh: values.gioi_tinh === 'true' ? true : values.gioi_tinh === 'false' ? false : userProfile?.gioi_tinh,
            vai_tro: userProfile?.vai_tro,
        }
        try {
            await updateProfile(userProfile?.ma_nguoi_dung as number, initialValues as Object)
            message.success('Cập nhật thành công')
            dispatch(getUserProfileApi())
        }
        catch (error){
            message.error('Lỗi khi cập nhật')
        }
    };

    return (
        <div className="modal fade" id="updateProfile" tabIndex={-1} aria-labelledby="updateProfileLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="updateProfileLabel">Thông tin cá nhân</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <Form
                            form={formProfile}
                            name="register"
                            onFinish={onFinish}
                            style={{ maxWidth: 600 }}
                            layout="vertical"
                        >
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={12}>
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
                                                message: 'Không được để trống Email!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="ten_nguoi_dung"
                                        label="Họ Tên"
                                        tooltip="Họ tên đầy đủ của bạn?"
                                        rules={[{ required: true, message: 'Không được để trống họ tên!', whitespace: true }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="so_dt"
                                        label="Số điện thoại"
                                        rules={[{ required: true, message: 'Không được để trống số điện thoại!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>

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
                            </Row>
                        </Form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" className="btn btn-primary" onClick={() => formProfile.submit()}>Lưu thay đổi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile;