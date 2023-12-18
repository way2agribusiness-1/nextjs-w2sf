import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Snackbar } from '@mui/material'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
const CallbackTab = () => {
const[snackbaropen,setsnackbaropen]=useState(false)
const[snackbarmessage,setsnackbarmessage]=useState('')
const[snackbarseverity,setsnackbarseverity]=useState('')
const[dataget,setdataget]=useState([])
const Handleclose=(event,reason)=>{
if(reason==='clickaway'){
    return ;
}
setsnackbaropen(false)
}

    
    const Handlefetch=async()=>{
        try{
        const res=await axios.get("/api/v1/admin/callbacks")
        setdataget(res.data.callbacks)
        setsnackbaropen(true)
        setsnackbarmessage('Fetched successfully')
        setsnackbarseverity('success')
        }
        catch(error){
setsnackbaropen(true)
setsnackbarmessage('failure in fetching data',error)
setsnackbarseverity('failure')
        }

    }
    const DeleteHandler=async(gotouserid)=>{
try{
await axios.delete(`http://127.0.0.1:4000/api/v1/admin/callback/${gotouserid}`)
const updateduser=dataget.filter((item)=>item._id!==gotouserid)

setdataget(updateduser)
setsnackbaropen(true)
setsnackbarmessage('Successfully deleted')
setsnackbarseverity('success')
}
catch(error){
    setsnackbaropen(true)
    setsnackbarmessage('could not be deleted')
    setsnackbarseverity('failure')
}
    }
    useEffect(()=>{
        Handlefetch()
    },[])
  return (
    <div className='m-auto mt-1 mb-1' >
            <h1 className='font-bold text-center bg-green-700 rounded-md shadow-2xl text-[22px] m-2 pt-1 pb-1 '>Contact Callback</h1>
            <div className='mx-auto pr-7' >
                <table className='table-auto w-full '>
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Place</th>
                            <th>Message</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataget.map((item) => (
                            <tr key={item._id}>
                                
                                <td>{item.name}</td>
                                <td>{item.place}</td>
                                <td>{item.message}</td>
                                <td>{item.phone}</td>
                                
                                <td><button onClick={()=>DeleteHandler(item._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Snackbar autoHideDuration={6000} open={snackbaropen} onClose={Handleclose}>
                <Alert variant="filled" severity={snackbarseverity} onClose={Handleclose}>
                    <AlertTitle>{snackbarmessage}</AlertTitle>
                </Alert>
            </Snackbar>
        </div>
    )
}
    
   

export default CallbackTab;