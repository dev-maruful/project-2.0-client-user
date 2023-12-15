import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const SliderButtonGroup = ({
  next,
  previous,
  goToSlide,
  pos,
  ...rest
}) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      className={`absolute ${pos} right-0 md:flex items-center justify-end w-full gap-4 carousel-button-group hidden`}
    >
      <button
        className={
          currentSlide === 0
            ? " p-3 rounded-full opacity-40 border border-indigo-700"
            : " p-3 rounded-full opacity-100 border border-indigo-700"
        }
        onClick={() => previous()}
      >
        <span>
          <HiChevronLeft />
        </span>
      </button>
      <button
        className={`block p-3 rounded-full  border border-indigo-700 ${
          currentSlide === 10 ? "opacity-50" : "opacity-100"
        }`}
        onClick={() => next()}
      >
        <span>
          <HiChevronRight />
        </span>
      </button>
    </div>
  );
};
