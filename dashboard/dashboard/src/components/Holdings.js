import React from 'react';
import { holdings } from '../data/data';


function Holdings() {
    return  (
 <>

   <h1>
    Holdings
   </h1>


   <h3 className='title'>Holdings ({holdings.length}) </h3>
  
   <div className='order-table'>
    <table style={{border:'1px solid black'}}>
        <th>Instrument</th>
        <th>Qty.</th>
        <th>Avg.</th>
        <th>LTP</th>
        <th>Cur.</th>
        <th>P&L</th>
        <th>Net chg.</th>
        <th>Day chg.</th>
        {holdings.map((stock, index) =>{
        const currValue = stock.price * stock.qty;
        const isProfit = currValue - stock.avg*stock.qty>=0.0;
        const proftClass = isProfit ? "profit":"loss";
        const dayClass = stock.isLoss ? "loss":"profit";

        return(
        <tr key={index} className='item'>
        <td>{stock.name}</td>
        <td>{stock.name}</td>
        <td>{stock.avg.toFixed(2)}</td>
        <td>{stock.price.toFixed(2)}</td>
        <td>{currValue.toFixed(2)}</td>
        <td className=''>{stock.name}</td>
        <td>{stock.name}</td>
        <td>{stock.name}</td>
        </tr>
        )
        })}
    </table>
   </div>

   <div>
    <div>
        <h5>29,875.<span>55</span>{" "}</h5>
        <p>Total Investment</p>
    </div>
    <div>
        <h5>31,428.<span>95</span>{" "}</h5>
        <p>Current Value</p>
    </div>
    <div>
        <h5>5,553.40 (+5.20%)</h5>
        <p>P&L</p>
    </div>
   </div>

 </>



    );
}

export default Holdings;