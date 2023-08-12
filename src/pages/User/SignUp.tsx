import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Box, Typography, Button } from '@mui/material';

import TextInput from '../../components/TextInput';
import theme from '../../styles/theme';
import { validation } from '../../utils/validation';
import { User } from '../../types/user';

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

  const validateSchema = Yup.object({
    username: Yup.string()
      .matches(validation.emailValidRule, '올바른 이메일 형식을 맞춰 입력해주세요.')
      .required('이메일을 입력해주세요.'),
    password: Yup.string()
      .matches(
        validation.passwordValidRule,
        '영문자, 숫자, 특수문자(!@#$%^&*) 각 1개 이상, 8자~16자로 입력해주세요.'
      )
      .required('비밀번호를 입력해주세요.'),
    passwordConfirm: Yup.string()
      .equals([Yup.ref('password')], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 확인을 위해 필수로 입력해주셔야됩니다.'),
    nickname: Yup.string()
      .matches(
        validation.nicknameValidRule,
        '영문자, 숫자, 한글로 2자 이상 10자 이하로 입력가능합니다.'
      )
      .required('닉네임을 입력해주세요.'),
  });

  const handleSubmit = (values: User) => {
    console.log('회원 가입', values);
  };

  return (
    <Container typeof="div" maxWidth="sm" sx={ContainerStyle}>
      <Typography variant="h4" component="h4" sx={{ pb: '3rem', textAlign: 'center' }}>
        회원가입
      </Typography>
      <Box>
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
  mt: '7rem',
  py: '3rem',
  bgcolor: theme.customPalette.grey[50],
  border: `1px solid ${theme.customPalette.grey[100]}`,
  borderRadius: '0.5rem',
  boxShadow: 3,
  '& > div': {
    width: '100%',
    px: '5rem',
    '> form > div': {
      pb: '0.5rem',
    },
  },
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
};

export default SignUp;
