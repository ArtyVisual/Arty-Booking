import React, { useEffect } from 'react'
import img from './img/logo2.png'
import { NavLink } from 'react-router-dom'
import menu from './img/burger-bar.png'
import git from './img/github.png'

const Dash = () => {

  
  const drop=()=>{
    const drop = document.querySelector("#drop");
    drop.style.left="30%"
    drop.style.display = "grid";
    
  };

  const hide=()=>{
    const drop = document.querySelector("#drop");
    drop.style.display = "none";
  };

  useEffect(() => {
    const unsplashAccessKey = 'lwUgRXIpnFcohLNzQ4v4TqAOLqOriaMxL0iqkF8fvMk';
    const query = 'Travel & scenery'; // Corrected spelling of "scenario" to "scenery"

    async function fetchRandomImage() {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${unsplashAccessKey}`);
        const data = await response.json();
        const imgElement = document.querySelector('.main');
        if (imgElement) {
          imgElement.style.backgroundImage = `url(${data.urls.raw}&w=800&h=600&fit=crop)`;
        }
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    }

    fetchRandomImage(); // Call the function directly

  }, []);

  return (
    <div className='main'>
      <div className='p-5' >
        <div className=' glass-effect  md:flex justify-between items-center'>

          <div className='flex justify-center items-center'>
            <img className='w-10 h-8 m-2' src={img} alt="" />
            <span className='text-black font-bold'>Arty-Bookings</span>
          </div>
          <div>

          <ul className='links md:w-72  text-md hidden md:flex justify-evenly items-center font-extrabold text-black'>
            <li>
              <NavLink to="/" activeClassName="active">
                HOME
              </NavLink>
            </li>
            <li>ABOUT</li>
            <li>HELP</li>
          </ul>
          </div>
          {/* <div >
            <img className='md:hidden cursor-pointer ' id='menu' onClick={drop} src={menu} alt="" />

          </div> */}
          <div  className='md:block hidden'>
          <div className="hidden md:flex navbar-end  ">
                    <NavLink to="https://github.com/ArtyVisual/">
                        <div className='flex items-center hover:bg-gray-500 bg-white btn mr-2 px-2 py-2 rounded-md m-2
                        text-black font-sans'>
                            <img src={git} className='w-6 h-6 ' alt="" />
                            <span className=" hidden text-md md:flex px-1 font-bold ">GITHUB</span>
                        </div>
                    </NavLink>
                </div>
          </div>
        </div>
      </div>
      {/* <ul id='drop' onMouseEnter={drop} onMouseLeave={hide} className='links mx-5 md:w-72 hidden md:hidden text-md glass-effect2 bg-white p-2 justify-evenly justify-items-center items-center font-extrabold text-black'>
            <li>
              <NavLink to="/" activeClassName="active">
                HOME
              </NavLink>
            </li>
            <li>ABOUT</li>
            <li>HELP</li>
      </ul> */}
      <ul className='bmenu md:hidden links w-full glass-effect5 text-md flex justify-evenly items-center font-extrabold text-white'>
            <li>
              <NavLink to="/" activeClassName="active">
                HOME
              </NavLink>
            </li>
            <li>ABOUT</li>
            <li>HELP</li>
          </ul>
      <div className='dash grid md:flex justify-evenly items-center justify-items-center'>
        <div className='lobster-bold buttons glass-effect1 mt-8 md:mt-32 mb-10 md:mb-52 md:w-2/6 w-4/5 justify-center py-8 md:py-14  flex flex-wrap gap-10'>

          <NavLink to={"/Hotel"}>
            <button>Hotels</button>
          </NavLink>

          <NavLink to={"/Flight"}>
            <button>Flight</button>
          </NavLink>

          <NavLink to={"/Train"}>
            <button>Train</button>
          </NavLink>

          <NavLink to={"/Bus"}>
            <button>Bus</button>
          </NavLink>

          <NavLink to={"/Events"}>
            <button>Events</button>
          </NavLink>

          <a href="https://artyvisual.github.io/Arty-Finance/">
            <button>Finance</button>
          </a>

        </div>
        <div className='glass-effect1 grid justify-center justify-items-center pt-2 p-4 mt-10 md:mt-32 mb-52 w-2/3 md:w-1/4 h-fit'>
          <span className='bebas-neue text-md md:text-2xl p-2' >- Schedule - </span>
          <div className='p-3 schedule text-white md:text-lg text-center'>
            No schedule
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae iure,
            libero natus assumenda, harum ea at rerum dolore explicabo laudantium dolor iste  quis
            doloribus minus facere id sed voluptates dicta tempora? Quis.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dash