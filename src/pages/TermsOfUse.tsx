import { Box, Container, Typography } from '@mui/material';
import theme from '../styles/theme';

interface IProps {
  handleClick: () => void;
}

const TermsOfUse = ({ handleClick }: IProps) => {
  return (
    <>
      <Box sx={BackDropStyle} />
      <Container sx={ContainerStyle}>
        <button onClick={handleClick}>X</button>
        <Box>
          <Typography variant="h6" component="h2">
            이용 약관
          </Typography>
          <Typography variant="subtitle2" component="h5" sx={{ mt: 2 }}>
            본 약관은 Hamkke(이하 “회사”)와 서비스 이용자간의 이용 계약 관련 규정을 정하는 것을
            목적으로 합니다.
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="h2" sx={{ mt: 2 }}>
            제1조 (목적)
          </Typography>
          <Typography variant="subtitle2" component="p">
            본 약관은 회사가 제공하는 Hamkke 등의 서비스(이하 "서비스"라 함)를 이용함에 있어 권리,
            의무, 책임 및 기타 필요한 사항을 규정함을 목적으로 합니다.
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="h2" sx={{ mt: 2 }}>
            제2조 (약관의 효력과 변경)
          </Typography>
          <Typography variant="subtitle2" component="p">
            1. 본 약관은 서비스를 이용하고자 하는 모든 사용자에게 그 적용을 받습니다.
          </Typography>
          <Typography variant="subtitle2" component="p">
            2. 회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내
            공지사항에 게시함으로써 효력을 발생합니다.
          </Typography>
          <Typography variant="subtitle2" component="p">
            3. 회원은 변경된 약관에 대해 동의하지 않을 권리가 있으며, 동의하지 않을 경우 서비스
            이용이 제한될 수 있습니다.
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="h2" sx={{ mt: 2 }}>
            제3조 (회원가입 및 계정 관리)
          </Typography>
          <Typography variant="subtitle2" component="p">
            1. 본 서비스를 이용하려면 회원 가입이 필요합니다.
          </Typography>
          <Typography variant="subtitle2" component="p">
            2. 회사는 회원에 대한 정보를 관리하기 위해 개인정보를 수집하며, 이에 대한 내용은
            개인정보 처리방침에서 규정합니다.
          </Typography>
          <Typography variant="subtitle2" component="p">
            3. 회원은 개인정보가 변경되었을 경우 즉시 회사에게 알려야 합니다.
          </Typography>
          <Typography variant="subtitle2" component="p">
            4. 회원은 자신의 ID와 비밀번호를 관리할 책임이 있으며, 이를 타인에게 양도 및 대여할 수
            없습니다.
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="h2" sx={{ mt: 2 }}>
            제4조 (서비스 이용)
          </Typography>
          <Typography variant="subtitle2" component="p">
            1. 회원은 서비스 이용 시 이 약관에서 규정한 사항 및 회사가 공지한 사항을 준수해야 하며,
            법령과 공공질서에 위배되는 행위는 금지됩니다.
          </Typography>
          <Typography variant="subtitle2" component="p">
            2. 회원은 회사의 명시적인 동의 없이 서비스를 이용하여 얻은 정보를 상업적으로 이용하거나
            타인에게 제공할 수 없습니다.
          </Typography>
          <Typography variant="subtitle2" component="p">
            3. 회사는 회원이 서비스 이용 중 발생한 문제에 대해 책임을 지지 않습니다.
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="h2" sx={{ mt: 2 }}>
            제5조 (서비스 제공의 중지)
          </Typography>
          <Typography variant="subtitle2" component="p">
            1. 회사는 다음과 같은 경우 서비스 제공을 중지할 수 있습니다.
          </Typography>
          <Typography variant="subtitle2" component="p">
            &nbsp; - 서비스 설비의 보수 등 공사로 인한 부득이한 경우
          </Typography>
          <Typography variant="subtitle2" component="p">
            &nbsp; - 서비스 이용량의 폭주 등으로 인한 서비스 안정성 확보를 위해 필요한 경우
          </Typography>
          <Typography variant="subtitle2" component="p">
            2. 회사는 제1항의 경우 사전에 회원에게 공지할 수 있습니다.
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="h2" sx={{ mt: 2 }}>
            제6조 (면책조항)
          </Typography>
          <Typography variant="subtitle2" component="p">
            1. 회사는 천재지변, 전쟁, 테러, 해킹 등 불가항력적인 사유로 인하여 서비스를 제공할 수
            없는 경우 책임을 지지 않습니다.
          </Typography>
          <Typography variant="subtitle2" component="p">
            2. 회사는 회원의 귀책사유로 인해 발생한 손해에 대해 책임을 지지 않습니다.
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="h2" sx={{ mt: 2 }}>
            제7조 (재판권 및 준거법)
          </Typography>
          <Typography variant="subtitle2" component="p">
            1. 서비스 이용에 관한 분쟁은 회사와 회원간의 합의에 의해 원만히 해결하여야 합니다.
          </Typography>
          <Typography variant="subtitle2" component="p">
            2. 본 약관에 정한 사항에 관하여 소송이 제기될 경우 민사소송법 등 관련 법령에 따른 법원을
            관할 법원으로 합니다.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

const BackDropStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10,
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.grey[500],
};

const ContainerStyle = {
  position: 'absolute',
  transform: 'translate(100%, 10%)',
  zIndex: 20,
  width: '450px',
  height: '500px',
  py: '1rem',
  px: '1rem',
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  overflow: 'auto',

  '::-webkit-scrollbar': {
    width: '0.8rem',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: theme.customPalette.primary.light,
    borderRadius: '100px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.customPalette.primary.dark,
    borderRadius: '100px',
  },

  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    mt: '0.5rem',
    mr: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },

  h2: {
    mt: '2rem',
  },
  h5: {
    mt: '1rem',
    fontSize: '0.8rem',
  },
  'div > p': {
    fontSize: '0.7rem',
  },
};

export default TermsOfUse;
