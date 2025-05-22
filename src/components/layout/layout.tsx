import { Outlet } from 'react-router-dom';
import React from 'react';

import Navbar from './navbar';

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This is where the routed components will render */}
      </main>
    </div>
  );
};

export default Layout;