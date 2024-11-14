import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartArrowDown, FaUserCircle } from "react-icons/fa";

const HeaderComp = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // Set to false initially

    return (
        <nav className="text-black px-4 py-3 flex items-center justify-between shadow-lg  relative">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <img src="https://i.pinimg.com/originals/f6/63/5a/f6635aaf62877672744445aa642f2535.gif" alt="Logo" className="h-[7rem] w-[7rem]" />
            </div>

            {/* Navigation Links - Center the menu */}
            <div className="w-full flex justify-center">
                <div className="sm:flex space-x-12 text-sm font-semibold relative">
                    <div
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}  // Change to close the dropdown
                        className="relative">
                        <Link to="" className="hover:text-orange-400">SHOP</Link>
                        {/* Mega Menu Dropdown */}
                        {isDropdownOpen && (
                            <div className="absolute left-0 top-full w-screen bg-gray-800 text-white py-8 shadow-lg z-10">
                                <div className="max-w-7xl mx-auto px-8 grid grid-cols-5 gap-8">
                                    <div>
                                        <h3 className="font-bold text-white mb-2">PROTEIN</h3>
                                        <ul>
                                            <li><Link to="/shop/whey-protein" className="hover:text-orange-400">Whey Protein</Link></li>
                                            <li><Link to="/shop/whey-protein-isolate" className="hover:text-orange-400">Whey Protein Isolate</Link></li>
                                            <li><Link to="/shop/mass-weight-gainers" className="hover:text-orange-400">Mass Weight Gainers</Link></li>
                                            <li><Link to="/shop/casein-protein" className="hover:text-orange-400">Casein Protein</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-2">PERFORMANCE & RECOVERY</h3>
                                        <ul>
                                            <li><Link to="/shop/pre-workout" className="hover:text-orange-400">Pre-Workout</Link></li>
                                            <li><Link to="/shop/intra-workout" className="hover:text-orange-400">Intra Workout</Link></li>
                                            <li><Link to="/shop/post-workout" className="hover:text-orange-400">Post Workout</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-2">VITAMINS & SUPPLEMENTS</h3>
                                        <ul>
                                            <li><Link to="/shop/multivitamins" className="hover:text-orange-400">Multivitamins</Link></li>
                                            <li><Link to="/shop/vitamins-a-z" className="hover:text-orange-400">Vitamins A-Z</Link></li>
                                            <li><Link to="/shop/probiotics" className="hover:text-orange-400">Probiotics & Gut Health</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-2">EQUIPMENT & ACCESSORIES</h3>
                                        <ul>
                                            <li><Link to="/shop/scales" className="hover:text-orange-400">Scales</Link></li>
                                            <li><Link to="/shop/home-gym-equipment" className="hover:text-orange-400">Home Gym Equipment</Link></li>
                                            <li><Link to="/shop/recovery-tools" className="hover:text-orange-400">Recovery Tools</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-2">TRENDING</h3>
                                        <ul>
                                            <li><Link to="/shop/bodyfit" className="hover:text-orange-400">BodyFit</Link></li>
                                            <li><Link to="/shop/gift-cards" className="hover:text-orange-400">Gift Cards</Link></li>
                                            <li><Link to="" className="hover:text-orange-400">New Arrivals</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to="" className="hover:text-orange-400">WORKOUTS</Link>
                    <Link to="" className="hover:text-orange-400">ARTICLES</Link>
                    <Link to="" className="hover:text-orange-400">MEDITATION</Link>
                    <Link to="" className="hover:text-orange-400">FITNESS</Link>
                </div>
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-6">
                <button className="hover:text-orange-400 text-2xl">
                    <FaUserCircle />
                </button>
                <button className="hover:text-orange-400 text-2xl">
                    <FaSearch />
                </button>
                <button className="hover:text-orange-400 text-2xl">
                    <FaCartArrowDown />
                </button>
            </div>
        </nav>
    );
};

export default HeaderComp;
