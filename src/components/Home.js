import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { displayData } from "../data/saveData";
import { GrAddCircle } from 'react-icons/gr'

const Home = () => {

    const navigate = useNavigate();

    const handlePage = () => {
        navigate("/productForm");
    }

    const data = displayData();
    const [data1, setData1] = useState(data);
    var tableRows1 = <div></div>;
    if(data != null) {
        tableRows1 = data1.map((item, idx) => {
            return (
                <tr className="flex justify-left border-t text-sm font-normal mt-4 ">
                    <td className="flex text-left px-6 mr-16">{idx+1}</td>
                    <td className="pl-16 ml-10 mr-auto">{item.bName}</td>
                    <td className="flex text-left mr-14">{item.bSName}</td>
                </tr>
            )
        });
    }

    return (
        <div className="py-6 px-80">
            <div className="bg-white p-4 rounded-md">
                <div>
                    <h2 className="flex justify-center mb-4 text-xl font-bold text-gray-700">Product Lists</h2>
                    <table className="min-w-full">
                        <thead>
                            <tr className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                                <th scope="col" className="text-left">ID#</th>
                                <th scope="col" className="text-left">Product Name</th>
                                <th scope="col" className="text-left">Short Name</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {tableRows1}
                        </tbody>
                        <div className="flex justify-end mt-4 px-2">
                            <GrAddCircle className="w-6 h-6 hover:cursor-pointer" onClick={handlePage}/>
                        </div>
                        
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home