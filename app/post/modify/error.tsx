"use client";

import Image from "next/image";

import { ErrorPageImg } from "@/public/assets/imgSrc";

const Error = () => {
  return (
    <div>
      <Image src={ErrorPageImg} alt="Something's wrong here..." />
    </div>
  );
};

export default Error;
