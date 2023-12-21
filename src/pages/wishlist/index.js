import { useSelector } from 'react-redux';
import MetaData from '../../components/Layouts/MetaData';
import MinCategory from '../../components/Layouts/MinCategory';
import Sidebar from '../../components/User/Sidebar';
import Product from '../../components/Products/Product';
import dynamic from 'next/dynamic';

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <>
      <MetaData title="Wishlist |  way2smartfarmer" />

      {/* <MinCategory /> */}
      <main className="w-full lg:mt-16">
        <div className="flex gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7">
          <Sidebar activeTab={'wishlist'} />
{typeof window!=='undefined' && 
          <div className="flex-1 shadow">
            {/* <!-- wishlist container --> */}
            <div className="flex flex-col">
              <span className="font-medium text-lg px-4 sm:px-8 py-4 border-b">
                My Wishlist ({wishlistItems.length})
              </span>

              {wishlistItems.length === 0 && (
                <div className="flex items-center flex-col gap-2 m-6">
                  <span className="text-lg font-medium mt-6">
                    Empty Wishlist
                  </span>
                  <p>You have no items in your wishlist. Start adding!</p>
                </div>
              )}

              {wishlistItems
                .map((item, index) => <Product {...item} key={index} />)
                .reverse()}
            </div>
            {/* <!-- wishlist container --> */}
          </div>
          }
        </div>
      </main>
    </>
  );
};

export default dynamic(()=>Promise.resolve(Wishlist),{ssr:false})
