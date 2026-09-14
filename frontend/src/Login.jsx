import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", 
        { email, password }, 
        { withCredentials: true }
      );
      if (res.data.success) {
        window.location.href = "/"; // Redirect to dashboard home
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
  <div className="form-bg text-center">
    <form onSubmit={handleSubmit} className="form">
      <div style={{margin:' 8rem 0 8rem 0'}}> 
      <h1 className="m-4">Open a free demat and trading account online</h1>      
      <h4 className="text-muted">Start investing brokerage free and join a community of 1.8+ crore investors and traders</h4>
  </div>
      
<div className="" style={{display:'flex',justifyContent:'center'}}>
    </div>  

<div className="row">
   <div className="col-6">
  <img src="../media/images/account_open.svg"  style={{width:'80%',margin:'0rem 0rem 2rem 15rem'}} ></img>
   </div> 





<div className="col-5 text-start" style={{margin:'2rem 4rem 4rem 5rem'}} >
  <h1 className="mb-3">Login now</h1>
  <h3 className="text-muted mb-4" style={{ fontSize: '18px' }}>
    Or track your existing application
  </h3>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <input  style={{height:'4rem',width:'60%'}}
        type="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div >
    <div className="mb-4">
      <input style={{height:'4rem',width:'60%'}}
        type="password"
        className="form-control"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button className="btn btn-primary" style={{width:'40%', height:'3.7rem',fontSize:'25px'}} type="submit">
      Login
    </button>
<br/><br/>

<span className="text-muted">By proceeding, you agree to the Zerodha<a href="/#" style={{textDecoration:'none'}}> terms & privacy policy</a></span>
<hr className="" style={{width:'70%', opacity:'10%'}}></hr>
<span className="text-muted">Looking to open NRI account? <a href="/#" style={{textDecoration:'none'}}>Click here</a></span>
  </form>
</div>

</div>
 


    </form>
    </div>
  );
};

export default Login;