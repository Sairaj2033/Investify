import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {





        const navigate = useNavigate();
        const [cookies, removeCookie] = useCookies([]);
        const [username, setUsername] = useState("");
        useEffect(()=> {
          const verifyCookie = async () => {
            if(!cookies.token) {
              navigate("/login");
              return;
            }
            const{ data } = await axios.post(
process.env.REACT_APP_BACKEND_URL,              {},
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
       <LeftSection 
       imageURL="media/images/kite.png" 
       productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo=""
        learnMore="#" 
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" 
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
       />

 <RightSection  
       imageURL="media/images/console.png"
       productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
        learnMore="#"
         />

       <LeftSection 
       imageURL="media/images/coin.png" 
       productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices" 
        learnMore="#" 
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin" 
        appStore="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"
       />

  <RightSection
        imageURL="media/images/kiteconnect.png"
         productName="Kite Connect API" 
         productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
        learnMore="#"
        />


       <LeftSection 
       imageURL="media/images/varsity.png" 
       productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
        tryDemo=""
        learnMore="#" 
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity" 
        appStore="https://apps.apple.com/in/app/zerodha-varsity/id1474610753"
       />
      <div className='text-centre' >
           
      </div>
  
       <Universe/>
       
       </>
    );
}

export default ProductPage;
