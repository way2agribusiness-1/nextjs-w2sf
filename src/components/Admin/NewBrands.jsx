import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useSnackbar } from 'notistack';

function Brands() {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [alt, setAlt] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('select');

  function handleImageChange(event) {
    const files = Array.from(event.target.files);
    setImage('');
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    });
  }
  async function handleSubmit() {
    if (!name) {
      enqueueSnackbar('Add Name', { variant: 'warning' });
      return;
    }
    if (!alt) {
      enqueueSnackbar('Add Alt', { variant: 'warning' });
      return;
    }
    if (!title) {
      enqueueSnackbar('Add Title', { variant: 'warning' });
      return;
    }
    if (!image) {
      enqueueSnackbar('Add Image', { variant: 'warning' });
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    formData.set('name', name);
    formData.set('alt', alt);
    formData.set('title', title);
    const { data } = await axios.post(
      '/api/v1/admin/brands/upload',
      formData,
      {
        header: { 'Content-Type': 'application/json' },
      }
    );
  }
  return (
    <div className="flex flex-col gap-2">
      <TextField
        label="Name"
        variant="outlined"
        placeholder="Enter your Image Name"
        size="small"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Alt of image"
        variant="outlined"
        placeholder="Enter Alt of image"
        size="small"
        required
        value={alt}
        onChange={(e) => setAlt(e.target.value)}
      />
      <TextField
        label="Title of Image"
        variant="outlined"
        placeholder="Enter your Image Title"
        size="small"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {image && (
        <div className="w-30 h-30">
          <img src={image} alt="upload logo" height={300} width={300} />
        </div>
      )}
      <label className="rounded font-medium bg-gray-400 text-center cursor-pointer text-white p-2 shadow hover:shadow-lg my-2">
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
        />
        Choose Image
      </label>

      <div>
        <button
          onClick={() => handleSubmit()}
          className="bg-green-500 p-2 rounded"
        >
          Add Image
        </button>
      </div>
    </div>
  );
}

export default Brands;
