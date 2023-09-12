import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputLabel } from '@mui/material';
import theme from '../../styles/theme';

const SelectDatePicker = () => {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel children="모집 마감일" sx={LabelStyle} />
      <DatePicker sx={Style} value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  );
};

const LabelStyle = {
  fontWeight: 'bold',
  color: theme.palette.grey[900],
  mb: '0.3rem',
};

const Style = {
  width: '100%',
  '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
    height: '44px',
    width: '97%',
  },
  '.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
    'input, div': {
      mt: '-0.5rem',
      mr: '1rem',
    },
  },
};

export default SelectDatePicker;
