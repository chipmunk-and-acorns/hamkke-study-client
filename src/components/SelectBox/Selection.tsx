import { useState } from 'react';
import { InputLabel } from '@mui/material';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';

import theme from '../../styles/theme';
import { IStacks } from '../../types/article';
interface IProps {
  options:
    | OptionsOrGroups<null, GroupBase<null>>
    | { value: string; label: string }[]
    | IStacks
    | undefined;
  placeholder: string;
  label: string;
  isMulti?: boolean;
}

const Selection = ({ options, placeholder, label, isMulti }: IProps) => {
  const [selectedOption, setSelectOption] = useState(null);

  return (
    <>
      <InputLabel children={label} sx={LabelStyle} />
      <Select
        defaultValue={selectedOption}
        onChange={setSelectOption}
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
