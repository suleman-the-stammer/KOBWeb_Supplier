import React, { useState } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';

// ANT-D :
import { message, Upload } from 'antd';

import './image-uploader.scss'


const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (url) => {
      setImageUrl(url);
    });
  };
  const uploadButton = (
    <div style={{ fontSize: "35px" }}>
      <AiOutlineUpload />
    </div>
  );

  return (
    <>
      <Upload
        name="avatar"
        multiple={false}
        showUploadList={false}
        onChange={handleChange}
        listType="picture-circle"
        className="avatar-uploader"
        beforeUpload={beforeUpload}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" className='selected-image' />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};
export default ImageUploader;