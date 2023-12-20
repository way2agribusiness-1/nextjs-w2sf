
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import ContactsIcon from '@mui/icons-material/Contacts';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { createCallback } from '../../actions/callbackAction';
import { NEW_CALLBACK_RESET } from '../../constants/callbackContants';
import { clearErrors } from '../../actions/productAction';
import Head from 'next/head';
import axios from 'axios';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const firebaseConfig = {
  apiKey: 'AIzaSyCSo3kRXOAyZF2Nq8wrN-EomKmhSARyQ_U',
  authDomain: 'fir-react-3d5f9.firebaseapp.com',
  databaseURL: 'https://fir-react-3d5f9-default-rtdb.firebaseio.com',
  projectId: 'fir-react-3d5f9',
  storageBucket: 'fir-react-3d5f9.appspot.com',
  messagingSenderId: '582369386866',
  appId: '1:582369386866:web:aac6c1638d0423b9fddab7',
  measurementId: 'G-ZJ6KG03VR8',
};

firebase.initializeApp(firebaseConfig);

function AddCustomer() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const router=useRouter()
  const { success, error } = useSelector((state) => state.newCallback);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [message, setMessage] = useState('');
  const [keywords, setKeywords] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [backlinks, setBacklinks] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set('name', name);
    formData.set('phone', phone);
    formData.set('place', place);
    formData.set('message', message);
    dispatch(createCallback(formData));
    router.push('/contact');
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar('Callback Created', { variant: 'success' });
      dispatch({ type: NEW_CALLBACK_RESET });
      // navigate('/agritechproducts');
    }
  }, [dispatch, error, success, router, enqueueSnackbar]);
  async function fetchData() {
    const seoResponse = await axios.get('http://127.0.0.1:4000/api/v1/getSeo');
    const aboutUsSeoData = seoResponse.data.data.filter(
      (pages) => pages.page === 'contact us'
    )[0];
    setBacklinks(aboutUsSeoData.backLinks);
    setMetaDesc(aboutUsSeoData.metaDesc);
    setKeywords(aboutUsSeoData.keywords);
    setMetaTitle(aboutUsSeoData.metaTitle);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Contact Us | Way2SmartFarmer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="meta_title" content={metaTitle} />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={metaDesc} />
        <link
          rel="canonical"
          href="https://www.way2smartfarmer.com/contact"
        ></link>
      </Head>
      <div className="hidden">
        
      </div>
      <div className="mt-5 lg:mt-20 overflow-hidden">
        <h2 className="text-lg lg:text-2xl text-center rounded-full bg-green-500">Get InTouch</h2>
        <p style={{ color: '#215d0e',borderRadius:'20px',backgroundColor:'aliceblue',alignItems:'center' }} className="px-3 py-2 text-justify shadow-2xl">
          We Way2Foods supply vegetables and other food products to households,
          apartment and to Horeca segment. Please get in touch with us for fresh
          vegetables. You may also visit our outlet at APMC, Yeshwanthpura,
          Bengaluru.
        </p>
        <div className=" flex flex-col lg:flex-row w-[80vw] mx-auto mt-1 mb-1">
          <div className="flex flex-col justify-around bg-gray-300 rounded-lg p-2">
            <div
              className="flex flex-col items-center mb-2 rounded-lg"
              style={{ background: '#7fffd4' }}
            >
              <div className="text-xl font-bold ">
              <ContactMailOutlinedIcon style={{ fontSize: '2rem', color: '#4CAF50', }} />
                Contact Address
              </div>
              <p className='px-1'>
                ಕೃಷಿ ಉದ್ದಿಮೆ ಕೇಂದ್ರ/ Agribusiness Center # 636, BDA Block 2,
                APMC (RMC) Yard, Yeshwanthpura, Bengaluru - 560022
              </p>
            </div>
            {/* <div>
            <h3>
              <ApartmentIcon />
              Registered Office
            </h3>
            <p>
              # 200, 1st Floor, 7th Cross, Soap Factory Layout, Near Tumkur Road
              & Buddajyothi Layout, Nagasandra (P), Bengaluru – 73, Karnataka
            </p>
          </div> */}
            <div
              className="flex flex-col items-center mb-2 rounded-lg"
              style={{ background: '#7fffd4' }}
            >
              <div className="text-xl font-bold">
                <PhoneInTalkTwoToneIcon style={{fontSize:'2rem',color:'#4CAF50'}}/>
                Phone & Landline
              </div>
              <div className="flex flex-col lg:flex-row justify-around gap-2">
                <div>8277078435</div>
                <div>9449004956</div>
                <div>080-95000388</div>
              </div>
            </div>
            <div
              className="flex flex-col items-center mb-2 rounded-lg"
              style={{ background: '#7fffd4' }}
            >
              <div className="text-xl font-bold">
                <AttachEmailOutlinedIcon style={{fontSize:'2rem',color:'red'}}/>
                E-Mail
              </div>
              <div className="flex flex-col lg:flex-row justify-around gap-2">
                <p>way2foods@way2agribusiness.com</p>
                <p>way2foods@gmail.com</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="ContactFrom font-bold text-black ml-4">
            <label className='font-bold text-black'>
              Full name:
              <br/>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-gray-500 border-2 rounded-sm"
              />
            </label><br/>
            <label className='font-bold text-black'>
              Phone number:
              <br/>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-gray-500 border-2 rounded-sm"
              />
            </label><br/>
            <label>
              Place:
              <br/>
              <input
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="border-gray-500 border-2 rounded-sm"
              />
            </label><br/>
            <label>
              Message:
              <br/>
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-gray-500 border-2 rounded-sm"
              />
            </label>
<br/>
            <button className='bg-yellow-400 rounded-full px-2 w-full' type="submit">
              <SendOutlinedIcon/>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
