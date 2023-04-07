import { BsPersonCircle, BsTwitch, BsWhatsapp } from "react-icons/bs";
import { PaymentLogo } from "../assets/images";
import { AiOutlineShoppingCart, AiOutlineGithub, AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/Ai"

export default function Footer() {
    return (
        <div className="bg-black/95 text-white py-20 italic">
            <div className="max-w-screen-xl mx-1 md:mx-auto grid md:gap-2 md:grid-cols-4 gap-8 grid-cols-2 ">
                <div className="flex flex-col gap-2 left-1 relative l-1">
                    <div className="flex gap-1">
                        <AiOutlineShoppingCart />
                        <h1 className="italic font-extrabold"> SHOPNOW</h1>
                    </div>
                    <div className="flex gap-5 text-lg text-gray-500">
                        <AiOutlineGithub className="hover:text-gray-100 text-3xl duration-300 cursor-pointer" />
                        <AiOutlineYoutube className="hover:text-gray-100 text-3xl duration-300 cursor-pointer" />
                        <AiOutlineTwitter className="hover:text-gray-100 text-3xl duration-300 cursor-pointer" />
                        <AiOutlineFacebook className="hover:text-gray-100 text-3xl duration-300 cursor-pointer" />

                    </div>
                    <p className="text-gray-400 text-sm tracking-wide">© badsha laskar</p>
                    <img className="absolute p-0 top-12 left-[-1rem]  w-[10rem]" src={PaymentLogo} alt="payment logo" />

                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="italic font-extrabold">About us</h1>
                    <div className="text-gray-400 text-sm flex flex-col gap-1">
                        <p>Kolkata 70004, west bengal</p>
                        <p>Ph: +91 81708382391</p>
                        <p>badshalaskar0@gmail.com</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="italic font-extrabold">Follow us</h1>
                    <div className="text-gray-100 text-2xl flex gap-4">
                        <BsPersonCircle className="cursor-pointer" />
                        <BsTwitch className="cursor-pointer" />
                        <BsWhatsapp className="cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <input type="text" className="bg-transparent border px-4 py-2 text-sm"
                        placeholder="e-mail" />
                    <button className="text-sm border text-white border-t-0
                     hover:bg-gray-800
                     active:bg-white active:text-black" type="button">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
