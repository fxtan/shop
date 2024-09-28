import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderTest = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://pibig.info/uploads/posts/2022-11/1668750444_17-pibig-info-p-kotik-na-belom-fone-instagram-19.jpg" alt="cat" />
      </div>
      <div>
        <img src="https://polinka.top/uploads/posts/2023-05/1685469920_polinka-top-p-kotik-na-belom-fone-kartinka-krasivo-8.jpg" alt="cat" />
      </div>
      <div>
        <img src="https://pibig.info/uploads/posts/2022-11/1668750492_16-pibig-info-p-kotik-na-belom-fone-instagram-18.jpg" alt="cat" />
      </div>
      <div>
        <img src="https://grizly.club/sec2/uploads/posts/2024-02/grizly-club-p-illyustratsii-kotov-na-belom-fone-29.jpgca" alt="cat" />
      </div>
      <div>
        <img src="https://i.pinimg.com/736x/c3/8f/fb/c38ffba91b5e8084265d55c55a973851.jpg" alt="cat" />
      </div>
      <div>
        <img src="https://i.pinimg.com/1200x/3c/eb/18/3ceb18f58efb696d79a6bb68c8711b18.jpg" alt="cat" />
      </div>
    </Slider>

    
  )
}

export default SliderTest
