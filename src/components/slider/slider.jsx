import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './slider.scss';
import onePoster from '../../assets/slider1.jpg';
import twoPoster from '../../assets/slider2.jpg';

const SliderHeader = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };
  return (
    <Slider {...settings}>
      <div className="slider__content">
        <div className="slider__content--info">
          <div className="slider__content--poster">
            <div>
              <p>MAKE AN APPOINTMENT IN STORE</p>
              <img src={onePoster} alt="cat" />
            </div>
          </div>
        </div>
      </div>

      <div className="slider__content">
        <div className="slider__content--info">
          <div className="slider__content--poster">
            <div>
              <p>MAKE AN APPOINTMENT IN STORE</p>
              <img src={twoPoster} alt="cat" />
            </div>
          </div>
        </div>
      </div>
      <div className="slider__content">
        <div className="slider__content--info">
          <div className="slider__content--poster">
            <div>
              <p>MAKE AN APPOINTMENT IN STORE</p>
              <img src="src\assets\slider1.jpg" alt="cat" />
            </div>
          </div>
        </div>
      </div>
      <div className="slider__content">
        <div className="slider__content--info">
          <div className="slider__content--poster">
            <div>
              <p>MAKE AN APPOINTMENT IN STORE</p>
              <img src="src\assets\slider1.jpg" alt="cat" />S
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SliderHeader;
