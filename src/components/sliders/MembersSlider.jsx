import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MembersCard from '../cards/MembersCard';

const MembersSlider = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className="bg-blue-500" onClick={() => onClick()} />;
  };

  return (
    <div className="w-full">
      <Carousel responsive={responsive} infinite={true} containerClass="carousel-container" ssr={true}>
        <MembersCard name="Michella" divisi="Front End Develop" status="Active" jurusan="Teknik Informatika 2020" />
        <MembersCard name="Michella" divisi="Front End Develop" status="Active" jurusan="Teknik Informatika 2020" />
        <MembersCard name="Michella" divisi="Front End Develop" status="Active" jurusan="Teknik Informatika 2020" />
        <MembersCard name="Michella" divisi="Front End Develop" status="Active" jurusan="Teknik Informatika 2020" />
        <MembersCard name="Michella" divisi="Front End Develop" status="Active" jurusan="Teknik Informatika 2020" />
        <MembersCard name="Michella" divisi="Front End Develop" status="Active" jurusan="Teknik Informatika 2020" />
        <MembersCard name="Michella" divisi="Front End Develop" status="Active" jurusan="Teknik Informatika 2020" />
      </Carousel>;
    </div>
  )
}

export default MembersSlider;