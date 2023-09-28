import Swal, { SweetAlertIcon } from 'sweetalert2';

interface IAlertOptions {
  title: string;
  text: string;
  icon: SweetAlertIcon;
  confirmHandler: () => void;
}

export const Alert = ({ title, text, icon, confirmHandler }: IAlertOptions) => {
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      confirmHandler();
    } else if (result.isDenied) {
      console.log('denied');
    } else if (result.isDismissed) {
      console.log('cancel');
    }
  });
};
