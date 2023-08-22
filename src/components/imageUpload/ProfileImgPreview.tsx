import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

import { images } from '../../utils/importImageUrl';
import ImageSelectionModal from './ImageSelectionModal';
import theme from '../../styles/theme';

interface IProps {
  handleUpdateImageFile: (selectedImg: File | null) => void;
}

const ProfileImgPreview = ({ handleUpdateImageFile }: IProps) => {
  // 프로필 선택 버튼 클릭 시 프로필 선택하고 사이즈 조절할 수 있는 모달창이 열리는 조건의 상태값
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //  파일 선택 후 사이즈 조절 -> 확인 버튼 클릭시 기본 이미지를 선택한 이미지로 변경
  const [selectImage, setSelectImage] = useState<string | null>(null);

  // 모달창 열림 여부를 변경하는 함수
  const handleModalControl = () => {
    setIsModalOpen((prev) => !prev);
  };

  // 모달 창 닫히면서 선택한 이미지의 정보를 저장해야 됨
  const handleUpdateImageUrl = (imgUrl: string) => {
    setSelectImage(imgUrl);
  };

  const handleUpdateDefaultImage = () => {
    setSelectImage(null);
    handleUpdateImageFile(null);
  };

  return (
    <Box sx={ContainerStyle}>
      <Typography variant="subtitle1" component="span">
        프로필 이미지
      </Typography>
      <Box sx={BoxStyle}>
        <Box>
          <img
            src={selectImage ? selectImage : images.profileImage1}
            alt={selectImage ? 'user profile image' : 'default profile image'}
          />
        </Box>
        <Box>
          <Button variant="outlined" size="medium" onClick={handleModalControl}>
            프로필 이미지 선택
          </Button>
          <Button variant="outlined" size="medium" onClick={handleUpdateDefaultImage}>
            기본 이미지 사용
          </Button>
        </Box>
        {isModalOpen && (
          <Box>
            <ImageSelectionModal
              selectImage={selectImage}
              handleCloseModal={handleModalControl}
              handleUpdateImageUrl={handleUpdateImageUrl}
              handleUpdateImageFile={handleUpdateImageFile}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

const ContainerStyle = {
  width: '100%',

  span: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: 'bold',
    mb: '0.3rem',
    color: theme.customPalette.grey[700],
  },
};

const BoxStyle = {
  display: 'flex',

  img: {
    mr: '1rem',
    borderRadius: '0.5rem',
    width: '80px',
    height: '80px',
    objectFit: 'cover',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

export default ProfileImgPreview;
