import { useEffect, useState } from 'react';

import 'firebase/compat/database';
// import bot from "./bot.png";
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { createCallback } from '../../../actions/callbackAction';
import { NEW_CALLBACK_RESET } from '../../../constants/callbackContants';
import { clearErrors } from '../../../actions/productAction';

function AddCustomer() {
  const bot =
    'https://res.cloudinary.com/djx69owjm/image/upload/v1697107905/W2SF%20Assests/hj4zsa5ovm94myp4ddxn.png';
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { success, error } = useSelector((state) => state.newCallback);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [message, setMessage] = useState('');

  const [showForm, setShowForm] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.set('name', name);
    formData.set('phone', phone);
    formData.set('place', place);
    formData.set('message', message);

    dispatch(createCallback(formData));
    setName('');
    setPhone('');
    setPlace('');
    setMessage('');
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar('Callback Created', { variant: 'success' });
      dispatch({ type: NEW_CALLBACK_RESET });
      navigate('/contact');
    }
  }, [dispatch, error, success, navigate, enqueueSnackbar]);

  return (
    <>
      <button onClick={toggleForm} className="bot">
        <img src={bot} alt="bot" height={50} width={50}></img>
        {showForm ? '' : ''}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="callback_from">
          <label>
            Full name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Phone number:
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            Place:
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </label>
          <label>
            Message:
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ color: 'black' }}
            />
          </label>

          <button type="submit">Call back</button>
        </form>
      )}
    </>
  );
}

export default AddCustomer;
