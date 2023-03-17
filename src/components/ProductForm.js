import React, { useState } from "react";
import {saveData} from '../data/saveData'
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
    const navigate = useNavigate();
    
    const [productData, setProductData] = useState({
        bName: "", bSName: "", fromDate: "", toDate: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if(saveData(productData)){
            navigate("/");
            console.log("Ok");
        } else {
            alert("Enter all the values")
        }
    }

    let name, value;
    const handleInput = (event) => {
        name = event.target.name;
        value = event.target.value;
        setProductData({...productData, [name]: value})
    }

    const handleClear = () => {
        setProductData({});
    }

    return (
        <div className="relative text-gray-800 flex justify-center overflow-hidden bg-gray-50 py-6 sm:py-7">
            <div className="relative py-3 sm:w-96 mx-auto text-center">
                <span className="text-2xl font-light ">Add Product Details</span>
                <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div className="h-2 bg-purple-400 rounded-t-md"></div>
                    <form method="POST" onSubmit={handleSubmit} action="/components/Home">
                        <div className="px-8 py-6 ">
                            <label className="block font-semibold"> Brand Name </label>
                            <input type="text" value={productData.bName} onChange={handleInput} placeholder="Brand Name" name="bName" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" autoComplete="off" />
                            <label className="block mt-3 font-semibold"> Brand Short Name </label>
                            <input type="text" value={productData.bSName} onChange={handleInput} placeholder="Brand Short Name" name="bSName" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" autoComplete="off" />
                            <label className="block mt-3 font-semibold"> From Date </label>
                            <input type="date" value={productData.fromDate} onChange={handleInput} name="fromDate" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" autoComplete="off" />
                            <label className="block mt-3 font-semibold"> To Date </label>
                            <input type="date" value={productData.toDate} onChange={handleInput} name="toDate" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" autoComplete="off" />
                            <div className="flex justify-between items-baseline px-14">
                                <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">ADD</button>
                                <button type="reset" onClick={handleClear} className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">CANCEL</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductForm