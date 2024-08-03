// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import RegisterSlide from '../RegisterSlide/RegisterSlide';
import LoginSlide from '../LoginSlide/LoginSlide';

const AuthBanner = () => {
    return (
        <div>
            <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            >
                {/* register slide from shared component */}
        <SwiperSlide><RegisterSlide /></SwiperSlide>
        <SwiperSlide><LoginSlide /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default AuthBanner;