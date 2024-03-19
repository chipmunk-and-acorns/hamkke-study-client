"use client";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import LoadingSpinners from "../loading/loading";

/* const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <div>form loading...</div>,
}); */

const toolbarOptions = [
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline", "strike", "blockquote"],
  ["code-block"],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  ["clean"],
];

const modules = {
  toolbar: toolbarOptions,
};

interface IProps {
  value: string;
  onChange: () => void;
}

const QuillEditor = ({ value, onChange }: IProps) => {
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        ssr: false,
        loading: () => <LoadingSpinners />,
      }),
    []
  );

  return (
    <ReactQuill
      modules={modules}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        height: "400px",
      }}
    />
  );
};

export default QuillEditor;
