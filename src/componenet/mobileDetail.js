
import React from 'react';

import tickOutlineIcon from '../content/tick-outline-icon.png';

const FixBar = () => {
   return (
      <>
         <section className="md:flex justify-center pt-4 font-medium text-gray-700
      xl:text-base text-xs md:w-full xs:w-11/12 w-1/2  md:mx-8 mx-auto">
            <div className="space-y-2 sm:mx-10 mx-2 pt-2">
               <p >
                  <img alt="" src={tickOutlineIcon} className="inline-flex w-5" />
                  <span> حافظه داخلی: 128 گیگابایت </span>
               </p>
               <p >
                  <img alt="" src={tickOutlineIcon} className="inline-flex w-5" />
                  <span> شبکه های ارتباطی:  4G , 3G , 2G </span>
               </p>
               <p >
                  <img alt="" src={tickOutlineIcon} className="inline-flex w-5" />
                  <span> دئوربین های پشت گوشی :  3 ماژول دوربین </span>
               </p>
               <p >
                  <img alt="" src={tickOutlineIcon} className="inline-flex w-5" />
                  <span> توضیحات سیم کارت :  سایز نانو 2.3 × 8.81 </span>
               </p>
            </div>
            <div className="space-y-2  sm:mx-10 mx-2 pt-2">
               <p >
                  <img alt="" src={tickOutlineIcon} className="inline-flex w-5" />
                  <span>  نسخه سیستم عامل:  10 Android </span>
               </p>
               <p >
                  <img alt="" src={tickOutlineIcon} className="inline-flex w-5" />
                  <span>  فناوری صفحه نمایش:  IPS </span>
               </p>
               <p >
                  <img alt="" src={tickOutlineIcon} className="inline-flex w-5" />
                  <span>  مجهز به حسگر اثر انگشت </span>
               </p>
               <p>
                  <img alt="" src={tickOutlineIcon} className="inline-flex w-5" />
                  <span>  مناسب عکاسی ، مناسب عکاسی سلفی</span>
               </p>
            </div>
         </section>
         <section className="md:flex justify-center pb-14
     md:w-full w-2/3 xs:w-10/12 xl:max-w-screen-xl lg:max-w-screen-lg  mx-auto xl:text-base text-sm">
            <div className="space-y-2 md:w-1/3 w-full md:mx-10  mx-auto pt-8 ">
               <h3 className="text-right font-medium xl:text-lg text-base py-1">مشخصات کلی</h3>
               <p className="flex justify-between">
                  <span> ساختار بدنه</span>
                  <span>شیشه</span>
               </p>
               <hr />
               <p className="flex justify-between">
                  <span>تعداد سیم کارت </span>
                  <span>دو سیم کارت</span>
               </p>
               <hr />
               <p className="flex justify-between">
                  <span>رنگ  </span>
                  <span>قهوه ای</span>
               </p>
               <hr />

               <p className="flex justify-between">
                  <span>شیار مجطا برای کارت حافطه  </span>
                  <span>دارد</span>
               </p>
               <hr />
               <p className="flex justify-between">
                  <span>مدت عرضه   </span>
                  <span>4 ماه </span>
               </p><hr />
               <p className="flex justify-between">
                  <span> رزولوشن دوربین   </span>
                  <span>8  </span>
               </p><hr />
               <p className="flex justify-between">
                  <span>وزن</span>
                  <span>180 گرم  </span>
               </p>
            </div>
            <div className="space-y-2 md:w-1/3 w-full md:mx-10  mx-auto pt-8">
               <h3 className="text-right font-medium xl:text-lg text-base py-1">اطلاعات بیشتر</h3>
               <p className="flex justify-between">
                  <span> دوربین پشت گوشی</span>
                  <span> 3 ماژول دوربین </span>
               </p><hr />
               <p className="flex justify-between">
                  <span> رزولوشن عکس</span>
                  <span>48 مگا پیکسل </span>
               </p><hr />
               <p className="flex justify-between ">
                  <span>  فیلمبرداری</span>
                  <span>30 فریم بر ثانیه </span>
               </p><hr />
               <p className="flex justify-between ">
                  <span> تاریخ پایان فروش </span>
                  <span>25/4/1400 </span>
               </p><hr />
               <p className="flex justify-between ">
                  <span>  نسخه سیستم عامل  </span>
                  <span>اندرئید 50 </span>
               </p><hr />
               <p className="flex justify-between ">
                  <span>وای فای   </span>
                  <span>دارد </span>
               </p><hr />
               <p className="flex justify-between ">
                  <span>تخفیف نقدی   </span>
                  <span>40% </span>
               </p>
            </div>
         </section>
      </>
   );
};

export default FixBar;