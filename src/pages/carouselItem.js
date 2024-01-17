
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

function CarouselItem({ imageSrc, title, description }) {

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
            <Link color="white" href="/">
              Explore
            </Link>
            <Link color="white" href="/" >
              Gallery
            </Link >
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
