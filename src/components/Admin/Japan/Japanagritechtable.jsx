import React,{useEffect,useState} from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import axios from 'axios'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css';
function JapanAgriTechtable() {
  const [dataget,setgetdata]=useState([])
  const [country,setcountry]=useState('japan')
  const[snackbaropen,setsnackbaropen]=useState(false)
  const[snackseverity,setsnackseverity]=useState('success')
  const[snackbarmessage,setsnackbarmessage]=useState('')
  const[editdata,seteditdata]=useState({
    _id:'',
    name:'',
    imageurl:'',
    description:'',
    description1:'',
    description2:'',
    description3:'',
    description4:''
  })
  const setediformData=(item)=>{
    seteditdata({
      _id:item._id,
      name:item.name,
      description:item.description,
      description1:item.description1,
      description2:item.description2,
      description3:item.description3,
      description4:item.description4,
      imageurl:item.imageurl
    })

  }
  const Handleclosebar=(reason,event)=>{
    if(reason==='clickaway'){
      return ;
    }
    setsnackbaropen(false)
  }
  const  IsraelHandler=async(countryset)=>{
    try{
const res=await axios.get(`/api/v1/admin/japan-agritech`)
if(!res.data.ok){
  console.log('data not fetched')
}


setgetdata(res.data.data)
    }
    catch(error){
      console.error(error,'error fetching data')
    }
  }
  const DeleteHandler=async(gotid)=>{
try{
const res=await axios.delete(`/api/v1/japan-agritech/${gotid}`)
const deleteduser=dataget.filter((item)=>item._id!==gotid)
setgetdata(deleteduser)
console.log("deleted successfully",res)
setsnackbaropen(true)
setsnackbarmessage('Deleted successfully')
setsnackseverity('success')
}
catch(error){
console.log("error deleting ")
setsnackseverity('failure')
setsnackbarmessage("could not be deleted",error)
setsnackbaropen(true)
}
  }
  useEffect(()=>{
    IsraelHandler(country);
  },[country])
  const UpdateHandler=async()=>{
    try{
      const res=await axios.put(`/api/v1/japan-agritech/${editdata._id}`,{
        name:editdata.name,
        description:editdata.description,
        description1:editdata.description1,
        description2:editdata.description2,description3:editdata.description3,
        description4:editdata.description4,
        imageurl:editdata.imageurl
      })
      console.log('Updated data successfully')
      setsnackbaropen(true)
      setsnackbarmessage('Updated successfully')
      setsnackseverity('success')

    }
    catch(error){
      console.log("error occuring in updating")
      setsnackbaropen(true)
      setsnackbarmessage("could not be updated",error)
      setsnackseverity('failure')
    }
  }
  return (
    <div className="m-auto mt-2 mb-4">
      
      <div>
      <h1 className='rounded-md bg-green-400 text-center font-bold' >
  Agricultural techniques of Japan
</h1>

{
  dataget.map((item,index)=>(
    
    <div key={index} className="mx-auto m-2">
      
      <div className=' rounded-lg p-2 font-bold text-1xl'></div>
      <div style={{backgroundColor:'paleturquoise'}} className='p-2  rounded-full text-center font-bold itemname'>{item.name}</div>
      <div className="flex flex-wrap rounded-lg bg-white p-4 shadow-2xl " >
        <div>
      <LazyLoadImage src={item.imageurl} alt={item.name} style={{width:'300px',height:'200px'}}/>
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
        <button onClick={()=>DeleteHandler(item._id)} className='rounded-lg bg-red-600 px-2 py-1'>Delete</button>
        <button className="bg-green-600 rounded-lg px-2 py-1  mx-1" onClick={()=>setediformData(item)}>Update</button>
        </div>
        {
          editdata._id===item._id && (
<form onSubmit={UpdateHandler}>
  <label>
    Name:
  </label><br/>
  <input type='text' value={editdata.name} onChange={(e)=>{seteditdata({...editdata,name:e.target.value})}}/><br/>
  <label>
    description:
  </label><br/>
  <input type='text' value={editdata.description} onChange={(e)=>{seteditdata({...editdata,description:e.target.value})}}/><br/>
  <label>
    description 1:
  </label><br/>
  <input type='text' value={editdata.description1} onChange={(e)=>{seteditdata({...editdata,description1:e.target.value})}}/><br/>
  <label>
    description 2:
  </label><br/>
  <input type='text' value={editdata.description2} onChange={(e)=>{seteditdata({...editdata,description2:e.target.value})}}/><br/>
  <label>
    description 3:
  </label><br/>
  <input type='text' value={editdata.description3} onChange={(e)=>{seteditdata({...editdata,description3:e.target.value})}}/><br/>
  <label>
    description 4:
  </label><br/>
  <input type='text' value={editdata.description4} onChange={(e)=>{seteditdata({...editdata,description4:e.target.value})}}/><br/>
  <label>
    imageurl:
  </label><br/>
  <input type='text' value={editdata.imageurl} onChange={(e)=>{seteditdata({...editdata,imageurl:e.target.value})}}/><br/>
  

<button type='submit' className='rounded-lg bg-green-500 p-2'>Update Data</button>


</form>
          )
          
        }
        </div>
    </div>
  ))
}
<Snackbar open={snackbaropen} onClose={Handleclosebar} autoHideDuration={6000}>
  <MuiAlert variant='filled' severity={snackseverity} onClose={Handleclosebar} elevation={6}>
{snackbarmessage}
  </MuiAlert>
</Snackbar>
      </div>
    </div>
  );
  }

export default JapanAgriTechtable;
