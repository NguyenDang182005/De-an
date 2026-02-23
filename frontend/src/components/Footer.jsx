import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-booking-blue text-white mt-10">
            <div className="max-w-6xl mx-auto px-4 py-6 text-center">
                <button className="border border-white hover:bg-white hover:text-booking-blue transition-colors px-4 py-2 text-sm font-semibold rounded mb-6">
                    List your property
                </button>
                <div className="h-px bg-white bg-opacity-20 mb-6"></div>
                <ul className="flex flex-wrap justify-center space-x-4 space-y-2 md:space-y-0 text-sm font-semibold underline mb-4">
                    <li><a href="#">Mobile version</a></li>
                    <li><a href="#">Your account</a></li>
                    <li><a href="#">Customer Service help</a></li>
                    <li><a href="#">Become an affiliate</a></li>
                    <li><a href="#">Booking.com for Business</a></li>
                </ul>
            </div>
            <div className="bg-booking-dark text-white text-xs py-4 text-center">
                Copyright © 1996–2026 Booking.com clone. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
