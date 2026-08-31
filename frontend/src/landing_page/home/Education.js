
import React from 'react';


function Education() {
    return ( 
        
        <div className='container mt-5' >
         <div className='row'>
                   <div className='col'>
                    <img src='media/images/education.svg' style={{width:'90%'}} ></img>
                   </div>
                   <div className='col'>
                    <h2  className='mb-3'>Free and open market edcation</h2>
                    <div className='row'>
                     <p className='mt-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                     <a className='mb-5' style={{textDecoration:'none'}} href=''>Varsity <i class="fa fa-long-arrow-right" aria-hidden="false"></i></a>
                     
                    </div>
                    <div className='row'>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                    <a className='mb-5' style={{textDecoration:'none'}} href=''>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="false"></i></a>

                    </div>
                   </div>
         </div>
        </div>
        
     );
}

export default Education;