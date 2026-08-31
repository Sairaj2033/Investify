import React from 'react';
import { href, Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5' >
        <div className='row text-center'> 
                      <h1 className='mt-5'>
              404 Not Found
            </h1>
            <p>
                Sorry the page you are looking for does not exist.
            </p>
           <a href='/'>
           <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:'20%', margin:'0 auto'}}>Go to HomePage</button>
           </a>
             

            </div> 


       </div>
     );
}

export default NotFound;