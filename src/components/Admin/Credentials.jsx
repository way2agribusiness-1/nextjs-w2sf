import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { DataGrid } from '@mui/x-data-grid';

function Credentials() {
  const { enqueueSnackbar } = useSnackbar();
  const [credentials, setCredentials] = useState([]);
  async function fetchData() {
    const { data } = await axios.get('/api/v1/credentials');
    setCredentials(data.credentials);
  }
  async function handleDelete(id) {
    const { data } = await axios.delete(
      `/api/v1/admin/credential/delete/${id}`
    );
    if (data.success) {
      enqueueSnackbar('Deleted', { variant: 'warning' });
      fetchData();
      return;
    }
    return data;
  }
  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      minWidth: 100,
      flex: 0.5,
      renderCell: (params) => {
        return (
          <div className="h-18 ">
            <img
              draggable="false"
              src={params.row.image}
              alt={params.row.name}
              className="w-full h-full object-cover"
            />
          </div>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return <div>{params.row.name}</div>;
      },
    },
    {
      field: 'type',
      headerName: 'Type',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return <div>{params.row.type}</div>;
      },
    },
    {
      field: 'alt',
      headerName: 'Alt',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return <div>{params.row.alt}</div>;
      },
    },
    {
      field: 'title',
      headerName: 'Title',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return <div>{params.row.title}</div>;
      },
    },
    {
      field: 'delete',
      headerName: 'delete',
      minWidth: 80,
      flex: 1,
      renderCell: (params) => {
        return (
          <button
            onClick={() => handleDelete(params.row.id)}
            className="bg-red-500 p-2 rounded-md"
          >
            Delete
          </button>
        );
      },
    },
  ];
  const rows = [];
  credentials &&
    credentials.forEach((item) => {
      rows.unshift({
        id: item._id,
        name: item.name,
        image: item.image,
        alt: item.alt,
        title: item.title,
        type: item.type,
      });
    });
  const getRowHeight = () => {
    return 160;
  };
  return (
    <div>
      <h2>List of Credentials</h2>
      <div
        className="bg-white rounded-xl shadow-lg w-full"
        style={{ height: 500 }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          getRowHeight={getRowHeight}
          disableSelectIconOnClick
          sx={{
            boxShadow: 0,
            border: 0,
          }}
        />
      </div>
    </div>
  );
}

export default Credentials;
