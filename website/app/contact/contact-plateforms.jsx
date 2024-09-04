import React from 'react'
import { MdOutlineMarkEmailUnread, MdOutlineDining } from "react-icons/md";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import {
    FaWhatsappSquare,
    FaFacebookSquare,
    FaInstagramSquare,

} from "react-icons/fa";
const contact = () => {
    return (
        <div>
            <h6 className="font-bold text-[#da7324]">Contact Us</h6>
            <ul className="mt-2 px-8 font-light text-black">
                <li className="py-2 text-sm flex justify-start items-center gap-2">
                    <MdOutlineMarkEmailUnread />
                    <span>info@shahidewan.org</span>
                </li>
                <li className="py-2 text-sm flex  justify-start items-center gap-2">
                    <BsTelephoneInboundFill />
                    <span>058-15454-990</span>
                </li>
                <li className="py-2 text-sm flex justify-start items-center gap-2">
                    <FaWhatsappSquare />
                    <span>03454342008</span>
                </li>
                <li className="py-2 text-sm flex justify-start items-center gap-2">
                    <IoLocation />
                    <span>Maqpon Plaza, Hussani Chow, Skardu</span>
                </li>
            </ul>
        </div>
    )
}

export default contact