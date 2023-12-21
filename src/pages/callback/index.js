import ProtectedRoute from '@/Routes/ProtectedRoute';
import CallbackTab from '@/components/Admin/CallbackTab';
import Dashboard from '@/components/Admin/Dashboard';
import React from 'react'

const TabCallback = () => {
  return (
    <div>
        <ProtectedRoute isAdmin={true}>
           
                <CallbackTab/>
            
        </ProtectedRoute>
    </div>
  )
}

export default TabCallback;