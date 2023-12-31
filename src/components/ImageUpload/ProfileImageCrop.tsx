import { ChangeEvent, RefObject, useState } from 'react';
import { Box, InputLabel, Typography } from '@mui/material';
import Cropper, { ReactCropperElement } from 'react-cropper';

import 'cropperjs/dist/cropper.css';
import { images } from '../../utils/importImageUrl';
import theme from '../../styles/theme';

interface IProps {
  selectImage: string | null;
  cropperRef: RefObject<ReactCropperElement>;
  getCropData: () => void;
  handleUpdateImageFile: (selectedImg: File | null) => void;
}

const ProfileImageCrop = ({
  selectImage,
  cropperRef,
  getCropData,
  handleUpdateImageFile,
}: IProps) => {
  const [imageSrc, setImageSrc] = useState<string>(selectImage ?? images.profileImage1);

  const handleOtherFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;

    if (!files) return;

    const reader = new FileReader();

    if (files && files[0].size > 1024 * 1024 * 2) {
      alert('파일 용량이 너무 큽니다. 파일은 2MB 이하만 가능합니다.');
    } else {
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImageSrc(reader.result);
        }
      };
      reader.readAsDataURL(files[0]);
      handleUpdateImageFile(files[0]);
    }
  };

  return (
    <Box sx={WrapperStyle}>
      <Box sx={InputLabelStyle}>
        <InputLabel htmlFor="profileImg" size="normal" variant="standard">
          파일 선택
        </InputLabel>
        <input
          id="profileImg"
          type="file"
          accept="image/jpeg,image/png,image/jpg"
          onChange={handleOtherFileSelect}
        />
        <Typography variant="subtitle2" component="p">
          마우스 휠로 사진 확대/축소가 가능합니다.
        </Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Cropper
          ref={cropperRef}
          src={imageSrc}
          key={imageSrc}
          style={{ height: 300, width: '100%' }}
          zoomTo={0.2}
          initialAspectRatio={1}
          preview=".img-preview"
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          guides={true}
          ready={getCropData}
          cropend={getCropData}
        />
      </Box>
    </Box>
  );
};

const WrapperStyle = {
  px: '5rem',
};

const InputLabelStyle = {
  label: {
    width: '80px',
    py: '0.3rem',
    px: '0.5rem',
    my: '0.5rem',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: theme.palette.info.main,
    ':hover': {
      cursor: 'pointer',
      color: '#fff',
      backgroundColor: theme.palette.info.main,
    },
    border: `1px solid ${theme.palette.info.main}`,
    borderRadius: '0.3rem',
    boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
  },
  input: {
    display: 'none',
  },
  p: {
    fontSize: '5px',
    color: theme.customPalette.grey[700],
  },
  mb: '1.2rem',
};

export default ProfileImageCrop;
