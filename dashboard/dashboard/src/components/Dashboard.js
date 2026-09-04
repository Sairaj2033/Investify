import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Watchlist from './WatchList';
import Funds from './Funds';
import Orders from './Orders';
import Positions from './Positions';
import Summary from './Summary';
import Apps from './Apps';
import Holdings from './Holdings';
import WatchList from './WatchList';


function Dashboard() {
    return ( 
       <div className='dashboard-container'>
        <Watchlist/>
          <div className='content'>
          <Routes>
            <Route exact path="/" element={<Summary/>} />
            <Route exact path="/orders" element={<Orders/>} />
            <Route exact path="/holdings" element={<Holdings/>} />
            <Route exact path="/postions" element={<Positions/>} />
            <Route exact path="/funds" element={<Funds/>} />
            <Route exact path="/apps" element={<Apps/>} />           
          </Routes>
          </div>    
       </div>
     );
}

export default Dashboard;