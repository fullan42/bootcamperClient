import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";

function CarouselItem({ imageSrc, title, description }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative h-full w-full">
      {/* Your existing code for image goes here */}

      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
          >
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            <Button color="white" onClick={handlePrevClick}>
              Explore
            </Button>
            <Button color="white" onClick={handleNextClick}>
              Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
