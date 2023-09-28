import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputLabel } from '@mui/material';
import theme from '../../styles/theme';

interface IProps {
  label: string;
  labelKey: string;
  handleUpdateValue: (key: string, value: { value: string; label: string } | string) => void;
}

const SelectDatePicker = ({ label, labelKey, handleUpdateValue }: IProps) => {
  const [value, setValue] = useState(null);

  const handleChange = (value) => {
    const { $D: day, $M: month, $y: year } = value;
    const date = `${year}-${month + 1}-${day}`;
    setValue(value);
    handleUpdateValue(labelKey, date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel children={label} sx={LabelStyle} />
      <DatePicker sx={Style} value={value} onChange={handleChange} />
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
