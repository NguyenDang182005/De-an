import React from 'react';

const Home = () => {
    return (
        <main className="grow">
            {/* Hero Section */}
            <div className="bg-booking-blue text-white">
                <div className="max-w-6xl mx-auto px-4 pt-12 pb-20">
                    <h1 className="text-5xl font-extrabold mb-4">Find your next stay</h1>
                    <p className="text-2xl">Search low prices on hotels, homes and much more...</p>
                </div>
            </div>

            {/* Search Box (Iconic part) */}
            <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
                <div className="bg-booking-yellow p-1 rounded-lg shadow-lg">
                    <form className="flex flex-col md:flex-row bg-white rounded-md overflow-hidden">

                        {/* Destination */}
                        <div className="flex-1 flex items-center p-3 border-b md:border-b-0 md:border-r border-yellow-400">
                            <i className="fa-solid fa-bed text-gray-400 mr-3 text-xl"></i>
                            <input type="text" placeholder="Where are you going?" className="w-full focus:outline-none text-gray-700 font-semibold placeholder-gray-500" />
                        </div>

                        {/* Dates */}
                        <div className="flex-1 flex items-center p-3 border-b md:border-b-0 md:border-r border-yellow-400 cursor-pointer">
                            <i className="fa-regular fa-calendar text-gray-400 mr-3 text-xl"></i>
                            <span className="text-gray-500 font-semibold truncate">Check-in Date - Check-out Date</span>
                        </div>

                        {/* Guests/Rooms */}
                        <div className="flex-1 flex items-center p-3 border-b md:border-b-0 md:border-r border-yellow-400 cursor-pointer">
                            <i className="fa-regular fa-user text-gray-400 mr-3 text-xl"></i>
                            <span className="text-gray-700 font-semibold truncate">2 adults · 0 children · 1 room</span>
                        </div>

                        {/* Search Button */}
                        <button type="button" className="bg-booking-blue hover:bg-booking-dark text-white font-bold text-xl px-8 py-4 transition-colors">
                            Search
                        </button>

                    </form>
                </div>

                {/* Checkbox Options */}
                <div className="flex items-center mt-3 text-sm text-gray-800 font-medium space-x-6">
                    <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 mr-2 accent-booking-blue border-gray-300 rounded" />
                        I'm looking for a whole house or apartment
                    </label>
                </div>
            </div>

            {/* Offers & Trending Destinations */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Offers */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-2">Offers</h2>
                    <p className="text-gray-600 mb-4">Promotions, deals and special offers for you</p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row shadow border border-gray-200">
                            <div className="flex-1 pr-4">
                                <h3 className="font-bold text-lg mb-1">Take your longest holiday yet</h3>
                                <p className="text-gray-600 mb-4 text-sm">Browse properties offering long-term stays, many at reduced monthly rates.</p>
                                <button className="bg-booking-blue text-white px-4 py-2 rounded font-semibold hover:bg-booking-dark">Find a stay</button>
                            </div>
                            <div className="w-full md:w-32 h-32 mt-4 md:mt-0 bg-cover bg-center rounded" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c53cd3b8ffac?w=400&q=80')" }}></div>
                        </div>
                        <div className="bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80')] bg-cover bg-center rounded-lg p-6 text-white shadow relative">
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="font-bold text-2xl mb-1">Escape for a while</h3>
                                    <p className="mb-4">Enjoy the freedom of a monthly stay on Booking.com</p>
                                </div>
                                <button className="bg-booking-blue text-white w-max px-4 py-2 rounded font-semibold hover:bg-booking-dark mt-4">Discover monthly stays</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trending destinations */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Trending destinations</h2>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        <div className="col-span-2 md:col-span-3 rounded-lg overflow-hidden relative cursor-pointer group h-64">
                            <img src="https://images.unsplash.com/photo-1583417311753-157d60548170?w=800&q=80" alt="HCMC" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-gray-900 via-transparent to-transparent p-4">
                                <h3 className="text-white font-bold text-2xl flex items-center space-x-2">Ho Chi Minh City <img src="https://flagcdn.com/w20/vn.png" alt="VN" className="ml-2 w-6 h-4 rounded" /></h3>
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-3 rounded-lg overflow-hidden relative cursor-pointer group h-64">
                            <img src="https://images.unsplash.com/photo-1629739572627-8adbc7d3ecae?w=800&q=80" alt="Da Lat" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-gray-900 via-transparent to-transparent p-4">
                                <h3 className="text-white font-bold text-2xl flex items-center space-x-2">Da Lat <img src="https://flagcdn.com/w20/vn.png" alt="VN" className="ml-2 w-6 h-4 rounded" /></h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
