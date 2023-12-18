import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios";
import { useState } from "react";

const NewCrop = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageurl, setImageUrl] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');
  const [dataget, setDataget] = useState([]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const cropSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/v1/admin/crop/new', { name, description, imageurl });
      setDataget([...dataget, { name, description, imageurl }]);
      setSnackbarOpen(true);
      setSnackbarMessage('Crop created successfully');
      setSnackbarSeverity('success');
      setName('')
      setDescription('')
      setImageUrl('')
    } catch (error) {
      console.log(error);
      setSnackbarOpen(true);
      setSnackbarMessage('Crop could not be created');
      setSnackbarSeverity('error');
      setName('')
      setDescription('')
      setImageUrl('')
    }
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold my-4 bg-green-600 rounded-lg shadow-2xl">Create New Crop</h1>
      <div className="max-w-lg mx-auto">
        <form onSubmit={cropSubmitHandler} className="flex flex-col space-y-4">
          <label className="font-semibold">Crop Name:</label>
          <input
            type="text"
            required
            placeholder="Enter crop Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <label className="font-semibold">Crop Description:</label>
          <input
            type="text"
            required
            placeholder="Enter crop description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <label className="font-semibold">Crop Image URL:</label>
          <input
            type="text"
            required
            placeholder="Enter crop image URL"
            value={imageurl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          {imageurl && (
            <div>
              <h1 className="font-semibold">Image Preview:</h1>
              <img
                src={imageurl}
                alt={name}
                className="w-40 h-40 object-cover rounded-md border border-gray-300"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-yellow-400 py-2 px-4 rounded-lg text-white font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Create Crop
          </button>
        </form>
        <Snackbar autoHideDuration={6000} open={snackbarOpen} onClose={handleClose}>
          <Alert variant="filled" severity={snackbarSeverity} onClose={handleClose}>
            <AlertTitle>{snackbarMessage}</AlertTitle>
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default NewCrop;
