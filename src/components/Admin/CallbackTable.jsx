import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import {
  clearErrors,

} from '../../actions/productAction';

import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';
import { DELETE_CALLBACK_RESET } from '../../constants/callbackContants';
import { deleteCallback, getAdminCallbacks } from '../../actions/callbackAction';
import Action from './Action';

const CallbackTable = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { callbacks, error } = useSelector((state) => state.callbacks);
  const callbackState = useSelector((state) => state.callback) || {};
  const {
    loading,
    isDeleted,
    error: deleteError,
  } = callbackState;

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
      enqueueSnackbar('Callback Deleted Successfully', { variant: 'success' });
      dispatch({ type: DELETE_CALLBACK_RESET });
    }
    dispatch(getAdminCallbacks());
  }, [dispatch, error, deleteError, isDeleted, enqueueSnackbar]);

  const deleteCallbackHandler = () => {
   
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
      minWidth: 120,
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
      headerName: 'Place',
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
      flex: 0.2,
      renderCell: (params) => {
        return <span>{params.row.place.toLocaleString()}</span>;
      },
    },
    {
      field: 'phone',
      headerName: 'Phone',
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
      field: 'message',
      headerName: 'Message',
     
      minWidth: 100,
      headerAlign: 'left',
      align: 'left',
      flex: 0.2,
      renderCell: (params) => {
        return <span>{params.row.message.toLocaleString()}</span>;
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
           
            deleteHandler={deleteCallbackHandler}
            id={params.row.id}
          />
        );
      },
    },
  ];

  const rows = [];
  callbacks &&
    callbacks.forEach((item) => {
      rows.unshift({
        id: item._id,
        createdAt:item.createdAt,
        name: item.name,
        message:item.message,
        place: item.place,
        phone: item.phone
      });
    });

  return (
    <>
      <MetaData title="Admin Products | Way2smartfarmer" />

      {loading && <BackdropLoader />}

      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium uppercase">Contact callbacks</h1>
        
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

export default CallbackTable;
