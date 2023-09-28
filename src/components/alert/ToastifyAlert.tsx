import { useEffect } from 'react';
import { Theme, ToastContainer, ToastPosition, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProps {
  open: boolean;
  content: string;
  position?: ToastPosition;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme?: Theme;
}

const ToastifyAlert = ({
  open,
  content,
  position = toast.POSITION.TOP_RIGHT,
  autoClose = 5000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress,
  theme = 'light',
}: IProps) => {
  const notify = (open: boolean) => {
    if (open) {
      toast(content, {
        position,
        autoClose,
        hideProgressBar,
        closeOnClick,
        pauseOnHover,
        draggable,
        progress,
        theme,
      });
    }
  };

  useEffect(() => {
    notify(open);
  }, [open]);

  return <ToastContainer />;
};

export default ToastifyAlert;
