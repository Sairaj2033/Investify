import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Watchlist from './WatchList';
import Funds from './Funds';
import Orders from './Orders';
import Positions from './Positions';
import Summary from './Summary';
import Apps from './Apps';
import Holdings from './Holdings';
import Bids from './Bids';

function Dashboard() {
  return ( 
    <div className='dashboard-container' style={{ display: 'flex', width: '100%',border:'1px dotted blue' }}>
      {/* LEFT PANEL */}
      <div style={{ width: '29.2%', borderRight: '1px solid #eeeaea', border:'1px dotted red',paddingLeft:'2rem'}}>
        <Watchlist />
      </div> 
      
      {/* RIGHT PANEL */}
      <div className='content' style={{ width: '70.8%', padding: '1.5rem' }}>
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/bids" element={<Bids />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />           
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;