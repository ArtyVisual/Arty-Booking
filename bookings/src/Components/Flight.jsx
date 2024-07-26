import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './img/plane1.json';
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

const Flight = () => {
    
    const [From, setFrom] = useState('');
    const [To, setTo] = useState('');
    const [flights, setFlights] = useState([]);

    
    axios.defaults.withCredentials=true;
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        axios.post('/findFlights', { from: From, to: To })
            .then(result => {
                
                if (result.data && result.data !== "no flights available") {
                    setFlights(result.data);
                } else {
                    setFlights([]);
                }
            })
            .catch(err => console.log(err));
    }



    const location = useLocation();

    useEffect(() => {

        const to = document.querySelector("#to");
        const msg = document.querySelector("#message");

        if (to.value === "To") {
            msg.innerHTML = "Give a proper input";
        }


        const effect = document.querySelector('.overlay');
        const bus = document.querySelector('.plane');
        const body = document.body
        
        bus.style.top="-10%";
        bus.style.left= "-30%";
          // Adjust this based on your design
        body.style.overflow = "hidden"
        setTimeout(() => {
            bus.style.top="75%";
            bus.style.left="70%";
        }, 100)

        setTimeout(() => {
            bus.style.display="none"
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
            <div  className='searchpanel p-10 glass-effect3 grid justify-center items-center justify-items-center gap-5'>

                    <div className='outline'>
                        <select
                        name="from" 
                        id="from" 
                        className='from text-center bg-white' 
                        type="text" 
                        placeholder="From"
                        onChange={(e)=>setFrom(e.target.value)} >
                        <option value="" enabled>From</option>
                        <option value="India">India</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Dubai">Dubai</option>
                        </select>
                    </div>
                    
                    <div  className='outline' >
                    <select
                        name="to" 
                        id="to" 
                        className='to text-center bg-white' 
                        type="text" 
                         placeholder="To"
                        onChange={(e)=>setTo(e.target.value)} >
                       <option value="To" enabled>To</option>
                        <option value="India">India</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Dubai">Dubai</option>
                        </select>
                    </div>

                    <div>
                        <button className='font-bold text-xl' type="submit" name="submit">SEARCH</button>
                    </div>
            </div>
            </form>

            <div className='box-container pt-32 flex flex-wrap gap-20 justify-center items-center m-0 p-20'>
                {flights.length > 0 ? (
                    flights.map((flight, index) => (
                        <div key={index} className='box grid md:flex cards glass-effect p-2'>
                            <img className='h-44 w-56' src={imageMap[flight.img]} alt="" />
                            <div className='p-5 grid '>
                                <div>
                                     <h2 className='text-center'>Details :</h2>
                                </div>
                                <div className='flex gap-1'>
                                    <div className='p-3 grid'>
                                        <span>From: </span>
                                        <span>To: </span>
                                        <span>Price: </span>
                                    </div>
                                    <div className='p-3 grid'>
                                        <span>{flight.from}</span>
                                        <span>{flight.to}</span>
                                        <span>{flight.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p id='message' className='font-bold text-xl md:text-3xl text-red-700'>No flights available !</p>
                )}
            </div>
     


            <div className=' flex flex-wrap gap-20 justify-center items-center m-0 p-20'>


                




                <div className='overlay'>  </div>
                <div className='plane'>
                    <Lottie options={defaultOptions}
                    />
                </div>


            </div>

        </div>
    )
}

export default Flight