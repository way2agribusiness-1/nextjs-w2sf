import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { NEW_KNOWLEDGE_SUCCESS } from '../../../constants/knowledgeConstants';
import { clearErrors } from '../../../actions/productAction';

import BackdropLoader from '../../Layouts/BackdropLoader';
import MetaData from '../../Layouts/MetaData';

const NewKnowledge = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.newProduct);

  
 

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const handleProductImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldImages) => [...oldImages, reader.result]);
          setImages((oldImages) => [...oldImages, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const newProductSubmitHandler = (e) => {
    e.preventDefault();
    if (images.length <= 0) {
      enqueueSnackbar('Add Product Images', { variant: 'warning' });
      return;
    }

    const formData = new FormData();

    formData.set('name', name);
    console.log(name)
    formData.set('description', description);
    console.log(description)
    images.forEach((image) => {
      formData.append('images', image);
    });
    //dispatch(createKnowledge(formData));
  };
  console.log(images)

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar('Knowledge Created', { variant: 'success' });
      dispatch({ type: NEW_KNOWLEDGE_SUCCESS });
      navigate('/admin/knowlegde');
    }
  }, [dispatch, error, success, navigate, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Admin: New Intech | way2smartfarmer" />

      {loading && <BackdropLoader />}
      <form
        onSubmit={newProductSubmitHandler}
        encType="multipart/form-data"
        className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4"
        id="mainform"
      >
        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
          <TextField
            label="Name"
            variant="outlined"
            placeholder="Enter your Product Name"
            size="small"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <TextField
            label="Description"
            multiline
            rows={3}
            required
            placeholder="Enter your Product Description"
            variant="outlined"
            size="small"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-between">
            
            
          </div>
          <div className="flex justify-between gap-4">
            
          </div>

          
        </div>

        

          

          <h2 className="font-medium">Product Images</h2>
          <div className="flex gap-2 overflow-x-auto h-32 border rounded">
            {imagesPreview.map((image, i) => (
              <img
                draggable="false"
                src={image}
                alt="Product"
                key={i}
                className="w-full h-full object-contain"
              />
            ))}
          </div>
          <div>
          <label className="rounded pl-2 font-medium bg-gray-400 text-center cursor-pointer text-white p-2 shadow hover:shadow-lg my-2">
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleProductImageChange}
              className="hidden"
            />
            Choose Product Image
          </label>

          <div className="">

            <input
              form="mainform"
              type="submit"
              className="bg-primary-orange uppercase ml-2 mt-2 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
              value="Submit"
            />
          </div>
          </div>
      </form>
    </>
  );
};

export default NewKnowledge;
