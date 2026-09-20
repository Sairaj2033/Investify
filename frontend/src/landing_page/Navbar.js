import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; // Verify this path matches your folder structure

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:'#FFFFFF'}} >
      <div className="container p-2">
        <a className="navbar-brand" href="/">
          <img src='media/images/logo.svg' style={{width:'25%'}} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className='d-flex' role="search" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              {/* Conditional Rendering for Auth */}
            
               
                 
               
         
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
              

              <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul> 
            {isAuthenticated  (
              <>
              <span className="nav-link active text-muted" style={{ cursor: "default" }}>
                      Hi, {user?.username}
                    </span>
                    <button 
                      onClick={handleLogout} 
                      className="nav-link active btn btn-primary"  >
                      Logout
                    </button>
                    </>
            )}
          </form>          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;