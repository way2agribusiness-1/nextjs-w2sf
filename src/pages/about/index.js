import './about.module.css';
import Head from 'next/head';
import axios from 'axios'
import {
  smartFarmerLogo,
  way2AgriTechLogo,
  way2GroceriesLogo,
  way2vegetablesLogo,
  urbanAgricultureLogo,
  way2FoodsLogo,
  way2AgriIntelLogo,
  powerTillerLogo,
  way2agriCM,
  drSoilLogo,
  way2AgriFBI,
  farmNeedzLogo,
  fiveToFiveImage,
  way2AbiLogo,
  pmcLogo,
  serviceImage,
  allWebServices,
} from '../../imageLinks';
import {
  RemoveRedEye,
  Explore,
  Flag,
  TrendingUp,
  Download,
} from '@mui/icons-material';
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { getSeo } from '../../actions/seoAction';
import { getBrands, getCredentials } from '../../actions/aboutAction';
import {LazyLoadComponent} from 'react-lazy-load-image-component'
export default function About() {
  const fontFamilyBody = {
    fontFamily: "'Times New Roman', 'Times', serif",
  };
  const dispatch = useDispatch();
  const [lightBox, setLightBox] = useState(false);
  const [lightBoxImage, setLightBoxImage] = useState(null);
  const [brandsnew,setbrandsnew]=useState([])
  const { brands } = useSelector((state) => state.brands?.brands);
  const { credentials } = useSelector(
    (state) => state.credentials?.credentials
  );
  const { seoDetails } = useSelector((state) => state.seo);
  const aboutSeo = seoDetails?.data?.filter(
    (pages) => pages.page === 'about us'
  )[0];
  const keywords = aboutSeo?.keywords;
  const metaTitle = aboutSeo?.metaTitle;
  const metaDesc = aboutSeo?.metaDesc;
  const backlinks = aboutSeo?.backLinks;
{typeof window!=='undefined' &&
  useEffect(() => {
    //dispatch(getSeo());
    const datafetch=async()=>{
      try{
      const res=await axios.get("http://127.0.0.1:4000/api/v1/brands")
      console.log(res.data)
      setbrandsnew(res.data)
      }
      catch(error){
        console.log('Error')
      }
    }
    //eslint-disable-next-line
    datafetch();
  }, []);
}
  return (
    
    <>
    
      <Head>
        <title>Way2SmartFarmer | About Us</title>
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
          href="https://www.way2smartfarmer.com/about"
        ></link>
      </Head>
      
     {typeof window==='undefined' &&
      <div
        className="flex flex-col items-center justify-center  bg-white"
        style={fontFamilyBody}
      > {typeof window==='undefined' && (
        <div className="flex flex-col justify-center  text-yellow-400 p-3 m-3 max-w-lg rounded-lg titleBox ">
          <p style={{textAlign:'center'}}>
          Way2Agribusiness India Pvt. Ltd. (Way2ABI)
          </p>
          <p style={{textAlign:'center'}}>
            ವೇ2ಅಗ್ರಿಬಿಸ್ನೆಸ್ ಇಂಡಿಯಾ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್
          </p>
        </div>
      )}
        <div className="business flex flex-col md:flex-row items-center justify-center px-3 m-5 bg-white-100 max-w-6xl rounded-lg aboutBox">
          <img
            src={way2AbiLogo}
            alt="way2agribusiness"
            title="way2agribusiness"
          />
          <p className="text-justify text-md ml-4">
          Way2Agribusiness India Pvt. Ltd. is a social enterprise, established in March 2014, with a core mission to facilitate the transformation of agriculture into agribusiness. Our primary objective is to serve as a comprehensive one-stop solution provider for farmers and agribusiness enterprises, dedicated to enhancing their competitiveness by offering enabling products and services. In pursuit of this mission, we have introduced, a) product-based initiatives: Way2Agritech and Way2Foods, our registered brands, cater to the supply of agricultural inputs & outputs, respectively, & b) service initiatives: Way2Agriintel AI, Way2AgriPro, and Way2Agribiz PMC.
          </p>
        </div>
        <div>
          <h2 className="heading2 mx-auto text-base font-bold text-green-800 border-b-2 border-yellow-300 w-40 font-sans mb-8">Our Vision & Mission</h2>

          {/* vision 2 boxes */}
          <div className="mt-2 visionBox flex flex-col md:flex-row">
            <div className="visionItem">
              <div className="visionItemHeading rounded-lg">
                <div className="flex">
                  <RemoveRedEye className="flex text-yellow-400 mt-0.5 mr-2"></RemoveRedEye>
                  <h6 className="text-lg text-md text-yellow-400 font-bold vision2">
                    Our Vision
                  </h6>
                </div>
              </div>
              <p className="text-justify text-md p-2 pl-0 vision3">
                One-stop solution for farmers & agribusiness
                enterprises,offering comprehensive services
              </p>
            </div>
            <div className="visionItem">
              <div className="visionItemHeading rounded-lg">
                <div className="flex">
                  <Explore className="flex text-yellow-400 mt-0.5 mr-2"></Explore>
                  <h6 className="text-lg text-md text-yellow-400 font-bold vision2">
                    Our Mission
                  </h6>
                </div>
              </div>
              <p className="text-justify text-md p-2 pl-0 vision3">
                Enhancing the business competitiveness of participants in agri &
                allied sectors mainly farmers & agri-entrepreneurs through our
                enabling products & services
              </p>
            </div>
          </div>
          {/* vision 2 boxes */}
          <div className="mt-2 visionBox flex flex-col md:flex-row">
            <div className="visionItem">
              <div className="visionItemHeading rounded-lg">
                <div className="flex">
                  <Flag className="flex text-yellow-400 mt-0.5 mr-2"></Flag>
                  <h6 className="text-lg text-md text-yellow-400 font-bold vision2">
                    Our Objectives
                  </h6>
                </div>
              </div>
              <div className="pr-2 pl-0">
                <ul className="list-disc pl-5 mt-4 text-justify text-md vision3">
                  <li>
                    Provide research-based consultancy services and contemporary
                    solutions to the clients in the agribusiness sector
                  </li>
                  <li>
                    Seamless agribusiness project implementation and management
                  </li>
                  <li>
                    Undertake trading operations of selected agri outputs and
                    inputs incl. implements & machineries.
                  </li>
                </ul>
              </div>
            </div>
            <div className="visionItem">
              <div className="visionItemHeading rounded-lg">
                <div className="flex">
                  <TrendingUp className="flex text-yellow-400 mt-0.5 mr-2"></TrendingUp>
                  <h6 className="text-lg text-md text-yellow-400 font-bold vision2">
                    Our Differentiators
                  </h6>
                </div>
              </div>
              <div className="pr-2 pl-0">
                <ul className="list-disc pl-5 mt-4 text-justify text-md vision3">
                  <li>
                  Five integrated solutions to 5 stakeholders
                  </li>
                  <li>
                  Brands “Way2Agritech” & “Way2Foods”
                  </li>
                  <li>Solid online presence – Over 14 services</li>
                  <li>
                  Strong network & presence at APMC Yard
                  </li>
                  <li>Impactful & scalable products & services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Five for Five */}
        <div className="flex flex-col p-2 m-2 ">
          <h2 className="heading2 mx-auto text-base font-bold text-green-800 border-b-2 border-yellow-300 w-70 font-sans mb-8">Five for Five</h2>
          <div className="fffOut mt-2 flex flex-col md:flex-row justify-center items-center">
            {/* left */}
            <div className="flex flex-col">
              <img
                src={fiveToFiveImage}
                alt="five to five "
                title="five to five "
                className="p-2 m-0"
              />
              <button className="mx-9 p-2 pl-0 bg-green-800 border-2 rounded-md border-yellow_theme">
                <Download className="ml-6 text-yellow-400"></Download>
                <a
                  href="/pdf/Way2ABI%20PMC%20Brochure.pdf"
                  download
                  className="text-yellow-400"
                >
                  Download
                </a>
              </button>
            </div>
            {/* right */}
            <div className="flex flex-col text-justify text-sm FiveforFiveText">
              <p className="text-justify text-md custom-height">
                How to transform agriculture into agribusiness? What are the
                professional services which will evolve in this transformation
                process? And how best a start-up can engage and contribute in a
                niche manner to assist this transformation process? These were
                thought provoking questions faced by the founder of
                Way2Agribusiness India Pvt Ltd. With the past experience as a
                agribusiness scholar, farmer, agribusiness analyst, working at
                different capacities at agribusiness entities and Knowledge
                Partner to the Govt. of Karnataka initiative, Dr. Prasanna
                Dyavegowda (Director & CEO, Way2ABI), who holds doctoral degree
                in Agribusiness Management, working to assist transform of
                agriculture into agribusiness in a niche manner through Way2ABI
                products & services.
              </p>
              <br />
              <p className="text-justify text-md custom-height FiveforFive7">
                The idea behind `Five for Five` is to provide a niche
                contribution to the transformation of agriculture into
                agribusiness. Way2Agribusiness India Pvt Ltds innovation can be
                considered a combination of product, service, and business model
                innovation in the agribusiness sector. With the aim of assisting
                in this transformation process, the start-up offers innovative
                products and services to stakeholders in the agribusiness
                sector.
              </p>
              <div className="holder" style={{ backgroundColor: 'aliceblue', borderRadius: '50px', marginTop: '10px', padding: '10px' }}>
  <h4 className='text-yellow-500 font-bold text-[18px] text-justify ml-5'>
    <strong>Stakeholders</strong>
  </h4>
  <div className='flex flex-wrap justify-between ml-5'>
    <div className="imgh1">
      <Image className='' style={{ width: '100px', height: '100px', borderRadius: '50%', margin: 'auto' }} src="https://res.cloudinary.com/dm71xhdxd/image/upload/v1700558070/download_ihysuc.webp" width={100} height={100} alt="farmer association" />
      <div className='text-center font-bold'><strong>Farmers & Farmers’ Association</strong></div>
    </div>
    <div className="imgh2">
      <Image style={{ width: '100px', height: '100px', borderRadius: '50%', margin: 'auto' }} src="https://res.cloudinary.com/dm71xhdxd/image/upload/v1700559212/1_xrsux0.webp" alt="farmer association" width={100} height={100}/>
      <div className='text-center font-bold'><strong>Agri Start-ups and Students</strong></div>
    </div>
    <div className="imgh3">
      <Image style={{ width: '100px', height: '100px', borderRadius: '50%', margin: 'auto' }} src="https://res.cloudinary.com/dm71xhdxd/image/upload/v1700559601/3_fcu7hy.webp" alt="farmer association" width={100} height={100} />
      <div className='text-center font-bold'><strong>Entrepreneurs & Trading Community</strong></div>
    </div>
  </div>
  <div className='flex justify-evenly pt-3 flex-wrap'>
    <div className="image-container">
      <Image style={{ width: '100px', height: '100px', borderRadius: '50%', margin: 'auto' }} src="https://res.cloudinary.com/dm71xhdxd/image/upload/v1700561000/6_r6en0b.webp" alt="farmer association" width={100} height={100} />
      <div className='text-center font-bold'><strong>Government Depts. & Agencies</strong></div>
    </div>
    <div className="image-container">
      <Image style={{ width: '100px', height: '100px', borderRadius: '50%', margin: 'auto' }} src="https://res.cloudinary.com/dm71xhdxd/image/upload/v1700559844/5_lqe7gr.webp" alt="farmer association" width={100} height={100} />
      <div className='text-center font-bold'><strong>Agritech Products Manufacturers</strong></div>
    </div>
 </div>
 </div>
 </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex flex-col p-2 m-2 ">
          
          <div>
            <div>

            </div>
          </div>
          
        </div>
        
        {/* Our Services */}
        <div className="brandBox mt-2">
        <h2 className="heading2 mx-auto text-base font-bold text-green-800 border-b-2 border-yellow-300 w-[6rem] font-sans mb-8">Our Brands</h2>
       {/*  <div className='mx-auto flex flex-row flex-wrap justify-center items-center justify-between mx-auto'>
            <div className=''>
<img className='max-w-[200px] h-auto mx-auto' src={Agripro} alt='way2agripro'/>
            </div>
            <div className=''>
<img className='max-w-[200px] h-auto mx-auto'  src={way2FoodsLogo} alt='way2foods'/>
            </div>
          </div>
            */}
            <div className='done justify-center rounded-full  shadow-2xl text-center p-2 m-9 w-10vw'>
              <p className='justify-center mx-auto text-[16px] text-justify p-[18px] leading-7'>Way2Agribusiness India Pvt. Ltd., deal in both agri inputs and agri output for the benefit of farmers and consumers. Agri inputs being handled under the brand “Way2Agritech” which covers agri inputs, implements and machineries those are used by the farmers in their crop cultivation operations. Agri output being handled under the brand “Way2Foods” which covers those are grown and supplied by the farmers and they will be looking for market creation for the same.</p>
              </div>
            {/*another conatiner */}
            <div className="flex flex-col md:flex-row serviceBox mx-auto">
      {/* First Container */}
      <div className="flex flex-col items-center justify-center servicesText m-2 p-2 bg-white shadow-2xl rounded-md service">
        <h3 className='text-center justify-center font-bold'>Way2Agritech</h3>
        <Image
          src={way2AgriTechLogo}
          alt="logo of way2agripro"
          width={150}
          height={150}
          className="p-2 shadow-2xl rounded-full"
        />
        <ul className="list-disc text-justify pl-4 flex-wrap ">
        <li className='flex-wrap'>Agri inputs, implements & machineries ಅಗ್ರಿ ಇನ್ಪುಟ್ಗಳು & ಯಂತ್ರೋಪಕರಣ</li>
          <li>Flagship - Dr Soil Health & Honda Power ಡಾ. ಸಾಯಿಲ್ ಹೆಲ್ತ್ & ಹೋಂಡಾ</li>
          <li>Distribution from APMC Yeshwanthpur ಎಪಿಎಂಸಿ ಯಶವಂತಪುರದಿಂದ ವಿತರಣೆ</li>
          <li>Online presence with websites & AI ವೆಬ್ಸೈಟ್ಗಳು & AI ನೊಂದಿಗೆ ಆನ್ಲೈನ್</li>
          <li>Agri Clinic operations for farmers ರೈತರಿಗಾಗಿ ಅಗ್ರಿ ಕ್ಲಿನಿಕ್ ಕಾರ್ಯಾಚರಣೆಗಳು</li>
        </ul>
        <h3 className='bg-yellow-400 rounded-lg px-2 text-black font-bold'>Technology based Agriculture</h3>
        <ul className='list-disc justify-center flex-wrap pl-3 '>
          <li>A comprehensive range of farm machinery and implements</li>
          <li>Organic fertilizers & pesticides with tailored inorganics</li>
          <li>Optimal blend of online and offline products and services</li>
        </ul>
        <button className="mx-9 p-2 pl-1  bg-green-800 border-2 rounded-full border-yellow_theme">
          <Download className=" text-yellow-400"></Download>
          <a
            href="/pdf/Way2ABI%20PMC%20Brochure.pdf"
            download
            className="text-yellow-400"
          >
            Download
          </a>
        </button>
      </div>

      {/* Second Container */}
      <div className="flex flex-col items-center justify-center servicesText m-2 p-2 bg-white shadow-2xl rounded-md service">
        <h3 className='text-center justify-center font-bold'>Way2Foods</h3>
        <Image
          src={way2FoodsLogo}
          alt="logo of way2agripro"
          width={150}
          height={150}
          className="p-2 shadow-2xl rounded-full"
        />
        <ul className="list-disc text-justify pl-4 flex-wrap mb-10 pb-8">
          <li className='flex-wrap'>Supply of selected vegetables & groceries ಆಯ್ದ ತರಕಾರಿಗಳು & ದಿನಸಿಗಳ ಪೂರೈಕೆ</li>
          <li>Different sales channels to reach customers ವಿಭಿನ್ನ ಮಾರಾಟದ ಚಾನಲ್‌ಗಳು</li>
          <li>Indent based supply practices ಇಂಡೆಂಟ್ ಆಧಾರಿತ ಪೂರೈಕೆ ಅಭ್ಯಾಸಗಳು</li>
          <li>Price circular support on crops to purchase ಬೆಳೆ ಖರೀದಿಸಲು ಬೆಲೆ ಸುತ್ತೋಲೆ ಬೆಂಬಲ</li>
          <li>Combination of offline & online activities ಆಫ್ಲೈನ್ & ಆನ್‌ಲೈನ್ ಚಟುವಟಿಕೆ ಸಂಯೋಜನೆ</li>
        </ul>
        <h3 className='stake'></h3>
        <ul className=' justify-center flex-wrap '>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button className="mx-9 p-2 pl-1  bg-green-800 border-2 rounded-full border-yellow_theme mt-11">
          <Download className=" text-yellow-400"></Download>
          <a
            href="/pdf/Way2ABI%20PMC%20Brochure.pdf"
            download
            className="text-yellow-400"
          >
            Download
          </a>
        </button>
      </div>
    </div>

          
        <div>
          <h2 className="heading2 mt-4 mx-auto text-base font-bold text-green-800 border-b-2 border-yellow-300 w-[9rem] font-sans mb-8">Services We Offer</h2>
          <div className="flex flex-col md:flex-row serviceBox">
            <div className="flex flex-col items-center justify-center servicesText m-2 p-2 bg-white shadow-2xl rounded-md service">
              <h3 className='text-center justify-center font-bold'>Way2AgriIntel AI</h3>
              <Image
                src="https://res.cloudinary.com/dm71xhdxd/image/upload/v1699439977/Static%20Images/Way2AgriIntel_AI_tg4k8y.webp"
                alt="logo of way2agribusiness"
                width={150}
                height={150}
                className="p-2 shadow-2xl rounded-full"
              />
              <ul className="list-disc text-justify pl-4 mt-2">
                <li>CropIntel - Perennial crop selection ದೀರ್ಘಕಾಲಿಕ ಬೆಳೆ ಆಯ್ಕೆ</li>
                <li>AgMachineX - Technology based agri ತಂತ್ರಜ್ಞಾನ ಆಧಾರಿತ ಕೃಷಿ</li>
                <li>Agri FBI - Mkt. insights & price outlook ಮಾರುಕಟ್ಟೆ & ಬೆಲೆ ಒಳನೋಟ</li>
                <li>Agri Clinic - Plant nutrients & protection ಸಸ್ಯ ಪೋಷಕಾಂಶಗಳು & ರಕ್ಷಣೆ</li>
                <li>NutriTracker - Tracking & Scheduling ಟ್ರ್ಯಾಕಿಂಗ್ & ವೇಳಾಪಟ್ಟಿ</li>
              </ul>
              <h3 className='bg-yellow-400 rounded-lg px-2 text-black font-bold'>Agribusiness Intelligence</h3>
        <ul className='list-disc justify-center flex-wrap mb-11 pb-11  pl-3'>
          <li >Plan, plant & prosper - CropIntel & Way2ABI Agri FBI</li>
          <li>Effortless operations - AgMachineX and NutriTracker</li>
          <li>Be secure and maximize returns – Agri Clinic</li>
        </ul>
              <button className="  mx-9 p-2 px-3pl-0 bg-green-800 border-2 border-yellow_theme text-yellow-400 rounded-full mt-11 ">
                <Download></Download>
                <a
                  href="https://res.cloudinary.com/dm71xhdxd/image/upload/v1696050438/Static%20Images/brochures/Way2Agritech_1_gsmqpx.pdf"
                  download
                >
                  Download
                </a>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center servicesText m-2 p-2 bg-white shadow-2xl rounded-md service">
            <h3 className='text-center justify-center font-bold'>Way2AgriPro</h3>
              <Image
                src="https://res.cloudinary.com/dm71xhdxd/image/upload/v1700026197/Way2AgriPro_igbq3r_zplhsb.webp"
                alt="logo of way2agribusiness"
                width={150}
                height={150}
                className="p-2 shadow-2xl rounded-full"
              />

              <ul className="list-disc text-justify pl-4">
                <li>Agribiz students enrichment ಕೃಷಿಉದ್ದಿಮೆ ವಿದ್ಯಾರ್ಥಿಗಳ ಬಲಪಡಿಸುವುದು</li>
                <li>Professional development programmes ವೃತ್ತಿಪರ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮಗಳು</li>
                <li>Start-ups empowerment initiatives ಸ್ಟಾರ್ಟ್-ಅಪ್ ಗಳ ಸಬಲೀಕರಣ ಕ್ರಮಗಳು</li>
                <li>Sustainable farming practices promotion ಸುಸ್ಥಿರ ಕೃಷಿ ಪದ್ಧತಿಗಳ ಪ್ರಚಾರ</li>
                <li>Assist to achieve agribusiness excellence ಕೃಷಿಉದ್ದಿಮೆ ಶ್ರೇಷ್ಠತೆಗೆ ಸಹಾಯ</li>
              </ul>
              <h3 className='bg-yellow-400 rounded-lg px-2 text-black font-bold'> Agribusiness Journey- Right skillset</h3>
        <ul className='list-disc justify-center flex-wrap pl-3'>
       
