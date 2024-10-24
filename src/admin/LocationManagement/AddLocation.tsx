import { Button, Form, Input, message, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { addLoactionApi, getAllLocationApi, uploadLocationImageApi } from '../../redux/reducers/locationReducer';
import { DispatchType } from '../../redux/store';
import { useDispatch } from 'react-redux';

type Props = {}

const AddLocation = (props: Props) => {
    const [formAddLocation] = Form.useForm();
    const [imgLocation, setImgLocation] = useState<any>(null)
    const dispatch: DispatchType = useDispatch()

    const addLoaction = async (values: any) => {
        try {
            const initialValues = {
                ...values,
                hinh_anh: imgLocation.name,
            };
    
            const response = await addLoactionApi(initialValues);

            if (response && imgLocation) {
                const formData = new FormData();
                formData.append('hinhAnh', imgLocation);

                console.log(formData.get('hinhAnh'))
                const upload = await uploadLocationImageApi(response.data.ma_vi_tri as number, formData as any);

                if (upload) {
                    dispatch(getAllLocationApi())
                }
                else{
                    message.error('Lỗi khi upload')
                }
                message.success('Upload thành công')
            }
        } catch (error) {
            console.error('Lỗi khi thêm location hoặc upload hình ảnh:', error);
        }
    };

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        setImgLocation(e.file)
        return e && e?.fileList;
    };

    return (
        <div className="modal fade" id="addLocationModal" tabIndex={-1} aria-labelledby="addLocationModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addLocationModalLabel">Thêm vị trí mới</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <Form
                            name='addLoaction'
                            form={formAddLocation}
                            onFinish={addLoaction}
                            layout="vertical"
                        >
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
                            <Form.Item
                                name="ten_vi_tri"
                                label="Tên vị trí"
                                rules={[{ required: true, message: 'Không được để trống tên vị trí!' }]}
                            >
                                <Input placeholder='Nhập tên vị trí' />
                            </Form.Item>
                            <Form.Item
                                name="tinh_thanh"
                                label="tỉnh thành"
                                rules={[{ required: true, message: 'Không được để trống tỉnh thành!' }]}
                            >
                                <Input placeholder='Nhập tỉnh thành' />
                            </Form.Item>
                            <Form.Item
                                name="quoc_gia"
                                label="Quốc gia"
                                rules={[{ required: true, message: 'Không được để trống Quốc gia!' }]}
                            >
                                <Input placeholder='Nhập quốc gia' />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" className="btn btn-primary" onClick={() => formAddLocation.submit()}>Thêm vị trí</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddLocation