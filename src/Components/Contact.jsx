import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { MdContactMail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a21259cc-308d-43e2-9b1f-df6d9bf99bdc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await res.json();
      if (result.success) {
        Swal.fire({
          title: "Successs!",
          text: "Message Sent Successfully!",
          icon: "success",
          background: 'black',
          color: 'white'
        });
        event.target.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id='contact' className='w-full h-full bg-black py-20'>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-6 space-y-6">
        <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
          <h1 className='text-4xl font-bold text-blue-400'>Get in Touch</h1>
          <p className='text-lg text-gray-400'>Feel free to reach out for collaborations, job opportunities, or any queries.</p>
          <div className='space-y-4 mt-4'>
            <p className='text-xl text-gray-300 flex items-center gap-2'><ImLocation2 className='text-blue-400' /> Chennai, TamilNadu</p>
            <p className='text-xl text-blue-500 flex items-center gap-2 hover:underline'><MdContactMail className='text-red-400' /><a href="mailto:harishharish8122@gmail.com" target='_blank' className='text-blue-500'>harishharish8122@gmail.com</a></p>
            <p className='text-xl flex items-center gap-2 text-gray-300'><FaPhoneAlt className='text-green-500' /> 8122182723</p>
            <p className='text-xl flex items-center gap-2 hover:underline'><FaLinkedin className='text-blue-500' /><a href="https://www.linkedin.com/in/harish-v-503714286" target='_blank' className='text-blue-500'>harish-v-503714286</a></p>
            <p className='text-xl flex items-center gap-2 text-blue-500 hover:underline'><FaSquareGithub className='text-gray-300' /><a href="https://github.com/HarishWiz" target='_blank'>HarishWiz</a></p>
          </div>
        </div>
        <div id='hire' className='w-full md:w-1/2 bg-gray-900 p-4 md:p-8 rounded-lg'>
          <h1 className='text-4xl text-purple-400 w-full text-center font-bold my-5'>Contact Me</h1>
          <form onSubmit={onSubmit}>
            <div className='mb-4 w-full flex flex-col'>
              <label className='text-white text-lg font-bold'>Name</label>
              <input type="text" name="name" placeholder='Name' required className='p-2 rounded-sm outline-none focus:ring-2 ring-blue-500 text-white bg-gray-700' />
            </div>
            <div className='mb-4 w-full flex flex-col'>
              <label className='text-white text-lg font-bold'>Email</label>
              <input type="email" name="email" placeholder='Email' required className='p-2 rounded-sm outline-none focus:ring-2 ring-blue-500 text-white bg-gray-700' />
            </div>
            <div className='mb-4 w-full flex flex-col'>
              <label className='text-white text-lg font-bold'>Message</label>
              <textarea name="message" rows={5} required placeholder='Message' className='p-2 rounded-sm outline-none focus:ring-2 ring-blue-500 text-white bg-gray-700'></textarea>
            </div>
            <button type="submit" className='w-full md:w-auto px-6 py-2 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
