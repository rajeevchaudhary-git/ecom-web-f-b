import React, { useEffect, useState } from 'react';
import Inp from '../components/inputs/inp';
import axios from 'axios';


function Insert() {
    const [productdata, setpd] = useState({
        title: "default_title",
        description: "",
        price: "",
        customdesc: "",
        categoryid: "",
        images: "",
        main_img: [], // Keep this as an array for multiple images
        is_active: "",
        brand: "",
        discount_price: "",
        status: "",
        shipping_cost: "",
        tags: ""
    });

    // Log the main images to the console
    // productdata.mainImage.forEach((item) => {
    //     console.log(item);
    // });

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setpd({ ...productdata, main_img: files }); 
    };

    const handleSingleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setpd({ ...productdata, images: files }); 
        
    };
  


    const inserdata = async () => {
        const formData = new FormData();
        formData.append('title', productdata.title);
        formData.append('description', productdata.description);
        formData.append('customdesc', productdata.customdesc);
        formData.append('price', productdata.price);
        formData.append('categoryid', productdata.categoryid);
        formData.append('is_active', productdata.is_active);
        formData.append('brand', productdata.brand || null); 
        formData.append('quantity', 100); 
        formData.append('discount_price', productdata.discount_price);
        formData.append('status', productdata.status);
        formData.append('shipping_cost', productdata.shipping_cost);
        formData.append('tags', productdata.tags);
    
        // single image
        if (productdata.images) {
            formData.append('images', productdata.images[0]); 
        }
    
        //  multiple main images
        productdata.main_img.forEach((file) => {
            formData.append('main_img', file);  //multer se matc hona chaayie 
        });
    
        const url = 'http://localhost:3000/api/v1/addproducts';
        const response = await axios.post(url, formData);
        console.log('Data inserted:', response.data);
    }
    
    return (
        <>
            <div className='flex flex-col items-center'>
           <h1 className='text-3xl font-semibold animate-pulse text-orange-400'>INSERTS PRODUCT </h1>
                <Inp label='Product Title' type='text' name='title' value={productdata.title} onchange={(e) => setpd({ ...productdata, title: e.target.value })} className='mb-3' />
                
                <Inp label='Description' name='description' value={productdata.description} onchange={(e) => setpd({ ...productdata, description: e.target.value })} className='mb-3' />
                
                <Inp label='Price' name='price' value={productdata.price} onchange={(e) => setpd({ ...productdata, price: e.target.value })} className='mb-3' />
                
                <Inp label='Custom Description' name='customdesc' value={productdata.customdesc} onchange={(e) => setpd({ ...productdata, customdesc: e.target.value })} className='mb-3' />
                
                <Inp label='Category ID' name='categoryid' value={productdata.categoryid} onchange={(e) => setpd({ ...productdata, categoryid: e.target.value })} className='mb-3' />
                
                <Inp label='Image' name='image' type='file' onchange={handleSingleFileChange} className='mb-3' />
                
                <Inp label='Main Image' type='file' multiple name='mainImage' onchange={handleFileChange} className='mb-3' />
                
                <Inp label='Is Active' name='is_active' value={productdata.is_active} onchange={(e) => setpd({ ...productdata, is_active: e.target.value })} className='mb-3' />
                
                <Inp label='Brand' name='brand' value={productdata.brand} onchange={(e) => setpd({ ...productdata, brand: e.target.value })} className='mb-3' />
                
                <Inp label='Discount Price' name='discount_price' value={productdata.discount_price} onchange={(e) => setpd({ ...productdata, discount_price: e.target.value })} className='mb-3' />
                
                <Inp label='Status' name='status' value={productdata.status} onchange={(e) => setpd({ ...productdata, status: e.target.value })} className='mb-3' />
                
                <Inp label='Shipping Cost' name='shipping_cost' value={productdata.shipping_cost} onchange={(e) => setpd({ ...productdata, shipping_cost: e.target.value })} className='mb-3' />
                
                <Inp label='Tags' name='tags' value={productdata.tags} onchange={(e) => setpd({ ...productdata, tags: e.target.value })} className='mb-3' />
                <button type='button' onClick={inserdata}>submit</button>
            </div>
        </>
    );
}

export default Insert;
