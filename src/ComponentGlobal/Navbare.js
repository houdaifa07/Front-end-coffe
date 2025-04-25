// import React, { useState } from 'react';
import Logo from '../Logo/Gemahlen Logo.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import product from '../Images/Product Image - Variant 1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { Dellet } from '../reduxe/action';
import { Clear } from '../reduxe/action';

function Navbar({ onSearch }) {
  const [shakingId, setShakingId] = useState(false);
  const [rotating, setRotating] = useState(false);
  const [opencard, setopencard] = useState(false);
  const [cardbuy, setcardbuy] = useState(false);

  // const [data, setdata] = useState(false);

  const data = useSelector(state => state.cart);
  const counttotal_data = useSelector(state => state.cart.reduce((acc, ele) => acc + (ele.price * ele.quantity), 0));
  let countdata = 0;
  data.map(() => {
    return (countdata += 1);
  })


  const dispatch = useDispatch();



  useEffect(() => {
    const handelscroll = () => {
      setopencard(false)
    }
    window.addEventListener('scroll', handelscroll);
  }, [])

  const handleRotate = () => {
    setRotating(true);
    setTimeout(() => {
      setRotating(false);
    }, 500);
  };
  const handlecard = () => {
    setopencard(!opencard)
    handleRotate()
  }
  const handeldelete = (id) => {
    dispatch(Dellet(id))
  }
  const handelchaking = () => {
    setShakingId(true);
    handleBuyNow()
    setTimeout(() => {
      setShakingId(false);
    }, 300);

  }

  const [datacardbuy, setdatacardbuy] = useState({
    Name: '',
    CardNumber: '',
    ExpiryDate: '',
    IssuingCountOryregion: '',
    CID: ''
  })

  const handleBuyNow = async () => {
    if (data.length === 0) {
      setShakingId(true);

      alert('Your cart is empty!');
      return;
    }

    const cartItems = data.map(item => ({
      image_src: item.image_src || '../Images/Product Image - Variant 1.jpg',
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      total: parseFloat((counttotal_data).toFixed(2)),
      Name: datacardbuy.Name,
      CardNumber: datacardbuy.CardNumber,
      IssuingCountOryregion: datacardbuy.IssuingCountOryregion,
      ExpiryDate: datacardbuy.ExpiryDate,
      CID: datacardbuy.CID
    }));
    try {
      const response = await axios.post('http://localhost:8000/api/post_product', { items: cartItems });
      alert('Products buyed successfully ');
      console.log(response.data);
    } catch (error) {
      console.error('Full Axios Error:', error); // Logs everything
      console.log('Response:', error.response);  // Logs Laravel response
      alert(error.response?.data?.message || 'There was an error with your purchase. Please try again.');
    }
    setcardbuy(true)
    dispatch(Clear(data))
    setTimeout(() => {
      setopencard(false);
      setcardbuy(false);
    }, 400)
  };

  return (<>
    <nav className="Navbare z-1 bg-white position-relative container mx-auto  d-flex justify-between items-center">
      <div className="container mx-auto  d-flex justify-between items-center">
        <img src={Logo} alt='7df' className="h-20 w-auto p-1 " />
        <ul className="d-flex justify-between items-center ">
          <li class="nav-item">
            <Link className='nav-link  active' to="/home ">
              Home
            </Link>
          </li>
          <li>

            <Link
              className='position-relative nav-link  '
              to="/shop"

            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/contacte">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/Add_product">
              Admin
            </Link>
          </li>
        </ul>
        {/* <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul> */}
      </div>
      <div className="last-info d-flex  jusctify-content-center align-items-center text-center end-0 ">
        <input onChange={(e) => { onSearch(e.target.value || "") }} className='serch form-control rounded-md' class=" serch form-control" type="search" placeholder="Search" aria-label="Search" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="ic text-xl cursor-pointer" />
        <FontAwesomeIcon icon={faCartShopping} className={`ic2 text-xl cursor-pointer ${rotating ? 'rotate' : ''}`} onClick={handlecard} />
        <div className='' >
          <p className='' style={{
            fontSize: "12px",
            fontWeight: "600",
            color: "#FFFFFF",
            backgroundColor: "#6d4b34c2",
            width: "20px",
            height: "20px",
            top: "12%",
            left: "10%",
            marginLeft: "14px",
            borderRadius: " 15px 15px 15px 15px"
          }}>
            {countdata}
          </p>
        </div>
      </div>
    </nav >
    {
      cardbuy === true
        ? <section className='form position-absolute left-0 z-1  container col p-5' style={{ backgroundColor: "white", boxShadow: '6px 6px 10px' }}>
          <div className='mb-4'>
            <label className="block mb-2 font-medium" htmlFor='name'>
              Name
            </label>
            <input
              className='border rounded w-[400px] py-2 px-3 focus:outline-none w-100'
              id='name'
              type='text'
              placeholder='Your Name'
              onChange={(e) => { setdatacardbuy(prev => ({ ...prev, Name: e.target.value })) }}

            />
          </div>
          <div className='d-flex justify-around gap-4'>
            <div className='mb-4 w-50'>
              <label className="block mb-2 font-medium" htmlFor='name'>
                Card Number
              </label>
              <input
                className='border rounded w-[400px] py-2 px-3 focus:outline-none w-100'
                id='name'
                type='text'
                placeholder='Card Number'
                onChange={(e) => { setdatacardbuy(prev => ({ ...prev, CardNumber: e.target.value })) }}

              />
            </div>
            <div className='mb-4 w-50'>
              <label className="block mb-2 font-medium" htmlFor='email'>
                Issuing Country/region
              </label>
              <input
                className='border rounded w-[400px] py-2 px-3 focus:outline-none w-100'
                id='email'
                type='text'
                placeholder='Issuing Country/region'
                onChange={(e) => { setdatacardbuy(prev => ({ ...prev, IssuingCountOryregion: e.target.value })) }}

              />
            </div>
          </div>
          <div className='d-flex  w-100 gap-4'>

            <div className='mb-4 w-50'>
              <label className='block mb-2 font-medium' htmlFor='message'>
                Expiry Date
              </label>
              <input
                className='border rounded w-[400px] py-2 px-3 focus:outline-none w-100'
                id='email'
                type='text'
                placeholder='Expiry Date'
                onChange={(e) => { setdatacardbuy(prev => ({ ...prev, ExpiryDate: e.target.value })) }}

              />
            </div>

            <div className='w-50'>
              <label className='block mb-2 font-medium' htmlFor='message'>
                CID
              </label>
              <input
                className='border rounded w-[400px] py-2 px-3 focus:outline-none w-100'
                id='email'
                type='text'
                placeholder='CID'
                onChange={(e) => { setdatacardbuy(prev => ({ ...prev, CID: e.target.value })) }}
              />
            </div>
          </div>
          <div className='d-flex gap-4 items-center justify-between'>
            <button
              className="btn-shop w-50 "
              onClick={handelchaking}
            >
              Send
            </button>
            <button
              className="btn-shop w-50  "
              onClick={() => { setcardbuy(false) }}
            >
              close
            </button>
          </div>
        </section>
        : ""

    }
    {
      opencard === true

        ?
        <div className='all-cart  position-absolute top-5 end-0 w-full h-full'>
          {
            data.map((ele) => (
              <div key={ele.id} className='cart items-center'>
                <img src={`/${ele.image_src}`} alt={ele.title} className='h-20 w-20' />
                <div className='info-card d-flex justify-around items-center'>
                  <div className='title-cart fst-italic w-50 border-end border-3'>
                    {ele.title}
                  </div>
                  <p className='price-cart fst-italic m-1 ms-3'>
                    Price: {ele.quantity} x {ele.price}
                  </p>
                  <FaTrash
                    className='text-danger end-0 my-3 me-3 position-absolute'
                    style={{ cursor: 'pointer' }}
                    onClick={() => { handeldelete(ele.id) }}
                  />
                </div>
              </div>
            ))
          }
          <div className='d-flex items-center  justify-content-between p-2 '>

            <button className={`btn-shop ${shakingId === true ? 'shake' : ''}`} onClick={() => { setcardbuy(true); setopencard(false) }}> Buy Now</button>
            <div>
              <div className='me-5'> {parseFloat(counttotal_data.toFixed(2))} </div>
            </div>
          </div>
        </div >
        : ''
    }
  </>);
}

export default Navbar;
