import React, { useState, useEffect, useRef } from "react";
import "./TestimonialCarousel.css";

const testimonials = [
  {
    text: `Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corporis. Excepturi nam cupiditate culpa doloremque deleniti repellat.`,
    name: "Tim Cook",
    role: "CEO, Apple",
    img: "https://via.placeholder.com/100?text=Photo"
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel urna et libero finibus consequat. Etiam id tristique lorem.`,
    name: "Jane Doe",
    role: "CTO, Microsoft",
    img: "https://via.placeholder.com/100?text=Photo"
  },
  {
    text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
    name: "John Smith",
    role: "Manager, Google",
    img: "https://via.placeholder.com/100?text=Photo"
  }
];

const AUTO_SCROLL_INTERVAL = 5000; // ms

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [index]);

  const testimonial = testimonials[index];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-nav carousel-nav-left" onClick={prevTestimonial}>
        <span>&larr;</span>
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">{testimonial.text}</p>
        <div className="testimonial-user">
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="testimonial-img"
          />
          <div className="testimonial-info">
            <div className="testimonial-name">{testimonial.name}</div>
            <div className="testimonial-role">{testimonial.role}</div>
          </div>
        </div>
      </div>
      <div className="carousel-nav carousel-nav-right" onClick={nextTestimonial}>
        <span>&rarr;</span>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
