
import React from 'react';

function Team() {
    return ( 
     <div className='row ms-5' style={{padding:' 0 10rem' }}>
        <div className='col'>
            <p>
                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
            </p>
            <p>
                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
            </p>
            <p>
                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
            </p>
            <p>
                Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
            </p>
        </div>
        <div className='col'>
            <p>
                 In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.            </p>
            <p>
               <a href='' style={{textDecoration:'none'}} >Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets            </p>
            <p>
                And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='' style={{textDecoration:'none'}}>blog</a> or see what the media is <a href='' style={{textDecoration:'none'}}>saying about us</a>  or learn more about our business and product <a href='' style={{textDecoration:'none'}} >philosophies.</a></p>
        </div>

{/* People */}

<div className='m-4' style={{display:'flex',justifyContent:'center'}}>
    <h3 className=''>People</h3>
    </div>
    <div className='row p-5'>
        <div className='col text-center'>
            <img  style={{width:'60%',borderRadius:'100%'}} src='media/images/nithinKamath.jpg'></img>
            
        <div className='col text-center' >
            <h3 className=' m-3'>Nithin Kamath</h3>
            
            <h5  className='  text-medium m-3  text-muted'>Founder, CEO</h5>
        </div>
            

        </div>
        <div className='col mt-4 pr-5  ' style={{fontSize:'1.5rem', lineHeight:'1.6'}}>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href='' style={{textDecoration:'none'}} >Homepage </a> / <a href='' style={{textDecoration:'none'}} >TradingQnA </a> / <a href='' style={{textDecoration:'none'}} >Twitter

</a>

</p>
        </div>

    </div>



     <div className='row m-5' >

        <div className='col text-center'>
      <img style={{margin:'4rem', width:'60%',borderRadius:'100%'}} src='media/images/Nikhil.jpg'></img>
      <div className='col text-center' >
            <h3 className=' m-3'>Dr. Kailash Nadh</h3>
            
            <h5  className='  text-medium m-3  text-muted'>CTO</h5>
        </div>
       </div>

        <div className='col text-center'>
      <img style={{margin:'4rem', width:'60%',borderRadius:'100%'}} src='media/images/Kailash.jpg'></img>
      <div className='col text-center' >
            <h3 className=' m-3'>Dr. Kailash Nadh</h3>
            
            <h5  className='  text-medium m-3  text-muted'>CTO</h5>
        </div>
       </div>

 <div className='col text-center'>
      <img style={{margin:'4rem', width:'60%',borderRadius:'100%'}} src='media/images/Venu.jpg'></img>
      <div className='col text-center' >
            <h3 className=' m-3'>Venu Madhav</h3>
            
            <h5  className='  text-medium m-3  text-muted'>COO</h5>
        </div>
       </div>


       

  </div>


        <div className='row m-5'>

            <div className='col text-center'>
      <img style={{margin:'4rem', width:'60%',borderRadius:'100%'}} src='media/images/Seema.jpg'></img>
      <div className='col text-center' >
            <h3 className=' m-3'>Dr. Kailash Nadh</h3>
            
            <h5  className='  text-medium m-3  text-muted'>CTO</h5>
        </div>
       </div>

        <div className='col text-center'>
      <img style={{margin:'4rem', width:'60%',borderRadius:'100%'}} src='media/images/karthik.jpg'></img>
      <div className='col text-center' >
            <h3 className=' m-3'>Dr. Kailash Nadh</h3>
            
            <h5  className='  text-medium m-3  text-muted'>CTO</h5>
        </div>
       </div>

 <div className='col text-center'>
      <img style={{margin:'4rem', width:'60%',borderRadius:'100%'}} src='media/images/Austin.jpg'></img>
      <div className='col text-center' >
            <h3 className=' m-3'>Venu Madhav</h3>
            
            <h5  className='  text-medium m-3  text-muted'>COO</h5>
        </div>
     
     </div>
     </div>

     </div>
     );
}

export default Team;