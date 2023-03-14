/** @format */

import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
};

export default MainLayout;
