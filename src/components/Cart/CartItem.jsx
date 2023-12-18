import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { addItemsToCart, removeItemsFromCart } from '../../actions/cartAction';
import { getDeliveryDate, getDiscount } from '../../utils/functions';
import { saveForLater } from '../../actions/saveForLaterAction';
import { Link } from 'react-router-dom';

const CartItem = ({
  product,
  name,
  seller,
  price,
  cuttedPrice,
  image,
  stock,
  quantity,
  inCart,
  slug,
  category,
}) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (quantity >= stock) {
      enqueueSnackbar('Maximum Order Quantity', { variant: 'warning' });
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (quantity <= 1) return;
    dispatch(addItemsToCart(id, newQty));
  };

  const removeCartItem = (id) => {
    dispatch(removeItemsFromCart(id));
    enqueueSnackbar('Product Removed From Cart', { variant: 'success' });
  };

  const saveForLaterHandler = (id) => {
    dispatch(saveForLater(id));
    removeCartItem(id);
    enqueueSnackbar('Saved For Later', { variant: 'success' });
  };
  const handleClick = () => {
    window.location.replace(
      `http://wa.me/919449004956?text=${name}+${image}+${product}+${seller}+${price}`
    );
  };
  return (
    <div
      className="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden"
      key={product}
    >
      <Link
        to={`/${
          category === 'Farm Machinaries' ||
          category === 'Implements and Others'
            ? 'agritech'
            : 'agriclinic'
        }/${slug}`}
        className="flex flex-col sm:flex-row gap-5 items-stretch w-full group"
      >
        {/* <!-- product image --> */}
        <div className="w-full sm:w-1/6 h-28 flex-shrink-0">
          <img
            draggable="false"
            className="h-full w-full object-contain"
            src={image}
            alt={name}
          />
        </div>
        {/* <!-- product image --> */}

        {/* <!-- description --> */}
        <div className="flex flex-col sm:gap-5 w-full lg:pr-6 ml-6 lg:ml-0">
          {/* <!-- product title --> */}
          <div className="flex flex-col sm:flex-row justify-between items-start pr-5 gap-1 sm:gap-0">
            <div className="flex flex-col gap-0.5 sm:w-3/5">
              <h2 className="green-text text-left text-2xl">
                {name.length > 42 ? `${name.substring(0, 42)}...` : name}
              </h2>
              <span className="text-sm text-gray-500">
                Seller: <span className="font-medium">{seller}</span>
              </span>
            </div>

            <div className="flex flex-col sm:gap-2">
              <p className="text-sm">
                Delivery by {getDeliveryDate()} |{' '}
                <span className="text-primary-green">Free</span>{' '}
                <span className="line-through">₹{quantity * 40}</span>
              </p>
              {/* <span className="text-xs text-gray-500">7 Days Replacement Policy</span> */}
            </div>
            <div className="flex flex-col items-center justify-center">
              <a
                className="text-gray-500 "
                href="sms:+919740595079?&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for..."
              >
                Text Us
              </a>
              <button
                onClick={handleClick}
                className=" px-6 py-2 text-white font-medium rounded-md shadow hover:shadow-lg "
                style={{ background: '#25D366' }}
              >
                Whatsapp
              </button>
            </div>
          </div>
          {/* <!-- product title --> */}

          {/* <!-- price desc --> */}
          <div className="flex items-baseline gap-2 text-xl font-medium">
            <span>₹{(price * quantity).toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through font-normal">
              ₹{(cuttedPrice * quantity).toLocaleString()}
            </span>
            <span className="text-sm text-primary-green">
              {getDiscount(price, cuttedPrice)}%&nbsp;off
            </span>
          </div>
          {/* <!-- price desc --> */}
        </div>
        {/* <!-- description --> */}
      </Link>

      {/* <!-- save for later --> */}
      <div className="flex justify-between pr-4 sm:pr-0 sm:justify-start sm:gap-6">
        {/* <!-- quantity --> */}
        <div className="flex gap-1 items-center">
          <span
            onClick={() => decreaseQuantity(product, quantity)}
            className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border flex items-center justify-center cursor-pointer"
          >
            <p>-</p>
          </span>
          <input
            className="w-11 border outline-none text-center rounded-sm py-0.5 text-gray-700 font-medium text-sm qtyInput"
            value={quantity}
            disabled
          />
          <span
            onClick={() => increaseQuantity(product, quantity, stock)}
            className="w-7 h-7 text-xl font-light bg-gray-50 rounded-full border flex items-center justify-center cursor-pointer"
          >
            +
          </span>
        </div>
        {/* <!-- quantity --> */}
        {inCart && (
          <>
            <button
              onClick={() => saveForLaterHandler(product)}
              className="sm:ml-4 font-medium text-white hover:bg-green-600 bg-green-500 p-2 rounded-md"
            >
              Save For Later
            </button>
            <button
              onClick={() => removeCartItem(product)}
              className="font-medium text-white hover:bg-red-500 bg-red-600 p-2 rounded-md"
            >
              Remove
            </button>
          </>
        )}
      </div>
      {/* <!-- save for later --> */}
    </div>
  );
};

export default CartItem;
