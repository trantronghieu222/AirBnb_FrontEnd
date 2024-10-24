import { Button, Form, message, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { getUserProfileApi, uploadAvatar } from '../redux/reducers/userReducer';
import { DispatchType } from '../redux/store';
import { useDispatch } from 'react-redux';
type Props = {}

const UploadAvatarModal = (props: Props) => {
    const [formUploadAvatar] = Form.useForm();
    const [imageFile, setImageFile] = useState<any>(null)
    const dispatch: DispatchType = useDispatch()
   
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        setImageFile(e.file)
        return e && e?.fileList;
    };

    const onFinish = async (values: any) => {
        try {
            const formData = new FormData()
            formData.append('hinhAnh', imageFile)
            const upload = await uploadAvatar(formData as any)
            if (upload) {
                dispatch(getUserProfileApi())
                message.success('Cập nhật avatar thành công')
            }
        } catch (error) {
            message.error("Lỗi khi upload")
        }
    };

    return (
        <div className="modal fade" id="uploadAvatarModal" tabIndex={-1} aria-labelledby="uploadAvatarModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="uploadAvatarModalLabel">Cập nhật ảnh đại diện</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <Form
                            form={formUploadAvatar}
                            name='uploadAvatar'
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="upload"
                                label="Ảnh đại diện"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                            >
                                <Upload name="logo" beforeUpload={() => false} listType="picture">
                                    <Button icon={<UploadOutlined />}>Chọn hình ảnh</Button>
                                </Upload>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" className="btn btn-primary" onClick={() => formUploadAvatar.submit()}>Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UploadAvatarModal