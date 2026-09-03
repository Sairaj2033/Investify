import React from 'react';

function CraeteTicket() {
    return ( 
      <div className='container ps-4 mt-3 '>

      
        



            <div className='row'>
            <div className='col-8'>

             {/*1  Understanding this card */}
             <div className='border rounded-1 mb-4  overflow-hidden' style={{borderColor:'#eee',width:'55rem'}}>
               <div 
               className='d-flex justify-content-between 
               align-items-center p-3'
               data-bs-toggle="collapse"
               data-bs-target="#box7"
               style={{cursor:'pointer'}}
                >
                <div className='d-flex align-items-center ms-2'>
                   <i className='fa fa-plus-circle text-primary me-4 fs-5'></i>
                   <span className='fw-medium text-dark fs-5'>Account Opening</span>
                </div>
                <i className='fa fa-chevron-down text-muted fs-6 me-2' ></i>
               </div>
              <div className='collapse show bg-white border-top p-4' id='box7'>
                <ul className='mb-0 ps-3' style={{color:'#387ed1'}}>

                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Resident individual</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Minor </a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Non Resident Indian (NRI)</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Company, Partnership, HUF and LLP</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>
                     Glossary</a></li>
                    
                </ul>
              </div>



             </div>










 {/* 2 Understanding this card */}
             <div className='border rounded-1 mb-4  overflow-hidden' style={{borderColor:'#eee',width:'55rem'}}>
               <div 
               className='d-flex justify-content-between 
               align-items-center p-3'
               data-bs-toggle="collapse"
               data-bs-target="#box2"
               style={{cursor:'pointer'}}
                >
                <div className='d-flex align-items-center ms-2'>
                   <i className='fa fa-plus-circle text-primary me-3 fs-5'></i>
                   <span className='fw-medium text-dark fs-5'>Your Zerodha Account</span>
                </div>
                <i className='fa fa-chevron-down text-muted fs-6 me-2' ></i>
               </div>
              <div className='collapse show bg-white border-top p-4' id='box2'>
                <ul className='mb-0 ps-3' style={{color:'#387ed1'}}>

                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Your Profile</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Account modification</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Nomination</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>
                     Transfer and conversion of securities</a></li>
                    
                </ul>
              </div>



             </div>
              {/* Understanding this card */}
             <div className='border rounded-1 mb-4  overflow-hidden' style={{borderColor:'#eee',width:'55rem'}}>
               <div 
               className='d-flex justify-content-between 
               align-items-center p-3'
               data-bs-toggle="collapse"
               data-bs-target="#box3"
               style={{cursor:'pointer'}}
                >
                <div className='d-flex align-items-center ms-2'>
                   <i className='fa fa-plus-circle text-primary me-3 fs-5'></i>
                   <span className='fw-medium text-dark fs-5'>Kite </span>
                </div>
                <i className='fa fa-chevron-down text-muted fs-6 me-2' ></i>
               </div>
              <div className='collapse show bg-white border-top p-4' id='box3'>
                <ul className='mb-0 ps-3' style={{color:'#387ed1'}}>

                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>IPO</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Trading FAQs</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Margin Trading Facility (MTF) and Margins
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Charts and orders
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>
                    Alerts and Nudges
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>
                   General
</a></li>

                    
                </ul>
              </div>



             </div>
              {/* Understanding this card */}
             <div className='border rounded-1 mb-4  overflow-hidden' style={{borderColor:'#eee',width:'55rem'}}>
               <div 
               className='d-flex justify-content-between 
               align-items-center p-3'
               data-bs-toggle="collapse"
               data-bs-target="#box4"
               style={{cursor:'pointer'}}
                >
                <div className='d-flex align-items-center ms-2'>
                   <i className='fa fa-plus-circle text-primary me-3 fs-5'></i>
                   <span className='fw-medium text-dark fs-5'>Funds</span>
                </div>
                <i className='fa fa-chevron-down text-muted fs-6 me-2' ></i>
               </div>
              <div className='collapse show bg-white border-top p-4' id='box4'>
                <ul className='mb-0 ps-3' style={{color:'#387ed1'}}>

                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Add money
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}> Withdraw money
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Add bank accounts
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>eMandates</a></li>
                    
                    
                </ul>
              </div>



             </div>
              {/* Understanding this card */}
             <div className='border rounded-1 mb-4  overflow-hidden' style={{borderColor:'#eee',width:'55rem'}}>
               <div 
               className='d-flex justify-content-between 
               align-items-center p-3'
               data-bs-toggle="collapse"
               data-bs-target="#box5"
               style={{cursor:'pointer'}}
                >
                <div className='d-flex align-items-center ms-2'>
                   <i className='fa fa-plus-circle text-primary me-3 fs-5'></i>
                   <span className='fw-medium text-dark fs-5'>Console</span>
                </div>
                <i className='fa fa-chevron-down text-muted fs-6 me-2' ></i>
               </div>
              <div className='collapse show bg-white border-top p-4' id='box5'>
                <ul className='mb-0 ps-3' style={{color:'#387ed1'}}>

                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Portfolio</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Corporate actions
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Funds statement

</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Reports</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>
                     Profile</a></li>

                     <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>
                     Segments</a></li>
                    
                
                </ul>
              </div>



             </div>
              {/* Understanding this card */}
             <div className='border rounded-1 mb-4  overflow-hidden' style={{borderColor:'#eee',width:'55rem'}}>
               <div 
               className='d-flex justify-content-between 
               align-items-center p-3'
               data-bs-toggle="collapse"
               data-bs-target="#box6"
               style={{cursor:'pointer'}}
                >
                <div className='d-flex align-items-center ms-2'>
                   <i className='fa fa-plus-circle text-primary me-3 fs-5'></i>
                   <span className='fw-medium text-dark fs-5'>Coin</span>
                </div>
                <i className='fa fa-chevron-down text-muted fs-6 me-2' ></i>
               </div>
              <div className='collapse show bg-white border-top p-4' id='box6'>
                <ul className='mb-0 ps-3' style={{color:'#387ed1'}}>

                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Mutual funds
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>National Pension Scheme (NPS)
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Fixed Deposit (FD)
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>Features on Coin
</a></li>
                    <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>
                     Payments and Orders
</a></li>            
                     <li className='mb-3'><a href='#' className='text-decoration-none' style={{color:'387ed1'}}>
General
</a></li>
                    
                </ul>
              </div>



             </div>
        </div> 

        
                
                
                
                 
                <div className='col-3 ms-5 ' >
                  
                    <div className=''>
                        <ul className='' style={{backgroundColor:'#fff7ea',borderLeft:'solid 7px #ff9035',padding:'1.2rem 0rem 1.2rem 2rem',fontSize:'18px',marginRight:'-70px'}}>
                            <a  href=''><li className='ms-3 mb-2'>Rights Entitlements listing in September 2026</li></a> 
                            <a  href=''><li className='ms-3 mb-2'>Surveillance measure on scrips - September 2026</li></a> 
                        </ul>
                    </div>

                    <div className='rounded-1 border ' overflow-hidden style={{ borderColor: '#eee',width:'124%'}} >
                         <table className='table table-borderless mb-0 ' style={{}}>
                              <thead className=''>
                                <tr className="bg-light">
                                  <th className=" fs-5 p-3 fw-medium text-dark " style={{fontSize:'1rem',backgroundColor:'#f4f4f4'}} >Quick links</th>
                                </tr>
                              </thead>
                              <tbody className='' border={{border:'1px solid black',width:'124%'}} >
                                <tr border={{border:'1px solid black',width:'124%'}}>
                               <tr className="border-bottom " >
        <td className="p-3" >
          <a href="#" className="text-decoration-none  " style={{ color: '#387ed1', fontSize: '1.2rem',  }}>
            1. Track account opening
          </a>
        </td>
      </tr>
      <tr className="border-bottom">
        <td className="p-3">
          <a href="#" className="text-decoration-none  " style={{ color: '#387ed1', fontSize: '1.2rem',  }}>
            2. Track segment activation
          </a>
        </td>
      </tr>
      <tr className="border-bottom">
        <td className="p-3">
          <a href="#" className="text-decoration-none" style={{ color: '#387ed1', fontSize: '1.2rem',  }}>
            3. Intraday margins
          </a>
        </td>
      </tr>
      <tr className="border-bottom">
        <td className="p-3">
          <a href="#" className="text-decoration-none" style={{ color: '#387ed1', fontSize: '1.2rem',  }}>
            4. Kite user manual
          </a>
        </td>
      </tr>
      <tr>
        <td className="p-3">
          <a href="#" className="text-decoration-none" style={{ color: '#387ed1', fontSize: '1.2rem',  }}>
            5. Learn how to create a ticket
          </a>
        </td>
      </tr>
                                 
                                </tr>
                              </tbody>
                         </table>
                    </div>
                </div>

                </div>
            
            </div>

       

     
     );
}

export default CraeteTicket;