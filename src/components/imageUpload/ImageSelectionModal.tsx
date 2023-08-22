import { useState, createRef } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ReactCropperElement } from 'react-cropper';

import theme from '../../styles/theme';
import ProfileImageCrop from './ProfileImageCrop';
import { images } from '../../utils/importImageUrl';

interface IProps {
  selectImage: string | null;
  handleCloseModal: () => void;
  handleUpdateImageUrl: (cropData: string) => void;
  handleUpdateImageFile: (selectedImg: File | null) => void;
}

const ImageSelectionModal = ({
  selectImage,
  handleCloseModal,
  handleUpdateImageUrl,
  handleUpdateImageFile,
}: IProps) => {
  const [cropData, setCropData] = useState('');
  const cropperRef = createRef<ReactCropperElement>();

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const cropperObj = cropperRef.current.cropper;

      cropperObj.getCroppedCanvas().toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'croppedImage');
          if (file) {
            setCropData(cropperObj.getCroppedCanvas().toDataURL());
            handleUpdateImageFile(file);
          }
        }
      });
    }
  };

  const handleSetCropData = () => {
    getCropData();
    handleUpdateImageUrl(cropData);
    handleCloseModal();
  };

  return (
    <>
      <Container sx={ModalBackgroundStyle} />
      <Box sx={ModalStyle}>
        <Button variant="text" onClick={handleCloseModal}>
          X
        </Button>
        <ProfileImageCrop
          selectImage={selectImage}
          cropperRef={cropperRef}
          getCropData={getCropData}
          handleUpdateImageFile={handleUpdateImageFile}
        />
        <Box sx={ImagePreviewAcceptStyle}>
          <Box>
            <Typography variant="subtitle2" component="p">
              이미지 미리보기
            </Typography>
            <img
              src={cropData ? cropData : images.profileImage1}
              alt={cropData ? '사용자가 선택한 이미지' : '이미지 사이즈 조절을 해주세요.'}
            />
          </Box>
          <Box>
            <Button variant="contained" onClick={handleSetCropData}>
              적용하기
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const ModalBackgroundStyle = {
  backgroundColor: theme.customPalette.grey[400],
  opacity: '0.5',
  position: 'absolute',
  minWidth: '100vw',
  minHeight: '100%',
  top: 0,
  left: 0,
};

const ModalStyle = {
  position: 'absolute',
  zIndex: '10',
  transform: 'translate(-50%, -70%)',
  width: '500px',
  backgroundColor: theme.customPalette.grey[50],
  boxShadow: 10,
  borderRadius: '1rem',
  pt: '1rem',

  '& > button:first-of-type': {
    border: 'none',
    backgroundColor: 'inherit',
    position: 'fixed',
    right: '0.1rem',
    top: '1rem',
    fontWeight: 'bold',
  },
};

const ImagePreviewAcceptStyle = {
  px: '5rem',
  py: '2rem',

  img: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    backgroundColor: theme.customPalette.grey[300],
  },

  button: {
    width: '100px',
  },

  'div:first-of-type': {
    width: '100px',
    height: '100px',
    marginTop: '2rem',
  },
  'div:last-child': {
    width: '60%',
    mt: '2rem',
  },
};

export default ImageSelectionModal;
