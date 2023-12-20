import React,{useEffect, useState} from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
function IsraelAgriTechtable() {
  const [dataget,setgetdata]=useState([])
  const [country,setcountry]=useState('israel')
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
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
  const UpdateHandler=async()=>{
    try{
      const res=await axios.put(`/api/v1/israel-agritech/${editdata._id}`,{
        name:editdata.name,
        description:editdata.description,
        description1:editdata.description1,
        description2:editdata.description2,description3:editdata.description3,
        description4:editdata.description4,
        imageurl:editdata.imageurl
      })
      console.log('Updated data successfully')
      setSnackbarOpen(true)
      setSnackbarMessage('Updated successfully')
      setSnackbarSeverity('success')

    }
    catch(error){
      console.log("error occuring in updating")
      setSnackbarOpen(true)
      setSnackbarMessage("could not be updated",error)
      setSnackbarSeverity('failure')
    }
  }
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false)
  }
  const  IsraelHandler=async(countryset)=>{
    try{
const res=await axios.get(`/api/v1/admin/israel-agritech`)
if(!res.data.ok){
  console.log('data not fetched')
}


setgetdata(res.data.data)
    }
    catch(error){
      console.error(error,'error fetching data')
    }
  }
  const DeleteHandler=async(gotoid)=>{
    try{
const res=await axios.delete(`/api/v1/israel-agritech/${gotoid}`)
const updateduser=dataget.filter((item)=>item._id!==gotoid)
setgetdata(updateduser)
console.log(res)
setSnackbarMessage('Deleted successfully')
setSnackbarOpen(true)
setSnackbarSeverity('success')
    }
    catch(error){
      console.log('error deleting ',error)
      setSnackbarMessage('failure',error)
      setSnackbarOpen(true)
      setSnackbarSeverity('failure')
    }
  }
  useEffect(()=>{
    IsraelHandler(country);
  },[country])
  
  return (
    <div className="lg:mt-16 w-[72vw] mx-auto mt-2 mb-4 ">
      
      <div className='mr-2'>
      <h1 className='rounded-md bg-green-400 text-center font-bold' >
  Agricultural techniques of Israel
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
        <button onClick={()=>{DeleteHandler(item._id)}} className='px-2 py-1 bg-red-500 rounded-lg'>Delete</button>
        <button className='px-2 py-1 rounded-lg bg-green-500 mx-1' onClick={()=>{setediformData(item)}}>Update</button>

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
    </div>
  ))
}
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
  }

export default IsraelAgriTechtable;
