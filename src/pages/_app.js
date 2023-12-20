
import store from '@/store'
import '@/styles/globals.css'
import axios from 'axios';
import { Provider } from 'react-redux'
import { GetStaticProps } from 'next';
export default function App({ Component, pageProps }) {
  
  
  return (
 
  <Provider store={store}>
    
  <Component 
  
  {...pageProps} />
  </Provider>
 
  );
  }
  

