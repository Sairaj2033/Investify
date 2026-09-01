import React from 'react';

function RightSection({imageURL,productName,productDescription, learnMore}) {
    return ( 
          <div className=' container'>

        <div className='row'>
            

        <div className='col-5 mt-5' style={{padding:'4rem'}}>
            <h1 style={{marginTop:'7rem'}}>{productName}</h1>
            <h5 style={{lineHeight:'1.7'}}>{productDescription}</h5>
           <div className='m-4'>
            <a href={learnMore}>Learn More</a>
           </div>
           
            
        </div>
        <div className='col-7 '>
        <img style={{width:'60%', margin:'4rem'}} src={imageURL}></img>
        </div>
        </div>
        

       </div>
     );
}

export default RightSection;