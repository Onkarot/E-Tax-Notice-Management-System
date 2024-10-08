import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GoogleOAuthProvider  } from '@react-oauth/google'

const client_id = "805943157805-9h7sslrsgvachechjc7h6cr9l0trpaco.apps.googleusercontent.com"

const Login = () => {
    const [email, newEmail] = useState('');
    const [password1, newPassword] = useState('');
    // const [phnumber, newPhnumber] = useState('');

    const usenavigate = useNavigate();
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    useEffect(()=>{
        sessionStorage.clear();
    }, [])

    const processLogin = (e) =>{
        e.preventDefault();
        if (validate()) {
            fetch(`https://6659ba63de346625136daefa.mockapi.io/MJAAdmin?email=${email}`)
                .then((res) =>{
                    if(!res.ok){
                        alert('Network response was not ok or User not found!');
                    }
                    return res.json()
                })

                .then((resp) =>{
                    const user = resp.find((user)=>user.email === email);
                    if(user){
                        if(user.password1 === password1){
                            sessionStorage.setItem('mail', email)
                            usenavigate('/getstart')
                            alert("Login Successfull")
                        }

                        else{
                            alert("Incorrect Password")
                        }
                    }
                    else{
                        alert("Enter Valid or User not found!")
                    }
                })
                .catch((err) =>{
                    alert("Enter Valid or User not found!");
                })
        }
    }

    const validate = () =>{
        let result = true;
        if(email === '' || email === null){
            result = false;
            alert("Enter Userd Id")
        }

        if(password1 === '' || password1 === null){
            result = false;
            alert("Enter Password")
        }

        return result;
    }

    const onSuccess = (res) =>{
        console.log("Login Successfull:", res.profileObj)
    }

    const onFailure = (res) =>{
        console.log("Login failed", res)
    }

    return (
        <div class="container">
            <div class="row loginpg">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card border-0 shadow rounded-3 my-10">
                        <div class="card-body p-4 p-sm-10" data-aos="fade-down">
                            <h3 class="text-center mb-5">MJA TECHNOLOGY</h3>
                            <form>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" placeholder="name@example.com" 
                                    value={email} onChange={(e) => newEmail(e.target.value)} id="email" name='email'/>
                                    <label for="mail">Email address</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" placeholder="Password" 
                                    value={password1} onChange={(e) => newPassword(e.target.value)} id="password1" name='password1'/>
                                    <label for="password">Password</label>
                                </div>

                                <div className='row'>
                                    <div class="col-lg-6 form-check mb-3">
                                    </div>

                                    <div class="col-lg-6 form-check mb-3">
                                        <Link to={"/"} className="nav-item"><a class="text-dark font-weight-bold fp">Forget Password ?</a></Link>
                                    </div>
                                </div>

                                <div class="d-grid">
                                    <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit"
                                    onClick={(e) => processLogin(e)}>Login</button>
                                </div>

                                <div class="text-center pt-4">
                                    <p class="m-0">Do not have an account? <Link to={"/signup"} className="nav-item"><a class="text-dark font-weight-bold">Sign Up</a></Link> </p>
                                </div>

                                <hr class="my-4" />
                                <div class="d-grid mb-2">
                                    <button class="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                                        <i class="fab fa-google me-2"></i> Sign in with Google
                                    </button>
                                </div>

                                <div id='signInButton'>
                                    <GoogleOAuthProvider  client_id={client_id} buttonText="Login With Google"
                                    onSuccess={onSuccess} onFaiure={onFailure} cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}/>
                                </div>

                                <div class="d-grid">
                                    <button class="btn btn-login text-uppercase fw-bold github" type="submit">
                                        <i class="fa-brands fa-github"></i> Sign in with Github
                                    </button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login