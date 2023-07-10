import React from "react";
import { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import TestimonialCard from "./TestimonialCard";
import items from "./Testimonials";

const Testimonial = () => {
  return (
    <div id="testimonial" className="w-[100vw] lg:p-20 md:p-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium lg:mb-16 md:mb-14 mb-10 lg:mt-0 md:mt-10 mt-20">
        Testimonials
      </h1>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide className="flex justify-center">
              <TestimonialCard key={item.user_id} testimonial={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
