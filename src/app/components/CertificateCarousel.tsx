"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CertificateCarouselProps {
  certificates: string[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function CertificateCarousel({
  certificates,
}: CertificateCarouselProps) {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      keyBoardControl={false}
      // customTransition="ease-in-out 0.5s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {certificates.map((cert, index) => (
        <div key={index} className="p-4">
          <Image
            src={cert}
            alt={`Certificate ${index + 1}`}
            width={600}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>
      ))}
    </Carousel>
  );
}
