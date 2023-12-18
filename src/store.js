
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import * as thunk from 'redux-thunk';
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

let initialState = {
  cart: {
    
    cartItems: 
    typeof window!=='undefined' ?
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
      :[],
    shippingInfo:
    typeof window!=='undefined' ?
    localStorage.getItem('shippingInfo')
      ? JSON.parse(localStorage.getItem('shippingInfo'))
      : {}
      :{},
  },
  compare: {
    compareItems:
    typeof window!=='undefined' ?
    localStorage.getItem('compareItems')
      ? JSON.parse(localStorage.getItem('compareItems'))
      : []
      :[],
  },
};

const middleware = [thunk];

const store = configureStore({
  reducer,
  initialState,
 // middleware: {
 //   thunk: thunk,
 // },
  devtools: true,
});
export default store;
