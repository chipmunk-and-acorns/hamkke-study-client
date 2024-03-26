"use client";

import { Typography } from "@mui/material";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { IOptions } from "@/types/post";
import useId from "@mui/material/utils/useId";

interface IProps {
  placeholder?: string;
  label: string;
  options: IOptions[];
  isMulti?: boolean;
  name: string;
  onChange: (value: { key: string; value: string }) => void;
}

const animatedComponent = makeAnimated();

const SelectBox = ({
  placeholder,
  label,
  options,
  isMulti = false,
  name,
  onChange,
}: IProps) => {
  return (
    <>
      <Typography variant="subtitle1" fontWeight={"bold"}>
        {label}
      </Typography>
      <Select
        placeholder={placeholder}
        isMulti={isMulti}
        components={animatedComponent}
        instanceId={useId()}
        options={options}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default SelectBox;
