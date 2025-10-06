import React, { useEffect, useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'

const Contactus = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

    const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email validation
    if (name.trim() && emailRegex.test(email) && message.trim()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const onSubmit = async (evt) => {
    evt.preventDefault();
    if (!isValid) return;


    const web3FormData = new FormData(evt.target);
    web3FormData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const data = await response.json();

      if (data.success) {
        ("Form Submitted Successfully");
        setFormData({ name: '', email: '', message: '' }); // reset controlled inputs
        evt.target.reset()
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong");
      }
    } catch (err) {
      console.log(err);
      setResult("Network error. Please try again.");
    }
  };


  return (
    <div id='contact' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title="Reach out to us" desc="From strategy to execution ,we craft digit solution that move your business forward. "/>
       
       <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' onClick={onSubmit}>

<div>
    <p className="mb-2 text-sm font-medium">Your Name</p>
    <div className='flex pl-3 rounded-lg border-lg border border-gray-300 dark:border-gray-600'>
        <img src={assets.person_icon} alt="" />
        <input type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' required name='name'    value={formData.name}
            onChange={handleChange}/>
    </div>
</div>



<div>
    <p className="mb-2 text-sm font-medium">Your Email</p>
    <div className='flex pl-3 rounded-lg border-lg border border-gray-300 dark:border-gray-600'>
        <img src={assets.email_icon} alt="" />
        <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required name='email'             value={formData.email}
            onChange={handleChange}/>
    </div>
</div>


<div className='sm:col-span-2'>
    <p className="mb-2 text-sm font-medium">Message</p>
<textarea rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' name='message' required           value={formData.message}
          onChange={handleChange}/>
</div>

<button
  type='submit'
  disabled={!isValid}
  className={`w-max flex gap-2 text-white text-sm px-10 py-3 rounded-full transition-all ${
    isValid
      ? 'bg-[#6200de] cursor-pointer hover:scale-103'
      : 'bg-[#6200de] cursor-not-allowed opacity-80'
  }`}
>
  Submit <img src={assets.arrow_icon} alt="" className='w-4' />
</button>

       </form>
    </div>
  )
}

export default Contactus
