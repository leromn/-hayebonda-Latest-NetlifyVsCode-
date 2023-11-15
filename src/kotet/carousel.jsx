import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="https://cdn.pixabay.com/photo/2016/06/29/08/42/wedding-dress-1486260_1280.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://cdn.pixabay.com/photo/2016/06/29/08/42/wedding-dress-1486260_1280.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://cdn.pixabay.com/photo/2016/06/29/08/42/wedding-dress-1486260_1280.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />
];

export default function CarouselComp() {
  return (
    <div className="carousel">
      <AliceCarousel mouseTracking items={items} style={{ height: "10px" }} />
    </div>
  );
}
