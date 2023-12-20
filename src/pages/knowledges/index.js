import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import MetaData from '../../components/Layouts/MetaData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function KnowledgeTable() {
  
  const [knowledgeList, setKnowledgeList] = useState([]);
  const router=useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:4000/api/v1/knowledge");
        setKnowledgeList(response.data.data);
      } catch (error) {
        console.error('Error fetching knowledge', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <MetaData title="AllKnowledge | Way2SmartFarmer" />

      <main className="mt-11 pt-8 mb-5 mx-auto">
    <div className=''>
        <h1 style={{backgroundColor:'green'}} className='text-3xl font-bold text-center rounded-lg  text-white mx-3 py-1'>Knowledge Center</h1>
      <div className='flex  items-center mb-8'>
        
        
      </div>
      <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {knowledgeList.map((item, index) => (
          <div key={index} className='bg-white rounded-lg shadow-lg p-4'>
            <h2 className='text-xl font-semibold mb-2 rounded-lg px-1 bg-yellow-400 text-center'>{item.name}</h2>
            
            <LazyLoadImage src={item.imageurl} alt={item.name} className='w-full h-40 object-cover rounded-md mb-4' />
            <ul>
              <li>{item.description}</li>
              <li>{item.description1}</li>
              <li>{item.description2}</li>
              <li>{item.description3}</li>
              <li>{item.description4}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
    </main>
    </>
  );
}

export default KnowledgeTable;
