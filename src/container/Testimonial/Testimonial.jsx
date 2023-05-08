import React, { useState, useEffect } from "react";
import { testimonials } from "../../utils/data";
import { motion } from "framer-motion";
import { images } from "../../constants";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const Testimonial = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  if (
    pathname === "/signin" ||
    pathname === "/blog" ||
    pathname === "/contact" ||
    pathname === "/verification"
  )
    return null;

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    fadeSpeed: 9000,
    pauseOnHover: true,

    rows: 1,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          rows: 2,
          // slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-screen px-5 md:px-16 mt-20 lg:mt-36 lg:px-20">
      <div className="relative">
        <motion.h2
          transition={{ duration: 0.8 }}
          className="font-medium text-white font-FSMeridian mt-14 mb-7 text-4xl md:text-6xl md:w-full w-[187px]"
        >
          See what People <br /> Are{" "}
          <motion.span
            transition={{ duration: 1.3 }}
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
          >
            Saying About Us
          </motion.span>{" "}
        </motion.h2>
        <img
          className="absolute w-[73.03px] h-[70.22px] md:w-[94.98px] md:h-[91.33px] lg:w-[129.92px] lg:h-[124.93px] top-12 md:top-0 right-8 md:-right-8 lg:right-96"
          src={images.yellowStar}
          alt="yellow star"
        />
        <img
          className="absolute w-[114.05px] h-[109.66px] top-[123px] right-0 md:top-14 md:-right-24 lg:w-[156px] lg:h-150px] lg:right-[250px] lg:top-24  z-10"
          src={images.purpleStar}
          alt="purple star"
        />
      </div>
      <Slider {...settings} className=" w-full md:mt-10">
        {testimonials &&
          testimonials.map((testimonial) => (
            <motion.ul
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
              key={testimonial.id}
              className=" w-full px-2"
            >
              <li className="bg-lighttextGray lg:bg-whiteColor text-white lg:text-black lg:px-9 w-full rounded-md px-2 mb-6">
                <div className="flex py-8">
                  <img className="mr-2" src={images.union} alt="Star Rating" />
                  <img className="mr-2" src={images.union} alt="Star Rating" />
                  <img className="mr-2" src={images.union} alt="Star Rating" />
                  <img className="mr-2" src={images.union} alt="Star Rating" />
                  <img src={images.union} alt="Star Rating" />
                </div>
                <p className="text-base font-medium  mb-4">
                  {testimonial.title}
                </p>
                <p className=" text-xs  font-normal lg:text-gray-700 text-gray-300 ">
                  {testimonial.description}
                </p>
                <div className="flex items-center mt-9 pb-9">
                  <img
                    className="rounded-full w-12 h-12"
                    src={testimonial.image}
                    alt="testimonial"
                  />
                  <p className="ml-4 font-medium">{testimonial.name}</p>
                </div>
              </li>
            </motion.ul>
          ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
