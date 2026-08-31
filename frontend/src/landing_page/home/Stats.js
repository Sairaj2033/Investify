import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5" >Trust with Confidence</h1>
          <br></br>

          <h2 className="fs-4 ">Customer-frist always</h2>
        <p className="text-muted">
            Thats why 13+ crore trust Zerodha with 3.5+ lakh worth equity
            investments
          </p>
          <h2 className="fs-4  " >No spam or gimmicks</h2>
        <p className="text-muted">
            No gimmicks,spam, "gramification" or annoying push notification high
            quality apps you use at pace the way you like.
          </p>
          <h2 className="fs-4" >The Zerodha universe</h2>
        <p className="text-muted">
            Thats why 13+ crore trust Zerodha with 3.5+ lakh worth equity
            investments
          </p>
          <h2 className="fs-4" >Do better with money</h2>
        <p className="text-muted">
            Thats why 13+ crore trust Zerodha with 3.5+ lakh worth equity
            investments
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} ></img>
          <div className="text-center">
            <a href="" style={{textDecoration:'none'}} className="mx-5">Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
           
             <a href="" style={{textDecoration:'none'}} >Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
