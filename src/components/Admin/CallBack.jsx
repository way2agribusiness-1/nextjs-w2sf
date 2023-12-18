import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

import { clearErrors,  } from '../../actions/productAction';



import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';

import { createCallback } from '../../actions/callbackAction';
import { NEW_CALLBACK_RESET } from '../../constants/callbackContants';


const CallBack = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.newCallback);



  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');

 








  

  const newCallbackSubmitHandler = (e) => {
    e.preventDefault();

    // required field checks
  

 
    

    const formData = new FormData();

    formData.set('name', name);
    formData.set('phone', phone);
    formData.set('place', place);
   

   


     dispatch(createCallback(formData));
    
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar('Callback Created', { variant: 'success' });
      dispatch({ type: NEW_CALLBACK_RESET });
    }
  }, [dispatch, error, success, navigate, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Admin: New Callback | way2smartfarmer" />

      {loading && <BackdropLoader />}
      <form
        onSubmit={newCallbackSubmitHandler}
        encType="multipart/form-data"
        className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4"
        id="mainform"
      >
        
        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
        <h2 className="font-medium">Callback Details</h2>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Place"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <TextField
            label="Phone Number"
           
            rows={3}
            required
            variant="outlined"
            size="small"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
           {/* <MuiPhoneNumber
            label="Phone"
            
            rows={3}
            required
            variant="outlined"
            size="small"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> */}
        </div>

        <div className="flex flex-col gap-2 m-2 sm:w-1/2">
         

          <div className="flex justify-end">
            <input
              form="mainform"
              type="submit"
              className="bg-primary-orange uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CallBack;
