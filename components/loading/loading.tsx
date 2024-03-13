"use client";

import { CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const override: CSSProperties = {
  display: "block",
  textAlign: "center",
  margin: "5rem",
};

const LoadingSpinners = () => {
  return (
    <BeatLoader
      color="#FFC700"
      loading={true}
      cssOverride={override}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LoadingSpinners;
