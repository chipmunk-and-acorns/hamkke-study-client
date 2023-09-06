import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';
import { Formik, Form } from 'formik';

import TextInput from '../../components/Input/TextInput';
import { images } from '../../utils/importImageUrl';
import { loginValidateSchema } from '../../utils/validation';
import { User } from '../../types/user';
import theme from '../../styles/theme';

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (values: User) => {
    console.log(values);
  };

  const handleSocialLogin = () => {
    console.log('google로 로그인');
  };

  return (
    <Container typeof="div" sx={ContainerStyle}>
      <Link to="/">
        <img src={images.logo} alt="go to hamkke study home" title="홈으로 이동하기" />
      </Link>
      <Box sx={ContentBoxStyle}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidateSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <TextInput label="이메일" name="username" type="email" />
            <TextInput label="비밀번호" name="password" type="password" />
            <Box sx={RegisterBoxStyle}>
              <Typography component="span" variant="h6">
                아직 회원이 아니신가요?
              </Typography>
              <Button>
                <Link to="/register">회원가입하기</Link>
              </Button>
            </Box>
            <Box>
              <Button type="submit" variant="contained" sx={SignInBtnStyle}>
                로그인
              </Button>
            </Box>
            <Box sx={SocialLoginBoxStyle}>
              <img src={images.googleIcon} alt="google icon image" />
              <button type="button" onClick={handleSocialLogin}>
                구글 로그인
              </button>
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
  pt: '5rem',

  'a > img': {
    mb: '3rem',
  },
};

const ContentBoxStyle = {
  width: '100%',
};

const RegisterBoxStyle = {
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  span: {
    fontSize: '0.9rem',
  },
};

const SignInBtnStyle = {
  width: '100%',
  mt: '1rem',
  fontSize: '1rem',
  fontWeight: 'bold',
};

const SocialLoginBoxStyle = {
  backgroundColor: theme.palette.grey[200],
  py: '0.6rem',
  mt: '0.7rem',

  display: 'flex',
  justifyContent: 'center',
  borderRadius: '0.3rem',

  button: {
    background: 'none',
    border: 'none',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  img: {
    width: '1.2rem',
  },
};

export default SignIn;
