import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link} from 'next/link'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../../actions/userAction';

const PrimaryDropDownMenu = ({ setTogglePrimaryDropDown, user }) => {
  const dispatch = useDispatch();
  const router=useRouter()
  const { enqueueSnackbar } = useSnackbar();

  const { wishlistItems } = useSelector((state) => state.wishlist);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/login');
    enqueueSnackbar('Logout Successfully', { variant: 'success' });
    setTogglePrimaryDropDown(false);
  };

  const navs = [
    {
      title: 'Wishlist',
      icon: <FavoriteIcon sx={{ fontSize: '18px' }} />,
      redirect: '/wishlist',
    },
  ];

  return (
    <div className="absolute w-60 right-0 ml-2 top-9 bg-white shadow-2xl rounded flex-col text-sm">
      {user.role === 'admin' && (
        <Link
          className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t"
          href="/admin/dashboard"
          onClick={() => setTogglePrimaryDropDown(false)}
        >
          <span className="text-primary-blue">
            <DashboardIcon sx={{ fontSize: '18px' }} />
          </span>
          Admin Dashboard
        </Link>
      )}

      <Link
        className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t"
        href="/account"
        onClick={() => setTogglePrimaryDropDown(false)}
      >
        <span className="text-primary-blue">
          <AccountCircleIcon sx={{ fontSize: '18px' }} />
        </span>
        My Profile
      </Link>

      {navs.map((item, i) => {
        const { title, icon, redirect } = item;
        return (
          <>
            {title === 'Wishlist' ? (
              <Link
                className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50"
                href={redirect}
                key={i}
              >
                <span className="text-primary-blue">{icon}</span>
                {title}
                <span className="ml-auto mr-3 bg-gray-100 p-0.5 px-2 text-gray-600 rounded">
                  {wishlistItems.length}
                </span>
              </Link>
            ) : (
              <Link
                className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50"
                href={redirect}
                key={i}
              >
                <span className="text-primary-blue">{icon}</span>
                {title}
              </Link>
            )}
          </>
        );
      })}

      <div
        className="pl-3 py-3.5 flex gap-3 items-center hover:bg-gray-50 rounded-b cursor-pointer"
        onClick={handleLogout}
      >
        <span className="text-primary-blue">
          <PowerSettingsNewIcon sx={{ fontSize: '18px' }} />
        </span>
        Logout
      </div>
    </div>
  );
};

export default PrimaryDropDownMenu;
