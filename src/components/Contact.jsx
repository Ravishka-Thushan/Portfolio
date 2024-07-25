import React from 'react';
import { PROFILE_DATA } from '../utils/data';
import { IoMdMail } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdOutlineWeb } from 'react-icons/md';


function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb529d45-07e4-43ed-892a-e5082c3cedfb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <section className='max-w-screen-xl mx-auto px-6 pb-20' id='contact'>
      <h5 className='text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14'>Contact Me</h5>

      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16'>
        <div>
          <ContactInfoCard icon={<IoMdMail/>} text={PROFILE_DATA.email}/>
          <ContactInfoCard icon={<IoPhonePortraitOutline/>} text={PROFILE_DATA.phone}/>
          <ContactInfoCard icon={<MdOutlineWeb/>} text={PROFILE_DATA.github}/>
        </div>

        <div>
          <h5 className='md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5'>Contact Form</h5>
          <form onSubmit={onSubmit} className='flex flex-col'>
            <input type="text" name="name" placeholder='Full Name' id='' className='input-box' autoComplete='off' />
            <input type="email" name="email" placeholder='Email' id='' className='input-box' autoComplete='off' />
            <textarea name="message" placeholder='Message' id='' rows='3' className='input-box' autoComplete='off'></textarea>
            <button type="submit" className='primary-btn'> SUBMIT </button>
          </form>
        </div>
        <span>{result}</span>
      </div>
    </section>
    </>
  )
}

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className='flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 py-3 mb-5'>
      <div className='w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-700'> {icon} </div>
      <p className='text-cyan-100 text-xs md:text-sm'> {text} </p>
    </div>
  );
};

export default Contact