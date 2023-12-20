import React, { useState } from 'react';
import axios from 'axios';

import Link from 'next/link';
import JapanAgriTechtable from '../../../components/Admin/Japan/Japanagritechtable';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
const JapanForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const[editdata,seteditdata]=useState({
    _id:"",
    name:"",
    description:"",
    description1:"",
    description2:"",
    description3:"",
    description4:"",
    imageurl:"",
    slug:""

  })
  const[slug,setslug]=useState("")
  const[success,showsuccess]=useState(false)
  const[snackbaropen,setsnackbaropen]=useState(false)
const[snackbarmessage,setsnackbarmessage]=useState('')
const[snackseverity,setsnackseverity]=useState('success')
  
  const HandleClose=(event,reason)=>{
    if(reason==="clickaway"){
      return;
    }
    setsnackbaropen(false)
  }
  const setEditFormData = (item) => {
    seteditdata({
        _id:item._id,
      name: item.name,
      description: item.description,
      description1: item.description1,
      description2: item.description2,
      description3: item.description3,
      description4: item.description4,
      imageurl: item.imageurl,
      slug: item.slug
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post("http://127.0.0.1:4000/api/v1/japan-agritech", {
        name,
        description,
        description1,description2,description3,description4,
        imageurl,slug
      })
      showsuccess(true)
      setsnackbaropen(true)
      setsnackbarmessage('Japan created successfully')
      setsnackseverity('success')
      setName('')
      setDescription('')
      setImageurl('')
    }
    catch(error){
      console.log(error)
      setsnackbarmessage('error creating please fill all fields',error)
      setsnackbaropen(true)
      setsnackseverity('failure',error)
    }
   setName("")
   setDescription("")
   setDescription1("")
   setDescription2("")
   setDescription3("")
   setDescription4("")
   setImageurl("")
   setslug("")
    };
    const UpdateHandler=async()=>{
      try{
        const res=await axios.put(`http://127.0.0.1:4000/api/v1/japan-agritech/${editdata._id}`,{
          name:editdata.name,
          description:editdata.description,
          description1:editdata.description1,
          description2:editdata.description2,description3:editdata.description3,
          description4:editdata.description4,
          imageurl:editdata.imageurl
        })
        console.log('Updated data successfully')
        setsnackbaropen(true)
        setsnackbarmessage('Updated successfully')
        setsnackseverity('success')
  
      }
      catch(error){
        console.log("error occuring in updating")
        setsnackbaropen(true)
        setsnackbarmessage("could not be updated",error)
        setsnackseverity('failure')
      }
    }
  return (
    <div className='  p-4 bg-gray-100 rounded-lg ml-1'>
     <Link href="/israelagritech/newisrael"><button  className='rounded-lg bg-green-600 p-2 font-bold'>Add Israel technique</button></Link>
      <h1 className='text-center text-2xl font-bold mb-4 text-green-700'>Create New japan techniques</h1>
      <form onSubmit={submitHandler} className='flex flex-col space-y-4'>
        <label htmlFor='japanName' className='font-semibold'> Name:</label>
        <input
          type='text'
          id='japanName'
          placeholder='Enter technique name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='japanDescription' className='font-semibold'>Japan Description:</label>
        <input
          type='text'
          id='japanDescription'
          placeholder='Enter japan description'
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='japanDescription' className='font-semibold'>Japan Description 1:</label>
        <input
          type='text'
          id='japanDescription'
          placeholder='Enter japan description1'
          required
          value={description1}
          onChange={(e) => setDescription1(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='japanDescription' className='font-semibold'>Japan Description 2:</label>
        <input
          type='text'
          id='japanDescription'
          placeholder='Enter japan description2'
          required
          value={description2}
          onChange={(e) => setDescription2(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='japanDescription' className='font-semibold'>Japan Description 3:</label>
        <input
          type='text'
          id='japanDescription'
          placeholder='Enter japan description3'
          required
          value={description3}
          onChange={(e) => setDescription3(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='japanDescription' className='font-semibold'>Japan Description 4:</label>
        <input
          type='text'
          id='japanDescription'
          placeholder='Enter japan description4'
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
            <img
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
      <JapanAgriTechtable/>
      <Snackbar open={snackbaropen} autoHideDuration={6000} onClose={HandleClose}>
        <MuiAlert elevation={6} variant='filled' onClose={HandleClose} severity={snackseverity}>
{snackbarmessage}
        </MuiAlert>

      </Snackbar>
    </div>
  );
};

export default JapanForm;
