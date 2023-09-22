import { useState } from 'react';
import { InputLabel } from '@mui/material';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';

import { IStacks } from '../../types/article';
import theme from '../../styles/theme';

interface IProps {
  options:
    | OptionsOrGroups<null, GroupBase<null>>
    | { value: string; label: string }[]
    | IStacks
    | undefined;
  placeholder: string;
  label: string;
  labelKey: string;
  isMulti?: boolean;
  handleUpdateValue: (key: string, value: { value: string; label: string } | string) => void;
}

const Selection = ({
  options,
  placeholder,
  label,
  labelKey,
  isMulti,
  handleUpdateValue,
}: IProps) => {
  const [selectedOption, setSelectOption] = useState(null);

  const handleChange = (value: { value: string; label: string }) => {
    setSelectOption(value);
    handleUpdateValue(labelKey, value);
  };

  return (
    <>
      <InputLabel children={label} sx={LabelStyle} />
      <Select
        defaultValue={selectedOption}
        onChange={handleChange}
        isMulti={isMulti}
        options={options}
        placeholder={placeholder}
      />
    </>
  );
};

const LabelStyle = {
  fontWeight: 'bold',
  color: theme.palette.grey[900],
  mb: '0.3rem',
};

export default Selection;
