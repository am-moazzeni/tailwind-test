import React from 'react'

import tickIcon from '../content/tick-icon.png';
import worldIcon from '../content/world-icon.png';
import langIcon from '../content/lang-icon.png';
import bgWave from '../content/bg-wave.png';

import ResponsiveCarousel from './responsiveCarousel';
import HomePageTimer from './homePageTimer';
import { startOfDay, subDays } from 'date-fns';

const MobileMainPage = () => {
   var expireMobileSale = startOfDay(subDays(new Date(), 2));
   return (
      <>
         <section className="md:flex md:justify-between mx-auto grid justify-items-center 
      xl:max-w-screen-xl lg:max-w-screen-lg ">
            <div className="md:w-7/12 xs:w-11/12 w-2/3 mx-3 p-2 shadow rounded bg-opacity-0 "
               style={{
                  backgroundImage: "url(" + bgWave + ")",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left bottom'
               }}>
               <p className="text-green-700 font-medium">
                  <img alt="" src={tickIcon} className="inline-block ml-2" width="20" />
                  درحال عرضه
               </p>
               <p className="xl:text-xl py-3 font-medium">گوشی شیائومی 128 گیگابایت</p>
               <p className="py-1 xl:text-lg  text-sm">
                  <img alt="" src={worldIcon} className="inline-block ml-2" width="20" />
                  شرکت شائومی
               </p>
               <p className="xl:text-lg  text-sm">
                  <img alt="" src={langIcon} className="inline-block ml-2" width="20" />
                  ساخت چین
               </p>
               <div className="text-gray-500 pt-3 xl:text-sm text-xs flex justify-between">
                  <div><p >
                     آغاز فروش    15:23  1400/1/15
                  </p>
                     <p >
                        پایان فروش  15:23  1400/1/22
                     </p>
                  </div>
                  <div>
                     <HomePageTimer expire={expireMobileSale} />
                  </div>
               </div>
            </div>
            <div className="sm:hidden p-5 w-11/12 overflow-hidden"> {/*xs*/}
               <ResponsiveCarousel tailwindclass="h-20" slidesToShow={4} />
            </div>
            <div className="hidden sm:block md:hidden p-5 w-11/12 overflow-hidden">  {/*sm*/}
               <ResponsiveCarousel tailwindclass="h-20" slidesToShow={5} />
            </div>
            <div className="md:w-5/12 w-2/3 xs:w-11/12 mx-3 p-3 shadow rounded xl:text-base text-sm">
               <p className="flex justify-between">
                  <span>قیمت آک</span>
                  <span>55,000 تومان</span>
               </p>
               <p className="flex justify-between py-2">
                  <span>قیمت کارکرده</span>
                  <span>55,000 تومان</span>
               </p>
               <hr />
               <p className="flex justify-between font-medium py-2">
                  <span>قیمت لوازم جانبی</span>
                  <span>1,171,500 تومان</span>
               </p>
               <p className="flex justify-between pt-1 pb-2">
                  <span>هزینه پست </span>
                  <span>350,000 تومان</span>
               </p>
               <hr />
               <p className="flex justify-between font-medium pt-2">
                  <span>جمع مبلغ سفارش  </span>
                  <span>55,55,150 تومان</span>
               </p>
            </div>
         </section>

         <section className="hidden xl:hidden md:block p-5 overflow-hidden  
      xl:max-w-screen-xl lg:max-w-screen-lg mx-auto xs:w-11/12">  {/*md*/}
            <ResponsiveCarousel tailwindclass="h-24" slidesToShow={7} />
         </section>
         <section className="hidden xl:block p-5 overflow-hidden
       xl:max-w-screen-xl lg:max-w-screen-lg  mx-auto xs:w-11/12"> {/*xl*/}
            <ResponsiveCarousel tailwindclass="h-52" slidesToShow={5} />
         </section>
      </>
   );
};

export default MobileMainPage;