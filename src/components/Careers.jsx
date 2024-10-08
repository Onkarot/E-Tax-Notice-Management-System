import React from 'react'
import img1 from '../images/Career_Development_and_Growth.png'
import img2 from '../images/Company_Stability_and_Reputation.png'
import img3 from '../images/Competitive_Compensation_and_Benefits.png'
import img4 from '../images/Financial_and_Retirement_Benefits.png'
import img5 from '../images/Flexible_Working_Arrangements.png'
import img6 from '../images/Innovative_Projects_and_Work.png'
import img7 from '../images/positive_work_env.png'
import img8 from '../images/Supportive_Management.png'
import img9 from '../images/Work_Resources_and_Tools.png'
import img10 from '../images/Work-Life_Balance.png'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'


function Careers() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='container'>
            <section className='careers'>
                <h1 className="career" data-aos="fade-right">Join The Team <br />
                    <span className='text-primary'>Build The Network</span>
                </h1>

                <div className='subtitle'>
                    <p className='h6' data-aos="fade-left">CURRENT OPENING POSITION</p>
                </div>
            </section>

            <section className='aboutsection2'>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body" data-aos="fade-up">
                                <div class="card-body"><p className='h4 avbpos'>Accountant</p></div>

                                <div class="card-body" >
                                    <ul>
                                        <li>Total Postion: 2</li>
                                        <li>Year of Experience: 0-1 Yrs.</li>
                                        <li>Salary: 2.5 LPA.</li>
                                        <li>Location: Pune</li>
                                        <li>Deadline: 10/06/2024</li>
                                    </ul>

                                    <div class="d-grid gap-2">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYxPE_Z1mYs7nTM47I5xHFQwhXt0bcfsjNCkhJvi_WSPyOHQ/viewform?usp=sf_link">
                                            <button class="btn btn-primary apply-btn">Apply</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body" data-aos="fade-up">
                                <div class="card-body"><p className='h4 avbpos'>Python Developer</p></div>

                                <div class="card-body" >
                                    <ul>
                                        <li>Total Postion: 1</li>
                                        <li>Year of Experience: 0-1 Yrs.</li>
                                        <li>Salary: 2 LPA.</li>
                                        <li>Location: Pune</li>
                                        <li>Deadline: 10/06/2024</li>
                                    </ul>

                                    <div class="d-grid gap-2">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYxPE_Z1mYs7nTM47I5xHFQwhXt0bcfsjNCkhJvi_WSPyOHQ/viewform?usp=sf_link">
                                            <button class="btn btn-primary apply-btn">Apply</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body" data-aos="fade-up">
                                <div class="card-body"><p className='h4 avbpos'>Data Entery</p></div>

                                <div class="card-body" >
                                    <ul>
                                        <li>Total Postion: 1</li>
                                        <li>Year of Experience: 0 Yrs.</li>
                                        <li>Salary: 1.5 LPA.</li>
                                        <li>Location: Pune</li>
                                        <li>Deadline: 10/06/2024</li>
                                    </ul>

                                    <div class="d-grid gap-2">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYxPE_Z1mYs7nTM47I5xHFQwhXt0bcfsjNCkhJvi_WSPyOHQ/viewform?usp=sf_link">
                                            <button class="btn btn-primary apply-btn">Apply</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='careers'>
                <h1 className="careers2" data-aos="fade-up">Invest Your <strong className='text-primary'>Feture With Us</strong></h1>

                <div class="row careerpoints">
                    <div class="col-lg-6">
                        <div className='carpoints' data-aos="fade-up">
                            <strong className='h5 text-primary'>Positive Work Environment</strong>
                            <ul>
                                <li>Encourages collaboration, respect, and support among colleagues.</li>
                                <li>Embraces diversity and fosters an environment where everyone feels valued and included.</li>
                                <li>Regular recognition and rewards for contributions and achievements.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <img src={img7} className="image-container" data-aos="fade-left"/>
                    </div>
                </div>

                <div class="row careerpoints2">
                    <div class="col-lg-6">
                        <img src={img5} className="image-container" data-aos="fade-right"/>
                    </div>

                    <div class="col-lg-6">
                        <div className='carpoints' data-aos="fade-up">
                            <strong className='h5 text-primary'>Flexible Working Arrangements</strong>
                            <ul>
                                <li>Ability to set your own working hours to accommodate personal needs and improve work-life balance.</li>
                                <li>Opportunities to work from home or other locations outside the office.</li>
                                <li>Option to work longer hours on fewer days, such as four 10-hour days instead of five 8-hour days.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row careerpoints2">
                    <div class="col-lg-6">
                        <div className='carpoints' data-aos="fade-up">
                            <strong className='h5 text-primary'>Competitive Compensation and Benefits</strong>
                            <ul>
                                <li>Competitive wages and regular salary reviews based on performance and market rates.</li>
                                <li>Performance-related bonuses and other financial incentives.</li>
                                <li>Health, dental, vision, and life insurance plans.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <img src={img3} className="image-container" data-aos="fade-left"/>
                    </div>
                </div>

                <div class="row careerpoints2">
                    <div class="col-lg-6">
                        <img src={img1} className="image-container" data-aos="fade-right"/>
                    </div>

                    <div class="col-lg-6">
                        <div className='carpoints' data-aos="fade-up">
                            <strong className='h5 text-primary'>Career Development and Growth</strong>
                            <ul>
                                <li>Access to ongoing professional development, training, and certification courses.</li>
                                <li>Clear pathways for career progression and promotion opportunities.</li>
                                <li>Access to experienced mentors for career guidance and development.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row careerpoints2">
                    <div class="col-lg-6">
                        <div className='carpoints' data-aos="fade-up">
                            <strong className='h5 text-primary'>Work-Life Balance</strong>
                            <ul>
                                <li>Paid vacation, sick leave, parental leave, and sabbaticals.</li>
                                <li>Access to wellness resources, including gym memberships, mental health support, and wellness workshops.</li>
                                <li>Counseling services and support for personal and professional issues.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <img src={img10} className="image-container" data-aos="fade-left"/>
                    </div>
                </div>

                <div class="row careerpoints2">
                    <div class="col-lg-6">
                        <img src={img4} className="image-container" data-aos="fade-right"/>
                    </div>

                    <div class="col-lg-6">
                        <div className='carpoints' data-aos="fade-up">
                            <strong className='h5 text-primary'>Financial and Retirement Benefits</strong>
                            <ul>
                                <li>Company-sponsored retirement savings plans, such as 401(k) or pension schemes, often with employer matching.</li>
                                <li>Opportunities to acquire company stock, providing a stake in the company’s success.</li>
                                <li>Financial support for further education and skill development.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row careerpoints2">
                    <div class="col-lg-6">
                        <div className='carpoints' data-aos="fade-up">
                            <strong className='h5 text-primary'>Work Resources and Tools</strong>
                            <ul>
                                <li>Access to the latest technology and tools needed for your job.</li>
                                <li>Comfortable and well-equipped office spaces, including break rooms, kitchens, and ergonomic workstations.</li>
                                <li>Subscriptions to learning platforms like LinkedIn Learning or Coursera for self-paced learning.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <img src={img9} className="image-container" data-aos="fade-left"/>
                    </div>
                </div>

                <div class="row careerpoints2">
                    <div class="col-lg-6">
                        <img src={img2} className="image-container" data-aos="fade-right"/>
                    </div>

                    <div class="col-lg-6">
                        <div className='carpoints' data-aos="fade-up">
                            <strong className='h5 text-primary'>Company Stability and Reputation</strong>
                            <ul>
                                <li>Working for a financially stable and well-established company.</li>
                                <li>Being part of a company with a strong market reputation and positive impact in the industry.</li>
                                <li>Alignment with a company known for ethical behavior and social responsibility.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row careerpoints2">
                    <div class="col-lg-6">
                        <div className='carpoints' data-aos="fade-up">
                            <strong className='h5 text-primary'>Innovative Projects and Work</strong>
                            <ul>
                                <li>Opportunities to work on cutting-edge projects and technologies.</li>
                                <li>Freedom to innovate and take ownership of your work.</li>
                                <li>Collaboration with diverse teams across different departments.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <img src={img6} className="image-container" data-aos="fade-left"/>
                    </div>
                </div>

                <div class="row careerpoints2">
                    <div class="col-lg-6">
                        <img src={img8} className="image-container" data-aos="fade-right"/>
                    </div>

                    <div class="col-lg-6">
                        <div className='carpoints' data-aos="fade-left">
                            <strong className='h5 text-primary'>Supportive Management</strong>
                            <ul>
                                <li>Transparent communication channels between employees and management.</li>
                                <li>Regular feedback and constructive criticism to help you grow.</li>
                                <li>Leaders who provide guidance, support, and empower employees to succeed.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Careers