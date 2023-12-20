import { Link, useLocation, useNavigate } from 'react-router-dom';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import IceSkatingIcon from '@mui/icons-material/IceSkating';
import CloseIcon from '@mui/icons-material/Close';
import ForestIcon from '@mui/icons-material/Forest';
import Avatar from '@mui/material/Avatar';
import Phone from '@mui/icons-material/Phone';
import GrassIcon from '@mui/icons-material/Grass';
import SchoolIcon from '@mui/icons-material/School';
import InsightsIcon from '@mui/icons-material/Insights';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ImageIcon from '@mui/icons-material/Image';
import { useDispatch, useSelector } from 'react-redux';
import './Sidebar.module.css';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../../actions/userAction';
import Call from '@mui/icons-material/Call';
import { useState } from 'react';

const navMenu = [
  {
    icon: <EqualizerIcon />,
    label: 'Dashboard',
    ref: '/admin/dashboard',
  },
  {
    icon: <ShoppingBagIcon />,
    label: 'Orders',
    ref: '/admin/ordercallbacks',
  },
  {
    icon: <Call />,
    label: 'Callbacks',
    ref: '/admin/callbacks',
  },
  {
    icon: <InventoryIcon />,
    label: 'Products',
    ref: '/admin/products',
  },
  {
    icon: <ForestIcon />,
    label: 'Crops',
    ref: '/admin/crops',
  },

  {
    icon: <GroupIcon />,
    label: 'Users',
    ref: '/admin/users',
  },

  {
    icon: <AddBoxIcon />,
    label: 'Add Product',
    ref: '/admin/new_product',
  },

  {
    icon: <ReviewsIcon />,
    label: 'Reviews',
    ref: '/admin/reviews',
  },

  {
    icon: <GrassIcon />,
    label: 'Market Mitra',
    ref: '/admin/market_mitra',
  },
  {
    icon: <CompareArrowsIcon />,
    label: 'Comparision',
    ref: '/admin/market',
  },
  {
    icon: <InsightsIcon />,
    label: 'Insights',
    ref: '/admin/mitra',
  },
  {
    icon:<IceSkatingIcon/>,
    label:'Intech',
    ref:'/admin/intech',
      },
  {
    icon: <SchoolIcon />,
    label: 'Knowledge Center',
    ref: '/admin/knowledge_center',
  },
  
  {
    icon: <Phone />,
    label: 'Contacts',
    ref: '/callback',
  },
  {
    icon: <ImageIcon />,
    label: 'Credentials',
    ref: '/admin/credentials',
  },
  {
    icon: <AddBoxIcon />,
    label: 'Add Credentials Images',
    ref: '/admin/credentialsImages',
  },
  {
    icon: <AddBoxIcon />,
    label: 'Add Brands Image',
    ref: '/admin/brandsImages',
  },
  {
    icon: <ImageIcon />,
    label: 'Brands',
    ref: '/admin/brands',
  },
  {
    icon: <ImageIcon />,
    label: 'Seo',
    ref: '/admin/seo',
  },
  {
    icon: <AccountBoxIcon />,
    label: 'My Profile',
    ref: '/account',
  },
  
];

const Sidebar = ({  setToggleSidebar }) => {
  const[NavItem,setNavitem]=useState(-1)

  const location=useLocation()
  const[activeTab,setactiveTab]=useState(location.pathname)
  const handleToggle=()=>{
    setToggleSidebar(false)
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    enqueueSnackbar('Logout Successfully', { variant: 'success' });
    navigate('/login');
  };
  const handleItemClick=(ref)=>{
    setactiveTab(ref)
  }

  return (
    <aside className="sidebar z-10 sm:z-0 block min-h-screen fixed left-0 pb-14 max-h-screen w-3/4 sm:w-[20%] bg-gray-800 text-white overflow-x-hidden border-r mr-3">
      <div className="flex items-center gap-3 bg-gray-700 p-2 rounded-lg shadow-lg my-4 mx-3.5">
        <Avatar alt="Avatar" src={user.avatar.url} />
        <div className="flex flex-col gap-0">
          <span className="font-medium text-lg">{user.name}</span>
          <span className="text-gray-300 text-sm">{user.email}</span>
        </div>
        <button
          onClick={() => setToggleSidebar(false)}
          className="sm:hidden bg-gray-800 ml-auto rounded-full w-10 h-10 flex items-center justify-center"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex flex-col w-full gap-0 my-8">
        {navMenu.map((item, index) => {
          const { icon, label, ref } = item;
          if (label === 'Logout') {
           
              return (
                <button
                  key={index}
                  onClick={handleLogout}
                  className="hover:bg-gray-700 flex gap-3 items-center py-3 px-4 font-medium"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </button>
              );
          } else {
            return (
              <Link
                key={index}
                to={ref}
                onClick={() => handleItemClick(ref)}
                className={`${
                  activeTab === ref ? 'bg-gray-700' : 'hover:bg-gray-700'
                } flex gap-3 items-center py-3 px-4 font-medium`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </Link>
            );
            
          }
        })}
      </div>

      {/* <div className="flex flex-col gap-1 bg-gray-700 p-3 rounded-lg shadow-lg mb-6 mt-28 mx-3.5 overflow-hidden">
        <h5>Developed with by:</h5>
        <div className="flex flex-col gap-0">
          <a
            href="https://umaajay.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-lg hover:text-blue-500"
          >
            Uma Ajay Kumar Reddy P S
          </a>
          <a
            href="mailto:umaveena.alvas@gmail.com"
            className="text-gray-300 text-sm hover:text-blue-500"
          >
            umaveena.alvas@gmail.com
          </a>
        </div>
      </div> */}
    </aside>
  );
};

export default Sidebar;
