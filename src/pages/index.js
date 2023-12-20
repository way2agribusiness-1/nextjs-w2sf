
import { useState, useEffect } from 'react';
import Banner from '../components/Home/Banner/Banner';
import ProductSlider from '../components/Home/ProductSlider/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../actions/productAction';
import { useSnackbar } from 'notistack';
import Head from 'next/head';
import SubNav from '../components/Layouts/SubNav';

import CircularProgress from '@mui/material/CircularProgress';
import { getSeo } from '../actions/seoAction';

import Products from '../components/Products/Products';
const Home = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading } = useSelector((state) => state.products);
  const [mobileView, setmobileView] = useState(false);
  const { seoDetails } = useSelector((state) => state.seo);
  const homeSeo = seoDetails?.data?.filter((pages) => pages.page === 'home')[0];
  const keywords = homeSeo?.keywords;
  const metaTitle = homeSeo?.metaTitle;
  const metaDesc = homeSeo?.metaDesc;
  const backlinks = homeSeo?.backLinks;
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    //dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);
  useEffect(() => {
    function updateView() {
      if (window.innerWidth > 770) setmobileView(false);
      else setmobileView(true);
    }
    updateView();
    window.addEventListener('resize', updateView);
    return () => {
      window.removeEventListener('resize', updateView);
    };
  }, []);

  useEffect(() => {
   
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {/* <MetaData title="Online Shopping Site for Agritech, AgriClinic, MarketMitra, Knowledgecentre, ABout us, contactus, waysmartfarnmer. Best Offers on Way2Agribusinesss!" /> */}
      <Head>
        <title>
          Online Shopping Site for Agritech, AgriClinic, MarketMitra,
          Knowledgecentre, ABout us, contactus, waysmartfarnmer. Best Offers on
          Way2Agribusinesss!
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <link rel="icon" href="../../../public/favicon.ico" />
        <meta name="meta_title" content={metaTitle} />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href="https://www.way2smartfarmer.com/" />
        
        <meta
          property="og:title"
          content="Online Shopping Site for Agritech, AgriClinic, MarketMitra,
          Knowledgecentre, ABout us, contactus, waysmartfarnmer. Best Offers on
          Way2Agribusinesss!"
        ></meta>
        <meta name="og:description" content={metaDesc} />
      </Head>
      <div className="hidden">
        
      </div>
      {/* <NavigationBar /> */}
      <div className={mobileView ? '' : 'mt-14'}>
        <SubNav />
      </div>

      <main className="flex flex-col gap-3 px-2 mt-2 sm:mt-2">
        <Banner />
        {loading && (
          <div
            style={{ height: '50vh' }}
            className="flex justify-center items-center"
          >
            <CircularProgress color="inherit" />
          </div>
        )}
        {/* <DealSlider title={'Discounts for You'} /> */}
        {!loading && (
          <>
          <ProductSlider
            title={'Suggested for You'}
            tagline={'Based on Your Activity'}
          />
       
          </>
        )}
        {/* <DealSlider title={'Top Brands, Best Price'} /> */}
        {!loading && (
          <>
          <ProductSlider
            title={'You May Also Like...'}
            tagline={'Based on Your Interest'}
          />
      
          </>
          
        )}
        {/* <DealSlider title={'Top Offers On'} /> */}
        {!loading && (
          <>
          <ProductSlider
            title={"Don't Miss These!"}
            tagline={'Inspired by your order'}
          />
         
          </>
        )}
      </main>
    </>
  );
};

export default Home;