<li>Tailored for students, professionals, enterprising farmers & start-ups</li>
<li>Soft skills through training sessions on online, literature & Agri tour</li>
<li>Stay updated on the latest trends and best practices in agribusiness</li>
<li>Apply the acquired knowledge and skills in real-world agribusiness</li>
        </ul>
              <button className=" mt-2 mx-9 p-2 px-3pl-0 bg-green-800 border-2 border-yellow_theme text-yellow-400 rounded-full">
                <Download></Download>
                <a href="/pdf/Way2ABI%20PMC%20Brochure.pdf" download>
                  Download
                </a>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center servicesText m-2 p-2 bg-white shadow-2xl rounded-md service">
            <h3 className='text-center justify-center font-bold'>Way2Agribiz PMC</h3>
              <Image
                src={pmcLogo}
                alt="logo of way2agribusiness"
                width={140}
                height={140}
                className="p-2 shadow-2xl rounded-full"
              />
              <ul className="list-disc text-justify pl-4">
                <li>Project planning including DPR DPR ಸೇರಿದಂತೆ ಯೋಜನೆ</li>
                <li>Govt. approval & clearance ಸರ್ಕಾರ ಅನುಮೋದನೆ & ತೆರವು</li>
                <li>Project commissioning ಯೋಜನೆಯ ಕಾರ್ಯಾರಂಭ</li>
                <li>Operations mgt. & retainer services ಕಾರ್ಯಾಚರಣೆ ನಿರ್ವಹಣೆ</li>
                <li>Market penetration strategy & services ಮಾರುಕಟ್ಟೆ ನುಗ್ಗುವ ತಂತ್ರ</li>
              </ul>
              <h3 className='bg-yellow-400 rounded-lg px-2 text-black font-bold'>Agribusiness Projects</h3>
        <ul className='list-disc justify-center flex-wrap mb-11 pb-11 pl-3'>
          <li>Identification of lucrative project opportunities</li>
          <li>Roadmap from concept till commissioning & handholding</li>
          <li>Enjoy custom-tailored agri project services</li>
        </ul>
              <button className=" mt-11 mx-9 p-2 px-3pl-0 bg-green-800 border-2 border-yellow_theme text-yellow-400 rounded-full">
                <Download></Download>
                <a href="/pdf/Way2ABI%20PMC%20Brochure.pdf" download>
                  Download
                </a>
              </button>
            </div>
          </div>
          
          
        </div>
        </div>
        {/* Our brands */}
        
        {/* Our mobile apps */}
        <div className="flex flex-col p-2 m-2 mb-0 pb-0 mt-3 pt-0">
          <h2 className="heading2 mx-auto text-base font-bold text-green-800 border-b-2 border-yellow-300 w-[8rem] font-sans mb-8">Our Mobile Apps</h2>
          <div className="mobileBox flex flex-col md:flex-row">
            <div className="mobileItem flex flex-col md:flex-row">
              <Image
                src={way2AgriFBI}
                alt="logo of way2agribusiness"
                width={150}
                height={150}
                className="p-2 m-6"
              />
              <div className="mobileText">
                <strong>Features</strong>
                <ul className="list-disc text-justify mobileTextUl">
                  <li>Content and the report periodicity</li>
                  <li> coverage on all key markets</li>
                  <li>Add-on services for better understanding</li>
                  <li>Price outlook and the market insights</li>
                  <li>Agri fbi – market planner</li>
                  <li>Process to follow by app users</li>
                </ul>
                <button className="p-2 mt-7 bg-yellow-400 border-2 border-yellow_theme flex items-center text-black rounded-full max-w-max">
  <i className="fab fa-google-play p-1 text-blue-500"></i>
  <a
    href="https://play.google.com/store/apps/details?id=com.way2abi.way2abi"
    target="_blank"
    rel="noreferrer"
    className="dn1"
  >
    <span className="">Download Agri FBI</span>
  </a>
