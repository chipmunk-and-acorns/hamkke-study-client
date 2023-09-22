import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
];

interface IProps {
  labelKey: string;
  handleUpdateValue: (key: string, value: { value: string; label: string } | string) => void;
}

const Quill = ({ labelKey, handleUpdateValue }: IProps) => {
  const [value, SetValue] = useState('');

  const handleUpdate = (e: any) => {
    SetValue(e);
    handleUpdateValue(labelKey, e);
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handleUpdate}
      formats={formats}
      modules={modules}
    />
  );
};

export default Quill;
