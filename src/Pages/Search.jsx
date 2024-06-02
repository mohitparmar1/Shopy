import { useContext, useState } from "react";
import Footer from "../Components/Footer";
import { SearchOutlined } from "@mui/icons-material";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item";

function Search() {

    const [category, setCategory] = useState("all")
    const [searchKey, setSearchKey] = useState("")
    const { all_products } = useContext(ShopContext);
    const [searchResults, setSearchResults] = useState([])

    const onCategoryChange = (val) => {
        setCategory(val)
    }

    const onSearchKeyChange = (val) => {
        setSearchKey(val.toLowerCase())
        setSearchResults([])
    }

    const onSearch = () => {
        if (searchKey === "") return;

        console.log(searchKey)

        const filteredProducts = all_products.filter((product) => {
            if (category === "all") return product.name.toLowerCase().includes(searchKey)
            return product.category === category && product.name.toLowerCase().includes(searchKey)
        })

        setSearchResults(filteredProducts)
        console.log("hello".toLowerCase().includes("HELLO".toLowerCase()))
        console.log(filteredProducts);

    }


    return (

        <>
            <section className="p-5 min-h-screen">

                <div className="w-full flex *:py-2 *:px-4 shadow-lg rounded-full">
                    <select
                        className="rounded-full border-2 hover:border-orange-500 outline-none"
                        onChange={(e) => onCategoryChange(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="kid">Kids</option>
                    </select>
                    <input
                        type="search"
                        placeholder="Search entire fashion here..."
                        className="flex-1 outline-none"
                        onChange={(e) => onSearchKeyChange(e.target.value)}
                    />
                    <button
                        className="bg-orange-500 rounded-r-full hover:bg-orange-600 text-white"
                        onClick={onSearch}
                    ><SearchOutlined /></button>
                </div>


                {
                    searchResults.length === 0 ? 
                        <p className="text-center mt-40">No items to display!</p> :
                        <div className="grid place-items-start mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {searchResults.map((product) => {
                                return <Item data={product} key={product.id} />;
                            })}
                        </div>
                }




            </section>
            <Footer />
        </>
    )

}

export default Search;