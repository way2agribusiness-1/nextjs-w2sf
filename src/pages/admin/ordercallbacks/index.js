import ProtectedRoute from '@/Routes/ProtectedRoute';
import Dashboard from '@/components/Admin/Dashboard';
import OrderCallbackTable from '@/components/Admin/OrderCallbackTable';
import React from 'react'

const CallbackOrder = () => {
  return (
    <div>
        <ProtectedRoute isAdmin={true}>
            <Dashboard >
                <OrderCallbackTable/>
            </Dashboard>
        </ProtectedRoute>
    </div>
  )
}

export default CallbackOrder;