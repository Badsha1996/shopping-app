import { MdOutlineClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addTotal, removeCart, resetCart, substractTotal } from "../redux/shoppingSlice";
import { ToastContainer, toast } from "react-toastify";
import { Idata } from "../types/Idata";

export default function CartItems() {
    const dispatch: any = useAppDispatch()
    const items = useAppSelector((state) => state.items)

    return (
        <div className=" w-full">
            <div className="mx-4">
                <h2 className="text-2xl border border-gray-600 p-1 grid place-items-center">Shopping Cart</h2>
            </div>
            {
                items.length === 0 && (
                    <div>
                        <span className="text-base font-medium italic  text-red-600 flex items-center justify-center">The Cart is Empty</span>
                    </div>
                )
            }
            <div className="mx-4">
                {
                    items.map((item: Idata, index: number) => {

                        return (

                            <div key={index} className="flex  items-center justify-between gap-4 mt-4">
                                <div className="flex flex-wrap items-center gap-2">
                                    <MdOutlineClose onClick={() => dispatch(removeCart(item)) & toast.error(`${item.title} has been removed`) as any} className="
                    text-2xl text-gray-600 hover:text-red-600
                    cursor-pointer duration-300" />
                                    <img src={item.image} alt="cart item image"
                                        className="w-32 aspect-square object-cover" />
                                </div>
                                <div className=" flex gap-1 text-lg font-bold">
                                    <button type="button" className="px-1 aspect-square w-fit  hover:bg-gray-700 hover:text-white"
                                        onClick={() => dispatch(addTotal(item)) & toast.success(`${item.total + 1} ${item.title} has been added`) as any}>+</button>
                                    <button type="button" className=" px-1 aspect-square w-fit  hover:bg-gray-700 hover:text-white"
                                        onClick={() => dispatch(substractTotal(item)) & toast.error(`1 ${item.title} has been removed`) as any}>-</button>
                                </div>
                                <h2 className="w-fit  font-bold">{item.total}</h2>
                                <h2 className="w-fit text-base text-gray-500">{item.title}</h2>
                                <p className="w-fit text-lg font-semibold">&#8377;{item.total * item.price}</p>
                            </div>

                        )

                    })
                }
            </div>
            {
                items.length !== 0 && (
                    <div>
                        <button onClick={() => dispatch(resetCart()) & toast.error(`Cart is Empty`) as any} className="hover:bg-red-600 bg-red-300 mt-6 ml-6 py-1 px-6 text-white duration-300">Remove All</button>
                    </div>
                )
            }
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
                theme="colored"
            />
        </div>
    )
}

