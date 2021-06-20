import React from 'react';

const Navbar = () => {
    return (
        <div>
            <h1>Hi</h1>

            <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Easy Jobs</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Jobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;