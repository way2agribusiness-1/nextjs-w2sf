import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getRandomProducts } from '../../../utils/functions';
import { settings } from '../DealSlider/DealSlider';
import Product from './Product';

const ProductSlider = ({ title, tagline }) => {
  const { loading, products } = useSelector((state) => state.products);
  return (
    <section className="w-full shadow overflow-hidden">
      {/* <!-- header --> */}
      <div
        className="flex px-2 py-2 justify-between items-center view-all bg-white"
        style={{ borderRadius: '20px' }}
      >
        <div className="title flex flex-col gap-0.5">
          <h1 className="text-xl green-text font-medium">{title}</h1>
          <p className="text-sm text-gray-600">{tagline}</p>
        </div>
        <Link
          to="/agritechproducts"
          className="bg-primary-blue text-xs font-medium text-white px-3 py-2.5 rounded-sm shadow-lg uppercase"
        >
          view all
        </Link>
      </div>
      <hr />
      {loading ? null : (
        <Slider
          {...settings}
          className="flex items-center justify-between p-1 bg-white"
        >
          {products &&
            getRandomProducts(products, 12).map((product) => (
              <Product {...product} key={product._id} />
            ))}
        </Slider>
      )}
    </section>
  );
};

export default ProductSlider;
