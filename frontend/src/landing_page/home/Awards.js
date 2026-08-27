import React from 'react';


function Awards() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>

       <div className='col-6 p-5'>
        <img src='media/images/largestBroker.svg'></img>
       </div>
       <div className='col-6 p-5 mt-5'>
        <h1>Largest stock broker in India</h1>
        <p className='mb-5' >2+ million zerodha clients to over 15% of all retail order volumes in India daily by trading and investing in:
        </p>
         <div className='row'>
           <div className='col-6'>
             <ul>
          <li>
            <p>Future and Options</p>
          </li>
          <li>
            <p>Commodity derivatives</p>
          </li>
          <li>
            <p>Currency Derevatives</p>
          </li>
        </ul>
           </div>

           <div className='col-6'>
             <ul>
          <li>
            <p>Stock and Options</p>
          </li>
          <li>
            <p>Direct mutal funds</p>
          </li>
          <li>
            <p>Bonds and Govt. Securities</p>
          </li>
        </ul>
           </div>
         </div>
         <img src='media/images/pressLogos.png' style={{width:'95%'}} ></img>
       </div>

        </div>
       </div>
     );
}

export default Awards;