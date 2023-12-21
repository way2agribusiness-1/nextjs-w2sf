
import TextField from '@mui/material/TextField';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PriceSidebar from '@/components/Cart/PriceSidebar';
import Stepper from '@/components/Cart/Stepper';
import { useSnackbar } from 'notistack';

import { useRouter } from 'next/router';
import MetaData from '@/components/Layouts/MetaData';

import { createOrderCallback } from '../../actions/orderCallbackAction';
import { CLEAR_ERRORS, NEW_ORDERCALLBACK_RESET } from '../../constants/orderCallbackConstants';

const Shipping = () => {

    const dispatch = useDispatch();
    const router=useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const { cartItems } = useSelector((state) => state.cart);
    // const { shippingInfo } = useSelector((state) => state.cart);

    const {success, error } = useSelector((state) => state.newOrderCallback);



    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [place, setPlace] = useState('');
    const [pincode, setPincode] = useState('');
   

    // const [address, setAddress] = useState(shippingInfo.address);
    // const [city, setCity] = useState(shippingInfo.city);
    // const [country, setCountry] = useState('IN');
    // const [state, setState] = useState(shippingInfo.state);
    // const [pincode, setPincode] = useState(shippingInfo.pincode);
    // const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    // const shippingSubmit = (e) => {
    //     e.preventDefault();

    //     if (phoneNo.length < 10 || phoneNo.length > 10) {
    //         enqueueSnackbar("Invalid Phone Number", { variant: "error" });
    //         return;
    //     }
    //     dispatch(saveShippingInfo({ address, city, country, state, pincode, phoneNo }));
    //     navigate("/order/confirm");
    // }

    const newOrderCallbackSubmitHandler = (e) => {
        e.preventDefault();
    
        // required field checks
      
    
     
        
    
        const formData = new FormData();
    
        formData.set('name', name);
        formData.set('phone', phone);
        formData.set('place', place);
        formData.set('pincode', pincode);
    
       
    
    
         dispatch(createOrderCallback(formData));
        
      };


      useEffect(() => {
        if (error) {
          enqueueSnackbar(error, { variant: 'error' });
          dispatch(CLEAR_ERRORS());
        }
        if (success) {
          
          dispatch({ type: NEW_ORDERCALLBACK_RESET });
          router.push('/order/confirm');
        }
      }, [dispatch, error, success, router, enqueueSnackbar]);

    return (
        <>
            <MetaData title="Way2SmartFarmer: Shipping Details" />
            <main className="w-full mt-20">

                {/* <!-- row --> */}
                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7 overflow-hidden">

                    {/* <!-- cart column --> */}
                    <div className="flex-1">

                        <Stepper activeStep={1}>
                            <div className="w-full bg-white">

                                <form onSubmit={newOrderCallbackSubmitHandler} autoComplete="off" className="flex flex-col justify-start gap-3 w-full sm:w-3/4 mx-1 sm:mx-8 my-4">

                                  

                                    <div className="flex gap-6">
                                        <TextField
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            
                                            label="Name"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                        <TextField
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            type="number"
                                            label="Phone No"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                    </div>
                                    <TextField
                                        value={place}
                                        onChange={(e) => setPlace(e.target.value)}
                                        fullWidth
                                        label="Address"
                                        variant="outlined"
                                        required
                                    />
                                    <div className="flex gap-6">
                                        <TextField
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value)}
                                            label="Pin Code"
                                            type="number"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                        {/* <TextField
                                            label="Landmark (Optional)"
                                            fullWidth
                                            variant="outlined"
                                        /> */}
                                    </div>

                                    {/* <div className="flex gap-6">

                                        <FormControl fullWidth>
                                            <InputLabel id="country-select">Country</InputLabel>
                                            <Select
                                                labelId="country-select"
                                                id="country-select"
                                                defaultValue={country}
                                                disabled
                                                label="Country"
                                                // onChange={(e) => setCountry(e.target.value)}
                                            >
                                                <MenuItem value={'IN'}>India</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl fullWidth disabled={country ? false : true}>
                                            <InputLabel id="state-select">State</InputLabel>
                                            <Select
                                                labelId="state-select"
                                                id="state-select"
                                                value={state}
                                                label="State"
                                                onChange={(e) => setState(e.target.value)}
                                                required
                                            >
                                                {states.map((item) => (
                                                    <MenuItem key={item.code} value={item.code}>{item.name}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                    </div> */}

                                    <button type="submit" className="bg-primary-orange w-full sm:w-1/3 my-2 py-3.5 text-sm font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none">save and deliver here</button>
                                </form>
                            </div>
                        </Stepper>
                    </div>

                    <PriceSidebar cartItems={cartItems} />
                </div>
            </main>
        </>
    );
};

