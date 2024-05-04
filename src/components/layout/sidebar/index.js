import React from 'react';

const SideBar = ({ children }) => {
  return (
    <div className='navbar_container '>
      <div className='navbar_container_left'></div>
      <div className='navbar_container_right'>
        <div className='navbar_container_right_topBar'>
          <span></span>
          <div className='mode'>Mode</div>
        </div>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
