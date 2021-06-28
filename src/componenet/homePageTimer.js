import React, { useState, useEffect } from 'react'
import clockIcon from '../content/clock-icon.png';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export default function HomePageTimer(props) {
   const [day, setDay] = useState(0);
   const [hour, setHour] = useState(0);
   const [min, setMin] = useState(0);
   const [sec, setSec] = useState(0);

   useEffect(() => {

      var interval = setInterval(() => {
         setDay(differenceInDays(new Date(), props.expire) % 30);
         setHour(differenceInHours(new Date(), props.expire) % 12);
         setMin(differenceInMinutes(new Date(), props.expire) % 60);
         setSec(differenceInSeconds(new Date(), props.expire) % 60);
      }, 1000);

      return () => {
         clearInterval(interval);
      }
   }, [props.expire]);

   return (
      <div className="flex flex-row-reverse space-x-4 font-medium">
         <div className="grid justify-items-center">
            <span>{sec}</span>
            <p>ثانیه</p>
         </div>
         <div className="grid justify-items-center">
            <span>{min}</span>
            <p>دقیقه</p>
         </div>
         <div className="grid justify-items-center">
            <span>{hour}</span>
            <p>ساعت</p>
         </div>
         <div className="grid justify-items-center">
            <span>{day}</span>
            <p>روز</p>
         </div>
         <img src={clockIcon} alt="" />
      </div>
   )
}
