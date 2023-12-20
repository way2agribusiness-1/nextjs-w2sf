import React, { Children,useEffect,useState } from "react";
import Headers from "../Layouts/Header/Header";

import Footer from "../Layouts/Footer/Footer";
{/*import Search from '../Search';*/}

export default function MainLayout({ children }) {
  const [searchDisplay, setSearchDisplay] = useState(false);
  useEffect(() => {
    function updateSearchDisplay() {
      if (window.innerWidth > 770) {
        setSearchDisplay(false);
      } else {
        setSearchDisplay(true);
      }
    }
    updateSearchDisplay();
    window.addEventListener('resize', updateSearchDisplay);
    return () => {
      window.removeEventListener('resize', updateSearchDisplay);
    };
  }, []);
  return (
    <>
      <Headers />
      {searchDisplay /*&& <Search />*/}
      <main>{children}</main>
      <Footer />
    </>
  );
}
