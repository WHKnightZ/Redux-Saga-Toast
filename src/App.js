import { useDispatch } from 'react-redux';
import './App.css';
import { createToastSuccess, createToastError, createToastWarning, createToastInfo } from './utils';
import Toaster from './components/Toaster';
import { login } from './stores/auth/actions';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Toaster />
      <button onClick={() => createToastSuccess('This is a Success.')}>Success</button>
      <button onClick={() => createToastError('This is a error in 5 seconds.', 5000)}>
        Error
      </button>
      <button onClick={() => createToastWarning('Hello, this is a warning.')}>Warning</button>
      <button onClick={() => createToastInfo('Hello, info perma. Hello, info perma. Hello, info perma. Hello, info perma. Hello, info perma. Hello, info perma.', 0)}>Info</button>
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
