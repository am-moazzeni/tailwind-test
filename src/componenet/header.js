
import React from 'react';

import walletIcon from '../content/wallet-icon.png';
import priceChartIcon from '../content/price-chart-icon.png';
import menuOpenIcon from '../content/menu-open-icon.png';
import profileIcon from '../content/profile-icon.png';
import notificationIcon from '../content/notification-icon.png';

const Header = () => {
   return (
      <header className="shadow w-full h-16 bg-opacity-100 bg-white z-50">
         <div className="flex justify-between py-4 px-8 text-green-600 xl:max-w-screen-xl lg:max-w-screen-lg  mx-auto">
            {/* left side header */}
            <div className="flex items-center text-lg xl:text-2xl font-medium w-1/1">
               <a href="#"><img alt="" src={menuOpenIcon} className="ml-1" width="27" /></a>
               <h3 className="mr-3">فروشگاه</h3>
            </div>

            {/** right side header */}
            <div className="hidden md:flex items-center font-medium xl:text-base text-xs ">
               <h4 >قیمت گوشی</h4>
               <h4 className="mr-9"> + موجودی کیف پول </h4>
               <h4 className="mr-2">  3,250,600 </h4>
               <h4 className="mr-2">  تومان </h4>

               <a href="#"><img alt="" src={notificationIcon} className="mr-12" width="18" /></a>
               <a href="#"><img alt="" src={profileIcon} className="mr-5" width="25" /></a>
            </div>
            <div className="md:hidden flex items-center font-medium xl:text-base text-xs ">
               <a href="#"><img alt="" src={priceChartIcon} className="mr-3" width="24" /></a>
               <a href="#"><img alt="" src={walletIcon} className="mr-3" width="24" /></a>
               <a href="#"><img alt="" src={notificationIcon} className="mr-4" width="18" /></a>
            </div>
         </div>
      </header>
   );
};

export default Header;