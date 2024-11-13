import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function ListCategory() {
    const [cat,setcat]=React.useState([]);
    useEffect(()=>{
        const url = 'http://localhost:3000/api/v1/fetchallcat';
        const response = axios.get(url).then((res)=>{
            // console.log(res.data.data);
            setcat(res.data.data);
        //    console.log(res);
    })  
},[]);

const handleDelete =(id)=>{
    const url = `http://localhost:3000/api/v1/deletecat/${id}`;
    axios.get(url).then((res)=>{
        if(res)
    });
}
// console.log(cat);
    return (
    
        <>
          <h2 className='text-center font-serif text-2xl font-semibold mb-2'>All Product Listing</h2>
          <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">Serial No</th>
                          <th scope="col" className="px-6 py-3">category Name</th>
                          <th scope="col" className="px-6 py-3">Description</th>
                          <th scope="col" className="px-6 py-3">Status</th>
                          <th scope="col" className="px-6 py-3">Edit</th>
                          <th scope="col" className="px-6 py-3">Delete</th>
                      </tr>
                  </thead>
                  <tbody>
                      {cat.map((item,index) => (
                          <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 mb-5">
                              <td className="px-6 py-4">{index+1}</td>
                              <td className="px-6 py-4">{item.category_name}</td>
                              <td className="px-6 py-4">{item.description}</td>
                              <td className="px-6 py-4">{item.isactive==1 ? 'active':'disabled'}</td>
                            
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

export default ListCategory
