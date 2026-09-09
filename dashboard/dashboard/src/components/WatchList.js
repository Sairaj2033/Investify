import React, {useState} from 'react';
import {Tooltip, Grow } from '@mui/material';

import {watchlist} from '../data/data';


function WatchList() {
    return ( 
<>
         <div style={{width:'100%',display:'flex', alignContent:'center', border:'1px dotted black '}}>
        <img className='m-icon' src='magnifying-glass-solid.png' ></img>

          <input  placeholder='Search (infy bse, nifty fut, etc)
          ' style={{width:'100%', height:'53px',opacity:'60%',border:'none'}}/>
              <div className='' style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'15%',opacity:'50%',border:'none'}}>
                <span> {watchlist.length}/50</span>
             </div>
     </div>


  {/* LIST */}
      <div style={{marginTop:'1rem',border:'3px dotted green'}}>
            <ul className='list'>
               {watchlist.map((stock, index) =>{
                  <WatchListItem stock={stock} key={index} />
               }
               
               )}

            </ul>
           </div>
        </>
     );
}

export default WatchList;

const WatchListItem = ({stock}) => {
const [showWatchListActions,setshowWatchListActions]= useState(false);

const handleMouseEnter = (e)=>  {
   showWatchListActions(true)
} 
const handleMouseLeave = (e)=>  {
   showWatchListActions(false)
} 

}