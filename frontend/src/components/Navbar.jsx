import React from 'react';
import { Link } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Navbar = () => {
    return (
        <header className="bg-booking-blue text-white">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tight">Booking.com</Link>

                {/* Right Menu */}
                <div className="hidden md:flex items-center space-x-6 text-sm font-semibold">
                    <button className="hover:bg-booking-dark p-2 rounded">VND</button>
                    <button className="hover:bg-booking-dark p-2 rounded">
                        <img src="https://flagcdn.com/w20/vn.png" alt="VN" className="w-5 h-5 rounded-full inline" />
                    </button>
                    <button className="hover:bg-booking-dark p-2 rounded">
                        <i className="fa-regular fa-circle-question text-xl"></i>
                    </button>
                    <button className="hover:bg-booking-dark p-2 rounded">List your property</button>

                    <div className="flex space-x-2">
                        <Link to="/register" className="bg-white text-booking-blue px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors">
                            Register
                        </Link>
                        <Link to="/login" className="bg-white text-booking-blue px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors">
                            Sign in
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <button className="md:hidden text-2xl">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>

            {/* Sub Navbar */}
            <div className="max-w-6xl mx-auto px-4 pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="flex space-x-2">
                    <button className="flex items-center space-x-2 border border-white bg-booking-dark rounded-full px-4 py-2 font-semibold">
                        <i className="fa-solid fa-bed"></i> <span>Stays</span>
                    </button>
                    <Link 
                    to="/flights" 
                    className="flex items-center space-x-2 hover:bg-booking-dark rounded-full px-4 py-2 font-semibold transition-colors text-white no-underline"
                    >
                    <i className="fa-solid fa-plane"></i> 
                    <span>Flights</span>
                    </Link>
                    <Link 
                    to="/flight-hotel" 
                    className="flex items-center space-x-2 hover:bg-booking-dark rounded-full px-4 py-2 font-semibold text-white no-underline"
                    >
                    <i className="fa-solid fa-suitcase"></i> 
                    <span>Flight + Hotel</span>
                    </Link>
                    <Link 
                    to="/car-rentals" 
                    className="flex items-center space-x-2 hover:bg-white/10 rounded-full px-4 py-2 font-semibold text-white no-underline"
                    >
                    <i className="fa-solid fa-car"></i> 
                    <span>Car rentals</span>
                    </Link>
                    <Link 
                    to="/attractions" 
                    className="flex items-center space-x-2 hover:bg-white/10 rounded-full px-4 py-2 font-semibold text-white no-underline"
                    >
                    <i className="fa-solid fa-fort-awesome"></i> 
                    <span>Attractions</span>
                    </Link>
                    <Link 
                    to="/airport-taxis" 
                    className="flex items-center space-x-2 hover:bg-white/10 rounded-full px-4 py-2 font-semibold text-white no-underline"
                    >
                    <i className="fa-solid fa-taxi"></i> 
                    <span>Airport taxis</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
