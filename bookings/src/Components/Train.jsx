import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './img/train.json';
import axios from "axios";
import { useForm } from 'react-hook-form';



const Train = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [From, setFrom] = useState('');
    const [To, setTo] = useState('');
    const [trains, setTrains] = useState([]);
    const [loading, setLoading] = useState(false);

    
    axios.defaults.withCredentials=true;

    const delay = (d) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, d * 1000);
        });
      };
    
    const onSubmit = async (data) => {
        setLoading(true); // Show loading text
        await delay(1); // Prevent default form submission

        axios.post('https://arty-booking-api.vercel.app/findTrains', { from: From, to: To })
            .then(result => {

                if (result.data && result.data !== "no trains available") {
                    setTrains(result.data);
                } else {
                    setTrains([]);
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false); // Hide loading text after request completes
              });
    }



    const location = useLocation();

    useEffect(() => {

        const to = document.querySelector("#to");
        const msg = document.querySelector("#message");

        if (to.value === "To") {
            msg.innerHTML = "Give a proper input";
        }
        else {
            msg.innerHTML = "Train not available";
        }

        const effect = document.querySelector('.overlay');
        const train = document.querySelector('.train');
        const body = document.body

        // Adjust this based on your design
        body.style.overflow = "hidden"
        setTimeout(() => {

        }, 2500);
        setTimeout(() => {
            train.style.display = "none";
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

            <form id='travelForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='searchpanel p-10 glass-effect3 grid justify-center items-center justify-items-center gap-5'>

                    <div className='outline'>
                        <select
                            name="from"
                            id="from"
                            className='from text-center bg-white'
                            type="text"
                            placeholder="From"
                            onChange={(e) => setFrom(e.target.value)} >
                            <option value="From">From</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Indore">Indore</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Pune">Pune</option>
                            <option value="Ratlam">Ratlam</option>
                            <option value="Surat">Surat</option>
                            <option value="Udaipur">Udaipur</option>
                        </select>
                    </div>

                    <div className='outline' >
                        <select
                            name="to"
                            id="to"
                            className='to text-center bg-white'
                            type="text"
                            placeholder="To"
                            onChange={(e) => setTo(e.target.value)} >
                            <option value="To" >To</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Indore">Indore</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Pune">Pune</option>
                            <option value="Ratlam">Ratlam</option>
                            <option value="Surat">Surat</option>
                            <option value="Udaipur">Udaipur</option>
                        </select>
                    </div>
                    <div>
                        <button disabled={loading} className='font-bold text-xl' type="submit" name="submit">SEARCH</button>
                    </div>
                </div>
            </form>

            <div className={`justify-items-center items-center ${ loading ? 'grid md:h-56 h-36' : '' } `} >
                    {loading && 
                    <section class="loader">
                    <div>
                        <div>
                        <span class="one h6"></span>
                        <span class="two h3"></span>
                        </div>
                    </div>

                    <div>
                        <div>
                        <span class="one h1"></span>
                        </div>
                    </div>

                    <div>
                        <div>
                        <span class="two h2"></span>
                        </div>
                    </div>
                    <div>
                        <div>
                        <span class="one h4"></span>
                        </div>
                    </div>
                    </section>}
            </div>

            <div className={`box-container pt-32 flex flex-wrap gap-20 justify-center items-center m-0 p-5 md:p-20 ${ loading ? 'blur-md' : '' } `}>
                {trains.length > 0 ? (
                    trains.map((train, index) => (
                        <div key={index} className='box flex w-11/12 md:w-2/5  flex-wrap justify-center items-center cards glass-effect p-2'>
                            <div className='p-1 py-5 grid '>
                                <div>
                                    <h2 className='text-center mb-4'>Details :</h2>
                                </div>

                                {/* for the big screen */}
                                <div className='hidden md:flex gap-5 text-lg '>
                                    <div className='flex gap-1 '>
                                        <div className='p-3 grid text-gray-400'>
                                            <span>Name : </span>
                                            <span>From: </span>
                                            <span>Train No :  </span>
                                        </div>
                                        <div className='p-3 grid justify-center justify-items-center  font-bold'>
                                            <span>{train.name}</span>
                                            <span>{train.from}</span>
                                            <span>{train.tno}</span>
                                        </div>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='p-3 grid text-gray-400'>
                                            <span>Status: </span>
                                            <span>To: </span>
                                            <span>Price: </span>
                                        </div>
                                        <div className='p-3 grid  justify-center justify-items-center font-bold'>
                                            <span className={train.status === "Avl" ? 'text-green-600' : 'text-red-500'}>{train.status}</span>
                                            <span>{train.to}</span>
                                            <span>{train.price}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* for the small screen */}
                                <div className='flex md:hidden text-sm '>
                                    <div className='grid p-4 '>
                                        <div className=' grid text-gray-400'>
                                            <span>Name : </span>
                                            <span>Status : </span>
                                            <span>Train No : </span>
                                            <span>Price : </span>
                                        </div>

                                    </div>
                                    <div className='grid p-4 '>
                                        <div className=' grid justify-center justify-items-center  font-bold'>
                                            <span>{train.name}</span>
                                            <span className={train.status === "Avl" ? 'text-green-600' : 'text-red-500'}>{train.status}</span>
                                            <span>{train.tno}</span>
                                            <span>{train.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p id='message' className='font-bold text-3xl text-red-700'>No trains available on this route !</p>
                )}
            </div>



            <div className=' flex flex-wrap gap-20 justify-center items-center m-0 p-20'>







                <div className='overlay'>  </div>
                <div className='train'>
                    <Lottie options={defaultOptions} />
                </div>


            </div>

        </div>
    )
}

export default Train