import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearErrors } from '../../actions/productAction';
import Loader from '../Layouts/Loader';

import MetaData from '../Layouts/MetaData';

import { getCrops } from '../../actions/cropAction';
import Crop from './Crop';

const Crops = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();

  // filter toggles

  const { crops, loading, error } = useSelector((state) => state.crops);
  const keyword = params.keyword;

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    dispatch(getCrops(keyword));
  }, [dispatch, error, keyword, enqueueSnackbar]);

  return (
    <>
      <MetaData title="AllCrops | Way2SmartFarmer" />

      <main className="w-full sm:mt-0">
        {/* <!-- row --> */}
        <div className="flex gap-3 mt-2 sm:mt-2 sm:mx-3 m-auto mb-7">
          {/* <!-- search column --> */}
          <div className="flex-1">
            {!loading && crops?.length === 0 && (
              <div className="flex flex-col items-center   justify-center gap-3 bg-white shadow-sm rounded-sm p-6 sm:p-16">
                <img
                  draggable="false"
                  className="w-1/2 h-44 object-contain"
                  src="https://www.way2smartfarmer.com/img/logo.jpeg"
                  alt="Search Not Found"
                />
                <h1 className="text-2xl font-medium text-gray-900">
                  Sorry, no results found!
                </h1>
                <p className="text-xl text-center text-primary-grey">
                  Please check the spelling or try searching for something else
                </p>
              </div>
            )}

            {loading ? (
              <Loader />
            ) : (
              <div className="flex flex-col gap-2 pb-4 justify-center items-center w-full overflow-hidden bg-white">
                <h1 className="font-bold lg:mt-20 text-center text-5xl">
                  Market Mitra
                </h1>
                <div className="grid grid-cols-1  sm:grid-cols-4 w-full place-content-start overflow-hidden pb-4 border-b">
                  {crops?.map((crop) => (
                    <>
                      <Crop {...crop} key={crop.id} />
                    </>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* <!-- search column --> */}
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default Crops;
