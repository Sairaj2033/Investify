import React from 'react';
import Dashboard from './Dashboard';
import TopBar from './TopBar';

// function Home() {
//     return ( 
//         <>
//         <h1>Home</h1>
//         </>
//      );
// }

const Home = () => {
    return (
        <>
       <TopBar/>
       <Dashboard/>
        </>
    );
};

export default Home;