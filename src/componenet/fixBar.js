
import React from 'react';

import phoneIcon from '../content/phone-icon.png';

const FixBar = () => {
   return (
      <section className="md:sticky md:top-0 fixed bottom-0 md:block w-full shadow bg-opacity-100 bg-white z-50">
         <div className="flex flex-row-reverse items-end py-2 px-8
       xl:max-w-screen-xl lg:max-w-screen-lg  mx-auto">
            <a href="#" className="inline-block p-2 px-11 bg-green-600 xl:text-base text-md
      hover:bg-green-700 text-white rounded trasiti ease-in duration-150 "
            >ثبت سفارش</a>
            <div className="ml-10 font-medium xl:text-base text-sm">
               <div className="">
                  <span>قیمت خرید گوشی </span>
                  <span className="mr-2">1,551,500</span>
                  <span className="mr-2">تومان</span>
               </div>
               <div className="float-left text-gray-600 xl:text-sm text-xs">
                  <img alt="" src={phoneIcon} className="xl:h-8 h-6 inline-flex" />
                  <span> 10 عدد باقی مانده</span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FixBar;