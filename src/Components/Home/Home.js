import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'


const Home = () => {
    return (
        <div>
        <div>
            <Navbar></Navbar>
        </div>
        <div className="bgk-img text-center">
            <h2 className="title"> Search your jobs,</h2>
            <h4 className="title2">OR</h4>
            <h2 className="title2">Query your team member! </h2>
            <button type="button" class="btn btn-danger ">Query Your Options!</button>
        </div>
        </div>
    );
};

export default Home;