import React from 'react';

import { positions } from '../data/data';


function Positions() {
    return ( 
        <>
        <h3 className='title'> Positions ({positions.length}) </h3>

        <div className='order-table'>
            <table className='t-head'>
            <tr>
                <th className='t-head-title' style={{borderBottom:'1px solid #e0dfdf'}}>Product</th>
                <th className='t-head-title' style={{borderBottom:'1px solid #e0dfdf'}}>Instrument</th>
                <th className='t-head-title' style={{borderBottom:'1px solid #e0dfdf'}}>Qty.</th>
                <th className='t-head-title' style={{borderBottom:'1px solid #e0dfdf'}}>Avg</th>
                <th className='t-head-title' style={{borderBottom:'1px solid #e0dfdf'}}>LTP</th>
                <th className='t-head-title' style={{borderBottom:'1px solid #e0dfdf'}}>P&L</th>
                <th className='t-head-title' style={{borderBottom:'1px solid #e0dfdf'}}>Chg.</th>
            </tr>
            {positions.map((stock, index) => {
                          const currValue = stock.price * stock.qty;
                          const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                          const profClass = isProfit ? "profit" : "loss";
                          const dayClass = stock.isLoss ? "loss" : "profit";
            
                          return (
                            <tr key={index} className='item'>
                              <td>{stock.product}</td>
                              <td>{stock.name}</td> {/* Fixed: stock.qty */}
                              <td>{stock.qty}</td> {/* Fixed: stock.qty */}
                              <td>{stock.avg.toFixed(2)}</td>
                              <td>{stock.price.toFixed(2)}</td>
                              <td className='profit'>
                                {currValue - stock.avg}
                                </td>


                              <td className={dayClass}>{stock.day}</td>
                            </tr>
                          );
                        })}
            </table>
        </div>
    </>
     );

}

export default Positions;