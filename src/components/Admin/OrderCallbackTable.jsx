import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import {
  clearErrors,
  
} from '../../actions/productAction';


import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';

import {deleteOrderCallback,getAdminOrderCallbacks} from '../../actions/orderCallbackAction'
import {DELETE_ORDERCALLBACK_RESET} from '../../constants/orderCallbackConstants'
import Action from './Action';
const OrderCallbackTable = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { ordercallbacks, error } = useSelector((state) => state.ordercallbacks);
  const ordercallbackState = useSelector((state) => state.ordercallback) || {};
  const {
    loading,
    isDeleted,
    error: deleteError,
  } = ordercallbackState;

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (deleteError) {
      enqueueSnackbar(deleteError, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (isDeleted) {
      enqueueSnackbar('OrderCallback Deleted Successfully', { variant: 'success' });
      dispatch({ type: DELETE_ORDERCALLBACK_RESET });
    }
    dispatch(getAdminOrderCallbacks());
  }, [dispatch, error, deleteError, isDeleted, enqueueSnackbar]);

  const deleteOrderCallbackHandler = (id) => {
    dispatch(deleteOrderCallback(id));
  };

  const columns = [
    {
      field: 'createdAt',
      headerName: 'Date',
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 150,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
             
            </div>
            {params.row.name}
          </div>
        );
      },
    },
    
    {
      field: 'place',
      headerName: 'Address',
     
      minWidth: 400,
      headerAlign: 'left',
      align: 'left',
      flex: 0.2,
      renderCell: (params) => {
        return <span>{params.row.place.toLocaleString()}</span>;
      },
    },
    {
      field: 'pincode',
      headerName: 'Pin Code',
    
      minWidth: 100,
      headerAlign: 'left',
      align: 'left',
      flex: 0.2,
      renderCell: (params) => {
        return <span>{params.row.pincode}</span>;
      },
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      type: 'number',
      minWidth: 100,
      headerAlign: 'left',
      align: 'left',
      flex: 0.2,
      renderCell: (params) => {
        return <span>{params.row.phone}</span>;
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 50,
      flex: 0.3,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Action
           
            deleteHandler={deleteOrderCallbackHandler}
            id={params.row.id}
          />
        );
      },
    },
  ];

  const rows = [];
  ordercallbacks &&
    ordercallbacks.forEach((item) => {
      rows.unshift({
        id: item._id,
        createdAt:item.createdAt,
        name: item.name,
        pincode:item.pincode,
        place: item.place,
        phone: item.phone
      });
    });

  return (
    <>
      <MetaData title="Admin Orders | Way2smartfarmer" />

      {loading && <BackdropLoader />}

      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium uppercase">Order Callbacks</h1>
        
      </div>
      <div
        className="bg-white rounded-xl shadow-lg w-full"
        style={{ height: 470 }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectIconOnClick
          sx={{
            boxShadow: 0,
            border: 0,
          }}
        />
      </div>
    </>
  );
};

export default OrderCallbackTable;
