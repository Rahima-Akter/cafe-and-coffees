import { useState } from 'react';
import { FaHome, FaCoffee, FaTachometerAlt, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 shadow-lg py-4 px-6">
            <div className="relative max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Logo or Name */}
                <div className="text-2xl font-semibold text-black">
                    Cafe&Coffees
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8 text-black">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `flex items-center space-x-2 hover:text-gray-700 ${isActive ? 'text-yellow-400' : ''}`}
                    >
                        <FaHome /> <span>Home</span>
                    </NavLink>
                    <NavLink
                        to="/coffees"
                        className={({ isActive }) => `flex items-center space-x-2 hover:text-gray-700 ${isActive ? 'text-yellow-400' : ''}`}
                    >
                        <FaCoffee /> <span>Coffees</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => `flex items-center space-x-2 hover:text-gray-700 ${isActive ? 'text-yellow-400' : ''}`}
                    >
                        <FaTachometerAlt /> <span>Dashboard</span>
                    </NavLink>
                </div>

                {/* Mobile Hamburger Menu Button */}
                <div className="md:hidden flex items-center text-black">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 bg-white p-4 absolute top-full left-0 right-0 shadow-lg border border-t z-10 overflow-y-auto max-h-[60vh] transition-transform duration-300 ease-in-out transform translate-y-0">
                    <NavLink to="/" className="text-black hover:text-gray-700" activeClassName="font-bold">
                        Home
                    </NavLink>
                    <NavLink to="/coffees" className="text-black hover:text-gray-700" activeClassName="font-bold">
                        Coffees
                    </NavLink>
                    <NavLink to="/dashboard" className="text-black hover:text-gray-700" activeClassName="font-bold">
                        Dashboard
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
