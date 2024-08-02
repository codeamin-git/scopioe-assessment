// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const AuthBanner = () => {
    return (
        <div style={{backgroundImage: "url('https://i.ibb.co/0sbGCyp/banner-1.jpg')"}} className="bg-cover h-screen">
            
            <div className='h-full'>
            <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
            </div>

        </div>
    );
};

export default AuthBanner;