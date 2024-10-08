import React from 'react'
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function About() {

  useEffect(() =>{
    AOS.init({duration:1000});
  }, [])

  return (
    <div className='container'>
      <section className='about' data-aos="fade-right">
        <p className="h4">
          Auto Fetching <span className='text-primary'>Income Tax Notice</span> &
          Other Related <span className='text-primary'>Documents</span> 
        </p>

        <section className='aboutsection2'>
          <p>
            In today’s fast-paced digital world, managing tax obligations efficiently is crucial. Income tax notices that are auto-fetched guarantee that taxpayers receive notices from tax authorities as soon as there are updates notices. This automation greatly lowers the possibility of missing crucial messages and does away with the necessity for manual tracking. When used in conjunction with automated tax-related notice processing, this technology simplifies the management of tax-related issues, giving users immediate awareness and facilitating prompt action. Consequently, people and companies can handle their tax obligations more skillfully, guaranteeing adherence and reducing any fines or problems. A more structured and stress-free financial year is a result of the notification and response mechanisms' seamless integration, which improves overall tax management.
          </p>
        </section>
      </section>

      <section className='aboutInfo'>
        <p className="h4" data-aos="fade-up">
          About <span className='text-primary'>Mihir Jagtap</span> & <span className='text-primary'>Associates</span>
        </p>

        <section className='aboutsection2'>
          <div class="row">
            <div class="col-lg-4 col-md-6" data-aos="fade-up">
              <div class="card">
                <div class="card-body">
                  <img src={img1} alt="not found" class="img-fluid card-img-top" />
                  <div class="card-body">
                    Brief Introduction
                  </div>

                  <div class="card-body">
                    <p data-aos="fade-up">
                      We are a CA firm based out of Pune. We provide end to end solutions to clients in matters of accounting, tax consulting, tax compliance, income tax litigation and management consulting. We have a background of serving high net-worth individuals and corporates in Pune for many years. We further have a network of non-resident Indians who are based out of US, UK and the Middle East for whom we provide consultations and tax planning services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up">
              <div class="card">
                <div class="card-body">
                  <img src={img2} alt="not found" class="img-fluid card-img-top" />
                  <div class="card-body">
                    About the Founder
                  </div>

                  <div class="card-body" >
                    <ul data-aos="fade-up">
                      <li>The team is headed by CA Mihir P. Jagtap</li>
                      <li>Finished schooling from Campion School, Colaba, Mumbai.</li>
                      <li>A commerce graduate with distinction.</li>
                      <li>Three years of experience working as an Associate and Senior Associate at Deloitte Haskins and  Sells LLP, Pune in the Statutory Audit vertical.</li>
                      <li>During the tenure with Deloitte, worked on audits of numerous MNCs</li>
                      <li>Extensive experience in handling tax matters for businesses and advising on complex tax transactions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up">
              <div class="card">
                <div class="card-body">
                  <img src={img3} alt="not found" class="img-fluid card-img-top" />
                  <div class="card-body">
                    Services Provided
                  </div>

                  <div class="card-body">
                    <ul data-aos="fade-up">
                      <li>Direct Tax Compliance</li>
                      <li>Direct Tax Consulting</li>
                      <li>Direct Tax Litigation</li>
                      <li>Accounting Automation</li>
                      <li>Audit and Assurance</li>
                      <li>Indirect Tax Compliance</li>
                      <li>International Tax Advisory</li>
                      <li>Secretarial Services</li>
                      <li>Business Growth Consulting</li>
                      <li>Other Affiliated Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </section>
      </section>

      <section className='aboutInfo abtclint'>
        <p className='h4' data-aos="zoom-in">Business Those Who <span className='text-primary'>Collaborate</span></p>
        <div class="row abtclient">
          <div class="col-lg-6">
            <a href="https://mjandassociates.in/" className="navbar-brand" target="_blank">
              <p data-aos="fade-right">Mihir Jagtap and Associates</p>
            </a>
          </div>

          <div class="col-lg-6">
            <a href="https://www.zaubacorp.com/company/VAIBHAV-JOSHI-CONSULTANTS-PRIVATE-LIMITED/U74900PN2009PTC133767" className="navbar-brand" target="_blank">
            <p data-aos="fade-left">Vaibhav Joshi Consultants Pvt Ltd </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About