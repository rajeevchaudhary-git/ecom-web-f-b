import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Viewproduct() {
    const url = 'http://localhost:3000/api/v1/get-products';
    
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(url);
                console.log(res.data); 
                setProducts(res.data); 
            } catch (error) {
                console.error('Error fetching products:', error); 
            }
        };

        fetchProducts(); 
    }, []); 

    const handleDelete = async (id) => {
        try {
            await axios.get(`http://localhost:3000/api/v1/deleteProduct/${id}`);
            setProducts(products.filter(product => product.id !== id)); 
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
      <>
        <h2 className='text-center font-serif text-2xl font-semibold mb-2'>All Product Listing</h2>
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Serial No</th>
                        <th scope="col" className="px-6 py-3">Product Name</th>
                        <th scope="col" className="px-6 py-3">Description</th>
                        <th scope="col" className="px-6 py-3">Quantity</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Tags</th>
                        <th scope="col" className="px-6 py-3">Edit</th>
                        <th scope="col" className="px-6 py-3">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item,index) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 mb-5">
                            <td className="px-6 py-4">{index+1}</td>
                            <td className="px-6 py-4">{item.title}</td>
                            <td className="px-6 py-4">{item.customdesc}</td>
                            <td className="px-6 py-4">{item.quantity}</td>
                            <td className="px-6 py-4">{item.price}</td>
                            <td className="px-6 py-4">{item.tags}</td>
                            <td className="px-6 py-4">
                                <Link to={`/edit/${item.id}`} className="text-blue-600 hover:underline">Edit</Link>
                            </td>
                            <td className="px-6 py-4">
                                <button 
                                    onClick={() => handleDelete(item.id)} 
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </>
    );
}

export default Viewproduct;
