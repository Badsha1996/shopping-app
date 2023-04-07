import { create } from "zustand"
import { Idata } from "../types/Idata"

type State ={
    items : Idata[]
    item : Idata
}

type Action  = {
    setItem : (item:State["item"]) => void,
    updateCart : (item:State["item"]) => void
}

const useStore = create<State & Action>((set)=>({
    items:[],
    item :{
        _id:0,
        total:0,
        image: "",
        title: "",
        oldPrice: 0,
        price: 0,
        category: "",
        isNew: false,
        description: "",
        rating: 0,},
    setItem : (item) => set((state)=>({ ...state,
        item:item})),
    updateCart : (item) => set((state)=>({
        ...state,
        items:[...state.items,item ]
    }))

}))

export default useStore;