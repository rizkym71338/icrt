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

  return (
    <div className="w-full">
      <Carousel responsive={responsive} infinite={true} containerClass="carousel-container" ssr={true} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>
        <MembersCard 
        name="Muh. Fauzan F"
        facebook="https://www.facebook.com/muhammadfauzanassyifa.alkhairiyah"
        github="https://github.com/Seczan21"
        gmail="mailto:ozan.it212@gmail.com"
        instagram="https://www.instagram.com/ozan_it/"
        divisi="Mekanik"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
        <MembersCard 
        name="Rizky Maulana"
        facebook="https://www.facebook.com/Rzkymk"
        github="https://github.com/rizkym71338"
        gmail="mailto:rizkym71338@gmail.com"
        instagram="https://www.instagram.com/rzky_mk"
        divisi="Software"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
        <MembersCard 
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
        name="Meita Sutra S"
        facebook="https://www.facebook.com/meita.s.safira"
        github="https://github.com/meitasutra"
        gmail="mailto:meitasutra.12safira@gmail.com"
        instagram="https://www.instagram.com/meitasutra"
        divisi="Mekanik"
        status="Active"
        jurusan="Teknik Informatika 2020"
        />
      </Carousel>;
    </div>
  )
}

export default MembersSlider;