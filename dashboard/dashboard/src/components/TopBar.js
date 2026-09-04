import React from 'react';
import Menu from './Menu';


function TopBar() {
  return (
    <div className="topbar-container">
      <div className="header-left">
        <div className="instrument">
          <span className="title">NIFTY 50</span>
          <span className="price">18181.75</span>
          <span className="change">-104.75 (-0.57%)</span>
        </div>
        <div className="instrument">
          <span className="title">SENSEX</span>
          <span className="price">61560.64</span>
          <span className="change">-371.83 (-0.60%)</span>
        </div>
      </div>

      
        <Menu/>
      </div>
   
  );
}

export default TopBar;