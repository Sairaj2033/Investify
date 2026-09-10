import React, {useState} from 'react';
import {Tooltip, Grow } from '@mui/material';
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';


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
      <div style={{marginTop:'1rem',border:'2px dotted green'}}>
            <ul className='list'>
               {watchlist.map((stock, index) =>{
                  return(
                  <WatchListItem stock={stock} key={index} />)
               }
               
               )}

            </ul>
           </div>
        </>
     );
}

export default WatchList;

const WatchListItem = ({stock}) => {
const [showWatchListActions,setShowWatchListActions]= useState(false);

const handleMouseEnter = (e)=>  {
   setShowWatchListActions(true)
} 
const handleMouseLeave = (e)=>  {
   setShowWatchListActions(false)
} ;

return (
   <li onMouseEnter={handleMouseEnter}            onMouseLeave={handleMouseLeave}>
   <div className='item'>
     <p className={stock.isDown ? "down" : "up"}> {stock.name}</p>
    
     <div className='itemInfo'>
     <span className='percent'> {stock.percent} </span>
     {stock.isDown ? (
      <KeyboardArrowDown className="down" />
     ) : <KeyboardArrowUp className="down"/> }
     
     <span className='price'> {stock.price} </span>


     </div>

   </div>
   {showWatchListActions && <WatchListActions uid={stock.name}/>}
</li>
)


}

const WatchListActions = ({uid}) => {
   return (
      <span className='actions'>
        <span>

         <Tooltip 
         title="Buy (B)"
         placement='top' 
         arrow
         TransitionComponent = {Grow}
         >
         <button className='buy'>Buy</button>
         </Tooltip>

           <Tooltip 
         title="Sell (S)"
         placement='top' 
         arrow
         TransitionComponent = {Grow}
         >
         <button className='sell'>Sell</button>
         </Tooltip>

         <Tooltip 
         title="Analytics (A)"
         placement='top' 
         arrow
         TransitionComponent = {Grow}
         >
         <button className='action'> 
             <BarChartOutlined className='icon'/>
         </button>

         </Tooltip>

         <Tooltip 
         title="More (M)"
         placement='top' 
         arrow
         TransitionComponent = {Grow}
         >
         <button className='action'> 
             <MoreHoriz className='icon'/>
         </button>
         </Tooltip>

         

        </span>
      </span>
   )
}