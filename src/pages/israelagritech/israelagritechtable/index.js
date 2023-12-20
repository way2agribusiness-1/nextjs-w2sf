
import React, { useState } from 'react';
import axios from 'axios';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

const IsraelForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const[slug,setslug]=useState("")
  
  
  const submitHandler = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post("http://127.0.0.1:4000/api/v1/israel-agritech/new", {
        name,
        description,
        description1,description2,description3,description4,
        imageurl,slug
      })
   console.log(response)
    setName('')
    setDescription('')
    setImageurl('')
    setDescription1('')
    setDescription2('')
    setDescription3('')
    setDescription4('')
    setImageurl('')
    setslug('')
    }
   catch(error){
    console.log(error);
   }
   
    };
  return (
    <div className='container mx-auto max-w-full p-4 bg-gray-100 rounded-lg shadow-lg max-h-screen'>
      <h1 className='text-center text-2xl font-bold mb-4 text-green-700'>Create New Israel technique</h1>
      <form onSubmit={submitHandler} className='flex flex-col space-y-4'>
        <label htmlFor='knowledgeName' className='font-semibold'> Name:</label>
        <input
          type='text'
          id='knowledgeName'
          placeholder='Enter israel name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='knowledgeDescription' className='font-semibold'>Israel Description:</label>
        <input
          type='text'
          id='knowledgeDescription'
          placeholder='Enter israel description'
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='knowledgeDescription' className='font-semibold'>Israel Description 1:</label>
        <input
          type='text'
          id='knowledgeDescription'
          placeholder='Enter israel description1'
          required
          value={description1}
          onChange={(e) => setDescription1(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='knowledgeDescription' className='font-semibold'>Israel Description 2:</label>
        <input
          type='text'
          id='knowledgeDescription'
          placeholder='Enter israel description2'
          required
          value={description2}
          onChange={(e) => setDescription2(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='knowledgeDescription' className='font-semibold'>Israel Description 3:</label>
        <input
          type='text'
          id='knowledgeDescription'
          placeholder='Enter israel description3'
          required
          value={description3}
          onChange={(e) => setDescription3(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='knowledgeDescription' className='font-semibold'>Israel Description 4:</label>
        <input
          type='text'
          id='knowledgeDescription'
          placeholder='Enter israel description4'
          required
          value={description4}
          onChange={(e) => setDescription4(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='imageUrl' className='font-semibold'>Image URL:</label>
        <input
          type='text'
         
          placeholder='Enter image URL'
          required
          value={imageurl}
          onChange={(e) => setImageurl(e.target.value)}
          className='border rounded-lg p-2'
        />
        
        {imageurl && (
          <div>
            <label htmlFor='imagePreview' className='font-semibold'>Image Preview:</label><br />
            <LazyLoadImage
              src={imageurl}
              alt={name}
              style={{ width: '200px', height: '150px', objectFit: 'cover' }}
              className='mt-2 border rounded-lg'
            />
          </div>
          
        )}
        <button type='submit' className='bg-green-700 text-white rounded-lg py-2 px-4 hover:bg-green-600 transition duration-300'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default dynamic(()=>Promise.resolve(IsraelForm),{ssr:false});
