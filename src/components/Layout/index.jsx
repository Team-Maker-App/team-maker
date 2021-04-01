import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';

const Layout = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateRows: '80px 1fr',
      height: '100vh',
    }}
    className="background"
  >
    <div className="grid place-items-center h-full w-full  bg-primaryDark shadow-xl">
      <Logo width={200} dark />
    </div>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
