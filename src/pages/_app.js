
import store from '@/store'
import '@/styles/globals.css'

import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux'
import { GetStaticProps } from 'next';
const MainLayout = lazy(() => import('@/components/Layouts/mainlayout'));
export default function App({ Component, pageProps }) {
  
  function LoadingSpinner() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="inline-flex">
          <svg
            className="animate-spin -ml-1 mr-3 h-10 w-10 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.21.898 4.209 2.35 5.657l1.414-1.414zM12 20a8 8 0 01-8-8H0c0 4.418 3.582 8 8 8v-2zm0-16a8 8 0 018 8h4a12.01 12.01 0 00-3.535-8.536A11.965 11.965 0 0012 4z"
            />
          </svg>
          <span className="text-gray-700 text-xl font-bold">Loading...</span>
        </div>
      </div>
    );
  }
  return (
 
  <Provider store={store}>
    <Suspense fallback={<LoadingSpinner />}>
      <MainLayout>
  <Component {...pageProps} />
  </MainLayout>
  </Suspense>
  </Provider>
 
  );
  }
  

