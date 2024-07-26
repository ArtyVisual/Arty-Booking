import React from 'react'
import img from './img/logo2.png'
import { NavLink } from 'react-router-dom'
import menu from './img/burger-bar.png'

const Navbar = () => {


    const drop = () => {
        const drop = document.querySelector("#drop");
        drop.style.display = "grid";
    };

    const hide = () => {
        const drop = document.querySelector("#drop");
        drop.style.display = "none";
    };


    return (
        <div className='p-5 nav' >
            <div className=' glass-effect md:flex justify-between items-center'>

                <div className='flex justify-center items-center'>
                    <img className='w-10 h-8 m-2' src={img} alt="" />
                    <span className='text-black font-bold'>Arty-Bookings</span>
                </div>
                <ul className='links md:w-72 text-md hidden md:flex justify-evenly items-center font-extrabold text-black'>
                    <li>
                        <NavLink to="/" activeClassName="active">
                            HOME
                        </NavLink>
                    </li>
                    <li>ABOUT</li>
                    <li>HELP</li>
                </ul>
                {/* <div >
                    <img className='md:hidden' id='menu' onClick={drop} src={menu} alt="" />
                </div> */}
                <div className='md:block hidden'>
                    <button className='m-2'>
                        github
                    </button>
                </div>
            </div>
            {/* <ul id='drop' onMouseEnter={drop} onMouseLeave={hide} className=' links  m-1 mx-5 md:w-72 hidden md:hidden text-md glass-effect2 bg-white p-2 justify-evenly justify-items-center items-center font-extrabold text-black'>
                <li>
                    <NavLink to="/" activeClassName="active">
                        HOME
                    </NavLink>
                </li>
                <li>ABOUT</li>
                <li>HELP</li>
            </ul> */}
            <div className='flex justify-center items-center px-4'>

                <ul className='bmenu md:hidden links w-full glass-effect4  text-md flex justify-evenly items-center font-extrabold text-black'>
                        <li>
                        <NavLink to="/" activeClassName="active">
                            HOME
                        </NavLink>
                        </li>
                        <li>ABOUT</li>
                        <li>HELP</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar