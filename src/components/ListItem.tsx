import { ReactNode } from 'react';
import { InputLabel } from '@mui/material';

interface IProps {
  listName?: string;
  content?: string | number | undefined;
  children?: ReactNode;
}

const ListItem = ({ listName, content, children }: IProps) => {
  return (
    <li>
      {children ?? (
        <>
          <InputLabel>{listName}</InputLabel>
          <span>{content}</span>
        </>
      )}
    </li>
  );
};

export default ListItem;
