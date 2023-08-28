import { useField } from 'formik';
import { Box, InputLabel, OutlinedInput, Typography } from '@mui/material';

import theme from '../../styles/theme';

interface IProps {
  label: string;
  name: string;
  type: string;
}

const TextInput = ({ label, ...props }: IProps) => {
  const [filed, meta] = useField(props);

  return (
    <>
      <Box sx={InputBoxStyle}>
        <InputLabel children={label} htmlFor={props.name} variant="standard" />
        <OutlinedInput {...filed} {...props} id={props.name} />
      </Box>
      <Box sx={ErrorBoxStyle}>
        {meta.touched && meta.error && <Typography variant="caption">* {meta.error}</Typography>}
      </Box>
    </>
  );
};

const InputBoxStyle = {
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
    mb: '0.3rem',
    ':hover': {
      cursor: 'pointer',
    },
  },
  div: {
    width: '100%',
    height: '2.7rem',
  },
};

const ErrorBoxStyle = {
  height: '1rem',
  mb: '0.7rem',
  textAlign: 'center',
  color: theme.customPalette.error.main,
};

export default TextInput;
