import Slider from "react-slick";

import { testimonials } from "./data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {testimonials.map(({ photo, testimonial, author }) => {
        return (
          <div className="testimonial" key={author}>
            <article>
              <div>
                <img src={photo} alt="" />
                <p>{testimonial}</p>
                <h6>{author}</h6>
              </div>
            </article>
          </div>
        );
      })}
    </Slider>
  );
}
