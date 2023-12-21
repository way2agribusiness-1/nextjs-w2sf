import ProtectedRoute from '@/Routes/ProtectedRoute'


import Dashboard from '@/components/Admin/Dashboard'
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
        const res=await axios.get("http://127.0.0.1:4000/api/v1/admin/callbacks")
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
    <div>
        <ProtectedRoute isAdmin={true}>
            <Dashboard>
            <div style={{ margin: 'auto', marginTop: '1rem', marginBottom: '1rem', maxWidth: '800px' }}>
    <h1 style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#2ecc71', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', fontSize: '22px', margin: '0.5rem', paddingTop: '0.25rem', paddingBottom: '0.25rem' }}>Contact Callback</h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', padding: '8px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
        <div>Name</div>
        <div>Place</div>
        <div>Message</div>
        <div>Phone</div>
        <div>Actions</div>
        {dataget.map((item) => (
            <React.Fragment key={item._id}>
                <div style={{ padding: '8px' }}>{item.name}</div>
                <div style={{ padding: '8px' }}>{item.place}</div>
                <div style={{ padding: '8px' }}>{item.message}</div>
                <div style={{ padding: '8px' }}>{item.phone}</div>
                <div style={{ padding: '8px' }}>
                    <button onClick={() => DeleteHandler(item._id)} style={{ backgroundColor: '#ff0000', color: '#ffffff', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '9999px' }}>Delete</button>
                </div>
            </React.Fragment>
        ))}
    </div>
    <Snackbar autoHideDuration={6000} open={snackbaropen} onClose={Handleclose}>
        <Alert variant="filled" severity={snackbarseverity} onClose={Handleclose}>
            <AlertTitle>{snackbarmessage}</AlertTitle>
        </Alert>
    </Snackbar>
</div>

            </Dashboard>
        </ProtectedRoute>
            
    </div>
  )
}

export default CallbackTab;