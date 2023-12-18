import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import KnowledgeTable from './Knowledge/KnowledgeTable';
import KnowledgeTab from './Knowledge/KnowledgeTab';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NEW_KNOWLEDGE_SUCCESS } from '../../constants/knowledgeConstants';
const KnowledgeForm = () => {
  const dispatch=useDispatch()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const[slug,setslug]=useState("")
  const[submitted,setsubmitted]=useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false)
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    try{
    
      const response = await axios.post("/api/v1/admin/knowledge/new", {
        name,
        description,
        description1,description2,description3,description4,
        imageurl,slug
      })
      setsubmitted(true)
      setSnackbarMessage("Data submitted successfully")
      setSnackbarSeverity('success')
      setSnackbarOpen(true)
      
      
      toast.success('Data submitted successfully!', {
        position: toast.POSITION.TOP_CENTER,
      
      });
    }
    catch(error){
      setSnackbarMessage('error submitting form',error)
      setSnackbarOpen(true)
      setSnackbarSeverity('error')
    }
   setName("")
   setDescription("")
   setDescription1("")
   setDescription2("")
   setDescription3("")
   setDescription4("")
   setslug("")
   setImageurl("")
    };
  return (
    <>
    <div className=' bg-gray-100 rounded-lg  px-4 py-2 ml-1'>
      <h1 className='text-center text-2xl font-bold mb-4 text-green-700'>Create New Knowledge</h1>
      <form onSubmit={submitHandler} className='flex flex-col space-y-4'>
        <label htmlFor='knowledgeName' className='font-semibold'>Knowledge Name:</label>
        <input
          type='text'
          id='knowledgeName'
          placeholder='Enter Knowledge name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='knowledgeDescription' className='font-semibold'>Knowledge Description:</label>
        <input
          type='text'
          id='knowledgeDescription'
          placeholder='Enter knowledge description'
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='knowledgeDescription' className='font-semibold'>Knowledge Description 1:</label>
        <input
          type='text'
          id='knowledgeDescription'
          placeholder='Enter knowledge description1'
          required
          value={description1}
          onChange={(e) => setDescription1(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='knowledgeDescription' className='font-semibold'>Knowledge Description 2:</label>
        <input
          type='text'
          id='knowledgeDescription'
          placeholder='Enter knowledge description2'
          required
          value={description2}
          onChange={(e) => setDescription2(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='knowledgeDescription' className='font-semibold'>Knowledge Description 3:</label>
        <input
          type='text'
          id='knowledgeDescription'
          placeholder='Enter knowledge description3'
          required
          value={description3}
          onChange={(e) => setDescription3(e.target.value)}
          className='border rounded-lg p-2'
        />
        <label htmlFor='knowledgeDescription' className='font-semibold'>Knowledge Description 4:</label>
        <input
          type='text'
          id='knowledgeDescription'
          placeholder='Enter knowledge description4'
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
        <label htmlFor='slug' className='font-semibold'>Slug:</label>
        <input
          type='text'
         
          placeholder='Enter slug'
          required
          value={slug}
          onChange={(e) => setslug(e.target.value)}
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
      <KnowledgeTab/>
    </div>
    
    <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default KnowledgeForm;
