import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tbl from '../components/tables/Tbl';

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

    // Define the columns based on the product fields
    const columns = [
        { header: 'Title', accessor: 'title' },
        { header: 'Short Description', accessor: 'short_des' },
        { header: 'Custom Description', accessor: 'customdesc' },
        { header: 'Price', accessor: 'price' },
        { header: 'Brand', accessor: 'brand' },
        { header: 'Status', accessor: 'status' },
        { header: 'Category ID', accessor: 'categoryid' },
        { header: 'Shipping Cost', accessor: 'shipping_cost' },
        { header: 'Discount Price', accessor: 'discount_price' },
        { header: 'Quantity', accessor: 'quantity' }
    ];

    return (
        <div>
            <Tbl columns={columns} data={products} /> {/* Pass the fetched products as data */}
        </div>
    );
}

export default Viewproduct;
