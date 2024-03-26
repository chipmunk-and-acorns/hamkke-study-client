"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

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
  handleContentChange: (value: string) => void;
}

const QuillEditor = ({ value, handleContentChange }: IProps) => {
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        ssr: false,
        loading: () => <LoadingSpinners />,
      }),
    []
  );

  const [content, setContent] = useState(value);

  const handleChange = (value: string) => {
    setContent(value);
    handleContentChange(value);
  };

  return (
    <ReactQuill
      modules={modules}
      value={content}
      style={{
        width: "100%",
        height: "400px",
      }}
      onChange={handleChange}
    />
  );
};

export default QuillEditor;
