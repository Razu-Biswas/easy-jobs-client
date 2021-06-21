import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
           

            <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Easy Jobs</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item ">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/jobs">Jobs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;