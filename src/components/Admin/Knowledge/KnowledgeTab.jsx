import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MetaData from '../../Layouts/MetaData';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
function KnowledgeTab() {
  const { id } = useParams();
  const [knowledgeList, setKnowledgeList] = useState([]);
  const[snackbarmessage,setsnackbarmessage]=useState('')
  const[snackseverity,setsnackseverity]=useState('success')
  const[snackbaropen,setsnackbaropen]=useState(false)
  const Handleclose=(event,reason)=>{
    if(reason==='clickaway'){
      return;
    }
    setsnackbaropen(false)
  }
  const[editdata,seteditdata]=useState({
    _id:"",
    name:"",
    description:"",
    description1:"",
    description2:"",
    description3:"",
    description4:"",
    imageurl:"",
    slug:""

  })
 
  const setEditFormData = (item) => {
    seteditdata({
        _id:item._id,
      name: item.name,
      description: item.description,
      description1: item.description1,
      description2: item.description2,
      description3: item.description3,
      description4: item.description4,
      imageurl: item.imageurl,
      slug: item.slug
    });
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/knowledge");
        setKnowledgeList(response.data.data);
        
      } catch (error) {
        console.error('Error fetching knowledge', error);
       
      }
    };
    fetchData();
  }, []);
  const DeleteHandler=async(idtodelete)=>{
    try{
    await axios.delete(`/api/v1/knowledge/${idtodelete}`)
  const updateddata=knowledgeList.filter((item)=>item._id!==idtodelete)
  setKnowledgeList(updateddata)
  setsnackbarmessage('Deleted successfully')
        setsnackbaropen(true)
        setsnackseverity('success')

    }
    catch(error){
console.log("Error deleting knowledge",error)
setsnackbaropen(true)
setsnackseverity('failure')
setsnackbarmessage('could not be deleted',error)
    }
  }
  const UpdateHandler=async()=>{
    try{
const response=await axios.put(`/api/v1/knowledge/${editdata._id}`,{
    name:editdata.name,
    description:editdata.description,
    description1:editdata.description1,
    description2:editdata.description2,
    description3:editdata.description3,
    description4:editdata.description4,
    imageurl:editdata.imageurl,
    slug:editdata.slug

})
console.log('Updated data',response.data)
setsnackbaropen(true)
setsnackbarmessage('Updated successfully')
setsnackseverity('success')
    }
    catch(error){
console.log('error updating knowledge')
setsnackbaropen(true)
setsnackbarmessage("could not be updated",error)
setsnackseverity('failure')
    }
  }
  

  return (
    <>
    <MetaData title="AllKnowledge | Way2SmartFarmer" />

      <main className="mt-11 pt-8">
    <div className=''>
        <h1 className='text-3xl font-bold text-center rounded-lg bg-green-700 text-white mx-3 py-1'>Knowledge Center</h1>
      <div className='flex  items-center mb-8'>
        <Snackbar open={snackbaropen}  onClose={Handleclose} autoHideDuration={6000}>
          <MuiAlert elevation={6} variant='filled' onClose={Handleclose} severity={snackseverity}>
            {snackbarmessage}
          </MuiAlert>
        </Snackbar>
        
      </div>
      <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {knowledgeList.map((item, index) => (
          <div key={index} className='bg-white rounded-lg shadow-lg p-4'>
            <h2 className='text-xl font-semibold mb-2 rounded-lg bg-blue-200 text-center'>{item.name}</h2>
            
            <LazyLoadImage src={item.imageurl} alt={item.name} className='w-full h-40 object-cover rounded-md mb-4' />
            <ul>
              <li>{item.description}</li>
              <li>{item.description1}</li>
              <li>{item.description2}</li>
              <li>{item.description3}</li>
              <li>{item.description4}</li>
            </ul>
            <button onClick={()=>DeleteHandler(item._id)} className='bg-red-400 font-bold rounded-lg py-1 px-2'>Delete</button>
            <button onClick={()=>setEditFormData(item)} className='bg-green-300 rounded-lg py-1 px-2 font-bold mx-1'>Update</button>
         
       
        {editdata._id===item._id && (
        <form onSubmit={UpdateHandler}>
            <div>
                <label>Name:</label><br/>
                <input type='text'  value={editdata.name} onChange={(e)=>seteditdata({...editdata,name:e.target.value})}/><br/>
                <label>Description:-</label><br/>
                <input className='px-1' type='text' value={editdata.description} onChange={(e)=>seteditdata({...editdata,description:e.target.value})}/><br/>
     <label>Description 1:-</label><br/>
     <input className='px-1' type='text' value={editdata.description1} onChange={(e)=>seteditdata({...editdata,description1:e.target.value})}/><br/>
     <label>Description 2:-</label><br/>
     <input className='px-1' type='text' value={editdata.description2} onChange={(e)=>seteditdata({...editdata,description2:e.target.value})}/><br/>
     <label>Description 3:-</label><br/>
     <input className='px-1' type='text' value={editdata.description3} onChange={(e)=>seteditdata({...editdata,description3:e.target.value})}/><br/>
     <label>Description 4:-</label><br/>
     <input className='px-1' type='text' value={editdata.description4} onChange={(e)=>seteditdata({...editdata,description4:e.target.value})}/><br/>
     <label>Image url:-</label><br/>
     <input className='px-1' type='text' value={editdata.imageurl} onChange={(e)=>seteditdata({...editdata,imageurl:e.target.value})}/><br/>
     <label>slug:-</label><br/>
     <input className='px-1' type='text' value={editdata.slug} onChange={(e)=>seteditdata({...editdata,slug:e.target.value})}/><br/>
            </div>
<button type='submit' className='bg-green-400 font-bold rounded-md px-1 shadow-red-300 border-black mt-2'>Update data</button>
        </form>
        )}
      </div>
        ))}
      </div>
      </div>
   
    </main>
    </>
  );
}

export default KnowledgeTab;
