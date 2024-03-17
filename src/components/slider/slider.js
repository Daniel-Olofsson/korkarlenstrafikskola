import { styled } from "@mui/system";
import { Button } from "@mui/material";
import React, { useState } from "react";

const SliderContainer = styled("div")({
  position: "relative",
  maxWidth: "100%",
  overflow: "hidden",
});

const Slides = styled("div")({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
});

const Slide = styled("img")({
  minWidth: "100%",
  flex: "0 0 auto",
});

const ButtonContainer = styled("div")({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
});

const Slider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Check if images is an array
  if (!Array.isArray(images)) {
    // If not an array, log an error and return null or empty div
    console.error("images is not an array");
    return null; // or return <div />
  }

  return (
    <SliderContainer>
      <Slides style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <Slide key={index} src={imageUrl} alt={`Slide ${index + 1}`} />
        ))}
      </Slides>
      <ButtonContainer>
        <Button onClick={prevSlide}>Prev</Button>
        <Button onClick={nextSlide}>Next</Button>
      </ButtonContainer>
    </SliderContainer>
  );
};

export default Slider;
