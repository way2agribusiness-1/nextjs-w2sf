import { useEffect } from "react";
import { useState } from "react";

const Knowledge = () => {
  
  const [dataget,setgetdata]=useState([])
  const KnowlegdeHandler=async()=>{
    try{
const res=await fetch(`/api/v1/knowledges`)
if(!res.ok){
  console.log('not fetched')
}
const data=await res.json();
console.log(data)
setgetdata(data.data)
  }
  catch(error){
    console.log('error fetched',error)
  }
  }
  useEffect(()=>{
    KnowlegdeHandler();
  },[])
  return (
    <div className="mt-16 mx-auto justify-center text-center">
      {/* <!-- image & product title --> */}
      <h2 className="font-bold mx-auto text-center text-2xl  mt-5 text-white bg-green-800 rounded-full p-1 
      
      
      
      ">
              Knowledge Center
            </h2>
      <div className="flex flex-wrap justify-center text-center mx-auto ">
        {dataget.map((item, index) => (
          <div key={index} className="m-2">
            <div className="flex flex-wrap justify-center text-center bg-white rounded-lg p-4 shadow-2xl">
              <div className="font-bold pt-2 ">
                {item.name}
                
                <img
                  src={item.images[0].url}
                  alt={item.name}
                  className="rounded-lg shadow-2xl max-w-[600px] h-auto mt-2"
                />
              </div>
              <ul className="list-disc pl-7 pt-7 text-left "> 
                <li className="pt-1">{item.Textfield}</li>
                <li className="pt-1">{item.Textfield1}</li>
                <li className="pt-1">{item.Textfield2}</li>
                <li className="pt-1">{item.Textfield3}</li>
                <li className="pt-1">{item.Textfield4}</li>
                <li className="pt-1">{item.Textfield5}</li>

                <li className="pt-1">{item.Textfield6}</li>
                <li className="pt-1">{item.Textfield7}</li>
                <li className="pt-1">{item.Textfield8}</li>
                

               
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
