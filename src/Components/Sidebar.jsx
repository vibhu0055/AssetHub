import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className=" w-64 h-screen bg-blue-100 text-black p-4 mr-8">

                <ul className="space-y-2">
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                            `block p-2 rounded ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-200'}`
                        }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({ isActive }) =>
                            `block p-2 rounded ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-200'}`
                        }>Portfolio</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/crypto" className={({ isActive }) =>
                            `block p-2 rounded ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-200'}`
                        }>Crypto</NavLink>
                    </li>
                    <li>
                        <NavLink to="/stocks" className={({ isActive }) =>
                            `block p-2 rounded ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-200'}`
                        }>Stocks</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar