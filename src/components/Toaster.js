import { useSelector } from 'react-redux';
import { removeToast } from '../utils';
import './Toast.css';
import Toast from './Toast';

const Toaster = () => {
  const toasts = useSelector((state) => state.toasts);

  return (
    <div className="toaster">
      {toasts.map((toast) => (
        <Toast
          key={toast.key}
          type={toast.type}
          message={toast.message}
          duration={toast.duration}
          onRemove={() => removeToast(toast.key)}
        />
      ))}
    </div>
  );
};

export default Toaster;
