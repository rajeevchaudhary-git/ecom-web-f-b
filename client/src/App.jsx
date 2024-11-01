import React, { useEffect, useState } from 'react'
import Inp from './components/inputs/inp'
import Tbl from './components/tables/Tbl';
import Insert from './ProductsMgm/Insert';
import Viewproduct from './ProductsMgm/Viewproduct';

function App() {
  const [title,settitle]=useState('');
  useEffect(()=>{
    console.log(title);
  })

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'Occupation', accessor: 'occupation' }
  ];
  
  const data = [
    { name: 'Alice', age: 25, occupation: 'Engineer' },
    { name: 'Bob', age: 30, occupation: 'Designer' },
    { name: 'Charlie', age: 35, occupation: 'Teacher' }
  ];

  return (
    <div>
      <Insert/>
      {/* <Viewproduct/> */}
      {/* <Tbl columns={columns} data={data} /> */}
    </div>
  )
}

export default App
