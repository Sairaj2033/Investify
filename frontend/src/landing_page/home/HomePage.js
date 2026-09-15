import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import NavBar from '../Navbar';
import Footer from '../Footer';

function HomePage() {


    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    useEffect(()=> {
      const verifyCookie = async () => {
        if(!cookies.token) {
          navigate("/");
          return;
        }
        const{ data } = await axios.post(
          "http://localhost:3001",
          {},
          {withCredentials:true}
        );
        const{status, user} = data;
        setUsername(user);
        return status
        ? toast(`hello ${user}`, {
          position:"top-right",
        })
        : (removeCookie("token"), navigate("/login"));

      };
      verifyCookie();
    },[cookies, navigate, removeCookie]);
    const Logout = () => {
      removeCookie("token");
      navigate("/signup");
    };



    return ( 
      <>
      
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
      
      </>
     );
}

export default HomePage;