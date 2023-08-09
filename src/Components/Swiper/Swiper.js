import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import news1 from "../../assets/news4.png";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const SwiperComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 515); // You can adjust the breakpoint as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
    
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={isMobile} 
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={news1} alt=" slide" style={{ width: "90%",height:"35rem",margin:"0 auto",display:"block"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={news2} alt=" slide" style={{ width: "90%" ,height:"35rem",margin:"0 auto",display:"block"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={news3} alt="slide" style={{ width: "90%",height:"35rem",margin:"0 auto",display:"block" }} />
      </SwiperSlide>
    </Swiper>
    </>
  );
};

export default SwiperComponent;
