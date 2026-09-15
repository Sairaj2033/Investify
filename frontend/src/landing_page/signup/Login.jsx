import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const { data } = await axios.post(
  `${process.env.REACT_APP_BACKEND_}`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
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





<div className="col-4 text-start" style={{margin:'2rem 4rem 4rem 5rem'}} >
  <h1 className="mb-3">Login now</h1>
  <h3 className="text-muted mb-4" style={{ fontSize: '18px' }}>
    Or track your existing application
  </h3>


  
    <div className="mb-4 form_container">
     
      <input  style={{height:'4rem',width:'60%'}}
        type="email"
        name="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={handleOnChange}
      />
    </div >

    <div className="mb-4">
     
      <input style={{height:'4rem',width:'60%'}}
        type="password"
        name="password"
        className="form-control"
        placeholder="Password"
        value={password}
        onChange={handleOnChange}      />
    </div>
    <button className="btn btn-primary" style={{width:'40%', height:'3.7rem',fontSize:'25px',marginBottom:'1rem'}} type="submit">
      Login
    </button>
<br />
<span>New here? <a href="/signup" style={{textDecoration:'none'}} >Register</a></span>
    
<br/><br/>

<span className="text-muted">By proceeding, you agree to the Zerodha<a href="/#" style={{textDecoration:'none'}}> terms & privacy policy</a></span>
<hr className="" style={{width:'70%', opacity:'10%'}}></hr>
<span className="text-muted">Looking to open NRI account? <a href="/#" style={{textDecoration:'none'}}>Click here</a></span>
  
</div>

</div>
 


    </form>
    <ToastContainer/>
    </div>
  );
};

export default Login;