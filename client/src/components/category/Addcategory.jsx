import React, { useState } from 'react';
import Inp from '../inputs/inp';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addcategory() {
    const [catdata, setcatdata] = useState({
      category_name: "",
      desc: ""
    });
    const [st,setst]=useState("");

    const insertdata = async () => {
        console.log(catdata);
        const url = 'http://localhost:3000/api/v1/addcategory';
        // const formdata = new FormData();
        // formdata.append('category_name', "ok");
        // formdata.append('status', catdata.status);
        // formdata.append('desc', catdata.desc);
        // console.log(formdata);
    

        try {
            const res = await axios.post(url, {
                "category_name":catdata.category_name,
                "status":st,
                "desc":catdata.desc

            });
            console.log("Category added successfully:", res.data);
            // Clear form data after successful submission
            setcatdata({ category_name: "", status: "", desc: "" });
            toast('data inserted sucessfull');
        } catch (error) {
            toast(error);
            console.error("Error adding category:", error);
        }
    };

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-semibold animate-pulse text-orange-400'>Category Data</h1>
            <Inp 
                placeholder='Enter category name' 
                label={'Category Name'} 
                value={catdata.category_name} 
                onchange={(e) => setcatdata({ ...catdata, category_name: e.target.value })}
            />

            <div className='w-1/2 mb-2 mt-3'>
                <label htmlFor='status' className="block mb-2 text-sm font-medium text-gray-800">
                    Status
                </label>
                <select 
    value={st}
    onChange={(e) => setst(e.target.value)} 
    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
>
    <option value="1">Enabled</option>
    <option value="0">Disabled</option>
</select>

            </div>

            <Inp 
                placeholder='Enter description' 
                label={'Description'} 
                value={catdata.desc} 
                onchange={(e) => setcatdata({ ...catdata, desc: e.target.value })}
            />

            <button 
                className='bg-red-400 p-2 mt-2 mb-2 rounded-sm hover:bg-sky-300' 
                type='button' 
                onClick={insertdata}
            >
                Submit
            </button>
            <ToastContainer />
        </div>
    );
}

export default Addcategory;
