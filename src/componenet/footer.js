
import React from 'react';
import aparatIcon from '../content/aparat-icon.png';
import instagramIcon from '../content/instagram-icon.png';
import linkedInIcon from '../content/linkedin-icon.png';
import telegramIcon from '../content/telegram-icon.png';


import enamad1 from '../content/enamad-1.png';
import enamad2 from '../content/enamad-2.png';
import enamad3 from '../content/enamad-3.png';

const Footer = () => {
   return (
      <footer >
         <div className="bg-gray-50 flex justify-between py-4 xl:py-8 xl:px-28 2xl:px-48 px-8">
            <div className="text-green-600 xl:text-base text-xs xl:space-y-3 space-y-1 grid font-medium">
               <a href="#"> معرفی شرکت </a>
               <a href="#"> سوالات متداول </a>
               <a href="#"> ارتباط با ما </a>
               <a href="#"> مقررات و شرایط </a>
            </div>
            <div className="hidden xl:block mr-32">
               <div className="text-xl text-gray-500 font-medium pb-5"> مرکز تماس  1224 - 025   </div>
               <div className="flex flex-row-reverse space-x-4">
                  <img alt="" src={telegramIcon} className="w-8" />
                  <img alt="" src={instagramIcon} className="w-8" />
                  <img alt="" src={aparatIcon} className="w-8" />
                  <img alt="" src={linkedInIcon} className="w-8" />
               </div>
            </div>
            <div className="hidden xl:flex flex-row-reverse space-x-5 items-center">
               <img alt="" src={enamad3} className="h-24" />
               <img alt="" src={enamad2} className="h-24" />
               <img alt="" src={enamad1} className="h-24" />
            </div>
            <div className="xl:hidden grid justify-items-center">
               <div className="text-2xs text-gray-500 font-medium pb-4"> مرکز تماس  1224 - 025   </div>
               <div className="flex flex-row-reverse space-x-6 items-center pb-4">
                  <img alt="" src={telegramIcon} className="w-4" />
                  <img alt="" src={instagramIcon} className="w-4" />
                  <img alt="" src={aparatIcon} className="w-4" />
                  <img alt="" src={linkedInIcon} className="w-4" />
               </div>
               <div className="flex flex-row-reverse space-x-3 items-center">
                  <img alt="" src={enamad3} className="h-12" />
                  <img alt="" src={enamad2} className="h-12" />
                  <img alt="" src={enamad1} className="h-12" />
               </div>
            </div>
         </div>
         <div className="bg-gray-100 mx-auto py-3 xl:py-6 mb-16 md:mb-0">
            <p className="text-center xl:text-xs text-3xs text-gray-500">
               کلیه حقوق مادی و معنوی این سایت متعلق به شرکت توسعه فروشگاه دیجیتال است.
               <br />
               کاربر و بیننده این سامانه کلیه <a href="#" className="text-green-600">مقررات و شرایط فروشگاه </a>
               را پذیرفته است.
            </p>
         </div>
      </footer>
   );
};

export default Footer;