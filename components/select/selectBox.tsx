"use client";

import { Typography } from "@mui/material";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { Options } from "@/constants/data";
import useId from "@mui/material/utils/useId";

interface IProps {
  placeholder?: string;
  label: string;
  options: Options[];
  isMulti?: boolean;
}

const animatedComponent = makeAnimated();

const SelectBox = ({
  placeholder,
  label,
  options,
  isMulti = false,
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
        name="post-types"
        options={options}
      />
    </>
  );
};

export default SelectBox;
