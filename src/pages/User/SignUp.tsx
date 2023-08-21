import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { Container, Box, Typography, Button } from '@mui/material';

import TextInput from '../../components/Input/TextInput';
import ProfileImgPreview from '../../components/imageUpload/ProfileImgPreview';
import { validateSchema } from '../../utils/validation';
import { User } from '../../types/user';
import { images } from '../../utils/importImageUrl';

/**
 * 일반 회원가입
 * - [ ] email(username) (Email 형식 (@ 가 필수))
 * - [ ] password (소문자, 대문자, 특수문자, 숫자 1개씩 필수, 8자 이상 16자 이하)
 * - [ ] nickname (2자 이상 10자 이하 (한글 , 영어, 숫자만 가능))
 * - [ ] profileImage(optional)를 입력받는다.
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
  // 프로필 사진

  const handleSubmit = (values: User) => {
    console.log('회원 가입', values);
  };

  return (
    <Container typeof="div" sx={ContainerStyle}>
      <Link to="/">
        <img src={images.logo} alt="go to hamkke study home" title="홈으로 이동하기" />
      </Link>
      <Box sx={ContentBoxStyle}>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <TextInput label="이메일" name="username" type="email" />
            <TextInput label="비밀번호" name="password" type="password" />
            <TextInput label="비밀번호 확인" name="passwordConfirm" type="password" />
            <TextInput label="닉네임" name="nickname" type="string" />
            <ProfileImgPreview />
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
  pt: '2rem',

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
