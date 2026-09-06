import React from 'react';

function WatchList() {
    return ( 
        <div className='' style={{display:'flex', justifyContent:'center',alignItems:'center', width:'27.2%', height:'',margin:'0 2.5rem',border:'0.1px solid #eeeaea'}}>

         
        <img className='m-icon' src='magnifying-glass-solid.png' ></img>

          <input  placeholder='Search (infy bse, nifty fut, etc)
          ' style={{width:'100%', height:'53px',opacity:'60%',border:'none'}}/>
              <div className='' style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'15%',opacity:'50%'}}>
                <span>20/50</span>
             </div>

          
          <div>
            
          </div>



        </div>
     );
}

export default WatchList;