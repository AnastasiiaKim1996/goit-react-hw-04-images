import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastSettings = {
  theme: 'colored',
};

export const toastSuccess = () => {
  return toast.success(
    'Hooray! We found what you were looking for 😉',
    toastSettings
  );
};
export const toastError = () => {
  return toast.error(
    'Oops, something went wrong, please try again 🙊',
    toastSettings
  );
};
export const toastWarn = () => {
  return toast.warn(
    'Sorry, you already found this picture, please check if this will be a new search 😇',
    toastSettings
  );
};
