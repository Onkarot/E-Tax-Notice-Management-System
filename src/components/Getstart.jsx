import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Getstart = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    const [selectedOption, setSelectedOption] = useState("");
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const usenavigate = useNavigate()

    useEffect (() =>{
        let mail = sessionStorage.getItem('mail')
        if(mail === '' || mail === null){
            usenavigate('/login')
        }
    })

    return (
        <div className='container'>
            <p className="h2 getstart">
                "Your <span className='text-primary' >Just a Click Away!</span>"
            </p>

            <br /> <br />

            <div className='col-lg-6' data-aos="fade-down">
                <select className="form-select" aria-label="Default select example" onChange={handleSelectChange}>
                    <option value="">Select Option</option>
                    <option value="1">For Single User</option>
                    <option value="2">For Multiple Users</option>
                </select>
            </div>

            <br /> <br />

            {selectedOption === "1" && (
                <div id="singleITRDiv">
                    <div className="row">
                        <div className='col-lg-6'>
                            <form className='ITR' data-aos="fade-right">
                                <div className='fieldssingleITR'>
                                    <h5>For Single ITR</h5>
                                    <hr />
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="text" id="loginName" class="form-control"  placeholder='Enter ID' />
                                    </div>

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="password" id="loginPassword" class="form-control" placeholder='Enter Password' />
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <button type="submit" class="btn mb-2 btnsingleITRback">BACK</button>
                                        </div>

                                        <div className='col-lg-6'>
                                            <Link to={"/dashboard"} className="nav-item">
                                                <button type="submit" class="btn btn-primary btn-block mb-2 btnsigneITRgetdoc">GET DOCUMENTS</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className='col-lg-6'>
                            <div className='fieldssingleITR' data-aos="fade-left">
                                <h5>Important Points to Remember</h5>
                                <hr />

                                <ul class="list-group list-group-flush noteSingleITR">
                                    <li class="list-group-item"><strong>Enter ID: </strong>Enter Your Id As Per PAN Card</li>
                                    <li class="list-group-item">Enter ID in only <strong>Capital Letter </strong> not include Number or Special Characters</li>
                                    <li class="list-group-item"><strong>Enter Password: </strong>Enter Your ITR Password</li>
                                    <li class="list-group-item">Password only accepted <strong>Number</strong> not letters or special symbols</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedOption === "2" && (
                <div id="multipleITRDiv">
                    <div className='row'>
                        <div class="col-lg-6">
                            <form className='ITR' data-aos="fade-right">
                                <div className='fieldssingleITR'>
                                    <h5>For Multiple ITR</h5>
                                    <hr />

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input class="form-control" type="file" id="formFile" accept={".csv"}/>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <button type="submit" class="btn mb-2 btnsingleITRback">BACK</button>
                                        </div>

                                        <div className='col-lg-6'>
                                            <button type="submit" class="btn btn-primary btn-block mb-2 btnsigneITRgetdoc">GET DOCUMENTS</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-lg-6" data-aos="fade-left">
                            <div className='fieldssingleITR'>
                                <h5>Important Points to Remember</h5>
                                <hr />

                                <ul class="list-group list-group-flush noteSingleITR">
                                    <li class="list-group-item">File is only in <strong>.csv</strong> format</li>
                                    <li class="list-group-item">CSV file contains only two columns <strong>ID</strong> & <strong>Password</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Getstart