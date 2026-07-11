import { toast } from 'react-hot-toast';

export const toastSuccess = (mensaje) => {
    toast.success(mensaje, {
        style: {
            borderRadius: '10px',
            background: '#222',
            color: '#fff',
        },
        iconTheme: {
            primary: '#d4af37',
            secondary: '#222',
        },
    });
};

export const toastError = (mensaje) => {
    toast.error(mensaje, {
        style: {
            borderRadius: '10px',
            background: '#8b0000',
            color: '#fff',
        }
    });
};