import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const notifySuccess = (message: string) => toast.success(message);

export const notifyWarning = (message: string) => toast.warning(message);


export const notifyError = (message: string) => toast.error(message || 'Something went wrong please try again ');
