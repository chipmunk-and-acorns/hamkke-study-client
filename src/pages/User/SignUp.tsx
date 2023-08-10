import { Container, Box, Typography, Button } from '@mui/material';

import CustomInput from '../../components/CustomInput';
import { useTheme } from '@mui/material';

/**
 * 일반 회원가입
 * - [ ] email
 * - [ ] password
 * - [ ] nickname
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
  const theme = useTheme();

  const ContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '7rem',
    paddingY: '4rem',
    backgroundColor: theme.customPalette.grey[50],
    border: `1px solid ${theme.customPalette.grey[100]}`,
    borderRadius: '0.5rem',

    '& > div': {
      paddingX: '5rem',
      '> div': {
        paddingBottom: '1.3rem',
      },
    },

    'button:nth-child(1)': {
      marginTop: '3rem',
      width: '100%',
    },
  };

  return (
    <Container typeof="div" maxWidth="sm" sx={ContainerStyle}>
      <Typography variant="h4" component="h4" sx={{ paddingBottom: '3rem', textAlign: 'center' }}>
        SignUp
      </Typography>
      <Box>
        <CustomInput content="이메일" htmlFor="email" value="" inputId="email" />
        <CustomInput content="비밀번호" htmlFor="password" value="" inputId="password" />
        <CustomInput
          content="비밀번호 확인"
          htmlFor="passwordConfirm"
          value=""
          inputId="passwordConfirm"
        />
        <CustomInput content="닉네임" htmlFor="nickname" value="" inputId="nickname" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
        }}
      >
        <Typography component="span" variant="h6" sx={{ fontSize: '0.9rem' }}>
          이미 회원이신가요?
        </Typography>
        <Button>로그인하기</Button>
      </Box>
      <Box>
        <Button variant="contained">회원가입</Button>
      </Box>
    </Container>
  );
};

export default SignUp;
