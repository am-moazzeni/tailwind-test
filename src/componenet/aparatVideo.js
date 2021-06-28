import React from 'react';


const AparatVideo = () => {
   return (
      <section className="xs:w-11/12 sm:max-w-md md:max-w-lg  xl:max-w-3xl 2xl:max-w-4xl	 lg:max-w-2xl	 mx-auto">
         <div className="text-center h_iframe-aparat_embed_frame ">
            <span style={{ display: 'block', paddingTop: '57%' }}></span>
            <iframe src="https://www.aparat.com/video/video/embed/videohash/jzlGn/vt/frame"
               title="جعبه گشایی گوشی شیائومی پوکو ام 3.  Poco M3"
               allowFullScreen={true}
               webkitallowfullscreen="true"
               mozallowfullscreen="true"
               className="rounded-md">
            </iframe></div>

      </section>
   );
};

export default AparatVideo;