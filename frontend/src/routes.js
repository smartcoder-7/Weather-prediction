import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Routes from './screens';

const MainRoutes = () => {
  return (
    <>
      <ToastContainer />
      <div className="app-content">
        <Routes />
      </div>
    </>
  );
};

export default MainRoutes;
