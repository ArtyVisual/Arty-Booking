import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './img/Events.json';
import axios from "axios";

import f1 from './img/airindia.png'
import f2 from './img/spicejet.jpg'
import f3 from './img/vistara.png'
import f4 from './img/goair.png'
import f5 from './img/emirates.png'
import f6 from './img/indigo.png'
import f7 from './img/akasa.png'
import f8 from './img/Shalini_Palace.jpg'


const imageMap = {
  f1: f1,
  f2: f2,
  f3: f3,
  f4: f4,
  f5: f5,
  f6: f6,
  f7: f7,
  f8: f8
};

const Events = () => {
  const [City, setCity] = useState('');
  const [hotels, setHotels] = useState([]);
  
  axios.defaults.withCredentials=true;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    axios.post('https://arty-booking-api.vercel.app/findHotels', { city: City })
      .then(result => {
        if (result.data && Array.isArray(result.data) && result.data.length > 0) {
          setHotels(result.data);
        } else {
          setHotels([]);
        }
      })
      .catch(err => console.log(err));
  }


  const location = useLocation();


  useEffect(() => {
    const city = document.querySelector("#city");
    const msg = document.querySelector("#message");

    if (city.value = "City") {
        msg.innerHTML = "Give a proper input";
    }

    const effect = document.querySelector('.overlay');
    const hotel = document.querySelector('.hdelay');
    const body = document.body

    // Adjust this based on your design
    body.style.overflow = "hidden"
    setTimeout(() => {
      hotel.style.display = "none";
      effect.style.display = "none";
      body.style.overflowY = "scroll"
    }, 3000);

  }, [location]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };



  return (
    <div className='hotel' >
    <form id='travelForm' onSubmit={handleSubmit}>
      <div className='searchpanel p-10 glass-effect3 grid justify-center items-center justify-items-center gap-5'>

        <div className='outline'>
          <select 
            name="city"
            id="city"
            className='city text-center bg-white'
            onChange={(e) => setCity(e.target.value)}>
            <option value="City" enabled>City</option>
            <option value="Udaipur">Udaipur</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
        </div>
        <div>
          <button className='font-bold text-xl hover:text-blue-950' type="submit" name="submit">SEARCH</button>
        </div>

      </div>
    </form>

    <div className='box-container  flex flex-wrap gap-20 justify-center items-center m-0 p-10 md:p-20'>

      {hotels.length > 0 ? (
        hotels.map((hotel, index) => (
          <div key={index} className='box cards glass-effect p-2'>
            <div className='grid justify-items-center justify-center items-center'>
            <img className='h-44 w-fit' src={imageMap[hotel.img]} alt="" />
            </div>
            <div className='p-5 grid '>
              <div>
                <h2 className='text-center'>DETAILS:</h2>
              </div>
              <div className='flex gap-1'>
                <div className='p-3 grid'>
                  <span>Name: </span>
                  <span>Price: </span>  
                </div>
                <div className='p-3 w-fit grid'>
                  <span>{hotel.name}</span>
                  <span className='text-center'>{hotel.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p id='message' className='font-bold text-3xl py-40  text-red-700'>No Hotels available !</p>
      )}
    </div>

    <div className='overlay'>  </div>

    <div className='hdelay'>
      <Lottie options={defaultOptions} className="saver" />
    </div>
  </div>
  )
}

export default Events