import ProtectedRoute from '@/Routes/ProtectedRoute';
import Dashboard from '@/components/Admin/Dashboard';
import MainData from '@/components/Admin/MainData';
import React from 'react'

const Dashboardadmin = () => {
  return (
    <div>
        <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={0}>
                <MainData/>
            </Dashboard>
        </ProtectedRoute>
    </div>
  )
}

export default Dashboardadmin;