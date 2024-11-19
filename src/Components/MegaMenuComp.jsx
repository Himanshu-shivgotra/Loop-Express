import { MegaMenu, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import "../App.css";
import useStickyNavbar from "../utils/CustomHooks/useStickyNavbar"
import Container from '../CommonComponents/Container';


function MegaMenuComp() {
    const isFixed = useStickyNavbar(50);
    return (
        <div className={""}>
            <Navbar fluid rounded className={`w-full bg-white relative z-20 ${isFixed ? "fixed top-0 left-0 right-0 shadow-lg" : ""}`}>
                <div className="mx-auto relative flex items-center justify-between w-full">
                    {/* Logo Section */}
                    <Navbar.Brand href="/">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://i.pinimg.com/originals/f6/63/5a/f6635aaf62877672744445aa642f2535.gif"
                                alt="Logo"
                                className="h-[6rem]"
                            />
                        </div>
                    </Navbar.Brand>

                    <div className="space-x-6 px-2 text-sm font-semibold hidden md:flex">
                        <Link to="/" className="hover:text-orange-400">WORKOUTS</Link>
                        <Link to="/articles" className="hover:text-orange-400">ARTICLES</Link>

                        {/* Dropdown Section */}
                        <MegaMenu.Dropdown className="mt-2 py-0" toggle={<span className="hover:text-orange-400">SHOP</span>}>
                            <ul className="grid grid-cols-4 gap-6 p-6 bg-white-200 text-gray-800 shadow-lg leading-7">
                                {/* Dropdown Categories */}
                                <div>
                                    <h3 className="font-bold text-lg mb-2">PROTEIN</h3>
                                    <li><Link to="/" className="block hover:text-orange-400">Whey Protein</Link></li>
                                    <li><Link to="" className="block hover:text-orange-400">Mass Weight Gainers</Link></li>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">PERFORMANCE</h3>
                                    <li><Link to="" className="block hover:text-orange-400">Pre-Workout</Link></li>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Healthy Weight</h3>
                                    <li><Link to="" className="block hover:text-orange-400">Fat Burner</Link></li>
                                    <li><Link to="" className="block hover:text-orange-400">Apetite Control</Link></li>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Vitamin & Supplement</h3>
                                    <li><Link to="" className="block hover:text-orange-400">Multivitamins</Link></li>
                                    <li><Link to="" className="block hover:text-orange-400">Joint Health</Link></li>
                                    <li><Link to="" className="block hover:text-orange-400">Fish Oil</Link></li>
                                </div>
                            </ul>
                        </MegaMenu.Dropdown>

                        <Link to="/" className="hover:text-orange-400">MEDITATION</Link>
                        <Link to="/fitness" className="hover:text-orange-400">FITNESS</Link>
                    </div>

                    {/* Right-side Icons  */}
                    <div className=" ml-2 flex items-center space-x-5 text-2xl">
                        <Link to={"/signin"} className="hover:text-orange-400"><FaUserCircle /></Link>
                        <Link to="/" className="hover:text-orange-400"><FaSearch /></Link>
                        <Link to="/" className="hover:text-orange-400"><FaCartArrowDown /></Link>
                    </div>

                    {/* Navbar Toggle for Smaller Screens (Hamburger Icon) */}
                    <div className="md:hidden flex items-center space-x-4 text-2xl">
                        <Navbar.Toggle />
                    </div>

                    {/* Mobile Menu (Hamburger) */}

                </div>
                <Navbar.Collapse className="md:hidden w-full ">
                    <div className="flex flex-col space-y-4 p-4">
                        <Link to="/" className="block py-2 text-gray-800 hover:text-orange-400">WORKOUTS</Link>
                        <Link to="/articles" className="block py-2 text-gray-800 hover:text-orange-400">ARTICLES</Link>

                        {/* Mobile Dropdown Section */}
                        <MegaMenu.Dropdown className="mt-2 py-0" toggle={<span className="block py-2 text-gray-800 hover:text-orange-400">SHOP</span>}>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-white-200 text-gray-800 shadow-lg leading-7">
                                {/* Dropdown Categories */}
                                <div>
                                    <h3 className="font-bold text-lg mb-2">PROTEIN</h3>
                                    <li><Link to="/" className="block hover:text-orange-400">Whey Protein</Link></li>
                                    <li><Link to="" className="block hover:text-orange-400">Mass Weight Gainers</Link></li>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">PERFORMANCE</h3>
                                    <li><Link to="" className="block hover:text-orange-400">Pre-Workout</Link></li>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Healthy Weight</h3>
                                    <li><Link to="" className="block hover:text-orange-400">Fat Burner</Link></li>
                                    <li><Link to="" className="block hover:text-orange-400">Apetite Control</Link></li>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Vitamin & Supplement</h3>
                                    <li><Link to="" className="block hover:text-orange-400">Multivitamins</Link></li>
                                    <li><Link to="" className="block hover:text-orange-400">Joint Health</Link></li>
                                    <li><Link to="" className="block hover:text-orange-400">Fish Oil</Link></li>
                                </div>
                            </ul>
                        </MegaMenu.Dropdown>
                        <Link to="/meditation" className="block py-2 text-gray-800 hover:text-orange-400">MEDITATION</Link>
                        <Link to="/fitness" className="block py-2 text-gray-800 hover:text-orange-400">FITNESS</Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default MegaMenuComp;
