import React, { useState, useEffect } from 'react';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';
import axios from 'axios';

const CropTable = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackSeverity, setSnackSeverity] = useState('');
  const [dataget, setDataget] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: '',
    name: '',
    description: '',
    imageurl: '',
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleUpdate = (item) => {
    setUpdateData({
      id: item._id,
      name: item.name,
      description: item.description,
      imageurl: item.imageurl,
    });
  };

  const handleFetch = async () => {
    try {
      const res = await axios.get('/api/v1/admin/crops');
      setDataget(res.data.crops);
      setSnackbarOpen(true);
      setSnackbarMessage('Fetched successfully');
      setSnackSeverity('success');
    } catch (error) {
      setSnackbarOpen(true);
      setSnackbarMessage('Failure in fetching data');
      setSnackSeverity('failure');
    }
  };

  const deleteHandler = async (gotUserId) => {
    try {
      await axios.delete(`/api/v1/crop/${gotUserId}`);
      const updatedUser = dataget.filter((item) => item._id !== gotUserId);

      setDataget(updatedUser);
      setSnackbarOpen(true);
      setSnackbarMessage('Successfully deleted');
      setSnackSeverity('success');
    } catch (error) {
      setSnackbarOpen(true);
      setSnackbarMessage('Could not be deleted');
      setSnackSeverity('failure');
    }
  };

  const updateCropHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/v1/crop/${updateData.id}`, {
        name: updateData.name,
        description: updateData.description,
        imageurl: updateData.imageurl,
      });

      // Perform any action needed after update
      // Maybe refetch data or close the form
await handleFetch();
      setSnackbarOpen(true);
      setSnackbarMessage('Crop updated successfully');
      setSnackSeverity('success');
      
    } catch (error) {
      setSnackbarOpen(true);
      setSnackbarMessage('Could not update crop');
      setSnackSeverity('failure');
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className='m-auto mt-1 mb-1'>
      <Link href='/admin/market_mitra'>
        <button className='rounded-lg shadow-2xl bg-yellow-400 px-2 py-2 font-bold text-black'>
          New Crop
        </button>
      </Link>
      <h1 className='font-bold text-center bg-green-700 rounded-md text-[22px] m-2 pt-1 pb-1 '>
        All Crops
      </h1>
      <div className='m-auto '>
        <table className='table-auto w-4.9/5'>
          <thead>
            <tr>
              <th>Crop id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Crop Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataget.map((item) => (
              <tr key={item._id}>
                <td>{item.createdAt}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <img src={item.imageurl} alt={item.name} style={{width:'80px',height:'90px'}} />
                </td>
                <td>
                  <button
                    onClick={() => deleteHandler(item._id)}
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(item)}
                    className='bg-green-500 mx-1 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {updateData.id && (
          <div className='max-w-md mx-auto my-4'>
            <h2 className='text-xl font-bold mb-2'>Update Crop</h2>
            <form onSubmit={updateCropHandler}>
              <label className='block mb-2'>Crop Name:</label>
              <input
                type='text'
                required
                value={updateData.name}
                onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
                className='border border-gray-300 rounded-md p-2 mb-2 w-full'
              />
              <label className='block mb-2'>Crop Description:</label>
              <input
                type='text'
                required
                value={updateData.description}
                onChange={(e) =>
                  setUpdateData({ ...updateData, description: e.target.value })
                }
                className='border border-gray-300 rounded-md p-2 mb-2 w-full'
              />
              <label className='block mb-2'>Crop Image URL:</label>
              <input
                type='text'
                required
                value={updateData.imageurl}
                onChange={(e) => setUpdateData({ ...updateData, imageurl: e.target.value })}
                className='border border-gray-300 rounded-md p-2 mb-2 w-full'
              />
              {
                updateData.imageurl &&
                <img src={updateData.imageurl} alt={updateData.name}/>
              }
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Update Crop
              </button>
            </form>
          </div>
        )}
      </div>
      <Snackbar autoHideDuration={6000} open={snackbarOpen} onClose={handleClose}>
        <Alert variant='filled' severity={snackSeverity} onClose={handleClose}>
          <AlertTitle>{snackbarMessage}</AlertTitle>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CropTable;
