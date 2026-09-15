import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import axios from "axios";


// import { holdings } from '../data/data';

// function Holdings() {

//fetchiing data between index.js and hooldings.js
const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

 useEffect(() => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/allHoldings`).then((res) => {
    console.log(res.data);
    setAllHoldings(res.data);
  });
}, []);






//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const labels =allHoldings.map((subArray)=> subArray["name"]);

    const data = {
      labels,
      datasets : [
      {
         label: 'Stock Price',
         data: allHoldings.map((stock) => stock.price),
         backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
    }
// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function App() {
//   return <Bar options={options} data={data} />;
// }
 


return (
  <>
    <h4 className="title" style={{ color: "#7b7a7a", margin: "1.5rem 0" }}>
      Holdings ({allHoldings.length})
    </h4>

    <div className="order-table" style={{ color: "#7b7a7a" }}>
      <table
        style={{ border: "1px solid #eeeaea", width: "100%", border: "none" }}
      >
        <thead style={{ borderBottom: "1px solid #e5e5e5" }}>
          <tr className="t-head">
            <th className="t-head-title">Instrument</th>
            <th className="t-head-title">Qty.</th>
            <th className="t-head-title">Avg.</th>
            <th className="t-head-title">LTP</th>
            <th className="t-head-title">Cur.</th>
            <th className="t-head-title">P&L</th>
            <th className="t-head-title">Net chg.</th>
            <th className="t-head-title">Day chg.</th>
          </tr>
        </thead>
        <tbody>
          {allHoldings.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index} className="item">
                <td>{stock.name}</td>
                <td>{stock.qty}</td> {/* Fixed: stock.qty */}
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    <div
      style={{
        display: "flex",
        gap: "2rem",
        marginTop: "2rem",
        color: "#7b7a7a",
      }}
    >
      <div>
        <h2 style={{ margin: "6rem" }}>
          29,875.<span>53</span>
        </h2>
        <p style={{ margin: "6rem" }}>Total Investment</p>
      </div>
      <div>
        <h2 style={{ margin: "6rem" }}>
          31,428.<span>95</span>
        </h2>
        <p style={{ margin: "6rem" }}>Current Value</p>
      </div>
      <div>
        <h2 style={{ margin: "6rem", color: "#41b883" }}>5,553.40 (+5.20%)</h2>
        <p style={{ margin: "6rem" }}>P&L</p>
      </div>
    </div>
    <VerticalGraph data={data}/>
  </>
);
};

export default Holdings;
