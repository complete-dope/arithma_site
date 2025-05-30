import { Outlet } from 'react-router-dom';
import React from 'react';

import TopNavbar from './TopNavbar';

const Layout: React.FC = () => {
  return (
    <div>
      <TopNavbar />
      <main>
        <Outlet /> {/* This is where the routed components will render */}
      </main>
    </div>
  );
};

export default Layout;