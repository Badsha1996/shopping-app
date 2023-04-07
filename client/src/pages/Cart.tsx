import { useEffect, useState } from "react"
import { CartHero } from "../assets/images"
import CartItems from "../components/CartItems"
import { useAppSelector } from "../redux/hooks"
import { Idata } from "../types/Idata"
import { toast } from "react-toastify"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"

export default function Cart() {
  const items = useAppSelector((state) => state.items)
  const user = useAppSelector((state) => state.userInfo)
  const [amount, setAmount] = useState('')
  const [signin, setSignin] = useState(false)
  useEffect(() => {
    let price = 0
    items.map((item: Idata) => {
      price += item.price * item.total
    })
    setAmount(price.toFixed(2))
  }, [items])

  const handleCheckout = () => {
    if (user) setSignin(true)
    else toast.error("Please Login first")
  }

  const token = async(token:any)=>{
    await axios.post("http://localhost:3000/pay",{
      amount:parseFloat(amount) * 100,
      token: token
    })
  }
  return (
    <div>
      <img src={CartHero} alt="cart screen image" className="
      w-screen h-64 object-cover" loading="eager" />
      <div className="mx-auto py-5 flex items-center 
      justify-center flex-col gap-2 md:flex-row ">
        <CartItems />
        <div className=" md:w-1/3 mx-1 rounded-2xl py-4 px-6 bg-gray-300">
          <div className="flex flex-col gap-6 border-b-2 border-b-gray-400 pb-6">
            <h1 className="font-medium text-2xl">Cart Total</h1>
            <p className="flex gap-4 text-base items-center">
              Subtotal:
              <span className="font-bold text-lg">&#8377;{amount}</span>
            </p>
            <p className="flex gap-4 text-base items-start">
              Shipping:
              <span className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </p>
          </div>
          <p className="font-semibold flex justify-between mt-4">
            Total <span className="text-xl font-bold">&#8377;{amount}</span>
          </p>
          <button onClick={handleCheckout} type="button" className="bg-black text-white w-full py-3 mt-4 text-base hover:bg-gray-800 duration-300 cursor-pointer rounded-md">
            Proceed to checkout
          </button>
          {
            signin && (
              <div className="w-full mt-4 flex items-center justify-center">
                <StripeCheckout stripeKey="pk_test_51MsG4fSD7CUYYCGoUmfGLaClMV0lpKuGCrqBIlf0ctFxu6OggGnGQWqVBoWl63h6eU2DXUhc6rwvOGsbnh9Frpfu00ooJT2vUO"
                name="shopping"
                amount={parseFloat(amount) * 100}
                label="pay now"
                description={`Your total amount is ${amount}`}
                token={token}
                email={user?.email}
                />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
