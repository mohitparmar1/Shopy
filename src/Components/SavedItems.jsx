
import React from "react"
import {useContext} from "react"
import {SavedContext} from "../Context/SavedContext"
import { ShopContext } from "../Context/ShopContext";


const SavedItems=()=>{
    const {all_products,listItem,AddToList,RemoveFromList,getListQuantity}=useContext(SavedContext)
    const {AddToCart}=useContext(ShopContext)


    return(
        <>
        
        <div className="flex my-50"><p className="font-normal ">Total products Wishlisted:  </p><p className="font-bold">{getListQuantity()}</p></div>
        
        <div className="grid grid-cols-3 ">
        {
        all_products.map((item) => {
          if (listItem[item.id] > 0) {
            return(
                <div className="h-220 w-94 bg-white space-x-7" key={item.id}>
            <img src={item.image} alt={item.name} className="h-150 w-92"/>
            <div className="h-150 w-92">
            <p className="font-semibold font-serif">
                {(item.name.length > 40) ? (
    // Truncate the name to the maximum length
                    item.name.substring(0, 40) + "..."
                ): (item.name)
                }
            </p>
            <p className="font-mono font-bold">Category: {item.category}</p>
            <div className="grid grid-cols-2">
                <div><p className="font-bold text-green-900">${item.new_price}</p></div>
                <div><p className="line-through text-red-600">${item.old_price}</p></div>
            
            </div>
            <div className="flex space-x-20">
            
                <div><button onClick={()=>{
                    RemoveFromList(item.id)
                    }} className="bg-blue-950 text-white p-4 font-bold">Remove</button></div>
                <div><button  className="bg-red-700 text-white p-4 font-extrabold" onClick={()=>{
                    AddToCart(item.id)
                }}>Add to Cart</button></div>
            
            </div>
            </div>

            
        </div>
            )
          }
        })
        }
    
    

        </div>
        
        </>
    )
}

export default SavedItems;

/*function CardComponent(item){
    return(

        <div className="h-220 w-94 bg-white">
            <img src={item.image} alt={item.name} className="h-150 w-92"/>
            <p className="font-semibold">{item.name}</p>
            <p className="font-normal">#Category:{item.category}</p>
            <div className="flex justify-between">
                <p className="font-bold text-green-900">${item.new_price}</p>
                <p className="line-through text-red-600">${item.old_price}</p>
            
            </div>

            
        </div>
    )
}*/



/*<div className="flex justify-between bg-pink-300">
        {
        all_products.map((item) => {
          if (listItem[item.id] > 0) {
            return(
                <CardComponent item={item}/>
            )
          }
        })
        }
    
    

        </div>*/


/*<div className="flex justify-between">
                <button onClick={()=>{
                    RemoveFromList(item.id)
                    }} className="bg-blue-950 text-white">Remove</button>
                <button  className="bg-red-700 text-white">Add to Cart</button>
            </div>*/
