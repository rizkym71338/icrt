import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MembersCard from '../cards/MembersCard';

import ImgDefault from "../../assets/member/default.svg";
import Fauzan from "../../assets/member/fauzan.png";
import Wisnu from "../../assets/member/wisnu.png";
import Rizky from "../../assets/member/rizky.png";

const MembersSlider = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 574 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 574, min: 0 },
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
    return <button className="absolute right-0 mr-3 top-50" onClick={() => onClick()}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white dark:hover:text-gray-800 bg-white dark:bg-gray-800 dark:hover:bg-blue-500 transition-all transform ease-out duration-300" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
      </svg>
    </button>;
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className="absolute left-0 ml-3 top-50" onClick={() => onClick()}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white dark:hover:text-gray-800 bg-white dark:bg-gray-800 dark:hover:bg-blue-500 transition-all transform ease-out duration-300" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
      </svg>
    </button>;
  };

  const Default = <svg className="w-full h-full fill-current text-blue-400 dark:text-gray-200 rounded-full" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M298.986 270.285C283.364 253.358 264.406 239.851 243.306 230.612C222.207 221.373 199.423 216.603 176.389 216.603C153.355 216.603 130.571 221.373 109.471 230.612C88.3718 239.851 69.4138 253.358 53.7917 270.285C51.3797 272.952 50.0306 276.411 50 280.007V338.34C50.0511 342.174 51.6101 345.834 54.3395 348.527C57.0689 351.22 60.749 352.73 64.5833 352.729H288.194C292.062 352.729 295.772 351.193 298.506 348.458C301.241 345.723 302.778 342.014 302.778 338.146V279.813C302.7 276.284 301.354 272.902 298.986 270.285V270.285Z"/>
                    <path d="M176.417 197.111C214.003 197.111 244.473 166.642 244.473 129.056C244.473 91.4695 214.003 61 176.417 61C138.831 61 108.362 91.4695 108.362 129.056C108.362 166.642 138.831 197.111 176.417 197.111Z"/>
                  </svg>

  return (
    <div className="w-full">
      <Carousel responsive={responsive} infinite={true} containerClass="carousel-container" ssr={true} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>
        <MembersCard
        img={Fauzan}
        name="Moch. Fauzan F"
        facebook="https://www.facebook.com/muhammadfauzanassyifa.alkhairiyah"
        github="https://github.com/Seczan21"
        gmail="mailto:ozan.it212@gmail.com"
        instagram="https://www.instagram.com/ozan_it/"
        divisi="Div. Mekanik"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
        <MembersCard 
        img={Wisnu}
        name="Wisnu Wijaya"
        facebook="/"
        github="/"
        gmail="/"
        instagram="/"
        divisi="Div. Networking"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
        <MembersCard
        img={Rizky}
        name="Rizky Maulana"
        facebook="https://www.facebook.com/Rzkymk"
        github="https://github.com/rizkym71338"
        gmail="mailto:rizkym71338@gmail.com"
        instagram="https://www.instagram.com/rzky_mk"
        divisi="Front End Developer"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
        <MembersCard
        hidden="hidden"
        svg={Default}
        name="Marwah"
        facebook="https://www.facebook.com/siti.marwah.37669"
        github="https://github.com/Marwahs16"
        gmail="mailto:marwahs350@gmail.com"
        instagram="https://instagram.com/marwahs_16?utm_medium=copy_link"
        divisi="Sekretaris"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
        <MembersCard
        hidden="hidden"
        svg={Default}
        name="Nursyifa A"
        facebook="https://www.facebook.com/nursyifa.p.s"
        github="https://github.com/nursyifa05"
        gmail="mailto:nursyifapuspaarrahmi@gmail.com"
        instagram="https://www.instagram.com/syifaarrs/"
        divisi="Sekretaris"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
        <MembersCard
        hidden="hidden"
        svg={Default}
        name="Fahmi Afandi"
        facebook="https://www.facebook.com/Fahmi.Parkour.Weibe"
        github="https://github.com/fahmiaff"
        gmail="mailto:brengestextreme.pkfr@gmail.com"
        instagram="https://instagram.com/wib_123?r=nametag"
        divisi="Mekanik"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
        <MembersCard
        hidden="hidden"
        svg={Default} 
        name="Risma Ardhani"
        facebook="https://www.facebook.com/Fahmi.Parkour.Weibe"
        github="https://github.com/fahmiaff"
        gmail="mailto:brengestextreme.pkfr@gmail.com"
        instagram="https://instagram.com/wib_123?r=nametag"
        divisi="Mekanik"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
        <MembersCard
        hidden="hidden"
        svg={Default}
        name="Meita Sutra S"
        facebook="https://www.facebook.com/meita.s.safira"
        github="https://github.com/meitasutra"
        gmail="mailto:meitasutra.12safira@gmail.com"
        instagram="https://www.instagram.com/meitasutra"
        divisi="Mekanik"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
      </Carousel>
    </div>
  )
}

export default MembersSlider;