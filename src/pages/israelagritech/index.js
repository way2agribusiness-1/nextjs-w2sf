import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
function IsraelAgriTech() {
  const [dataget,setgetdata]=useState([])
  const [country,setcountry]=useState('israel')
  const  IsraelHandler=async(countryset)=>{
    try{
const res=await axios.get(`http://127.0.0.1:4000/api/v1/admin/${countryset}-agritech`)
if(!res.data.ok){
  console.log('data not fetched')
}


setgetdata(res.data.data)
    }
    catch(error){
      console.error(error,'error fetching data')
    }
  }
  const Buttonsubmit=(countryset)=>{
    setcountry(countryset)
    IsraelHandler(countryset)
  }
  useEffect(()=>{
    IsraelHandler(country);
  },[country])
  
  return (
    <div className="lg:mt-16 w-[80vw] m-auto mt-2 mb-4">
      <div className='flex flex-row  m-2'>
        <button  style={{paddingLeft:'50px',paddingRight:"50px",backgroundColor:'#215d0e'}} onClick={()=>Buttonsubmit('japan')} className='text-white rounded-full  font-bold p-3 japan'>JAPAN Agricultural Techniques</button>
        <button  style={{paddingLeft:'50px',paddingRight:"50px",backgroundColor:'#215d0e'}}  onClick={()=>Buttonsubmit('israel')} className='text-white rounded-full  font-bold p-3 ml-2 israel'>Israel Agricultural Techniques</button>
      </div>
      <div>
      <h1 className='shadow-2xl penetration' >
  Agricultural techniques of {country}
</h1>

{
  dataget.map((item,index)=>(
    
    <div key={index} className="mx-auto m-2">
      
      <div className=' rounded-lg p-2 font-bold text-1xl'></div>
      <div style={{backgroundColor:'paleturquoise'}} className='p-2  rounded-full text-center font-bold itemname'>{item.name}</div>
      <div className="flex flex-wrap rounded-lg bg-white p-4 shadow-2xl " >
        <div>
      <LazyLoadImage src={item.imageurl} alt={item.name} style={{width:'700px',height:'300px'}}/>
      </div>
      
      <div className='mx-auto'>
      <ul className='list-disc'>
        <li className='pt-1'>
{item.description}
        </li>
        <li className='pt-1'>
        {item.description1}
        </li>
        <li className='pt-1'>
        {item.description2}
        </li>
        <li className='pt-1'>
        {item.description3}
        </li>
        <li className='pt-1'>
        {item.description4}
        </li>
       
      
        </ul>
        </div>
        </div>
    </div>
  ))
}
      </div>
    </div>
  );
  }

export default IsraelAgriTech;