export default Shipping;

// import { useState } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database';
// import CallIcon from '@mui/icons-material/Call';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import MailIcon from '@mui/icons-material/Mail';
// import SendIcon from '@mui/icons-material/Send';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCSo3kRXOAyZF2Nq8wrN-EomKmhSARyQ_U',
//   authDomain: 'fir-react-3d5f9.firebaseapp.com',
//   databaseURL: 'https://fir-react-3d5f9-default-rtdb.firebaseio.com',
//   projectId: 'fir-react-3d5f9',
//   storageBucket: 'fir-react-3d5f9.appspot.com',
//   messagingSenderId: '582369386866',
//   appId: '1:582369386866:web:aac6c1638d0423b9fddab7',
//   measurementId: 'G-ZJ6KG03VR8',
// };

// firebase.initializeApp(firebaseConfig);

// function AddCustome() {
//   const [fullname, setFullname] = useState('');
//   const [phonenumber, setPhonenumber] = useState('');
//   const [dateofbirth, setDateOfBirth] = useState('');
//   const [code, setCode] = useState('');
//   const [mail, setEmail] = useState('');
//   const [datetime, setDatetime] = useState(
//     new Date().toLocaleString('en-US', {
//       hourCycle: 'h12',
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//     })
//   );
//   const [msg, setMsg] = useState('');
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const dbRef = firebase.database().ref('Customer');
//     const newCustomerRef = dbRef.push();
//     newCustomerRef.set({
//       Fullname: fullname,
//       Email: mail,
//       Code: code,
//       Phonenumber: phonenumber,
//       dateofbirth: dateofbirth,
//       datetime: datetime,
//       CMsg: msg,
//     });
//     setFullname('');
//     setPhonenumber('');
//     setDateOfBirth('');
//     setCode('');
//     setDatetime(new Date().toISOString());
//     setEmail('');
//     setMsg('');
//   };

//   return (
//     <div className="cWrap">
//       <div className="Iwrap">
//         <h2>ORDER AND SHIPPING</h2>
//         <div className="mainContact">
//           <form
//             onSubmit={handleSubmit}
//             className="ContactFrom"
//             style={{
//               display: 'grid',
//               gridTemplateColumns: 'auto auto',
//               gap: '10px',
//             }}
//           >
//             <div>
//               <strong>SHIPPING PERSONAL DETAILS</strong>
//               <label>
//                 Full name:
//                 <input
//                   type="text"
//                   value={fullname}
//                   onChange={(e) => setFullname(e.target.value)}
//                 />
//               </label>
//               <label>
//                 Phone number:
//                 <input
//                   type="number"
//                   value={phonenumber}
//                   onChange={(e) => setPhonenumber(e.target.value)}
//                 />
//               </label>
//               <label>
//                 Email:
//                 <input
//                   type="email"
//                   value={mail}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </label>
//             </div>
//             <div>
//             <strong>SHIPPING ADDRESS</strong>
//               <label for="country">Select a country:</label>
//               <select id="country" name="country">
//                 <option value="">--Select Country--</option>
//                 <option value="USA">India</option>
//                 <option value="USA">United States</option>
//                 <option value="CAN">Canada</option>
//                 <option value="MEX">Mexico</option>
//                 <option value="UK">United Kingdom</option>
//                 <option value="GER">Germany</option>
//                 <option value="JAP">Japan</option>
//               </select>
//               <label>
//                 Place:
//                 <textarea
//                   type="text"
//                   value={msg}
//                   onChange={(e) => setMsg(e.target.value)}
//                 />
//               </label>
//               <label>
//                 Pin Code:
//                 <input
//                   type="number"
//                   value={code}
//                   onChange={(e) => setCode(e.target.value)}
//                 />
//               </label>
//               <input type="hidden" name="datetime" value={datetime} />
//             </div>
//             <button type="submit">
//               <SendIcon />
//               Place Order
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddCustome;
