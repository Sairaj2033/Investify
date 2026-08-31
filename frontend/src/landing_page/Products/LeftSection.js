 import React from 'react';
 
 function LeftSection({imageURL,productName,productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
       <div className=' container'>

        <div className='row'>
            <div className='col-7'>
        <img style={{width:'80%', margin:'4rem'}} src={imageURL}></img>
        </div>

        <div className='col-5 mt-5' style={{padding:'4rem'}}>
            <h1>{productName}</h1>
            <h5 style={{lineHeight:'1.7'}}>{productDescription}</h5>
           <div className='m-4'>
             <a style={{marginRight:'5rem'}} href={tryDemo}>Try Demo</a>
            <a href={learnMore}>Learn More</a>
           </div>
            
            <div>
                <a href={googlePlay}> <img src='media/images/googlePlayBadge.svg'/></a>
            <a style={{marginLeft:'1rem'}} href={appStore}><img src='media/images/appstoreBadge.svg'></img></a>
            </div>
            
        </div>
        </div>
         

       </div>
     );
 }
 
 export default LeftSection;