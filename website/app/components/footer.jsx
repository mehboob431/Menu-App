"use client";

import Link from "next/link";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import {
    FaWhatsappSquare,
    FaFacebookSquare,
    FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="bg-black text-white py-12"
            style={{
                backgroundImage: "url('/footer-bg.png')", // Path to the background image
                backgroundSize: "cover", // Ensure the image covers the whole footer
                backgroundPosition: "center", // Center the background image
                backgroundRepeat: "no-repeat", // Prevent the image from repeating
            }}
        >

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pd-10px">
                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Shahi Dewan</h3>
                    <div className="flex items-center">
                        <BsTelephoneInboundFill className="text-yellow-500 mr-2" />
                        <span>05815454990</span>
                    </div>
                    <div className="flex items-center">
                        <BsTelephoneInboundFill className="text-yellow-500 mr-2" />
                        <span>03454342008</span>
                    </div>
                    <div className="flex items-center">
                        <MdOutlineMarkEmailUnread className="text-yellow-500 mr-2" />
                        <span>info@shahidewan.org</span>
                    </div>
                    <div className="flex items-center">
                        <IoLocation className="text-yellow-500 mr-2" />
                        <span>Maqpon Plaza, Hussaini Chowk, Skardu</span>
                    </div>
                </div>

                {/* Opening Times */}
                <div className="space-y-4 text-center">
                    <h3 className="text-xl font-semibold">Opening Time</h3>
                    <p>Lunch Services</p>
                    <p>12pm to 4pm</p>
                    <p>Dinner Services</p>
                    <p>6pm to 12am</p>
                </div>

                {/* Newsletter Signup */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Subscribe Newsletter</h3>
                    <p>Subscribe to our newsletter to get regular updates about offers!</p>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 text-white p-2 rounded-l-md w-full focus:outline-none"
                        />
                        <button className="bg-yellow-500 p-2 rounded-r-md">
                            <MdOutlineMarkEmailUnread className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Social Icons and Footer Links */}
            <div className="container mx-auto mt-8 text-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="text-yellow-500">
                        <FaFacebookSquare className="text-2xl" />
                    </a>
                    <a href="#" className="text-yellow-500">
                        <FaInstagramSquare className="text-2xl" />
                    </a>
                    <a href="#" className="text-yellow-500">
                        <FaWhatsappSquare className="text-2xl" />
                    </a>
                </div>
                <p className="text-sm text-gray-500">
                    &copy; 2023 Shahi Dewan. Developed by Abdul Mateen.
                </p>
                <div className="text-sm text-gray-500 mt-2 space-x-4">
                    <Link href="/gallery" className="hover:text-yellow-500">Gallery</Link>
                    <Link href="/news" className="hover:text-yellow-500">News / Events</Link>
                    <Link href="/jobs" className="hover:text-yellow-500">Jobs</Link>
                    <Link href="/contact" className="hover:text-yellow-500">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
