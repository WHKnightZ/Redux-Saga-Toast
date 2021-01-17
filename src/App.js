import { useDispatch } from 'react-redux';
import './App.css';
import { createToastSuccess, createToastError, createToastWarning, createToastInfo } from './utils';
import ToastContainer from './components/ToastContainer';
import { login } from './stores/auth/actions';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <ToastContainer />
      <button onClick={() => createToastSuccess('This is a Success.')}>Success</button>
      <button onClick={() => createToastError('This is a warning in 6 seconds.', 6000)}>
        Error
      </button>
      <button onClick={() => createToastWarning('Hello, this is a warning.')}>Warning</button>
      <button onClick={() => createToastInfo('Hello, info permanent.', 0)}>Info</button>
      <button
        onClick={() =>
          dispatch(login({ email: 'nguyenkhanhsl1997@gmail.com', password: '1234567aA@' }))
        }>
        Login
      </button>
    </div>
  );
}

export default App;
