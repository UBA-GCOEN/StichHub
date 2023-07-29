import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto bg-black/40 py-5 mb-10">
      <figcaption className="flex items-center justify-center space-x-4 mb-2">
        <img
          className="rounded-full w-16 h-16"
          src={testimonial.icon}
          alt="profile picture"
        />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
          <div>{testimonial.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.category}
          </div>
        </div>
      </figcaption>
      <div className="px-6 py-4">
        <p className="text-base">{testimonial.description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
