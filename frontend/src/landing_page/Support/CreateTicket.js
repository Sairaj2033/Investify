import React from 'react';

function CraeteTicket() {
    return ( 
      <div className='container'>

       
        



            <div className='row'>
            <div className='col'>
             
             {/* Card 1 - Open by default */}
            <div className="border rounded-1 mb-3 bg-light overflow-hidden" style={{ borderColor: '#eee' }}>
                <div 
                    className="d-flex justify-content-between align-items-center p-3" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#box1"
                    style={{ cursor: 'pointer' }}
                >
                    <div className="d-flex align-items-center ms-2">
                        <i className="fa fa-plus-circle text-primary me-3 fs-5"></i>
                        <span className="fw-medium text-dark fs-6">Account Opening</span>
                    </div>
                    <i className="fa fa-chevron-down text-muted fs-6 me-2"></i>
                </div>

                <div className="collapse show bg-white border-top p-4" id="box1">
                    <ul className="mb-0 ps-3" style={{ color: '#387ed1' }}>
                        <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#387ed1' }}>Resident individual</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#387ed1' }}>Minor</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#387ed1' }}>Non Resident Indian (NRI)</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#387ed1' }}>Company, Partnership, HUF and LLP</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#387ed1' }}>Glossary</a></li>
                    </ul>
                </div>
            </div>


        </div> 

        
                
                
                
                 
                <div className='col'></div>
                <div className='col'></div>

            </div>
            </div>

       

     
     );
}

export default CraeteTicket;