import { DatePicker, Form, Input } from 'antd'
import React from 'react'

type Props = {}

const onFinish = (values: any) => {
    const initialValues = {
        ...values,
        ngay_den: values.ngay_den ? values.ngay_den.format('DD/MM/YYYY') : null,
        ngay_di: values.ngay_di ? values.ngay_den.format('DD/MM/YYYY') : null
    }
    console.log(initialValues)
};


const AddBooking = (props: Props) => {
    const [formAddBooking] = Form.useForm();

    return (
        <div className="modal fade" id="addBookingModal" tabIndex={-1} aria-labelledby="addBookingModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addBookingModalLabel">Tạo đơn đặt phòng mới</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <Form
                            form={formAddBooking}
                            name="addRoom"
                            onFinish={onFinish}
                            layout="vertical"
                        >
                            <Form.Item
                                name="ma_phong"
                                label="Mã phòng"
                                rules={[{ required: true, message: 'Không được để mã phòng!' }]}
                            >
                                <Input type='number' placeholder='Nhập mã phòng' />
                            </Form.Item>
                            <Form.Item
                                name="ngay_den"
                                label="Ngày đến"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày đến!' }]}
                            >
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    getPopupContainer={(trigger) => trigger.parentElement as HTMLElement}
                                />
                            </Form.Item>
                            <Form.Item
                                name="ngay_di"
                                label="Ngày đi"
                                rules={[{ required: true, message: 'Vui lòng chọn ngày đi!' }]}
                            >
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    getPopupContainer={(trigger) => trigger.parentElement as HTMLElement}
                                />
                            </Form.Item>
                            <Form.Item
                                name="so_luong_khach"
                                label="Số lượng khách"
                                rules={[{ required: true, message: 'Không được để số lượng khách!' }]}
                            >
                                <Input type='number' placeholder='Nhập số lượng khác' />
                            </Form.Item>
                            <Form.Item
                                name="ma_nguoi_dat"
                                label="Mã người đặt"
                                rules={[{ required: true, message: 'Không được để mã người đặt!' }]}
                            >
                                <Input type='number' placeholder='Nhập mã người đặt' />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" className="btn btn-primary" onClick={() => formAddBooking.submit()}>Tạo đơn đặt phòng</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddBooking