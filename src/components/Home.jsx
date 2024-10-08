import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../images/HomePg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
  
  useEffect(() =>{
    AOS.init({duration:1000});
  }, [])

  return (
    <div>
      <section>
        <div className='img-fluid hmimg'>
          <img src={HomeImg} alt="" />
          <div className='card-img-overlay'>
            <div className='header'>
              <div className='title1 col-12 col-md-6'>
                <p className="h2" data-aos="fade-right"> <span className='subtitle'>Retrieve your </span>income tax notices <span className='subtitle'>&</span> documents</p>
              </div>

              <div className='title2 col-12 col-md-6'>
                <p className='h5' data-aos="fade-right">
                  "Auto-fetching of income tax notices and processing <br />
                  of tax-related notices, enabling timely awareness and action."
                </p>
              </div>

              <div className='button'>
                <Link to={"/getstart"} className="nav-item">
                  <button class="btn btnhome">Get Start</button>
                </Link>

                <Link to={"/signup"} className="nav-item">
                  <button class="btn btnhome">7 Days Free Trial</button>
                </Link>
            </div>
            </div>
          </div>
        </div>
      </section> 

      <section className='container home' data-aos="fade-up">
        <p className="h3">
          Features of <span className='text-primary'>Auto Notice Download</span>
        </p>

        <div className='row feature' data-aos="fade-right">
          <div className='col-lg-1'>
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>

          <div className='col-lg-11'>
            <p className='h5 featuretitle'>Easily Login</p>
            <p className='fetureinfo'>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">"Easily login" implies a process where users can access their accounts swiftly and without complications</li>
                <li class="list-group-item">This approach enhances user experience by reducing the steps and time required for authentication, ensuring a more efficient and seamless entry into digital platforms.</li>
                <li class="list-group-item">"Easily log in to your account by entering your username and password.</li>
                <li class="list-group-item">Enjoy quick access with just a few taps or clicks!"</li>
              </ul>
            </p>
          </div>
        </div>

        <div className='row feature' data-aos="fade-left">
          <div className='col-lg-1'>
            <i class="fa-solid fa-list-check"></i>
          </div>

          <div className='col-lg-11'>
            <p className='h5 featuretitle'>Track Your ITR</p>
            <p className='fetureinfo'>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">"You can track your Income Tax Return (ITR) status."</li>
                <li class="list-group-item">Regular tracking ensures you stay updated on any required actions or potential issues with your filing.</li>
                <li class="list-group-item">This helps in timely processing and resolution of any discrepancies.</li>
                <li class="list-group-item">Monitor the status of your Income Tax Return (ITR) to ensure timely processing and avoid any compliance issues.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className='row feature' data-aos="fade-right">
          <div className='col-lg-1'>
            <i class="fa-solid fa-download"></i>
          </div>

          <div className='col-lg-11'>
            <p className='h5 featuretitle'>Download Client Information In Just One Click</p>
            <p className='fetureinfo'>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">"Download client information in 'Excel' format in just one click for effortless data access.</li>
                <li class="list-group-item">Eg. Personal Information, Bank Account Deatils, Demat Account, Source of Income, Jurisdiction Details, Representative Assessee, Tax Deposit, Refund/Demand, Recent Filed Return, Recent Form Filed, FYA, FYI.</li>
                <li class="list-group-item">Simplify your workflow and save time with quick, streamlined downloads.</li>
                <li class="list-group-item">Enhance efficiency and keep vital information at your fingertips."</li>
              </ul>
            </p>
          </div>
        </div>

        <div className='row feature' data-aos="fade-left">
          <div className='col-lg-1'>
            <i class="fa-solid fa-file-pdf"></i>
          </div>

          <div className='col-lg-11'>
            <p className='h5 featuretitle'>Downlod FYA & FYI Notice</p>
            <p className='fetureinfo'>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Download For Your Action Notices & For Your Information in just one click</li>
                <li class="list-group-item">Save time by responding to the notice before the deadline.</li>
                <li class="list-group-item">Get the notice in just few seconds.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <section className='container home faqs'>
        <p className="h3 title" data-aos="fade-up">
          FAQ's on <span className='text-primary'>Auto Notice Download</span>
        </p>

        <div id="parent">
          <div className='row faqs'>
            <div class="card" data-aos="fade-up">
              <div class="card-header">
                <a href="#one" data-bs-toggle="collapse"><p className='h5 homequestin1'>1. What is ITR?</p></a>
              </div>

              <div class="collapse" id="one" data-bs-parent="#parent">
                <div class="card-body">
                  <p className='questinans'>
                    Income Tax Return (ITR) is a form which a person is supposed to submit to the Income Tax Department of India. It contains information about the person’s income and the taxes to be paid on it during the year. Information filed in ITR should pertain to a particular financial year, i.e. starting on 1st April and ending on 31st March of the next year.
                  </p>
                </div>
              </div>
            </div>

            <div class="card question" data-aos="fade-up">
              <div class="card-header">
                <a href="#two" data-bs-toggle="collapse"><p className='h5 homequestin1'>2. What is ITR Notice?</p></a>
              </div>

              <div class="collapse" id="two" data-bs-parent="#parent">
                <div class="card-body">
                  <p className='questinans'>
                    An income tax notice is a written communication sent by the Income Tax Department to a taxpayer alerting him to an issue with his tax account. The notice can be sent for different reasons, such as filing/ non-filing their income tax return, making the assessment, asking for certain details, etc.
                  </p>
                </div>
              </div>
            </div>

            <div class="card question" data-aos="fade-up">
              <div class="card-header">
                <a href="#three" data-bs-toggle="collapse"><p className='h5 homequestin1'>3. What does this software do?</p></a>
              </div>

              <div class="collapse" id="three" data-bs-parent="#parent">
                <div class="card-body">
                  <p className='questinans'>
                    To download FYA and FYI notices and user profile information in Excel format, use the designated software or platform feature that allows exporting such data. Navigate to the section for notifications or user details, select the relevant records, and choose the export option. This will generate an Excel file with all the necessary details for easy review and management.
                  </p>
                </div>
              </div>
            </div>

            <div class="card question" data-aos="fade-up">
              <div class="card-header">
                <a href="#four" data-bs-toggle="collapse"><p className='h5 homequestin1'>4. In what ways will this software be beneficial?</p></a>
              </div>

              <div class="collapse" id="four" data-bs-parent="#parent">
                <div class="card-body">
                  <p className='questinans'>
                    - You can monitor the progress of your Income Tax Return (ITR) filing. <br />
                    - This software ensures quick processing and resolution of discrepancies. <br />
                    - Keep track of your Income Tax Return (ITR) status to ensure it's processed promptly and avoid compliance issues. <br />
                    - Streamline your workflow and save time with fast, efficient downloads. <br />
                    - Quickly download your personal information in Excel format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container home trialhome'>
        <p className="h2" data-aos="fade-up">
          Let's begin with your <span className='text-primary'>TAX RETURN</span>
        </p>

        <div className='row trial'>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-lg-1'>
                <i class="fa-solid fa-check" data-aos="fade-right"></i>
              </div>

              <div className='col-lg-11'>
                <p className='traialtext' data-aos="fade-right">84 Days Access</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-1'>
                <i class="fa-solid fa-check" data-aos="fade-right"></i>
              </div>

              <div className='col-lg-11'>
                <p className='traialtext' data-aos="fade-right">
                  Provides ample time to thoroughly explore all features and functionalities of the software.
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-1'>
                <i class="fa-solid fa-check" data-aos="fade-right"></i>
              </div>

              <div className='col-lg-11'>
                <p className='traialtext' data-aos="fade-right">
                  Allows for testing in various scenarios and situations over an extended period.
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-1'>
                <i class="fa-solid fa-check" data-aos="fade-right"></i>
              </div>

              <div className='col-lg-11'>
                <p className='traialtext' data-aos="fade-right">
                  Helps in understanding long-term performance, reliability, and user support.
                </p>
              </div>
            </div>

            <div className='button mainbtndiv'>
              <Link to={"/getstart"} className="nav-item">
                <button class="btn btn-primary mainbtn" data-aos="fade-right">Get Start</button>
              </Link>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-lg-1'>
                <i class="fa-solid fa-xmark" data-aos="fade-left"></i>
              </div>

              <div className='col-lg-11'>
                <p className='traialtext' data-aos="fade-left">Only 7 Days Access</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-1'>
                <i class="fa-solid fa-xmark" data-aos="fade-left"></i>
              </div>

              <div className='col-lg-11'>
                <p className='traialtext' data-aos="fade-left">
                  Not sufficient for comprehensive testing, especially for complex or large-scale software.
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-1'>
                <i class="fa-solid fa-xmark" data-aos="fade-left"></i>
              </div>

              <div className='col-lg-10'>
                <p className='traialtext' data-aos="fade-left">
                  May lead to rushed decisions due to the short trial period.
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-1'>
                <i class="fa-solid fa-xmark" data-aos="fade-left"></i>
              </div>

              <div className='col-lg-11'>
                <p className='traialtext' data-aos="fade-left">
                  Might not uncover all potential issues or limitations of the software.
                </p>
              </div>
            </div>

            <div className='button'>
              <Link to={"/signup"} className="nav-item">
                <button class="btn btn-primary mainbtn" data-aos="fade-left">7 Days Free Trial</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home