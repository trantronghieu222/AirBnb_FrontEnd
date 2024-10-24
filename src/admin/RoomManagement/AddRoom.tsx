import React, { useEffect } from 'react'
import { Form, Input, Row, Col, Select, Upload, Button, Switch } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/store';
import { getAllLocationApi } from '../../redux/reducers/locationReducer';
import { LocationModelType } from '../../models/LocationModelType';
type Props = {}

const onFinish = (values: any) => {
    const initialValues = {
        ...values,
        hinh_anh: values.hinh_anh[0]
    }
    console.log(initialValues)
};

const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const AddRoom = (props: Props) => {
    const dispatch: DispatchType = useDispatch()
    const [formAddRoom] = Form.useForm();
    const { arrLocation } = useSelector((state: RootState) => state.locationReducer)

    useEffect(() => {
        dispatch(getAllLocationApi())
    }, [])

    return (
        <div className="modal fade" id="addRoomModal" tabIndex={-1} aria-labelledby="addRoomModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addRoomModalLabel">Thêm phòng thuê</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <Form
                            form={formAddRoom}
                            name="addRoom"
                            onFinish={onFinish}
                            layout="vertical"
                            initialValues={{
                                may_giat: false,
                                ban_la: false,
                                tivi: false,
                                dieu_hoa: false,
                                bep: false,
                                do_xe: false,
                                ho_boi: false,
                                ban_ui: false
                            }}
                        >
                            <Row gutter={[16, 0]}>
                                {/* Tên phòng */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="ten_phong"
                                        label="Tên phòng"
                                        rules={[{ required: true, message: 'Không được để trống tên phòng!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                {/* Vị trí */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="vi_tri"
                                        label="Vị trí"
                                        rules={[{ required: true, message: 'Vui lòng chọn vị trí!' }]}
                                    >
                                        <Select
                                            placeholder="Chọn vị trí"
                                            getPopupContainer={(trigger) => trigger.parentElement as HTMLElement}
                                        >
                                            {
                                                arrLocation.map((item: LocationModelType, index: number) => {
                                                    return <Select.Option
                                                        value={item.ma_vi_tri}
                                                        key={index}
                                                    >
                                                        <img className='p-2' src={item.hinh_anh} alt='...' width={40} style={{borderRadius: 15}}></img>
                                                        {item.ten_vi_tri}
                                                    </Select.Option>
                                                })
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                {/* Khách */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="khach"
                                        label="Số lượng khách"
                                        rules={[{ required: true, message: 'Không được để trống số khách!' }]}
                                    >
                                        <Input type='number' />
                                    </Form.Item>
                                </Col>
                                {/* Phòng ngủ */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="phong_ngu"
                                        label="Số phòng ngủ"
                                        rules={[{ required: true, message: 'Không được để trống số phòng ngủ!' }]}
                                    >
                                        <Input type='number' />
                                    </Form.Item>
                                </Col>
                                {/* Giường */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="giong"
                                        label="Số giường ngủ"
                                        rules={[{ required: true, message: 'Không được để trống số giường ngủ!' }]}
                                    >
                                        <Input type='number' />
                                    </Form.Item>
                                </Col>
                                {/* Phòng tắm */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="phong_tam"
                                        label="Số phòng tắm"
                                        rules={[{ required: true, message: 'Không được để trống số phòng tắm!' }]}
                                    >
                                        <Input type='number' />
                                    </Form.Item>
                                </Col>
                                {/* Giá tiền */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="gia_tien"
                                        label="Giá tiền"
                                        rules={[{ required: true, message: 'Không được để trống giá tiền!' }]}
                                    >
                                        <Input type='number' placeholder='Tính theo đơn vị $' />
                                    </Form.Item>
                                </Col>
                                {/* Hình ảnh */}
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="hinh_anh"
                                        label="Hình ảnh"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                    >
                                        <Upload name="logo" beforeUpload={() => false} listType="picture">
                                            <Button icon={<UploadOutlined />}>Chọn hình ảnh</Button>
                                        </Upload>
                                    </Form.Item>
                                </Col>
                                {/* Máy giặt */}
                                <Col xs={6} sm={3}>
                                    <Form.Item
                                        label="Máy giặt"
                                        name="may_giat"
                                        valuePropName="checked">
                                        <Switch />
                                    </Form.Item>
                                </Col>
                                {/* Bàn là */}
                                <Col xs={6} sm={3}>
                                    <Form.Item
                                        label="Bàn là"
                                        name="ban_la"
                                        valuePropName="checked">
                                        <Switch />
                                    </Form.Item>
                                </Col>
                                {/* Tivi */}
                                <Col xs={6} sm={3}>
                                    <Form.Item
                                        label="Tivi"
                                        name="tivi"
                                        valuePropName="checked">
                                        <Switch />
                                    </Form.Item>
                                </Col>
                                {/* Điều hoà */}
                                <Col xs={6} sm={3}>
                                    <Form.Item
                                        label="Điều hoà"
                                        name="dieu_hoa"
                                        valuePropName="checked">
                                        <Switch />
                                    </Form.Item>
                                </Col>
                                {/* Bếp */}
                                <Col xs={6} sm={3}>
                                    <Form.Item
                                        label="Bếp"
                                        name="bep"
                                        valuePropName="checked">
                                        <Switch />
                                    </Form.Item>
                                </Col>
                                {/* Đỗ xe */}
                                <Col xs={6} sm={3}>
                                    <Form.Item
                                        label="Đỗ xe"
                                        name="do_xe"
                                        valuePropName="checked">
                                        <Switch />
                                    </Form.Item>
                                </Col>
                                {/* Hồ bơi */}
                                <Col xs={6} sm={3}>
                                    <Form.Item
                                        label="Hồ bơi"
                                        name="ho_boi"
                                        valuePropName="checked">
                                        <Switch />
                                    </Form.Item>
                                </Col>
                                {/* Bàn ủi */}
                                <Col xs={6} sm={3}>
                                    <Form.Item
                                        label="Bàn ủi"
                                        name="ban_ui"
                                        valuePropName="checked">
                                        <Switch />
                                    </Form.Item>
                                </Col>
                                {/* Mô tả */}
                                <Col xs={24} sm={24}>
                                    <Form.Item
                                        label="Mô tả"
                                        name="mo_ta"
                                        rules={[{ required: true, message: 'Không được để trống mô tả!' }]}
                                    >
                                        <ReactQuill style={{ height: '200px' }} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                        <button type="button" className="btn btn-primary" onClick={() => formAddRoom.submit()}>Thêm phòng mới</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddRoom