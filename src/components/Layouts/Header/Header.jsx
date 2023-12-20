import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchbar from './Searchbar';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Primary from './Primary';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import DarkLightTheme from './DarkLightTheme';

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  const [mobileView, setmobileView] = useState(false);
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  const navigationList = (
    <>
      <Link
        href="/"
        className="hover:text-green-600  green-text font-bold lg:text-sm"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="hover:text-green-600 green-text font-bold lg:text-sm"
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="hover:text-green-600 green-text font-bold lg:text-sm"
      >
        Contact Us
      </Link>
      <Link
        href="/knowledges"
        className="hover:text-green-600 green-text font-bold lg:text-sm"
      >
        Knowledge Center
      </Link>
      <Link
        href="/israelagritech"
        className="hover:text-green-600 green-text font-bold lg:text-sm"
      >
        Intech.
      </Link>

      <Link
        href="/cart"
        className="flex items-center text-green-500 font-medium gap-2 relative"
      >
        <span>
          <ShoppingCartIcon />
        </span>
        {cartItems.length > 0 && (
          <div className="w-5 h-5 p-2 bg-gray-300 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
            {cartItems.length}
          </div>
        )}
      </Link>
      <Link
        href="/wishlist"
        className="flex items-center text-green-500 font-medium gap-2 relative"
        aria-label="Link label"
      >
        <span>
          <FavoriteIcon />
        </span>
        {wishlistItems.length > 0 && (
          <div className="w-5 h-5 p-2 bg-gray-300 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
            {wishlistItems.length}
          </div>
        )}
      </Link>

      {isAuthenticated === false ? (
        <Link
          href="/login"
          className="px-1 py-0.5 green-background border font-medium rounded-md cursor-pointer hover:bg-green-600 text-yellow-400"
        >
          Login
        </Link>
      ) : (
        <Primary user={user} />
      )}

      {/* {togglePrimaryDropDown && (
        <div
          className={
            mobileView ? 'absolute top-36 right-3 ' : ' absolute top-2 right-0'
          }
        >
          <PrimaryDropDownMenu
            setTogglePrimaryDropDown={setTogglePrimaryDropDown}
            user={user}
          />
        </div> */}

      {/* {toggleSecondaryDropDown && <SecondaryDropDownMenu />} */}
    </>
  );
  useEffect(() => {
    function updateView() {
      if (window.innerWidth > 770) setmobileView(false);
      else setmobileView(true);
    }
    updateView();
    window.addEventListener('resize', updateView);
    return () => {
      window.removeEventListener('resize', updateView);
    };
  }, []);
  return (
    <header className="fixed top-0 py-4 lg:py-0.5 w-full z-40 bg-white shadow-md">
      {/* <!-- navbar container --> */}
      <div className="px-3 w-full flex justify-between lg:justify-around items-center relative">
        {/* <!-- logo, name & search container --> */}
        <div className="flex flex-row w-[20vw] items-center">
          <Link className="h-full mr-2" href="/">
            <img
              draggable="false"
              className="object-contain main-logo"
              src={
                'https://res.cloudinary.com/dm71xhdxd/image/upload/v1695275169/Static%20Images/Smartfarmer_yjsfnt.png'
              }
              alt="Way2SmartFarmerLogo"
              height={35}
              width={55}
            />
          </Link>
          <Link href="/">
            <h1
              className="font-bold green-text "
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Way2SmartFarmer
            </h1>
          </Link>
        </div>
        {mobileView === false && (
          <div className="w-[25vw]">
            <Searchbar />
          </div>
        )}
        {/* <!-- logo & search container --> */}

        {/* <!-- right navs --> */}
        {mobileView ? (
          <MenuIcon
            className="right-2"
            onClick={() => setDisplayMobileNav(!displayMobileNav)}
          />
        ) : (
          <div className="flex w-[50vw] justify-around items-center  ml-1 sm:ml-0 relative">
            {navigationList}
          </div>
        )}
        {mobileView && displayMobileNav && (
          <div className="shadow-md absolute top-10 p-2 right-2 px-3 flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-100">
            {navigationList}
          </div>
        )}
      </div>
      {/* <!-- navbar container --> */}
    </header>
  );
};
export default Header;
