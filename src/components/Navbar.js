import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-white border-2 border-gray-100 py-5 flex">
            <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%">
                <nav className="flex items-center w-auto">
                    <ul className="text-base text-gray-600 flex justify-between">
                        <Link to='/'>
                            <li className="px-8 py-2 hover:bg-violet-500 hover:rounded-3xl hover:text-white hover:cursor-pointer font-semibold">Home</li>
                        </Link>
                        <Link to='/productform'>
                            <li className="px-8 py-2 hover:bg-violet-500 hover:rounded-3xl hover:text-white hover:cursor-pointer font-semibold">Add Products</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar