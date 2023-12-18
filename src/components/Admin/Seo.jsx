import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useSnackbar } from 'notistack';

function Seo() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState('home');
  const [edit, setEdit] = useState(false);
  const [pageData, setPageData] = useState({
    keywords: '',
    metaTitle: '',
    metaDesc: '',
    backLinks: '',
    id: '',
  });
  const { enqueueSnackbar } = useSnackbar();

  async function fetchData() {
    try {
      const response = await axios.get('/api/v1/getSeo');
      setData(response.data?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      enqueueSnackbar('Error fetching data', { variant: 'error' });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const foundPageData = data.find(
      (obj) => obj.page.toLowerCase() === page.toLowerCase()
    );
    if (foundPageData) {
      setPageData({
        keywords: foundPageData.keywords,
        metaTitle: foundPageData.metaTitle,
        metaDesc: foundPageData.metaDesc,
        backLinks: foundPageData.backLinks,
        id: foundPageData._id,
      });
    } else {
      setEdit(false);
      setPageData({
        keywords: '',
        metaTitle: '',
        metaDesc: '',
        backLinks: '',
        id: '',
      });
    }
  }, [page, data]);
  async function handleSubmit() {
    const { data } = await axios.post('/api/v1/admin/addSeo', {
      keywords: pageData.keywords,
      metaTitle: pageData.metaTitle,
      metaDesc: pageData.metaDesc,
      backLinks: pageData.backLinks,
      page,
    });
    if (data?.success) {
      enqueueSnackbar('Added data', { variant: 'success' });
      fetchData();
    } else {
      enqueueSnackbar('Error adding data', { variant: 'error' });
    }
  }
  async function handleUpdate() {
    const { data } = await axios.put(`/api/v1/admin/updateSeo/${pageData.id}`, {
      keywords: pageData.keywords,
      metaTitle: pageData.metaTitle,
      metaDesc: pageData.metaDesc,
      backLinks: pageData.backLinks,
      page,
    });
    if (data?.success) {
      enqueueSnackbar('updated data', { variant: 'success' });
    } else {
      enqueueSnackbar('Error updating data', { variant: 'error' });
    }
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-3">
        <button className="bg-green-400 p-2" onClick={() => setPage('home')}>
          Home
        </button>
        <button
          className="bg-green-400 p-2"
          onClick={() => setPage('about us')}
        >
          About Us
        </button>
        <button
          className="bg-green-400 p-2"
          onClick={() => setPage('contact us')}
        >
          Contact US
        </button>
        <button
          className="bg-green-400 p-2"
          onClick={() => setPage('knowledge center')}
        >
          Knowledge Center
        </button>
      </div>
      <h2>Seo of {page} page</h2>
      <TextField
        label="Keywords"
        variant="outlined"
        placeholder="Enter your keywords"
        size="small"
        required
        value={pageData.keywords}
        onChange={(e) => setPageData({ ...pageData, keywords: e.target.value })}
        disabled={!edit}
      />
      <TextField
        label="Meta Desc"
        variant="outlined"
        placeholder="Enter your Meta Description"
        size="small"
        required
        value={pageData.metaDesc}
        onChange={(e) => setPageData({ ...pageData, metaDesc: e.target.value })}
        disabled={!edit}
      />
      <TextField
        label="Meta Title"
        variant="outlined"
        placeholder="Enter your Meta Title"
        size="small"
        required
        value={pageData.metaTitle}
        onChange={(e) =>
          setPageData({ ...pageData, metaTitle: e.target.value })
        }
        disabled={!edit}
      />
      <TextField
        label="Backlinks"
        variant="outlined"
        placeholder="Enter your Backlinks"
        size="small"
        required
        value={pageData.backLinks}
        onChange={(e) =>
          setPageData({ ...pageData, backLinks: e.target.value })
        }
        disabled={!edit}
      />
      {pageData?.id && (
        <button className="bg-blue-400 p-2" onClick={() => setEdit(!edit)}>
          Edit
        </button>
      )}
      {!edit && (
        <button className="bg-blue-400 p-2" onClick={() => handleSubmit()}>
          Add Data
        </button>
      )}
      {edit && (
        <button className="bg-blue-400 p-2" onClick={() => handleUpdate()}>
          Update
        </button>
      )}
    </div>
  );
}

export default Seo;
