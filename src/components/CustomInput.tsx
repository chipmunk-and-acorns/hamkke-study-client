import { Box, InputLabel, OutlinedInput } from '@mui/material';
import { ChangeEvent } from 'react';

interface IProps {
  content: string;
  htmlFor: string;
  value: string;
  inputId: string;
}

const CustomInput = ({ content, htmlFor, value, inputId }: IProps) => {
  return (
    <Box>
      <InputLabel
        children={content}
        htmlFor={htmlFor}
        variant="standard"
        sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}
      />
      <OutlinedInput
        id={inputId}
        value={value}
        color="primary"
        fullWidth
        onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
      />
    </Box>
  );
};

export default CustomInput;
