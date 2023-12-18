import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import {
  clearErrors,
  deleteProduct,
  getAdminProducts,
  updateProduct,
} from '../../actions/productAction';
import Rating from '@mui/material/Rating';
import { DELETE_PRODUCT_RESET } from '../../constants/productConstants';
import Actions from './Actions';
import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';
import { TextField } from '@mui/material';

const ProductTable = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { products, error } = useSelector((state) => state.products);
  const [productList, setProductList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const {
    loading,
    isDeleted,
    error: deleteError,
  } = useSelector((state) => state.product);

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
      enqueueSnackbar('Product Deleted Successfully', { variant: 'success' });
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
    dispatch(getAdminProducts());
  }, [dispatch, error, deleteError, isDeleted, enqueueSnackbar]);
  function allProducts() {
    let list = products.map((e) => {
      return {
        id: e._id,
        name: e.name,
        image: e.images[0].url,
        category: e.category,
        stock: e.stock,
        price: e.price,
        cprice: e.cuttedPrice,
        rating: e.ratings,
        priority: e.priority,
        slug: e.slug,
      };
    });
    return list;
  }
  useEffect(() => {
    setProductList(allProducts());
  }, [products]);
  const deleteProductHandler = (slug) => {
    dispatch(deleteProduct(slug));
  };
  const columns = [
    // {
    //   field: 'id',
    //   headerName: 'Product ID',
    //   minWidth: 100,
    //   flex: 0.5,
    // },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 200,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                draggable="false"
                src={params.row.image}
                alt={params.row.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'category',
      headerName: 'Category',
      minWidth: 100,
      flex: 0.1,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'number',
      headerAlign: 'left',
      align: 'center',
      minWidth: 50,
      flex: 0.1,
      renderCell: (params) => {
        return (
          <>
            {params.row.stock < 10 ? (
              <span className="font-medium text-red-700 rounded-full bg-red-200 p-1 w-6 h-6 flex items-center justify-center">
                {params.row.stock}
              </span>
            ) : (
              <span className="">{params.row.stock}</span>
            )}
          </>
        );
      },
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      minWidth: 80,
      headerAlign: 'center',
      align: 'center',
      flex: 0.2,
      renderCell: (params) => {
        return <span>₹{params.row.price.toLocaleString()}</span>;
      },
    },
    {
      field: 'cprice',
      headerName: 'Cutted Price',
      type: 'number',
      minWidth: 80,
      headerAlign: 'center',
      align: 'center',
      flex: 0.2,
      renderCell: (params) => {
        return <span>₹{params.row.cprice.toLocaleString()}</span>;
      },
    },
    {
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      minWidth: 100,
      flex: 0.1,
      align: 'left',
      headerAlign: 'left',
      renderCell: (params) => {
        return (
          <Rating
            readOnly
            value={params.row.rating}
            size="small"
            precision={0.5}
          />
        );
      },
    },
    {
      field: 'Priority',
      headerName: 'Priority',
      minWidth: 80,
      flex: 0.3,
      sortable: true,
      align: 'center',
      headerAlign: 'center',
      sortComparator: (a, b) => parseInt(a) - parseInt(b),
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">{params.row.priority}</div>
        );
      },
    },
    {

    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 100,
      flex: 0.3,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Actions
            editRoute={'product'}
            deleteHandler={deleteProductHandler}
            slug={params.row.slug}
          />
        );
      },
    },
  ];

  function handleSearch(query) {
    setSearchQuery(query);
    console.log(query);
    if (query === '') {
      handleClearSearch();
      return;
    }
    const filteredRows = products.filter((row) =>
      row.name.toLowerCase().includes(query.toLowerCase())
    );
    let list = filteredRows.map((e) => {
      return {
        id: e._id,
        name: e.name,
        image: e.images[0].url,
        category: e.category,
        stock: e.stock,
        price: e.price,
        cprice: e.cuttedPrice,
        rating: e.ratings,
        priority: e.priority,
        slug: e.slug,
      };
    });
    setProductList(list);
  }
  function handleClearSearch() {
    setSearchQuery('');
    setProductList(allProducts());
  }
  return (
    <>
      <MetaData title="Admin Products | Way2smartfarmer" />

      {loading && <BackdropLoader />}

      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium uppercase">products</h1>
        <div>
          <TextField
            label="search"
            variant="outlined"
            size="small"
            placeholder="Search Product Name"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="bg-red-500 p-2 rounded-lg ml-2"
            onClick={() => handleClearSearch()}
          >
            Clear Search
          </button>
        </div>
        <Link
          to="/admin/new_product"
          className="py-2 px-4 rounded shadow font-medium text-white bg-primary-blue hover:shadow-lg"
        >
          New Product
        </Link>
      </div>
      <div
        className="bg-white rounded-xl shadow-lg w-full"
        style={{ height: 670 }}
      >
        <DataGrid
          rows={productList}
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

export default ProductTable;
