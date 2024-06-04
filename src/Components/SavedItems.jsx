
import React from "react"
import { useContext } from "react"
import { SavedContext } from "../Context/SavedContext"
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";


const SavedItems = () => {
    const { all_products, listItem, AddToList, RemoveFromList, getListQuantity } = useContext(SavedContext)
    const { AddToCart } = useContext(ShopContext)


    const wishlistItems = all_products.filter(item => listItem[item.id] > 0)
    console.log(wishlistItems)


    return (
        <>

            {
                wishlistItems.length === 0 ? (
                    <div className="grid place-items-center w-full py-20">
                        <h1 className="text-lg text-orange-500 mb-2">Your wishlist is empty!</h1>
                        <p className="text-center">Seems like you do not have any wishes here. <br /> Make a wish!</p>
                        <Link to="/"><button className="px-5 py-3 bg-orange-500 rounded-full my-4 text-white hover:bg-orange-600">Start shopping</button></Link>
                    </div>
                ) : <>
                    <div className="flex my-4 px-4">
                        <p className="font-normal ">Total products Wishlisted:  </p><p className="font-bold">{getListQuantity()}</p>
                    </div>
                    <div className="grid grid-cols-3 p-4">
                        {
                            wishlistItems.map((item) => {
                                return (
                                    <div className="h-220 w-94 bg-white space-x-7" key={item.id}>
                                        <img src={item.image} alt={item.name} className="h-150 w-92" />
                                        <div className="h-150 w-92">
                                            <p className="font-semibold font-serif">
                                                {(item.name.length > 40) ? (
                                                    // Truncate the name to the maximum length
                                                    item.name.substring(0, 40) + "..."
                                                ) : (item.name)
                                                }
                                            </p>
                                            <p className="font-mono font-bold">Category: {item.category}</p>
                                            <div className="grid grid-cols-2">
                                                <div><p className="font-bold text-green-900">${item.new_price}</p></div>
                                                <div><p className="line-through text-red-600">${item.old_price}</p></div>

                                            </div>
                                            <div className="flex space-x-20">

                                                <div><button onClick={() => {
                                                    RemoveFromList(item.id)
                                                }} className="bg-blue-950 text-white p-4 font-bold">Remove</button></div>
                                                <div><button className="bg-red-700 text-white p-4 font-extrabold" onClick={() => {
                                                    AddToCart(item.id)
                                                }}>Add to Cart</button></div>

                                            </div>
                                        </div>


                                    </div>
                                )
                            })
                        }



                    </div>
                </>
            }



        </>
    )
}

export default SavedItems;
