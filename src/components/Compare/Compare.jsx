import { useState } from 'react';
import { useSelector } from 'react-redux';

import MetaData from '../Layouts/MetaData';
import CompareItem from './CompareItem';
import EmptyCompare from './EmptyCompare';
import { Navigate } from 'react-router-dom';

const Compare = () => {
  const { compareItems } = useSelector((state) => state.compare);

  const [back, setBack] = useState(false);
  if (back) {
    return <Navigate to={`/agritechproducts`} replace />;
  }
  return (
    <>
      <MetaData title="Compare | way2smartFarmer" />
      <main className=" w-full mt-20">
        {/* <!-- row --> */}
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          {/* <!-- cart column --> */}
          <div className="flex-1">
            {/* <!-- cart items container --> */}
            <div className="comparemain">
              {/* <table>
        
      </table> */}
              {/* <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                My Compare ({compareItems.length})
              </span> */}

              {compareItems && compareItems.length === 0 && <EmptyCompare />}

              {compareItems &&
                compareItems.map((item,i) => (
                  <CompareItem key={i} {...item} inCart={true} />
                ))}
            </div>
            {/* <!-- cart items container --> */}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  "
            onClick={() => setBack(true)}
          >
            Back To Products
          </button>
        </div>

        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default Compare;
