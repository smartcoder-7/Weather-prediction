import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Header } from './components';
import Routes from './screens';

const MainRoutes = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="app-content">
        <Routes />
      </div>
    </>
  );
};

export default MainRoutes;
