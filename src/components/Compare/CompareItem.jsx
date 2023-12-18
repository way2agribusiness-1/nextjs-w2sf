import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

import { getDiscount } from '../../utils/functions';

import { Link } from 'react-router-dom';
import { removeItemsFromCompare } from '../../actions/compareAction';

const CompareItem = (item) => {
  const { specifications, category } = item;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const removeCompareItem = (id) => {
    dispatch(removeItemsFromCompare(id));
    enqueueSnackbar('Product Removed From Compare', { variant: 'success' });
  };
  let urlCategory = 'agritech';
  if (category === 'Farm Machinaries' || category === 'Implements and Others') {
    urlCategory = 'agriclinic';
  }

  return (
    <>
      <table key={item.product} style={{ width: '100%' }}>
        {/* <!-- product image --> */}
        <tr className="w-full sm:w-1/6 h-28 flex-shrink-0">
          <td className="tableimg">
            <img
              draggable="false"
              className="h-full w-full object-contain"
              src={item.image}
              alt={item.name}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Link to={`/${urlCategory}/${item.product}`} className="">
              <p className="group-hover:text-primary-blue ">
                {item.name.length > 42
                  ? `${item.name.substring(0, 42)}...`
                  : item.name}
              </p>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <span className="text-sm text-gray-500">
              <span className="font-extrabold ">Seller:</span> {item.seller}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex items-baseline gap-2 text-xl font-medium">
              <span>₹{(item.price * item.quantity).toLocaleString()}</span>
              <span className="text-sm text-gray-500 line-through font-normal">
                ₹{(item.cuttedPrice * item.quantity).toLocaleString()}
              </span>
              <span className="text-sm text-primary-green">
                {getDiscount(item.price, item.cuttedPrice)}%&nbsp;off
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <th>Description</th>
        </tr>
        <tr>
          <table style={{ width: '100%', margin: '0px' }}>
            <tbody>
              {specifications &&
                specifications.map((specification, index) => (
                  <tr key={index}>
                    <td className="text-left text-lg font-medium">
                      {specification.title}
                    </td>
                    <td className="text-left">{specification.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </tr>
        <tr>
          <td>
            <button
              onClick={() => removeCompareItem(item.product)}
              className="font-medium hover:bg-red-500 text-white bg-red-600 p-2 rounded-md"
            >
              Remove
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default CompareItem;
