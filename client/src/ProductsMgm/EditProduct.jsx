import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Inp from '../components/inputs/inp';

import { useParams } from 'react-router-dom';

function EditProduct() {
    const useparams = useParams();
    const [data,setdata]=useState([]);

    useEffect(()=>{
        const getdata  = async()=>{
            const url = `http://localhost:3000/api/v1/get-productbyid/${useparams.id}`;
            const response =await axios.get(url);
            setdata(response.data.singleProduct);
           
        }
        getdata();
    }

    
  
)
// console.log(data);
  return (
    <>
    <div className='flex flex-col items-center'>
   <h1 className='text-3xl font-semibold animate-pulse text-orange-400'>UPdate PRODUCT </h1>
        <Inp label='Product Title' type='text' name='title' value={data.title} onchange={(e) => setpd({ ...data, title: e.target.value })} className='mb-3' />
        
        <Inp label='Description' name='description' value={data.short_des} onchange={(e) => setpd({ ...data, description: e.target.value })} className='mb-3' />
        
        <Inp label='Price' name='price' value={data.price} onchange={(e) => setpd({ ...data, price: e.target.value })} className='mb-3' />
        
        <Inp label='Custom Description' name='customdesc' value={data.customdesc} onchange={(e) => setpd({ ...data, customdesc: e.target.value })} className='mb-3' />
        
        <Inp label='Category ID' name='categoryid' value={data.categoryid} onchange={(e) => setpd({ ...data, categoryid: e.target.value })} className='mb-3' />
        
        {/* <Inp label='Image' name='image' type='file' onchange={handleSingleFileChange} className='mb-3' /> */}
        
        {/* <Inp label='Main Image' type='file' multiple name='mainImage' onchange={handleFileChange} className='mb-3' /> */}
        
        <Inp label='Is Active' name='is_active' value={data.is_active} onchange={(e) => setpd({ ...data, is_active: e.target.value })} className='mb-3' />
        
        <Inp label='Brand' name='brand' value={data.brand} onchange={(e) => setpd({ ...data, brand: e.target.value })} className='mb-3' />
        
        <Inp label='Discount Price' name='discount_price' value={data.discount_price} onchange={(e) => setpd({ ...data, discount_price: e.target.value })} className='mb-3' />
        
        <Inp label='Status' name='status' value={data.status} onchange={(e) => setpd({ ...data, status: e.target.value })} className='mb-3' />
        
        <Inp label='Shipping Cost' name='shipping_cost' value={data.shipping_cost} onchange={(e) => setpd({ ...data, shipping_cost: e.target.value })} className='mb-3' />
        
        <Inp label='Tags' name='tags' value={data.tags} onchange={(e) => setpd({ ...data, tags: e.target.value })} className='mb-3' />
        <button type='button'>submit</button>
    </div>
</>
  )
}

export default EditProduct
