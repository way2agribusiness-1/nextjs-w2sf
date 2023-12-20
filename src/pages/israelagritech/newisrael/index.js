import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import IsraelAgriTechtable from '../../../components/Admin/IsraelAgritech/UpdateIsraelAgritech';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert'
import { RouteRounded } from '@mui/icons-material';
const IsraelForm = () => {
  const router=useRouter()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const[slug,setslug]=useState("")
  const[success,showsuccess]=useState(false)
  const[snackbaropen,setsnackbaropen]=useState(false)
  const[snackbarmessage,setsnackbarmessage]=useState('')
  const[snackseverity,setsnackseverity]=useState('success')
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setsnackbaropen(false)
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post("http://127.0.0.1:4000/api/v1/israel-agritech/new", {
        name,
        description,
        description1,description2,description3,description4,
        imageurl,slug
      })
      
      setsnackbarmessage('israel created successfully')
      setsnackbaropen(true)
      setsnackseverity('success')
      setName('')
      setDescription('')
      setImageurl('')
      router.push('')
    }
    catch(error){
      console.log("error creating",error)
      setsnackbarmessage('failed to create',error)
      setsnackbaropen(false)
      setsnackseverity('error',error)
    }
    };
  return (
    <div className='  p-4 bg-gray-100 shadow-lg rounded-lg ml-1 px-5'>
      <button onClick={()=>router.push("/admin/new-japan-agritech")} className='rounded-lg bg-green-600 p-2 font-bold'>Add japan technique</button>
      <h1 className='text-center text-2xl font-bold mb-4 text-green-700'>Create New Israel technique</h1>
      <form onSubmit={submitHandler} className='flex flex-col space-y-4'>
        <label htmlFor='israelName' className='font-semibold'> Name:</label>
        <input
          type='text'
          id='israelName'
          placeholder='Enter technique name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='israelDescription' className='font-semibold'>Israel Description:</label>
        <input
          type='text'
          id='israelDescription'
          placeholder='Enter israel description'
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='israelDescription' className='font-semibold'>Israel Description 1:</label>
        <input
          type='text'
          id='israelDescription'
          placeholder='Enter israel description1'
          required
          value={description1}
          onChange={(e) => setDescription1(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='israelDescription' className='font-semibold'>Israel Description 2:</label>
        <input
          type='text'
          id='israelDescription'
          placeholder='Enter israel description2'
          required
          value={description2}
          onChange={(e) => setDescription2(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='israelDescription' className='font-semibold'>Israel Description 3:</label>
        <input
          type='text'
          id='israelDescription'
          placeholder='Enter israel description3'
          required
          value={description3}
          onChange={(e) => setDescription3(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='israelDescription' className='font-semibold'>Israel Description 4:</label>
        <input
          type='text'
          id='israelDescription'
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
      <IsraelAgriTechtable/>
      <Snackbar open={snackbaropen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleSnackbarClose}
          severity={snackseverity}
        >
          {snackbarmessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default IsraelForm;
