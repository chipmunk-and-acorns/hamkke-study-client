import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { Container, Box, Typography, Button } from '@mui/material';

import TextInput from '../../components/Input/TextInput';
import ProfileImgPreview from '../../components/ImageUpload/ProfileImgPreview';
import { registerValidateSchema } from '../../utils/validation';
import { User } from '../../types/user';
import { images } from '../../utils/importImageUrl';
import { getPresignedImageUploadUrl, postS3ImageUpload } from '../../api/imageUploadApi';
import { postRegister } from '../../api/userApi';
import { typeGuard } from '../../utils/typeGuard';

/**
 * 일반 회원가입
 *
 * 구글 OAuth 가입
 * - [ ] email disable 처리
 * - [ ] nickname 수정 가능
 * - [ ] profileImage 기존 소셜 이미지 사용 변경 가능
 *
 * 회원 가입 성공 후 로직
 * - 로그인 처리한 후 페이지 이동
 *  - 이전 페이지로 이동 (없다면 메인 페이지로 라우팅)
 */

const SignUp = () => {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  };
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);

  const mutation = useMutation(postRegister);
  const navigate = useNavigate();

  const handleUpdateImageFile = (file: File | null) => {
    setProfileImageFile(file);
  };

  // 회원 가입
  const handleSubmit = async (values: User) => {
    const data = { ...values };
    delete data.passwordConfirm;

    let s3UploadedImageUrl = null;

    // 이미지가 있을 때
    if (profileImageFile) {
      // 1. 서버에 s3에 이미지 업로드할 수 있는 URL 요청
      const presignedData = await getPresignedImageUploadUrl(profileImageFile.type);

      // 2. 응답받은 url로 이미지 저장 요청 - fields와 profileImageFile 파일을 formData에 추가
      if (presignedData) {
        const filed = presignedData.presigned.fields;
        const formData = new FormData();

        for (const key in filed) {
          formData.append(key, filed[key as keyof typeof filed]);
        }
        formData.append('file', profileImageFile);
        s3UploadedImageUrl = await postS3ImageUpload(presignedData.presigned.url, formData);
      }

      // 3. s3 업로드 후 받은 url을 data 객체에 추가(profileImage)
      if (s3UploadedImageUrl) {
        data.profileImage = `${presignedData.presigned.url}${presignedData.key}`;
        const response = await mutation.mutateAsync(data);

        if (response) navigate('/');
      }
    } else {
      // 이미지가 없을 때
      try {
        const response = await mutation.mutateAsync(data);
        if (response) navigate('/');
      } catch (error: unknown) {
        if (typeGuard<{ response: { data: { message: string } } }>(error, 'response')) {
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      }
    }
  };

  return (
    <Container typeof="div" sx={ContainerStyle}>
      <Link to="/">
        <img src={images.logo} alt="go to hamkke study home" title="홈으로 이동하기" />
      </Link>
      <Box sx={ContentBoxStyle}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidateSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <TextInput label="이메일" name="username" type="email" />
            <TextInput label="비밀번호" name="password" type="password" />
            <TextInput label="비밀번호 확인" name="passwordConfirm" type="password" />
            <TextInput label="닉네임" name="nickname" type="string" />
            <ProfileImgPreview
              handleUpdateImageFile={handleUpdateImageFile}
              profileImageFile={profileImageFile}
            />
            <Box sx={LoginBoxStyle}>
              <Typography component="span" variant="h6">
                이미 회원이신가요?
              </Typography>
              <Button>
                <Link to="/login">로그인하기</Link>
              </Button>
            </Box>
            <Box>
              <Button type="submit" variant="contained" sx={SignUpBtnStyle}>
                회원가입
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

const ContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  pt: '3rem',

  'a > img': {
    mb: '3rem',
  },
};

const ContentBoxStyle = {
  width: '100%',
};

const LoginBoxStyle = {
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  span: {
    fontSize: '0.9rem',
  },
};

const SignUpBtnStyle = {
  width: '100%',
  mt: '1rem',
  fontSize: '1rem',
  fontWeight: 'bold',
};

export default SignUp;
