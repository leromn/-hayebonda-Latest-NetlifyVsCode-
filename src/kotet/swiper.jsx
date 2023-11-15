import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function SwiperComp({ images, ready }) {
  const [imageUrls, setImageUrls] = useState([]);

  //map  props to image urls

  useEffect(() => {
    if (ready) setImageUrls(images);
  }, [ready]);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper"
      >
        {imageUrls.map((element) => {
          // Modify each element, for example, multiply by 2
          // return images.
          let base64ImageString = Buffer.from(
            element.imageData.data,
            "binary"
          ).toString("base64");

          return (
            <SwiperSlide>
              <img src={`data:image/jpeg;base64,${base64ImageString}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
