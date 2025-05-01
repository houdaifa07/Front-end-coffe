import axios from 'axios';
import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'


export function Contacte() {


    const [datareview, setdatareview] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handelreview = async () => {
        if (!datareview.name.trim() || !datareview.email.trim() || !datareview.message.trim()) {
            alert('Please fill in all the input!');
            return;
        }
        try {
            const response = await axios.post("http://localhost:8000/api/addReview", {
                reviews: [{
                    name: datareview.name,
                    email: datareview.email,
                    message: datareview.message
                }]
            });
            setdatareview({ name: '', email: '', message: '' });

            alert('Send Message successfully');
            console.log(response.data)

        } catch (error) {
            console.error('Full Axios Error:', error);
            if (error.response) {
                alert(error.response?.data?.message || 'There was an error processing your request.');
            } else {
                alert('An error occurred. Please try again.');
            }
        }
    }


    return (
        <div className='contacte  container '>
            <h4 className=' pt-5 text-center font-bold fst-italic mb-4 '>If you have any questions don't hesitate to contact us.</h4>
            <div className="row infocontacte  ">
                <div className=' col  p-5  mb-5   '>
                    <h2 className=' font-bold  text- mb-5 fst-italic '>Contact Information</h2>
                    <div className='d-flex items-center mb-2'>
                        <FaMapMarkerAlt className='m-1' />
                        <p >123  Marrakech Morocco</p>
                    </div>
                    <div className='d-flex items-center mb-2 '>
                        <FaPhone className=' m-1' />
                        <p>+212 771659617</p>
                    </div>
                    <div className='d-flex items-center mb-2'>
                        <FaPhone className=' m-1' />
                        <p>+212 771659617</p>
                    </div>
                    <div className='d-flex items-center mb-5 me-1'>
                        <FaEnvelope className='m-1' />
                        <p> oublhoudaifa00@gmail.com</p>
                    </div>
                </div>
                <section className='form col p-5' style={{ backgroundColor: "#4f3b2e47" }}>
                    <div className='mb-4'>
                        <label className="block mb-2 font-medium" htmlFor='name'>
                            Name
                        </label>
                        <input
                            className='border rounded w-[400px] py-2 px-3 focus:outline-none w-100'
                            id='name'
                            type='text'
                            placeholder='Your Name'
                            value={datareview.name}
                            onChange={(e) => { setdatareview(prev => ({ ...prev, name: e.target.value })) }}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className="block mb-2 font-medium" htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='border rounded w-[400px] py-2 px-3 focus:outline-none w-100'
                            id='email'
                            type='email'
                            placeholder='Your Email'
                            value={datareview.email}
                            onChange={(e) => { setdatareview(prev => ({ ...prev, email: e.target.value })) }}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 font-medium' htmlFor='message'>
                            Message
                        </label>
                        <textarea
                            className='border rounded w-[400px] py-2 px-3 w-100'
                            id='message'
                            rows='4'
                            placeholder='Your Message'
                            value={datareview.message}

                            onChange={(e) => { setdatareview(prev => ({ ...prev, message: e.target.value })) }}

                        ></textarea>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            className="btn-shop w-100 "
                            onClick={handelreview}
                        >
                            Send
                        </button>
                    </div>
                </section>
            </div>
        </div >
    )
}