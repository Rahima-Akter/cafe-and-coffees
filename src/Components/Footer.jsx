import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-[#040D11] text-white p-10">
            <div className="footer flex flex-col lg:w-10/12 mx-auto mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:place-items-center">
                    <nav className="">
                        <h6 className="font-bold text-xl">About us</h6>
                        <p className="opacity-60 pr-12">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </nav>
                    <nav className="">
                        <h6 className="font-bold text-xl mb-1">Quick Links</h6>
                        <div className="flex gap-4">
                            <div>
                                <li><a className="link link-hover">Home</a></li>
                                <li><a className="link link-hover">Projects</a></li>
                                <li><a className="link link-hover">About Us</a></li>
                                <li><a className="link link-hover">Events</a></li>
                            </div>
                            <div>
                                <li><a className="link link-hover">Blog</a></li>
                                <li><a className="link link-hover">Notice</a></li>
                                <li><a className="link link-hover">Join Us</a></li>
                                <li><a className="link link-hover">Contact Us</a></li>
                            </div>
                        </div>
                    </nav>
                    <form className="">
                        <h6 className="font-bold text-xl">Subscribe</h6>
                        <fieldset className="form-control w-80">
                            <p className="opacity-60 mb-3">Subscribe to our newsletter for the latest updates.</p>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input  join-item text-black" />
                                <button className="btn btn-primary border-none text-gray-800 bg-gradient-to-r from-pink-400 to-yellow-600 join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className="border border-gray-800 mt-8 mb-3"></div>
            <p className="text-center text-xs opacity-60">Copyright © SRiTY {new Date().getFullYear()} - All right reserved</p>
        </footer>
    );
};

export default Footer;