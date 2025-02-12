import React from 'react'
import { Link } from 'react-router-dom'


const Userlogin = () => {
  return (
    <div>
      <div className="body">

        <div className="text">What's your phone number or email ? </div>
        <div className="second">

          <div className=" text-decoration-none border-none">
            
            <select className='border-none  bg-gray-200 rounded-xl' name="cars" id="cars">
  <option className='border-none'  value="volvo"></option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</div>

<input className = ' bg-gray-200 rounded-xl border-none input' type="text" placeholder='+91 7638496273' />
<div className="h-5 w-20 bg-[#121212] rounded-sm flex justify-center items-center"><Link className='  text-decoration-none text-white ' to='/signup'>Continue</Link></div>

<h2>---------------------------- or -------------------------------</h2>

<div className="h-10 w-60 mb-2 bg-gray-200 rounded-2xl">   <i className="fab fa-google text-2xl"> Continue with Google  </i> </div>
<div className="h-10 w-60 mb-2 bg-gray-200 rounded-2xl"> <i className="fab fa-facebook text-2xl"> Continue with Facebook</i></div>
<div className="h-10 w-60 mb-2 bg-gray-200 rounded-2xl" >   <i className="fab fa-apple text-2xl"></i> Continue with Apple</div>

        <h2>By proceeding you consent to get calls , WhatsApp or SMS message including by automated means , from Uber and its affiliates to the number provided . </h2>
        
        <h2>This site is provided by reCAPTCHA and the Google Privacy , Policy and TermofService apply </h2>
        
        <i className="fas fa-thumbs-up"></i>
        </div>

      </div>


    </div>
  )
}

export default Userlogin
