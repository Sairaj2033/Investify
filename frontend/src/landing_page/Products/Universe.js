
import React from 'react';

function Universe() {
    return ( 
       <div className=' container' style={{marginTop:'5rem'}}>

        <div className='row   mt-5 text-center' >
             <h4 style={{marginBottom:'6rem'}} className=''>Want to know more about our technology stack? Check out the <a style={{textDecoration:'none'}} href=''>Zerodha.tech</a> blog.</h4>
            
            <h2 style={{padding:'2rem',color:'#3b3b3b'}}>The Zerodha Universe</h2>
    <h5 className='text-muted' style={{fontSize:'1.8'}}>
        Extend your trading and investment experience even further with our partner platforms


    </h5>

      </div>

    <div className='row text-center' style={{display:'flex', justifyContent:'center',padding:'1rem', margin:'0 3rem 0 3rem'}}>

        <div className='col-4'>
        <img style={{width:'53%', margin:'1rem'}} src='media/images/zerodhafundhouse.png'></img>
        <p className='ps-5 text-muted'> Extend your trading and investment experience even further with our partner platforms</p>
        </div>

          <div className='col-4'>
        <img style={{width:'65%', margin:'1rem'}} src='media/images/sensibull-logo.svg'></img>
        <p className='ps-5 text-muted'> Extend your trading and investment experience even further with our partner platforms</p>
        </div>

          <div className='col-4'>
        <img style={{width:'40%', margin:'1rem'}} src='media/images/tijori.svg'></img>
        <p className='ps-5 text-muted'> Extend your trading and investment experience even further with our partner platforms</p>
        </div>
</div>






    <div className='row text-center' style={{display:'flex', justifyContent:'center',padding:'1rem', margin:'0 3rem 0 3rem'}}>
          <div className='col-4'>
        <img style={{width:'40%', margin:'1rem'}} src='media/images/streak-logo.png'></img>
        <p className='ps-5 text-muted'> Extend your trading and investment experience even further with our partner platforms</p>
        </div>

          <div className='col-4'>
        <img style={{width:'53%', margin:'1rem'}} src='media/images/smallcaseLogo.png'></img>
        <p className='ps-5 text-muted'> Extend your trading and investment experience even further with our partner platforms</p>
        </div>

           <div className='col-4'>
        <img style={{width:'40%', margin:'1rem'}} src='media/images/ditto-logo.png'></img>
        <p className='ps-5 text-muted '> Extend your trading and investment experience even further with our partner platforms</p>
        </div>
  <br>
  </br>
 <button className='p-2 m-5 btn btn-primary fs-5 mb-5' style={{width:'18%', margin:'0 auto'}}>Sign Up for Free</button>

    </div>
       


        </div>
        

      
     );
}

export default Universe;