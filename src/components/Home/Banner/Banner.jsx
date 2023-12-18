import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const bannerImg = [
  'https://res.cloudinary.com/djx69owjm/image/upload/v1697106923/Banners/r5lmtgidn4mkgm8cbobj.png',
  'https://res.cloudinary.com/djx69owjm/image/upload/v1697106923/Banners/glz3vqkpzkua9ndeezwf.jpg',
  'https://res.cloudinary.com/djx69owjm/image/upload/v1697106923/Banners/wuk8h3xakjrqtcc4a3ei.jpg',
];
export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  );
};

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  // const banners = [Bio, Potash, climber];

  return (
    <>
      <section className="h-44 sm:h-72 w-full rounded-sm relative overflow-hidden shadow-md">
        <Slider {...settings}>
          {bannerImg.map((el, i) => (
            <img
              rel="preload"
              draggable="false"
              className="h-44 sm:h-72 w-full object-cover"
              src={el}
              alt="banner"
              key={i}
            />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
