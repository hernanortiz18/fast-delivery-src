import React, { useEffect, useState } from "react";
import "@/styles/carrouselCalendar.css";
import DoubleRigthArrow from "@/assets/DoubleRigthArrow";
import DoubleLeftArrow from "@/assets/DoubleLeftArrow";

type CalendarCarouselProps = {
  calendarData: string[];
};

function CarrouselCalendar({ calendarData }: CalendarCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const daysToShow = 5;

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    const lastSlideIndex = Math.ceil(calendarData.length / daysToShow) - 1;

    if (currentIndex < lastSlideIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const updateCarousel = () => {
    const offset = -currentIndex * 100;
    // document.getElementById('carousel-container').style.transform = `translateX(${offset}%)`;
  };
  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);
  const startDayIndex = currentIndex * daysToShow;

  const visibleDays = calendarData.slice(
    startDayIndex,
    startDayIndex + daysToShow
  );
  const getMonthName = (index: number) => {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    return months[index];
  };

  return (
    <div id="carousel-container" className="carouselContainer">
      <div className="calendarCarouselContainer">
        <div className="monthName">{getMonthName(currentIndex)}</div>
        <hr className="box-dotted-line" />
        <div className="calendarCarrousel">
          {visibleDays.map((day, index) => (
            <div key={index} className="calendarDay">
              <div className="dayName">{day}</div>
              <div className="dayNumber">
                {(index + 1).toString().padStart(2, "0")}
              </div>
            </div>
          ))}{" "}
          <button className="prevBtn" onClick={prevSlide}>
            <DoubleLeftArrow />
          </button>
          <button className="nextBtn" onClick={nextSlide}>
            <DoubleRigthArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarrouselCalendar;
