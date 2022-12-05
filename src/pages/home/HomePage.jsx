import React from 'react';

import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route: ', location.pathname); // '/about | /faqs

    const nav = (path) => {
        navigate(path);
    }

    const navProps = (path) => {
         
        navigate({
            pathname: path,
            search: '?online=true', // Query Params
            
        }, {state: {
                online: true}})


    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navProps('/online-state')}>
                Go To Page With State / Query Params
            </button>
            <button onClick={() => nav('/profile')}>
                Go To Profile
            </button>
        </div>
    );
}

export default HomePage;
