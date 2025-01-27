"use Client";
import React from "react";
import Image from "next/image";

const Carousel = () => {
    const images = [
        "/images/carousel1.webp",
        "/images/carousel2.webp",
        "/images/carousel3.webp",
    ];

    const [current, setCurrent] = React.useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length === 0) {
        return null;
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [current, length]);

    return (
        <section
            className="
      relative
      w-full
      h-56 sm:h-64 md:h-72 lg:h-96
      m-0 p-0
      overflow-hidden
    "
        >
            {/* Slides */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={
                        index === current
                            ? "opacity-100 transition-opacity duration-1000"
                            : "opacity-0 transition-opacity duration-1000"
                    }
                >
                    {index === current && (
                        <Image
                            src={image}
                            alt={`Carousel Image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    )}
                </div>
            ))}

            {/* Nav Arrows */}
            <button
                onClick={prevSlide}
                className="
        absolute top-1/2 left-4
        transform -translate-y-1/2
        bg-black bg-opacity-50
        text-white p-2
        rounded-full
        focus:outline-none
        m-0
      "
                aria-label="Previous Slide"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="
        absolute top-1/2 right-4
        transform -translate-y-1/2
        bg-black bg-opacity-50
        text-white p-2
        rounded-full
        focus:outline-none
        m-0
      "
                aria-label="Next Slide"
            >
                &#10095;
            </button>
        </section>
    );
};
export default Carousel;
