import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/style.css'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Signup() {
    const usenaviagate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    const [data, setData] = useState({
        gender:"", name:"", lstname:"", email:"", phone_cd:"", phnumber:"", password1:"", password2:"", orgname:"",
        orgemail:"", orgphnumber:"", orgaddress:"", orgzipcd:"", orgcountry:""
    })

    const handleSignin = (e) =>{
        if(data.gender === '' || data.gender === null || data.name === '' || data.name === null ||
            data.lstname === '' || data.lstname === null || data.email === '' || data.email === null ||
            data.phone_cd === '' || data.phone_cd === null || data.phnumber === '' || data.phnumber === null ||
            data.password2 === '' || data.password1 === null || data.password2 === '' || data.password2 === null || 
            data.orgname === '' || data.orgname === null || data.orgemail === '' || data.orgemail === null ||
            data.orgphnumber === '' || data.orgphnumber === null || data.orgaddress === '' || data.orgaddress === null ||
            data.orgzipcd === '' || data.orgzipcd === null || data.orgcountry === '' || data.orgcountry === null)
            {
                alert("Please Fill The Complete Information!")
            }

        else{
            if(validate()){
                axios.post("https://6659ba63de346625136daefa.mockapi.io/MJAAdmin", data)
                alert("Signup Successfully")
                usenaviagate('/login')
                setData({
                    gender:"", name:"", lstname:"", email:"", phone_cd:"", phnumber:"", password1:"", password2:"",
                    orgname:"", orgemail:"", orgphnumber:"", orgaddress:"", orgzipcd:"", orgcountry:""
                })
            }
        }
    }

    const validate = () =>{
        let result = true 
        if(data.password1 === data.password2){
            result = true
        }

        else{
            result = false;
            alert("Password does not match")
        }

        return result
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setData({...data, [name]:value})
    }

    return (
        <section class="h-100 h-custom gradient-custom-2">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12">
                        <div class="card card-registration card-registration-2 signup1">
                            <div class="card-body p-0">
                                <div class="row g-0" data-aos="fade-down">
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <h3 class="fw-normal mb-5 style2">General Infomation</h3>

                                            <div class="mb-4 pb-2">
                                                <select data-mdb-select-init className='option' name='gender' onChange={(e) => handleChange(e)} >
                                                    <option>Title</option>
                                                    <option value="Mr.">Mr.</option>
                                                    <option value="Mrs.">Mrs.</option>
                                                </select>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-4 pb-2">

                                                    <div data-mdb-input-init class="form-outline">
                                                        <input type="text" name='name' id="name" class="form-control form-control-lg inputtxt" 
                                                        value={data.name} onChange={(e) => handleChange(e)} placeholder='First Name' />
                                                    </div>

                                                </div>

                                                <div class="col-md-6 mb-4 pb-2">

                                                    <div data-mdb-input-init class="form-outline">
                                                        <input type="text" class="form-control form-control-lg inputtxt" placeholder='Last Name' 
                                                        id='lstname' name='lstname' value={data.lstname} onChange={(e) => handleChange(e)} />
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="mb-4 pb-2">
                                                <div data-mdb-input-init class="form-outline">
                                                    <input type="email" class="form-control form-control-lg inputtxt" placeholder='Email' 
                                                    id='email' name='email' value={data.email} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <select data-mdb-select-init name="phone_cd" onChange={(e) => handleChange(e)} className='option' >
                                                        <option>Country Code</option>
                                                        <option value="+91">+91</option>
                                                        <option value="+101">+101</option>
                                                        <option value="+92">+92</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                    <div class="mb-4 pb-2">
                                                        <div data-mdb-input-init class="form-outline">
                                                            <input type="number" class="form-control form-control-lg inputtxt" placeholder='Phone No.' 
                                                            id='phnumber' name='phnumber' value={data.phnumber} onChange={(e) => handleChange(e)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-4 pb-2">
                                                <div data-mdb-input-init class="form-outline">
                                                    <input type="password" class="form-control form-control-lg inputtxt" placeholder='Password' 
                                                    id='password1' name='password1' value={data.password1} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="mb-4 pb-2">
                                                <div data-mdb-input-init class="form-outline">
                                                    <input type="password" class="form-control form-control-lg inputtxt" placeholder='Confirm Password' 
                                                    id='password2' name='password2' value={data.password2} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="d-grid mb-2">
                                                <button class="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                                                    <i class="fab fa-google me-2"></i> Sign in with Google
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-lg-6 bg-indigo text-white">
                                        <div class="p-5">
                                            <h3 class="fw-normal mb-5">Organization Details</h3>

                                            <div class="mb-4 pb-2">
                                                <div data-mdb-input-init class="form-outline form-white">
                                                    <input type="text" class="form-control form-control-lg inputtxt" placeholder='Organization Name' 
                                                    id='orgname' name='orgname' value={data.orgname} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <div data-mdb-input-init class="form-outline form-white">
                                                    <input type="text" class="form-control form-control-lg inputtxt" placeholder='Organization Email' 
                                                    id='orgemail' name='orgemail' value={data.orgemail} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <div data-mdb-input-init class="form-outline form-white">
                                                    <input type="number" class="form-control form-control-lg inputtxt" placeholder='Organization Contact No.'
                                                    id='orgphnumber' name='orgphnumber' value={data.orgphnumber} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="mb-4 pb-2">
                                                <div data-mdb-input-init class="form-outline form-white">
                                                    <input type="text" class="form-control form-control-lg inputtxt" placeholder='Organization Address' 
                                                    id='orgaddress' name='orgaddress' value={data.orgaddress} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-5 mb-4 pb-2">

                                                    <div data-mdb-input-init class="form-outline form-white">
                                                        <input type="text" class="form-control form-control-lg inputtxt" placeholder='Zip Code' 
                                                        id='orgzipcd' name='orgzipcd' value={data.orgzipcd} onChange={(e) => handleChange(e)} />
                                                    </div>

                                                </div>
                                                <div class="col-md-7 mb-4 pb-2">

                                                    <div data-mdb-input-init class="form-outline form-white">
                                                        <input type="text" class="form-control form-control-lg inputtxt" placeholder='Country' 
                                                        id='orgcountry' name='orgcountry' value={data.orgcountry} onChange={(e) => handleChange(e)} />
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="form-check d-flex justify-content-start mb-4 pb-3">
                                                <input class="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                                                <label class="form-check-label text-white" for="form2Example3">
                                                    I do accept the <a href="#!" class="text-white"><u data-bs-toggle="modal" data-bs-target="#mymodal">Terms and Conditions</u></a> of MJA.
                                                </label>

                                                <div class="modal fade" id="mymodal">
                                                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                                                        <div class="modal-content">
                                                            <div class="modal-header text-dark">
                                                                modal-header
                                                                <button class="btn-close" data-bs-dismiss="modal"></button>
                                                            </div>

                                                            <div class="modal-body text-dark">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                    Amet veritatis facilis aspernatur. Culpa quae hic, ipsa
                                                                    porro nesciunt doloremque, quia excepturi voluptate, at
                                                                    nisi exercitationem! Totam laudantium dolorem et consequuntur.
                                                                </p>
                                                            </div>

                                                            <div class="modal-footer">
                                                                <button class="btn btn-danger" data-bs-dismiss="modal">Ok</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="button" class="btn btn-light btnsignup" onClick={(e) => handleSignin(e)}>Register</button>

                                            <div class="mb-4 pb-3">
                                                <div class="text-center pt-4">
                                                    <p class="lgtext m-0">Already have an account? <Link to={"/login"} className="nav-item"><a class="text-white font-weight-bold">Login</a></Link> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup