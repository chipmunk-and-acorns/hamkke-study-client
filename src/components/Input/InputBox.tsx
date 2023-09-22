import { ChangeEvent, useState } from 'react';
import { Box, InputLabel, OutlinedInput } from '@mui/material';

import theme from '../../styles/theme';

interface IProps {
  label: string;
  labelKey: string;
  handleUpdateValue: (key: string, value: { value: string; label: string } | string) => void;
}

const InputBox = ({ label, labelKey, handleUpdateValue }: IProps) => {
  const [value, setValue] = useState('');

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleUpdateValue(labelKey, e.target.value);
  };

  return (
    <Box sx={BoxStyle}>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput placeholder="글 제목을 입력해주세요." value={value} onChange={handleUpdate} />
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
