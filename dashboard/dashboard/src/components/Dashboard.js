import React from 'react';
import {Routes, Route} from 'react-router-dom'

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
       <div className='dashboard-container'  >
        
         <Watchlist/> {/*  LEFT */}
         
          <div className='content'> {/*  RIGHT */}
          <Routes>
            <Route exact path="/" element={<Summary/>} />
            <Route exact path="/orders" element={<Orders/>} />
            <Route exact path="/holdings" element={<Holdings/>} />
            <Route exact path="/positions" element={<Positions/>} />
            <Route exact path="/bids" element={<Bids/>} />
            <Route exact path="/funds" element={<Funds/>} />
            <Route exact path="/apps" element={<Apps/>} />           
          </Routes>
          </div>    
       </div>
     );
}

export default Dashboard;