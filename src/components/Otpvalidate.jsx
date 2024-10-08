import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Otpvalidate() {
    const usenavigate = useNavigate();

    const back = () => {
        usenavigate('/login')
    }

    const varify = () => {
        alert("Successfully Login")
        usenavigate('/getstart')
    }
    
    return (
        <div class="container p-5">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-5 mt-5">
                    <div class="bg-white p-5 rounded-3 shadow-sm border">
                        <div>
                            <p class="text-center text-success"><i class="fa-solid fa-envelope-circle-check"></i></p>
                            <p class="text-center text-center h5 ">Please check your email</p>
                            <p class="text-muted text-center">We've sent a code to your Email</p>
                            <div class="row pt-4 pb-2">
                                <div class="col-3">
                                    <input class="otp-letter-input" type="text" />
                                </div>
                                <div class="col-3">
                                    <input class="otp-letter-input" type="text" />
                                </div>
                                <div class="col-3">
                                    <input class="otp-letter-input" type="text" />
                                </div>
                                <div class="col-3">
                                    <input class="otp-letter-input" type="text" />
                                </div>
                            </div>
                            <p class="text-muted text-center">Didn't get the code? <a href="#" class="text-success">Click to resend.</a></p>

                            <div class="row pt-5">
                                <div class="col-6">
                                    <button class="btn btn-outline-secondary w-100" onClick={back}>Back</button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-success w-100" onClick={varify}>Verify</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otpvalidate