import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { useEffect } from 'react';
import { createAsyncThunk,configureStore,createSlice } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
  allUsersReducer,
  userDetailsReducer,
} from './reducers/userReducer';
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productsReducer,
  productReviewsReducer,
  reviewReducer,
} from './reducers/productReducer';
import { cartReducer, orderSampleReducer } from './reducers/cartReducer';
import { saveForLaterReducer } from './reducers/saveForLaterReducer';
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
  paymentStatusReducer,
} from './reducers/orderReducer';
import { wishlistReducer } from './reducers/wishlistReducer';
import {
  compareDetailsReducer,
  comparesReducer,
  cropDetailsReducer,
  cropReducer,
  cropsReducer,
  insightDetailsReducer,
  newCompareReducer,
  newCropReducer,
  newInsightReducer,
} from './reducers/cropReducer';
import {
  knowledgesReducer,
  newKnowledgeReducer,
} from './reducers/knowledgeReducer';
import { compareReducer } from './reducers/compareReducer';
import {
  callbacksReducer,
  deleteCallbackReducer,
  newCallbackReducer,
} from './reducers/callbackReducer';
import {
  deleteOrderCallbackReducer,
  newOrderCallbackReducer,
  orderCallbacksReducer,
} from './reducers/orderCallbackReducer';
import { seoReducer } from './reducers/seoReducer';
import { brandsReducer, credentialsReducer } from './reducers/aboutReducer';
import ThemeReducer from './reducers/ThemeReducer';
import dynamic from 'next/dynamic';

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  products: productsReducer,
  crops: cropsReducer,
  compares: comparesReducer,
  knowledges: knowledgesReducer,
  callbacks: callbacksReducer,
  ordercallbacks: orderCallbacksReducer,
  productDetails: productDetailsReducer,

  cropDetails: cropDetailsReducer,
  compareDetails: compareDetailsReducer,
  insightDetails: insightDetailsReducer,
  newReview: newReviewReducer,
  cart: cartReducer,
  compare: compareReducer,
  orderSample: orderSampleReducer,
  saveForLater: saveForLaterReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  paymentStatus: paymentStatusReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  newProduct: newProductReducer,
  deleteCallback: deleteCallbackReducer,
  deleteOrderCallback: deleteOrderCallbackReducer,
  newKnowledge: newKnowledgeReducer,
  newCallback: newCallbackReducer,
  newOrderCallback: newOrderCallbackReducer,
  newCrop: newCropReducer,
  newCompare: newCompareReducer,
  newInsight: newInsightReducer,
  product: productReducer,
  crop: cropReducer,
  users: allUsersReducer,
  userDetails: userDetailsReducer,
  reviews: productReviewsReducer,
  review: reviewReducer,
  wishlist: wishlistReducer,
  seo: seoReducer,
  brands: brandsReducer,
  credentials: credentialsReducer,
  theme:ThemeReducer,
});
let initialState={}


if(typeof window!=='undefined'){
const cartstorage=localStorage.getItem("cartItems")
const shippingstorage=localStorage.getItem("shippingInfo")
const comparestorage=localStorage.getItem("compareItems")


initialState = {
  cart: {
    cartItems:cartstorage
      ? JSON.parse(cartstorage)
      : [],
    shippingInfo: shippingstorage
      ? JSON.parse(shippingstorage)
      : {},
  },
  compare: {
    compareItems: comparestorage
      ? JSON.parse(comparestorage)
      : [],
  },
}
}
const middleware = [thunk];


const store = createStore(
  reducer,
  initialState,
  //composeWithDevTools(applyMiddleware(...middleware))

);




export default store

