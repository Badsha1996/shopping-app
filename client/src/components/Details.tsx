import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Idata } from "../types/Idata"
import { MdOutlineStar } from "react-icons/md"
import { useAppDispatch } from "../redux/hooks"
import { updateCart } from "../redux/shoppingSlice"
import { ToastContainer, toast } from "react-toastify"

export default function Details() {
    const dispatch:any = useAppDispatch()
    const [details, setDetails] = useState<Idata>()
    const [total, setTotal ] = useState<number>(1)
    const location = useLocation()

    useEffect(() => {
        setDetails(location.state.item)
    }, [])

    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-auto flex gap-10">
                <div className="relative my-2 ml-2">
                    <img src={details?.image} alt="deatil image"
                        className="w-full object-cover" />
                    <div className="absolute top-0 right-0">
                        {details?.isNew && (
                            <>
                                <p className="bg-gradient-to-r
             from-pink-500
             via-red-500
             to-yellow-500
             bg-red-500 text-white 
                             font-semibold
                             py-1 px-8">
                                    Discount
                                </p>
                            </>
                        )}
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center gap-12">
                    <div>
                        <strong className="text-xl md:text-2xl font-semibold">
                            {details?.title}
                        </strong>
                        <div className="flex items-center 
                        gap-4 mt-3">
                            <p className="line-through text-gray-500">
                                &#8377;{details?.oldPrice}</p>
                            <p className="font-semibold">&#8377;{details?.price}</p>

                        </div>
                    </div>
                    <div className="flex items-center  text-base">
                        <div className="flex">
                            {Array(details?.rating)
                                .fill(0)
                                .map((_, index) => (
                                    <MdOutlineStar key={index + ''} />
                                ))}
                        </div>
                        <p className="text-gray-400">(Customer Review)</p>
                    </div>
                    <div>
                        <p className="text-sm md:text-base">{details?.description}</p>
                    </div>


                    <div className="flex gap-0 md:gap-4 flex-col sm:flex-row items-center justify-center">

                        <div className="w-auto flex items-center justify-between
                        text-gray-500 gap-4 border p-auto mb-4">
                            <p className="text-sm">Quintity: </p>
                            <div className="flex items-center
                            gap-4 text-sm font-semibold">
                                <button onClick={()=>setTotal(total+1)}  type="button" className="
                                flex items-center text-lg justify-center px-2 hover:bg-gray-800
                                hover:text-white
                                duration-500 active:bg-black
                                ">+</button>
                                <span>{total}</span>
                                <button onClick={()=>setTotal(total ===1 ? 1 : total-1)} type="button" className="
                                flex items-center text-lg justify-center px-2 hover:bg-gray-800
                                hover:text-white
                                duration-500 active:bg-black
                                ">-</button>
                            </div>
                        </div>
                        <button onClick={()=> dispatch(updateCart({
                            _id: details?._id,
                            title : details?.title,
                            image:details?.image,
                            price:details?.price,
                            total : total,
                            description: details?.description
              })) & toast.success(`${details?.title} is added`) as any
            } className="bg-black text-white  active:bg-gray-800
                            hover:bg-gray-800 text-[0.7rem] sm:text-base mb-4 md:text-base py-4 px-6">Add to Cart</button>

                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop = {false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
        </div>
    )
}
