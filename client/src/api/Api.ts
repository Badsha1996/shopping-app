import axios from "axios";


// https://fakestoreapi.com/products
export async function getItemsData() {
    try {
        const res = await axios.get(
            "https://fakestoreapiserver.reactbd.com/products/"
        )
        // console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
   
}