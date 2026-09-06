import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
  return ( 
    <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
      <div className='header-right'>
        <img style={{ width:'35%' }} src='kite-logo.svg' alt="logo" />
      </div> 

      <div className='app-nav'>
        <Link className='nav-1' to="/">Dashboard</Link>
        <Link className='nav-1' to="/orders">Orders</Link>
        <Link className='nav-1' to="/holdings">Holdings</Link>
        <Link className='nav-1' to="/positions">Positions</Link>
        <Link className='nav-1' to="/bids">Bids</Link>
        <Link className='nav-1' to="/funds">Funds</Link>
      </div>
    
        <div className='' style={{display:'flex',width:'9%',height:'100%', justifyContent:'center', margin:'4rem',alignItems:'center'}}>
                  <img src='bell-regular-full.svg' style={{ width:'15%'}}></img>
              
        <img src='supportportal.png' style={{borderRadius:'100%', width:'20%',margin:'1rem'}}></img>
        <span>DEMOUSER</span>
      </div>
    </div>
  );
}

export default Menu;