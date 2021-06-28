
import './assets/css/App.css';

import Header from './componenet/header';
import FixBar from './componenet/fixBar';
import AparatVideo from './componenet/aparatVideo';
import Footer from './componenet/footer';

import MobileDetail from './componenet/mobileDetail';
import MobileMainPage from './componenet/mobileMainPage';

function App() {
  return (
    <>
      <Header />

      <FixBar />

      <section className="md:w-full   py-2 xl:max-w-screen-xl lg:max-w-screen-lg  mx-auto xs:w-11/12">
        <div className="lg:text-base text-xs md:mr-4">
          « فروشگاه
        </div>
      </section>

      <MobileMainPage />

      <MobileDetail />

      <AparatVideo />

      <section className="xs:w-11/12 sm:max-w-sm md:max-w-md xl:max-w-2xl	 lg:max-w-xl	 2xl:max-w-3xl mx-auto shadow my-8 p-2 rounded ">
        <h3 className="text-md font-medium pb-2">بررسی</h3>
        <p className="xl:text-base md:text-sm text-xs">
          گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم کارت ظرفیت 128 گیگابایت از جمله اولین سری محصولات برند شیائومی است. این محصول دارای ساختاری متوازن و خوش ساخت بدون پشتیبانی از تکنولوژی 5G در تاریخ نوامبر 2020 روانه بازار شده است. این محصول از فریم پلاستیکی ساخته شده که قاب جلو شیشه ای جلوه ویژه ای به این مدل بخشیده است.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default App;
