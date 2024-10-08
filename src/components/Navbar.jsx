import React from "react"
import '../App.css';
import { Link, useNavigate } from "react-router-dom";
import MJA from '../images/MJA Logo.png'
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Ripple });

function Navbar() {
    const usenavigate = useNavigate();

    const logout = () =>{
        sessionStorage.clear();
        usenavigate('/')
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top shadow ft">
                <div class="container-fluid">
                    <a class="navbar-brand me-2" href="https://mjandassociates.in/">
                        <img src={MJA} height="40" alt="MJA Logo" loading="lazy" />
                    </a>

                    <button class="navbar-toggler navbar-toggler-icon" data-bs-toggle="collapse" data-bs-target="#collapsenavbar">

                    </button>


                    <div className="collapse navbar-collapse justify-content-end" id="collapsenavbar">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to={"/"} className="nav-item">
                                <a className="nav-link">Home</a>
                            </Link>

                            <Link to={"/about"} className="nav-item">
                                <a className="nav-link">About</a>
                            </Link>

                            <Link to={"/contact"} className="nav-item">
                                <a className="nav-link">Contact Us</a>
                            </Link>

                            <Link to={"/careers"} className="nav-item">
                                <a className="nav-link">Careers</a>
                            </Link>

                            <Link className="nav-item">
                                <div className="dropdown">
                                    <a class="btn dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
                                        Pending Actions
                                    </a>

                                    <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                                        <h6>E-Procedding</h6>
                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">For Your Action</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">For Your Information</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Link>

                            <Link className="nav-item">
                                <div className="dropdown">
                                    <button class="btn dropdown-toggle nav-link navbtn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
                                        Account Details
                                    </button>

                                    <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">Personal Information</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">Bank Details</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">Demat Account Details</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">Jurisdiction Details</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">Source of Income</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">Authorised Signatory</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">Representative Assessee</a>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </Link>

                            <Link className="nav-item">
                                <div className="dropdown">
                                    <button class="btn dropdown-toggle nav-link navbtn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
                                        Dashboard
                                    </button>

                                    <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">Tax Deposit</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">Recent Filed Return</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/getstart'}>
                                                <a href="" className="dropdown-item">Recent Form Filed</a>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </Link>
                        </ul>


                        <div>
                            {sessionStorage.getItem('mail')?
                            <>
                                <div class="d-flex align-items-center">
                                    <Link to={"/"} className="nav-item">
                                        <button data-mdb-ripple-init type="button" class="btn px-3 me-2 btn-primary"
                                            onClick={logout}>
                                            Logout
                                        </button>
                                    </Link>
                                </div>
                            </>:<>
                                    <div class="d-flex align-items-center">
                                            <Link to={"/login"} className="nav-item">
                                                <button data-mdb-ripple-init type="button" class="btn px-3 me-2 btn-primary">
                                                    Login
                                                </button>
                                            </Link>
                                    </div>
                                </>
                            }
                        </div>
                    </div>

                </div>

            </nav>

        </div>
    )
}

export default Navbar