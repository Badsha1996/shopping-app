import { CartLogo, Hero, ShopLogo } from "../assets/images"
import { Sling as Hamburger } from 'hamburger-react'
import { ReactEventHandler, useState } from "react"
import { Link } from "react-router-dom"
import useStore from "../zustand/Store"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut
} from "firebase/auth"
import { login, logout } from "../redux/shoppingSlice"

import { ToastContainer, toast } from "react-toastify";

export default function Navbar() {
    // const store = useStore()
    const dispatch: any = useAppDispatch()
    const items = useAppSelector((state) => state.items)
    const user = useAppSelector((state) => state.userInfo)

    const [isOpen, setOpen] = useState(false)
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((cred) => {
                const user = cred.user;
                dispatch(login({
                    _id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }))

            })
            .catch((err) => console.log(err))
    }

    const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        signOut(auth).then(() => {
            dispatch(logout()) & toast.success(`Singing out`) as any
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className="sticky z-50 top-0 h-20 bg-white border-b-[0.05rem] border-gray-700 ">
            <div className="  h-full mx-auto  flex items-center justify-between">
                <Link to={"/"}>
                    <div className="flex items-center">
                        <img src={ShopLogo} className="w-16 mix-blend-normal" alt="PageLogo" />
                        <span className="text-xl font-bold italic ">ShopNow</span>
                    </div>
                </Link>

                <div className="flex items-center gap-8 ">
                    {user && (
                        <div>
                            <img className="w-8 rounded-full" src={user?.image} alt="profileLogo" />
                        </div>
                    )}
                    <Link to={"/cart"}>
                        <div className="relative">
                            <img src={CartLogo} className="w-8 " alt="shoppingCart" />
                            <span className={`${items.length === 0 ? "hidden" : "absolute w-4 h-4 p-[.6rem] top-0 left-4 text-sm flex items-center text-white rounded-full bg-red-600 justify-center font-semibold"}`}>{items.length}</span>
                        </div>
                    </Link>


                    <ul className={` hidden w-full
                mt-36   md:mt-auto   md:flex items-center gap-8 md:bg-white`}>
                        {user && (<li onClick={(e) => handleLogout(e)} className=" text-base duration-300 transition ease-in-out text-white outline-none bg-red-600 rounded-md px-2 py-1 hover:bg-transparent hover:text-black hover:outline hover:outline-[0.1rem] hover:outline-black
                        decoration-[0.1rem] 
                        cursor-pointer focus-visible:none focus:outline-slate-600">Logout</li>)}
                        {
                            user === null && (<li onClick={(e) => handleLogin(e)} className=" text-base duration-75 hover:duration-300 hover:transition hover:ease-in-out hover:text-white hover:outline-none hover:bg-red-600 rounded-md px-2 py-1 bg-transparent text-black outline outline-[0.1rem] outline-black
                        decoration-[0.1rem] 
                        cursor-pointer focus-visible:none focus:outline-slate-600 ">Login</li>)
                        }
                        <li className=" text-base text-black font-bold hover:text-white md:hover:text-red-600
                    hover:underline underline-offset-2 decoration-[0.1rem] 
                    cursor-pointer">Home</li>
                        <li className=" text-base text-black font-bold hover:text-white md:hover:text-red-600
                    hover:underline underline-offset-2 decoration-[0.1rem] 
                    cursor-pointer">Shop</li>
                        <li className=" text-base text-black font-bold hover:text-white md:hover:text-red-600
                    hover:underline underline-offset-2 decoration-[0.1rem] 
                    cursor-pointer">Pages</li>
                        <li className=" text-base text-black font-bold hover:text-white md:hover:text-red-600
                    hover:underline underline-offset-2 decoration-[0.1rem] 
                    cursor-pointer">Blog</li>
                    </ul>


                    {/* MOBILE HUMBURGER MENU */}
                    <div className="md:hidden  h-[15rem] relative   mt-[12rem] w-12 mr-1 flex flex-col gap-4 items-center">
                        <div className={`${isOpen === true ? ' ' : 'bg-inherit'}`}>
                            <Hamburger size={20} toggled={isOpen} toggle={setOpen} distance="lg" duration={0.8} />
                        </div>


                    </div>

                </div>
            </div>


            <div className={`${isOpen == false ? 'translate-y-[-50rem]' : 'translate-y-[0rem]'} h-[81vh] w-full top-[0rem] z-20  md:hidden  relative  transition-transform duration-500 flex items-center
            justify-center
            bg-gradient-to-r from-red-700 via-red-600 to-red-700
            
            `}>


                <div className="w-full flex gap-2 items-center justify-center ml-2 z-30">
                    <ul className=" flex flex-col items-end gap-14 ">

                        <li className="border-white/20 cursor-pointer  bg-gray-400/20  border border-t-0 border-l-0 border-r-0 py-4 px-16 
                        text-white
                        hover:bg-white 
                        hover:text-black
                        hover:border-gray-400 duration-500 font-semibold">Home</li>
                        <li className="border-white/20 border  cursor-pointer border-t-0 border-l-0 border-r-0 py-4 px-16  text-white
                        hover:bg-white 
                        hover:text-black hover:border-gray-400 duration-500 font-semibold">Blog</li>
                        <li className="border-white/20 cursor-pointer border border-t-0 border-l-0 border-r-0 py-4 px-16  text-white
                        hover:bg-white 
                        hover:text-black
                        hover:border-gray-400 duration-500 font-semibold">Cloths</li>
                        <li className="border-white/20 cursor-pointer border border-t-0 border-l-0 border-r-0 py-4 px-16  text-white
                        hover:bg-white 
                        hover:text-black
                        hover:border-gray-400 duration-500 font-semibold">Shop</li>
                    </ul>
                </div>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

