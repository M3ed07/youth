import React, { useState } from "react"; // Import React and useState hook
import { NavLink, Outlet } from "react-router-dom"; // Import NavLink and Outlet for routing
import { NavbarData } from "./NavbarData"; // Import NavbarData which contains the navigation links
import { HiMenuAlt1 } from "react-icons/hi"; // Import menu icon
import { HiMiniXMark } from "react-icons/hi2"; // Import close icon

const Navbar = () => {
    // State to track the open/close status of the menu
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container flex flex-col gap-y-10">
            {/* Navbar section */}
            <nav className="flex justify-between items-start ">
                <h1 className="text-3xl">SYBG</h1>
                <div className={`flex flex-col gap-y-4 w-1/2 lg:w-full ${isOpen ? 'items-start' : 'items-end'}`}>
                    {/* Menu toggle button for mobile view */}
                    <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiMiniXMark size={32} /> : <HiMenuAlt1 size={32} />}
                    </button>
                    {/* Navigation links */}
                    <ul className={`lg:w-1/2 lg:flex lg:justify-around ${isOpen ? 'flex flex-col gap-4' : 'hidden'}`}>
                        {NavbarData.map((item, index) => (
                            <li className="list-item" key={index}>
                                <NavLink to={item.path} onClick={() => setIsOpen(false)}>
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Main content section */}
            <main className={`${isOpen ? 'hidden' : 'block'}`}>
                <Outlet />
            </main>
        </div>
    );
};

export default Navbar;
