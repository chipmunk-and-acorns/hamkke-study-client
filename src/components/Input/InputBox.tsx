import { Box, InputLabel, OutlinedInput } from '@mui/material';
import theme from '../../styles/theme';

interface IProps {
  label: string;
}

const InputBox = ({ label }: IProps) => {
  return (
    <Box sx={BoxStyle}>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput placeholder="글 제목을 입력해주세요." />
    </Box>
  );
};

const BoxStyle = {
  mb: '1.4rem',
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: theme.palette.grey[900],
    mb: '0.3rem',
    ':hover': {
      cursor: 'pointer',
    },
  },
  div: {
    width: '100%',
    height: '38px',
  },
};

export default InputBox;
