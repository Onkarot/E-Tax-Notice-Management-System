import React from 'react'

function Contact() {
  return (
    <div className='container'>
        <section className='homeone contact-us'>
            <p className="h2">
                <span className='text-primary'>Contact</span> Us
            </p>


            <div className='row map'>
                <div className='col-sm-6'>
                    <div class="ratio ratio-16x9 location">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.9242631170058!2d73.82923606493408!3d18.51108441400725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf906baa8cc5%3A0xb507f9185583136a!2sMihir%20Jagtap%20%26%20Associates!5e0!3m2!1sen!2sin!4v1718708240657!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <form>
                        <div className='contactus'>
                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="text" id="form4Example1" class="form-control"  placeholder='Enter Full Name'/>
                            </div>

                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="email" id="form4Example2" class="form-control" placeholder='Enter Email Address'/>
                            </div>

                            <div data-mdb-input-init class="form-outline mb-4">
                                <textarea class="form-control" id="form4Example3" rows="4" placeholder='Message'></textarea>
                            </div>

                            <div class="form-check d-flex justify-content-center mb-4 copymsg">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                                <label class="form-check-label" for="form4Example4">Send me a copy of this message</label>
                            </div>

                            <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4 btnsend">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact