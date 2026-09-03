import React from 'react';

function Hero() {
    return ( 
      <div className='  bg-light' style={{padding:'40px 230px'}}  >

<div className="d-flex justify-content-between align-items-center mb-4">
    <h1 className="fw-normal text-dark fs-2 mb-0">Support Portal</h1>
    <button 
        className="btn text-white px-4 py-2" 
        style={{ backgroundColor: '#387ed1', borderRadius: '3px', whiteSpace: 'nowrap' }}
    >
        My tickets
    </button>
</div>

<div className="position-relative w-100 bg-white rounded-1 border" style={{ borderColor: '#e0e0e0' }}>
    <i 
        className="fa fa-search position-absolute text-muted fs-5" 
        style={{ left: '20px', top: '50%', transform: 'translateY(-50%)' }}
    ></i>
    <input 
        type="text" 
        className="form-control border-0 bg-transparent py-4 fs-5" 
        style={{ paddingLeft: '55px', boxShadow: 'none' }}
        placeholder="Eg: How do I open my account, How do I activate F&O..." 
    />
</div>


      </div>



     );
}

export default Hero;
