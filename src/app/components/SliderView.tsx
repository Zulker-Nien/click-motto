import "./component.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import Store from "../store";
import Image from "next/image";

const SliderView = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const store = useContext(Store);
  const { setQuery, setIsLoading } = store;

  const handleSliderItemClick = (query: string) => {
    setIsLoading(true);
    setQuery(query);
  };

  return (
    <Slider {...settings}>
      <div
        className="h-28 w-1/5 cursor-pointer hover:scale-110 ease-out duration-300"
        onClick={() => {
          handleSliderItemClick("Workplace");
        }}
      >
        <div className="h-full md:w-100 bg-white flex items-center justify-center relative">
          <div className="h-4/6 md:h-5/6 w-5/6 rounded-md overflow-hidden relative shadow-black shadow-sm">
            <h1 className="absolute flex justify-center items-center w-full h-full  z-10 text-white bg-black/20 backdrop-blur-[1px] font-semibold">
              Workplace
            </h1>
            <Image
              width={100}
              height={100}
              className={`absolute w-full ease-out duration-300 `}
              src="/categories/workplace.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="h-28 cursor-pointer hover:scale-110 ease-out duration-300"
        onClick={() => {
          handleSliderItemClick("Summer");
        }}
      >
        <div className="h-full w-100 bg-white flex items-center justify-center relative">
          <div className="h-4/6 md:h-5/6 w-5/6 rounded-md overflow-hidden relative shadow-black shadow-sm">
            <h1 className="absolute flex justify-center items-center w-full h-full  z-10 text-white bg-black/20 backdrop-blur-[1px] font-semibold">
              Summer
            </h1>
            <Image
              width={100}
              height={100}
              className={`absolute w-full ease-out duration-300 `}
              src="/categories/summer.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="h-28 cursor-pointer hover:scale-110 ease-out duration-300"
        onClick={() => {
          handleSliderItemClick("City");
        }}
      >
        <div className="h-full w-100 bg-white flex items-center justify-center relative">
          <div className="h-4/6 md:h-5/6 w-5/6  rounded-md overflow-hidden relative shadow-black shadow-sm">
            <h1 className="absolute flex justify-center items-center w-full h-full  z-10 bg-black/20 backdrop-blur-[1px] font-semibold text-white">
              City
            </h1>
            <Image
              width={100}
              height={100}
              className={`absolute w-full ease-out duration-300 `}
              src="/categories/city.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="h-28 cursor-pointer hover:scale-110 ease-out duration-300"
        onClick={() => {
          handleSliderItemClick("Food");
        }}
      >
        <div className="h-full w-100 bg-white flex items-center justify-center relative">
          <div className="h-4/6 md:h-5/6 w-5/6 rounded-md overflow-hidden relative shadow-black shadow-sm">
            <h1 className="absolute flex justify-center items-center w-full h-full z-10  bg-black/20 backdrop-blur-[1px] font-semibold text-white">
              Food
            </h1>
            <Image
              width={100}
              height={100}
              className={`absolute w-full ease-out duration-300 `}
              src="/categories/food.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="h-28 cursor-pointer hover:scale-110 ease-out duration-300"
        onClick={() => {
          handleSliderItemClick("Gravity");
        }}
      >
        <div className="h-full w-100 bg-white flex items-center justify-center relative">
          <div className="h-4/6 md:h-5/6 w-5/6 rounded-md overflow-hidden relative shadow-black shadow-sm">
            <h1 className="absolute flex justify-center items-center w-full h-full z-10 bg-black/20 backdrop-blur-[1px] font-semibold text-white">
              Gravity
            </h1>
            <Image
              width={100}
              height={100}
              className={`absolute w-full ease-out duration-300 `}
              src="/categories/Gravity.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="h-28 cursor-pointer hover:scale-110 ease-out duration-300"
        onClick={() => {
          handleSliderItemClick("Gaming");
        }}
      >
        <div className="h-full w-100 bg-white flex items-center justify-center relative">
          <div className="h-4/6 md:h-5/6 w-5/6 rounded-md overflow-hidden relative shadow-black shadow-sm">
            <h1 className="absolute flex justify-center items-center w-full h-full z-10 bg-black/20 backdrop-blur-[3px] font-semibold text-white">
              Gaming
            </h1>
            <Image
              width={100}
              height={100}
              className={`absolute w-full ease-out duration-300 `}
              src="/categories/gaming.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SliderView;
