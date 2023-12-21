
import { useSelector } from 'react-redux';


import MetaData from '@/components/Layouts/MetaData';

import CartItem from '@/components/Cart/CartItem';
import EmptyCart from '@/components/Cart/EmptyCart';
import PriceSidebar from '@/components/Cart/PriceSidebar';
import SaveForLaterItem from '@/components/Cart/SaveForLaterItem';
import { useRouter } from 'next/router';


const Cart = () => {
  const router=useRouter();
  const { cartItems } = useSelector((state) => state.cart);
  const { saveForLaterItems } = useSelector((state) => state.saveForLater);

  const placeOrderHandler = () => {
    router.push('/login?redirect=shipping');
  };

  console.log(cartItems);
  return (
    <>
      <MetaData title="Shopping Cart | way2smartFarmer" />
      <main className="w-full lg:mt-20 px-2">
        {/* <!-- row --> */}
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          {/* <!-- cart column --> */}
          <div className="flex-1">
            {/* <!-- cart items container --> */}
            <div className="flex flex-col shadow bg-white">
              <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                My Cart ({cartItems.length})
              </span>

              {cartItems && cartItems.length === 0 && <EmptyCart />}

              {cartItems &&
                cartItems.map((item) => <CartItem {...item} inCart={true} />)}

              {/* <!-- place order btn --> */}
              <div className="flex justify-end">
                <button
                  onClick={placeOrderHandler}
                  disabled={cartItems.length < 1 ? true : false}
                  className={`${
                    cartItems.length < 1
                      ? 'bg-primary-grey cursor-not-allowed'
                      : 'bg-primary-orange'
                  } w-full sm:w-1/3 mx-2 sm:mx-6 my-4 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm`}
                >
                  Place Order
                </button>
              </div>
              {/* <!-- place order btn --> */}
            </div>
            {/* <!-- cart items container --> */}

            {/* <!-- saved for later items container --> */}
            <div className="flex flex-col mt-5 shadow bg-white">
              <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                Saved For Later ({saveForLaterItems.length})
              </span>
              {saveForLaterItems &&
                saveForLaterItems.map((item) => <SaveForLaterItem {...item} />)}
            </div>
            {/* <!-- saved for later container --> */}
          </div>
          {/* <!-- cart column --> */}

          <PriceSidebar cartItems={cartItems} />
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default Cart;
