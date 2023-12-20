import React from 'react';
import Dropdown from './DropdownCust';
import {
  agritechSubNav,
  marketMitraSubNav,
  agriCliniSubNav,
} from '../../imageLinks';
import './Subnav.module.css'
function SubNav() {

  return (
    <div className="subnav-container">
      <div
        className="subnav-items"
        style={{ backgroundColor: '#215d0e' }}
      >
        <div
          className="subnav-item"
        >
         
          <Dropdown 
            title={'Agritech'}
            items={[
              {
                label: 'Farm Machinaries',
                href: '/agritechproducts?category=Farm Machinaries',
              },
              {
                label: 'Implements and Others',
                href: '/agritechproducts?category=Implements and Others',
              },
            ]}
          />
        </div>
        <div
          className="subnav-item"
        >
         
          <Dropdown 
            title={'Agri Clinic'}
            items={[
              {
                label: 'Fertilizer Organic',
                href: '/agritechproducts?category=Fertilizer Organic',
              },
              {
                label: 'Fertilizer Inorganic',
                href: '/agritechproducts?category=Fertilizer Inorganic',
              },
              {
                label: 'Pesticides Organic',
                href: '/agritechproducts?category=Pesticides Organic',
              },
              {
                label: 'Pesticides Inorganic',
                href: '/agritechproducts?category=Pesticides Inorganic',
              },
            ]}
          />
        </div>
        <div
          className="subnav-item"
        >
         
          <Dropdown 
            title={'Market Mitra'}
            items={[
              { label: 'Coffee', href: '/crop/coffee' },
              { label: 'Arecanut', href: '/crop/arecanut' },
              { label: 'Pepper', href: '/crop/pepper' },
              { label: 'Coconut', href: '/crop/coconut' },
              { label: 'Cashew', href: '/crop/cashew' },
              { label: 'Maize', href: '/crop/maize' },
              { label: 'Tur', href: '/crop/tur' },
              { label: 'Cotton', href: '/crop/cotton' },
              { label: 'Onion', href: '/crop/onion' },
              { label: 'Tomato', href: '/crop/tomato' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default SubNav;
