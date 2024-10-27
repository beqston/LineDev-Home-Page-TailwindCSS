import '../App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/Photos/Carousel/slide1.png"
import slide2 from "../assets/Photos/Carousel/slide2.png"
import slide3 from "../assets/Photos/Carousel/slide3.png"

import Slider from "react-slick";

type ArrowProps = {
  className: string;
  style: React.CSSProperties;
  onClick: () => void;
}

function Arrow(props:ArrowProps) {  
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#2868D4" }}
      onClick={onClick}
    />
  );
}


const sliderArr = [
    {
        photo:slide1
    },
    {
        photo:slide2
    },
    {
      photo:slide3
    },
    {
      photo:slide1
  },
  {
      photo:slide2
  },
  {
    photo:slide3
  },
  {
    photo:slide1
},
{
    photo:slide2
},
{
  photo:slide3
},
  

]


const Carousel = ()=> {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow className="slick-next" style={{}} onClick={() => {}} />, 
        prevArrow: <Arrow className="slick-prev" style={{}} onClick={() => {}} />
      };

    return(
      <div  className='w-[74%] m-auto mb-[159px]'>
        <Slider {...settings}>
         {
            sliderArr.map((item)=> {
                return(
                  <img className="w-[300px] h-[357px]" src={item.photo} alt="foto" />
                )
            })
         }
        </Slider>
    </div>
    )
}

export default Carousel;


