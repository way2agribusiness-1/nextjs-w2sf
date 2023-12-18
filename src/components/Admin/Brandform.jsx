import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios";
import { useState } from "react";

const NewBrand = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageurl, setImageUrl] = useState('');
  const[alt,setalt]=useState('')
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
      await axios.post('/api/v1/admin/brands/upload', { name, description, imageurl,alt });
      setDataget([...dataget, { name, description, imageurl,alt }]);
      setSnackbarOpen(true);
      setSnackbarMessage('Brand created successfully');
      setSnackbarSeverity('success');
      setalt('')
      setName('')
      setDescription('')
      setImageUrl('')
    } catch (error) {
      console.log(error);
      setSnackbarOpen(true);
      setSnackbarMessage('Brand could not be created');
      setSnackbarSeverity('failure');
    }
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold my-4 bg-yellow-400 rounded-lg shadow-2xl">Create New Brand</h1>
      <div className="max-w-lg mx-auto">
        <form onSubmit={cropSubmitHandler} className="flex flex-col space-y-4">
          <label className="font-semibold">Brand Name:</label>
          <input
            type="text"
            required
            placeholder="Enter brand Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <label className="font-semibold">Brand Description:</label>
          <input
            type="text"
            required
            placeholder="Enter brand description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <label className="font-semibold">Brand alt:</label>
          <input
            type="text"
            required
            placeholder="Enter brand alt"
            value={alt}
            onChange={(e) => setalt(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <label className="font-semibold">Brand Image URL:</label>
          <input
            type="text"
            required
            placeholder="Enter brand image URL"
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
            Create Brand
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

export default NewBrand;
