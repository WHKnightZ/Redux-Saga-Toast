import { useSelector } from 'react-redux';
import { removeToast } from '../utils';
import './Toast.css';
import Toast from './Toast';

const ToastContainer = () => {
  const toasts = useSelector((state) => state.toast);

  return (
    <div className="toast-container">
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

export default ToastContainer;
