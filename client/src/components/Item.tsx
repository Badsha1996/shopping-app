import { AiTwotoneTags } from "react-icons/Ai"
import { FaCartPlus } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { Idata } from "../types/Idata"
import useStore from "../zustand/Store"
import { useAppDispatch } from "../redux/hooks"
import { updateCart } from "../redux/shoppingSlice"
import { ToastContainer, toast } from "react-toastify"


export default function Item({ item }: { item: Idata }) {
  // const store = useStore();
  const dispath:any = useAppDispatch() //useDispather
  

  const navigate = useNavigate()
  const { _id, image, title, oldPrice, price, description } = item
  const id = title
  
  const covertId = (id: string) => {
    return String(id).toLowerCase().split(" ").join("");
  }

  const ID = covertId(id)
  const handleDetails = () => {
    navigate(`/items/${ID}`, {
      state: {
        item: item
      }
    })
  }
  return (
    <div className="group relative">
      {/* Image section */}
      <div className="border w-full  aspect-square 
       overflow-hidden cursor-pointer" onClick={handleDetails}>
        <img
          className="w-full h-full object-cover
        group-hover:scale-110 duration-300"
          src={image} alt="item image"
          loading="eager" />
      </div>
      {/* Add to cart and price section */}
      <div className="w-full border-[0.5rem] px-2 py-4">
        <div className="flex gap-2 justify-between items-center">
          <div>
            <strong>{title.substring(0, 12)}</strong>
          </div>

          <div className="flex w-32 gap-1 relative overflow-hidden">
            <div className="transform group-hover:translate-x-24 
            transition-transform duration-500 
            gap-2 text-sm relative 
            flex justify-end">
              <p className="font-semibold">&#8377;{price}</p>
              <p className="line-through text-gray-500">&#8377;{oldPrice}</p>

            </div>

            <p className="absolute flex items-center 
            gap-1 top-0 
            transform text-gray-500
             hover:text-gray-800 -translate-x-32 
            group-hover:translate-x-0 cursor-pointer duration-500"
              // onClick={()=>store.updateCart(item)}
              onClick={() => dispath(updateCart({
                _id: item._id,
                title : title,
                image:image,
                price:price,
                total : 1,
                description: description
              })) & toast.success(`${title} is added`) as any
            }
            ><FaCartPlus /> Add</p>
          </div>

        </div>

      </div>

      <div>
        <p className="font-semibold text-gray-600 text-sm border px-1 underline">{item.category}</p>
      </div>

      <div className="absolute top-0 right-0 text-white">
        {item.isNew && (
          <>
            <AiTwotoneTags className=" text-lg top-6 left-1 relative" />
            <p className="bg-gradient-to-r
             from-pink-500
             via-red-500
             to-yellow-500
             bg-red-500  text-white rounded-sm font-semibold py-1 px-6">NEW</p>
          </>
        )}
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
