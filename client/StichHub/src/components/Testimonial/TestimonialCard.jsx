import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto bg-black/40 py-5 mb-10">
      <figcaption class="flex items-center justify-center space-x-4 mb-2">
        <img
          class="rounded-full w-16 h-16"
          src={testimonial.icon}
          alt="profile picture"
        />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>{testimonial.name}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.category}
          </div>
        </div>
      </figcaption>
      <div class="px-6 py-4">
        <p class="text-base">{testimonial.description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
