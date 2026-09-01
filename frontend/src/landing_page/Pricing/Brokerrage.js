import React from 'react';

function Brokerrage() {
    return ( 
       <div className='container'>
    

     {/* table */}

 <div className=" table-responsive mt-5">
                <table className="table table-borderless align-middle text-muted fs-6" style={{ border:'1px dotted grey',borderTop: "1px solid #eee" }}>
                    <thead>
                        <tr className=" text-muted border-bottom">

                            <th></th>
                            <th className="" style={{fontWeight:'400',color:'#3f3f3f'}}>Equity delivery</th>
                            <th className="" style={{fontWeight:'400',color:'#3f3f3f'}}>Equity intraday</th>
                            <th className="" style={{fontWeight:'400',color:'#3f3f3f'}}>F&O - Futures</th>
                            <th  className="" style={{fontWeight:'400',color:'#3f3f3f'
                            }}>F&O - Options</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="fw-medium text-muted">Brokerage</td>
                            <td className=" text-muted">Zero Brokerage</td>
                            <td  className=" text-muted">0.03% or Rs. 20/executed order whichever is lower</td>
                            <td  className=" text-muted">0.03% or Rs. 20/executed order whichever is lower</td>
                            <td  className=" text-muted">Flat Rs. 20 per executed order</td>
                        </tr>
                        <tr className="">
                            <td className=" fw-medium text-muted">STT/CTT</td>
                            <td  className=" text-muted">0.1% on buy & sell</td>
                            <td  className=" text-muted">0.025% on the sell side</td>
                            <td  className=" text-muted">0.05% on the sell side</td>
                            <td  className=" text-muted">
                                <ul className="list-unstyled mb-0">
                                    <li>• 0.15% of the intrinsic value on options that are bought and exercised</li>
                                    <li>• 0.15% on sell side (on premium)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="fw-medium text-muted">Transaction charges</td>
                            <td  className=" text-muted">
                                NSE: 0.00307%<br />
                                BSE: 0.00375%
                            </td>
                            <td  className=" text-muted">
                                NSE: 0.00307%<br />
                                BSE: 0.00375%
                            </td >
                            <td  className=" text-muted">
                                NSE: 0.00183%<br />
                                BSE: 0
                            </td>
                            <td  className=" text-muted">
                                NSE: 0.03553% (on premium)<br />
                                BSE: 0.0325% (on premium)
                            </td>
                        </tr>
                        <tr className="">
                            <td className="fw-medium text-muted">GST</td>
                            <td  className=" text-muted">18% on (brokerage + SEBI charges + transaction charges)</td >
                            <td className=" text-muted">18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td className=" text-muted">18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td className=" text-muted">18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr className="">
                            <td className="text-muted">SEBI charges</td>
                            <td className=" text-muted">₹10 / crore</td>
                            <td className=" text-muted">₹10 / crore</td>
                            <td  className=" text-muted">₹10 / crore</td>
                            <td  className=" text-muted">₹10 / crore</td>
                        </tr>
                        <tr className="">
                            <td className="fw-medium text-muted">Stamp charges</td>
                            <td  className=" text-muted">0.015% or ₹1500 / crore on buy side</td>
                            <td  className=" text-muted">0.003% or ₹300 / crore on buy side</td>
                            <td  className=" text-muted">0.002% or ₹200 / crore on buy side</td>
                            <td  className=" text-muted">0.003% or ₹300 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
    </div>

    <div className='text-center p-4'>
        <h5><a href='' style={{textDecoration:'none'}}>Calculate your costs upfront</a> using our brokerage calculator</h5>
    </div>

    <div className='mt-5'>
        <h3>Charges for account opening
</h3>
<table className="table table-borderless align-middle text-muted fs-6" style={{ border:'1px dotted grey',borderTop: "1px solid #eee" }}>
    <thead>
     <tr className=" text-muted border-bottom">

                            
                            <th className="" style={{fontWeight:'400',color:'#3f3f3f'}}>Type of account</th>
                            <th className="" style={{fontWeight:'400',color:'#3f3f3f'}}>Charges</th>
                            
                        </tr>
    </thead>
    <tbody>
        <tr className=" text-muted ">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>Individual account</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>	FREE</th>
                            
                        </tr>
                         <tr className=" text-muted ">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>Minor account</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>	FREE</th>
                            
                        </tr>
                        <tr className=" text-muted ">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>NRI account</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>₹ 500</th>
                            
                        </tr>
                         <tr className=" text-muted">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>HUF account</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>FREE (online) / ₹ 500 (offline)</th>
                            
                        </tr>
                         <tr className=" text-muted m-2 ">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>Partnership, LLP, and Corporate accounts (offline only)</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>	₹ 500</th>
                            
                        </tr>
    </tbody>
</table>
    </div>


       <div className='mt-5'>
        <h3>Demat AMC (Annual Maintenance Charge)</h3>
        
           <h5 style={{backgroundColor:'#f2f9ff',width:'19%'}} className='m-4 p-3 fs-6'>Free for first year*</h5>           
  <p style={{fontSize:'14px'}}>From second year onwards, for BSDA accounts:</p>
<table className="table table-borderless align-middle text-muted fs-6" style={{ border:'1px dotted grey',borderTop: "1px solid #eee" }}>
    <thead>
     <tr className=" text-muted border-bottom">

                            
                            <th className="" style={{fontWeight:'400',color:'#3f3f3f'}}>
Value of holdings</th>
                            <th className="" style={{fontWeight:'400',color:'#3f3f3f'}}>	AMC</th>
                            
                        </tr>
    </thead>
    <tbody>
        <tr className=" text-muted ">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>Up to ₹4 lakht</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>	FREE</th>
                            
                        </tr>
                         <tr className=" text-muted ">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>₹4 lakh – ₹10 lakh</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>	₹100 per year + 18% GST, charged quarterly</th>
                            
                        </tr>
                        <tr className=" text-muted ">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>Above ₹10 lakh</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>₹300 per year + 18% GST, charged quarterly</th>
                            
                        </tr>
                        
                        
    </tbody>
</table>

 <p style={{fontSize:'14px'}}>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
  <p style={{fontSize:'14px'}}>To learn more about BSDA, <a style={{textDecoration:'none'}} href=''>click here</a>. To learn more about AMC, <a style={{textDecoration:'none'}} href=''>click here</a>.</p>
   <p style={{fontSize:'14px'}}>*Resident individual accounts only.</p>
    </div>



{/* table3 */}

   <div className='mt-5'>
        <h3>Charges for optional value added services
</h3>
          
<table className="table table-borderless align-middle text-muted fs-6" style={{ border:'1px dotted grey',borderTop: "1px solid #eee" }}>
    <thead>
     <tr className=" text-muted border-bottom">

                            
                            <th className="" style={{fontWeight:'400',color:'#3f3f3f'}}>
Service</th>
                            <th className="" style={{fontWeight:'400',color:'#3f3f3f'}}>	Billing Frequency</th>

                             <th className="" style={{fontWeight:'400',color:'#3f3f3f'}}>	Charges</th>
                            
                            
                        </tr>
    </thead>
    <tbody>
        <tr className=" text-muted ">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>Tickertape</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>	Monthly / Quarterly / Annual</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>	Free: 0 | Pro: 249/699/2399</th>

                            
                        </tr>
                         <tr className=" text-muted ">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>Smallcase</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>	Per transaction</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>	Buy & Invest More: 100 | SIP: 10</th>

                            
                        </tr>
                        <tr className=" text-muted ">

                            
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>Kite Connect</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>Monthly</th>
                            <th className="p-2" style={{fontWeight:'400',color:'#3f3f3f'}}>Connect: 500 | Personal: Free</th>
                            
                        </tr>
                        
                        
    </tbody>
</table>

    </div>


{/* <Dscp */}
<div className='row'>
    <h3 className='' style={{marginTop:'6rem',marginBottom:'3rem'
    }}>Charges explained</h3>

    <div className='col'>
       <h3 className="fs-6 text-secondary mb-2">Securities/Commodities transaction tax</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.<br /><br />
    When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
  </p>

  <h3 className="fs-6 text-secondary mb-2">Transaction/Turnover Charges</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.<br /><br />
    BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. SS and ST groups have been merged into a new group X w.e.f 01.12.2017.<br /><br />
    BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.<br /><br />
    BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.<br /><br />
    BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
  </p>

  <h3 className="fs-6 text-secondary mb-2">Call & trade</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
  </p>

  <h3 className="fs-6 text-secondary mb-2">Stamp charges</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
  </p>

  <h3 className="fs-6 text-secondary mb-2">NRI brokerage charges</h3>
  <ul className="text-muted small ps-3" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity (whichever is lower).</li>
    <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
    <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
  </ul>

  <h3 className="fs-6 text-secondary mb-2">Account with debit balance</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
  </p>

  <h3 className="fs-6 text-secondary mb-2">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h3>
  <ul className="text-muted small ps-3" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
    <li>Options - ₹0.01 per crore + GST traded value (premium value).</li>
    <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
  </ul>

  <h3 className="fs-6 text-secondary mb-2">Margin Trading Facility (MTF)</h3>
  <ul className="text-muted small ps-3" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
    <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
    <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
  </ul>
    </div>


    <div className='col'>
        <h3 className="fs-6 text-secondary mb-2">GST</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
  </p>

  <h3 className="fs-6 text-secondary mb-2">SEBI Charges</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
  </p>

  <h3 className="fs-6 text-secondary mb-2">DP (Depository participant) charges</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.<br /><br />
    Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.<br /><br />
    Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
  </p>

  <h3 className="fs-6 text-secondary mb-2">Pledging charges</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    ₹30 + GST per pledge request per ISIN.
  </p>

  <h3 className="fs-6 text-secondary mb-2">AMC (Account maintenance charges)</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    Free for the first year on all new resident individual accounts.<br /><br />
    For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000.<br /><br />
    For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).
  </p>

  <h3 className="fs-6 text-secondary mb-2">Corporate action order charges</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
  </p>

  <h3 className="fs-6 text-secondary mb-2">Off-market transfer charges</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    ₹25 per transaction.
  </p>

  <h3 className="fs-6 text-secondary mb-2">Physical CMR request</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
  </p>

  <h3 className="fs-6 text-secondary mb-2">Payment gateway charges</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    ₹9 + GST (Not levied on transfers done via UPI)
  </p>

  <h3 className="fs-6 text-secondary mb-2">Delayed Payment Charges</h3>
  <p className="text-muted small" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.
  </p>

  <h3 className="fs-6 text-secondary mb-2">Trading using 3-in-1 account with block functionality</h3>
  <ul className="text-muted small ps-3" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
    <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
    <li>Intraday Brokerage: 0.05% per executed order.</li>
  </ul>
    </div>
</div>
<div>
  <h3 className="fs-6 mb-3 mt-3 text-secondary mb-2">Disclaimer</h3>
  <p className="text-muted small" style={{ fontSize: "0.75rem", lineHeight: "1.6" }}>
    For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free Investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
  </p>
</div>


</div>
   
     );
}

export default Brokerrage;