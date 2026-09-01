import React from 'react';

function Hero() {
    return ( 
   <div className='container' >
    
    <div className='text-center m-5' style={{padding:'4rem'}}>
        <h2>Charges</h2>
        <h4 className='mt-3 text-muted'>List of all charges and taxes</h4>
    </div>


{/* images */}
  <div className='container'
  style={{borderTop:'1px solid black', opacity:'10%'}}></div>
    <div className='row ms-5' style={{padding:'1rem', fontSize:'1.4', lineHeight:'2'}} >
     
     <div className='col text-center '>
        <img style={{width:'70%',margin:'1rem' ,padding:''}} src='media/images/pricingEquity.svg'></img>
        <h2 className='m-4' >Free equity delivery</h2>
        <p  style={{fontSize:'17.5px',padding:'1rem'}} className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
     </div>
     
     <div className='col text-center  '>
        <img style={{width:'70%',margin:'1rem' ,paddingBottom:'1rem'}} src='media/images/intradayTrades.svg'></img>
         <h2 className='m-3' >Intraday and F&O trades</h2>
        <p className='text-muted' style={{fontSize:'17.5px',padding:'1rem'}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
     </div>

     <div className='col text-center mb-4'>
        <img style={{width:'70%',margin:'1rem' ,padding:''}} src='media/images/pricingEquity.svg'></img>
         <h2 className='m-4'>Free direct MF
</h2>
        <p  className='text-muted'  style={{fontSize:'17.5px',padding:'1rem'}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges</p>
  
     </div>

   </div>
   </div>
     );
}

export default Hero;