import React from 'react';
import './App.scss';
import Navigate from './components/routing/Navigate';
import { ToastContainer, Zoom } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


// import { useDispatch, useSelector } from 'react-redux';
// import { addField } from './redux/slices/fieldSlice';
// import { useSelector } from 'react-redux';


function App() {

  // const field = useSelector((state: any) => state.field.field)
  // const dispatch = useDispatch()

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
        transition={Zoom}
      />
      <Navigate />
    </div>
  );
}

export default App;
