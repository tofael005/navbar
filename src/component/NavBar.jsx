import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';


const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="bg-lime-700">
            <div className="ui-container py-6 px-3 text-white flex justify-between items-center max-w-[900px]  mx-auto">
                <div>
                    <h1>LOGO</h1>
                </div>

                <span className="md:hidden">
                    {
                        toggle ? <MdOutlineRestaurantMenu onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2 onClick={() => setToggle(!toggle)} />
                    }
                </span>

                <ul className={`flex gap-6 items-center duration-300 z-50 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-black font-semibold top-[10%] bg-black md:bg-transparent w-full md:w-auto md:flex-row absolute md:static ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "acitve" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" : ""}>Blog</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

