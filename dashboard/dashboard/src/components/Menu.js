import React from 'react';

function Menu() {
  return ( 
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className='header-right'>
        <img style={{ width: '14%', padding: '0 10px', margin: '0 10px' }} src='kite-logo.svg' alt="logo" />
      </div> 

      <div className='app-nav'>
        <a className='nav-1' href='' style={{ padding: '16px 22.5px', textDecoration: 'none', color: '#313131', fontSize: '16px' }}>Dashboard</a>
        <a className='nav-1' href='' style={{ padding: '16px 22.5px', textDecoration: 'none', color: '#313131', fontSize: '16px' }}>Orders</a>
        <a className='nav-1' href='' style={{ padding: '16px 22.5px', textDecoration: 'none', color: '#313131', fontSize: '16px' }}>Holdings</a>
        <a className='nav-1' href='' style={{ padding: '16px 22.5px', textDecoration: 'none', color: '#313131', fontSize: '16px' }}>Positions</a>
        <a className='nav-1' href='' style={{ padding: '16px 22.5px', textDecoration: 'none', color: '#313131', fontSize: '16px' }}>Bids</a>
        <a className='nav-1' href='' style={{ padding: '16px 22.5px', textDecoration: 'none', color: '#313131', fontSize: '16px' }}>Funds</a>
      </div>
      <div>
        <img src='bell-regular-full.svg' style={{ height:'100%',position:'relative'}}></img>
               </div>
               <div>
        <img src='supportportal.png' style={{borderRadius:'100%', width:'45%'}}></img>
      </div>
    </div>
  );
}

export default Menu;