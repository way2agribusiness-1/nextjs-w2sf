
import {useSelector } from 'react-redux';
import PriceSidebar from './PriceSidebar';
import Stepper from './Stepper';
import { Snackbar } from '@mui/material'; 
import {Alert} from '@mui/material'
import { AlertTitle } from '@mui/material';


import MetaData from '../Layouts/MetaData';
import Call from '@mui/icons-material/Call';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Sms from '@mui/icons-material/Sms';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const OnlinePayment = () => {


  const {  cartItems } = useSelector((state) => state.cart);
const[snackbarmessage,setsnackbarmessage]=useState('')
const[snackseverity,setsnackseverity]=useState('')
const[snackbaropen,setsnackbaropen]=useState(false)

  const navigate = useNavigate();
const HandleClose=(event,action)=>{
  if(action==='clickaway'){
return;
  }
  setsnackbaropen(false)
}
const orderData = {
  shippingInfo: {
    address: '123 Main St',
    city: 'City Name',
    state: 'State Name',
    country: 'Country Name',
    pincode: 12345,
    phoneNo: 1234567890,
  },
  orderItems: [
    {
      name: 'Product Name',
      price: 99.99,
      quantity: 2,
      image: 'product_image_url.jpg',
      product: 'product_id', // Replace with the actual product ID
    },
    // ... add more order items if needed
  ],
  user: 'user_id', // Replace with the actual user ID
  paymentInfo: {
    id: 'payment_id',
    status: 'Payment Status',
  },
  paidAt: new Date(), // Date of payment
  totalPrice: 199.98, // Total price of the order
  orderStatus: 'Processing', // Order status (default: Processing)
  // deliveredAt: Date, // Date of delivery (if delivered)
  // shippedAt: Date, // Date of shipping (if shipped)
  // createdAt: Date, // Automatically generated upon creation
};
const Order=async()=>{
  const response=await axios.get("http://127.0.0.1:4000/api/v1/new/order",{
    orderData
  })
  .then(()=>console.log(response))
  .catch((err)=>console.log(err))
}
useEffect(()=>{
  Order()
},[])

const Ordersuccessfull=async()=>{
  try{
  const res=await axios.post("http://127.0.0.1:4000/api/v1/order/mes",orderData)
  console.log(res.data)
  setsnackbaropen(true)
  setsnackbarmessage('go to my orders page')
  setsnackseverity('success')
  navigate('/orders/successfull')
  }
  catch(error){
    setsnackbaropen(true)
    setsnackbarmessage('error',error)
    setsnackseverity('failure')
    console.log('error fetching',error)
  }
}


  return (
    <>
      <MetaData title="way2smartfarmer: Secure Payment | Online Transaction" />

      <main className="w-full mt-20">
        {/* <!-- row --> */}
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          {/* <!-- cart column --> */}
          <div className="flex-1">
            <Stepper activeStep={3}>
              <div className="w-full bg-white">


                <div className='space-y-4 text-center p-4'>
                <div className='flex flex-row space-x-4'>
                  
                     <h6 className='text-lg font-medium'>Phone Number : </h6>
                    <p className='text-black'>9449004956</p>
                    <a href={`tel:9449004956`}><Call /></a>
                  
                </div>
                <div className='flex flex-row space-x-4'>
                  
                  <h6 className='text-lg font-medium'>Whatsapp Chat : </h6>
                 <p className='text-black'>9449004956</p>
                 <a href={`https://wa.me/9449004956`}><WhatsApp /></a>
               
             </div>
             <div className='flex flex-row space-x-4'>
                  
                  <h6 className='text-lg font-medium'>SMS Chat : </h6>
                 <p className='text-black'>9449004956</p>
                 <a href={`sms:9449004956`}><Sms /></a>
               
             </div>
             </div>
                
                <button className="  bg-primary-green p-3 text-white font-medium rounded-sm shadow m-3 hover:shadow-lg uppercase" onClick={Ordersuccessfull}>Confirm</button>
              </div>
            </Stepper>
          </div>

          <PriceSidebar cartItems={cartItems} />
          <Snackbar autoHideDuration={6000} open={snackbaropen} onClose={HandleClose}>
            <Alert variant='filled' elevation={6}>
            {snackbarmessage}
            </Alert>
          </Snackbar>
        </div>
      </main>
    </>
  );
};

export default OnlinePayment;
