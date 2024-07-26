import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './img/building1.json';
import axios from 'axios';

import h1 from './img/bg1.jpg'
import ht1 from './img/taj_lake.webp'
import ht2 from './img/Grand_Hyatt.jpg'
import ht3 from './img/Lalgarh_Palace.jpg'
import ht4 from './img/rivera_soravar.jpg'
import ht5 from './img/falaknuma.webp'
import ht6 from './img/Udaipur_Lake_Palace.jpg'
import ht7 from './img/Hyatt_Hotel.jpg'
import ht8 from './img/Shalini_Palace.jpg'



const imageMap = {
  ht1: ht1,
  ht2: ht2,
  ht3: ht3,
  ht4: ht4,
  ht5: ht5,
  ht6: ht6,
  ht7: ht7,
  ht8: ht8
};

const Hotel = () => {

  const [City, setCity] = useState('');
  const [hotels, setHotels] = useState([]);

  axios.defaults.withCredentials=true;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    axios.post('/api/findHotels', { city: City })
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

export default Hotel