</button>

              </div>
            </div>
            <div className="mobileItem flex flex-col md:flex-row">
              <Image
                src={way2agriCM}
                alt="logo of way2agribusiness"
                width={150}
                height={150}
                className="p-2 m-6"
              />
              <div className="mobileText">
                <strong>Features</strong>
                <ul className="list-disc text-justify mobileTextUl ">
                  <li>Agri-Trade: Notification, Bidding & Rating</li>
                  <li>
                    Extensive Coverage of Karnataka {`&apos;`} s Major Crop
                    Clusters & Markets
                  </li>
                  <li>Large database of sellers & buyers, nationwide</li>
                  <li>
                    Expert Advisory Services and Value-Added Agri-Tech Solutions
                  </li>
                  <li>Commodities Price Outlook and Market Insights</li>
                </ul>
                <button className="p-2   bg-yellow-400 border-2 border-yellow_theme flex items-center text-black rounded-full max-w-max">
                  <i className='fab fa-google-play p-1 text-blue-500'></i>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ionicframework.way2market617518&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1"
                  >
                    <span>Download Agri CM</span>
                  </a>
                  
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Online services */}
        <div className="ourOnlineService">
          <h2 className="heading2 mx-auto text-base font-bold text-green-800 border-b-2 border-yellow-300 w-40 font-sans mb-8 mt-2">Our Online Services</h2>
          <div className="wrap">
            <div className="wrap1">
              <ul className="relative ">
                <li className="services_main">
                  <Image
                    className="container1"
                    src={serviceImage}
                    alt="container logo"
                    width={430}
                    height={400}
                  />
                </li>
                <li>
                  <a target="_blank" rel="noreferrer"
                    href="https://www.way2agribusiness.com/"
                    title="Way2Agribusiness"
                  >
                    <Image
                      src={way2AbiLogo}
                      alt="abi"
                      className="agri-img"
                      width={160}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer"
                    href="https://www.way2agriintel.com/"
                    title="Way2Agriintel"
                  >
                    <Image
                      src={way2AgriIntelLogo}
                      alt="kab"
                      className="f4f-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.way2agritech.com/" title="Way2Agritech">
                    <Image
                      src={way2AgriTechLogo}
                      alt="way2at"
                      className="agritech-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.way2foods.com/" title="Way2Foods">
                    <Image
                      src={way2FoodsLogo}
                      alt="way2f"
                      className="foods-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer"
                    href="https://www.way2smartfarmer.com/"
                    title="Way2SmartFarmer"
                  >
                    <Image
                      src={smartFarmerLogo}
                      alt="way2sf"
                      className="smartfarmer-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.powertiller.in/" title="PowerTiller">
                    <Image
                      src={powerTillerLogo}
                      alt="pt"
                      className="pt-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer"
                    href="https://www.drsoilhealth.com/"
                    title="Dr Soil Health"
                  >
                    <Image
                      src={drSoilLogo}
                      alt="dsh"
                      className="dsh-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.farmneedz.com/" title="FarmNeedz">
                    <Image
                      src={farmNeedzLogo}
                      alt="fn"
                      className="fn-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer"
                    href="https://www.way2vegetables.com/"
                    title="Way2Vegetables"
                  >
                    <Image
                      src={way2vegetablesLogo}
                      alt="w2v"
                      className="veg-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.way2groceries.in/" title="Way2Groceries">
                    <Image
                      src={way2GroceriesLogo}
                      alt="w2g"
                      className="grocery-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer"
                    href="https://www.urbanagriculture.in/"
                    title="UrbanAgriculture"
                  >
                    <Image
                      src={urbanAgricultureLogo}
                      alt="uab"
                      className="uab-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer"
                    href="https://www.karnatakaagribusiness.com/"
                    title="KarnatakaAgribusiness"
                  >
                    <Image
                      src={fiveToFiveImage}
                      alt="f4f"
                      className="kab-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.way2abi.way2abi&pli=1"
                    title="Way2ABI Agri FBI"
                  >
                    <Image
                      src={way2AgriFBI}
                      alt="fbi"
                      className="fbi-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.ionicframework.way2market617518"
                    title="Way2Market Agri CM"
                  >
                    <Image
                      src={way2agriCM}
                      alt="cm"
                      className="cm-img"
                      width={70}
                      height={20}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrap2">
            <p>
                <div className="head font-bold text-[19px]">Service Brief</div>
                <ul className="list-disc">
                  <li className="pt-1">
                    Digital agribusiness nexus ಡಿಜಿಟಲ್ ಕೃಷಿಉದ್ದಿಮೆ ಕೊಂಡಿ
                  </li>
                  <li>
                    Agritech advancements & Intel ಅಗ್ರಿಟೆಕ್ ಪ್ರಗತಿಗಳು & ಇಂಟೆಲ್
                  </li>
                  <li className="pt-1">
                    Seamless farming solutions ತಡೆರಹಿತ ಕೃಷಿ ಪರಿಹಾರಗಳು
                  </li>
                  <li className="pt-1">
                    From farm to plate precision ತೋಟದಿಂದ ತಟ್ಟೆ ನಿಖರತೆಗೆ
                  </li>
                  <li className="pt-1">
                    Empowering sustainable agri ಸುಸ್ಥಿರ ಕೃಷಿ ಸಶಕ್ತಗೊಳಿಸುವುದು
                  </li>
                </ul>
              </p>

              <div className="head font-bold text-[17px]">
                Online - Maximize reach & minimize costs ರೀಚ್ ಹೆಚ್ಚಳ, ಕಡಿಮೆ
                ವೆಚ್ಚ
              </div>
              <p>
                <ul className="list-disc list">
                  <li className="pt-1">
                    Corporate and social presence – www.way2agribusiness.com
                  </li>
                  <li>Brand hub – www.way2agritech.com & www.way2foods.in</li>
                  <li className="pt-1">
                    E-Commerce – www.way2smartfarmer.com & www.powertiller.in
                  </li>
                  <li className="pt-1">
                    Products specific websites – www.drsoilhealth.com
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/* </div> */}
        </div>

        {/* for lightbox */}
        {lightBox && (
          <div className="modal" onClick={() => setLightBox(false)}>
            <Image
              src={lightBoxImage}
              alt={lightBoxImage}
              width={140}
              height={200}
              className="modal-image"
            />
          </div>
        )}
        {/* Our Credentials */}
        <h3 className="heading2 text-base font-bold text-green-800 border-b-2 border-yellow-300 w-[8rem] font-sans mb-8">Our Credentials</h3>
        <div className="mt-2">
          <h4 className="yellowBackHeading">Awards</h4>
          <div className="mt-3">
           
            <div className="imagesContainer">
              {credentials &&
                credentials.length > 0 &&
                credentials
                  .filter((image) => image.type === 'Awards')
                  .map((image) => (
                    <div
                      key={image.title}
                      className="images"
                      onClick={() => {
                        setLightBox(true);
                        setLightBoxImage(image.image);
                      }}
                    >
                      <Image
                        src={image.image}
                        alt={image.alt}
                        title={image.title}
                        width={140}
                        height={200}
                        className="credImage"
                      />
                      <p className="image-name">{image.name}</p>
                    </div>
                  ))}
            </div> 
          </div>
                  
          <h4 className="yellowBackHeading">Media Coverages</h4>
          <div className="mt-3">
            
            <div className="imagesContainer flex justify-around ">
              {credentials &&
                credentials.length > 0 &&
                credentials
                  .filter((imageObj) => imageObj.type === 'Media Coverages')
                  .map((imageObj) => (
                    <div
                      key={imageObj.title}
                      className="images"
                      onClick={() => {
                        setLightBox(true);
                        setLightBoxImage(imageObj.image);
                      }}
                    >
                      <Image
                        src={imageObj.image}
                        alt={imageObj.title}
                        width={140}
                        height={200}
                        className="credImage"
                      />
                      <p className="image-name">{imageObj.name}</p>
                    </div>
                  ))}
            </div>
            
          </div>
            
          <h4 className="yellowBackHeading">Approvals and Licenses</h4>
          <div className="mt-3">
            
            <div className="imagesContainer flex justify-around ">
              {credentials &&
                credentials.length > 0 &&
                credentials
                  .filter((image) => image.type === 'Approvals and Licenses')
                  .map((image) => (
                    <div
                      key={image.title}
                      className="images"
                      onClick={() => {
                        setLightBox(true);
                        setLightBoxImage(image.image);
                      }}
                    >
                      <Image
                        src={image.image}
                        alt={image.title}
                        width={100} height={100}
                        style={{ height: '200px', width: '140px' }}
                        className="credImage"
                      />
                      <p className="image-name">{image.name}</p>
                    </div>
                  ))}
            </div>
            
          </div>
        </div>
        <br />
        {/* videos */}
        <div>
          <h3 className="text-center mx-auto text-base font-bold text-green-800 border-b-2 border-yellow-300 w-40 font-sans mb-8">Way2ABI Videos</h3>
          <br />
          <div className="videoContainer">
          
            <div>
              <LazyLoadComponent>
              <video
                className="videosThumbnail"
                role="application"
                data-setup='{"fluid": true}'
                muted="muted"
                preload="auto"
                autoPlay=" "
                controls
                id="videojs6447b3753e123_html5_api"
                poster="https://dhi-ai.com/wp-content/uploads/2022/11/dhi-home.jpg"
              >
                <source src="https://res.cloudinary.com/dm71xhdxd/video/upload/v1695461367/videos/kszm6vpap8lwjd3zgdsu.mp4"></source>
              </video>
              </LazyLoadComponent>
            </div>
          
            <p className="text text-green-800 text-justify videoText">
              Way2ABI is a comprehensive solution for the problems faced by
              agribusiness operations. They offer project services, providing
              support from idea generation to implementation. Their Agri FBI
              system offers market information and intelligence to enable
              informed decision-making. Way2Market Agri CM is a unique trading
              platform that connects farmers, traders, processors, exporters,
              and input suppliers. Way2Agritech addresses labour issues through
              technology-based agriculture, and Way2Foods creates markets for
              farmers&rsquo; produce. Way2ABI&rsquo;s Knowledge Centre and Agri
              Clinic are crucial knowledge transformation activities that
              benefit all agribusiness participants, including farmers.
            </p>
          </div>
        </div>
        {/* collabration */}
        
        <div className="text-center font-bold text-xl text-yellow-400  m-2 p-2 collaboration">
          <h3 className="heading2 text-center">Collaboration</h3>
          <div className="wrappero">
            <div className="marquee">
              
              <div className="marquee_div">
                {brandsnew.brands &&
                  brandsnew.brands.map((brand) => (
                    <Image 
                      key={brand.id}
                      src={brand.imageurl}
                      alt={brand.alt}
                      width={150}
                      height={150}
                      className="z-10"
                    />
                  ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    
                  }          
    </>
                  
  );
}
// export async function getServerSideProps() {
//   const res5 = await fetch(`${process.env.SERVER_HOST}/store/seo`);
//   const seo = await res5.json();
//   const res6 = await fetch(`${process.env.SERVER_HOST}/store/credentials`);
//   const cred = await res6.json();
//   const res7 = await fetch(`${process.env.SERVER_HOST}/store/brands`);
//   const brands = await res7.json();
//   return { props: { seo, cred, brands } };
// }
