import React, { useEffect, useState } from "react";
import "@/styles/carrouselCalendar.css";
import DoubleRigthArrow from "@/assets/DoubleRigthArrow";
import DoubleLeftArrow from "@/assets/DoubleLeftArrow";
import { addDays, format, isToday, getMonth } from "date-fns";
import esLocale from "date-fns/locale/es";

type CalendarCarouselProps = {};

function CarrouselCalendar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const daysToShow = 5;
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - daysToShow);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + daysToShow);
  };

  // const updateCarousel = () => {
  //   const container = document.getElementById("carousel-container");

  //   if (container !== null) {
  //     const offset = -currentIndex * 100;
  //     container.style.transform = `translateX(${offset}%)`;
  //   } else {
  //     console.error(
  //       "El elemento con ID 'carousel-container' no fue encontrado."
  //     );
  //   }
  // };
  // useEffect(() => {
  //   updateCarousel();
  // }, [currentIndex]);

  const getWeekDays = (
    startIndex: number
  ): { day: string; disabled: boolean }[] => {
    const currentDate = addDays(new Date(), startIndex);
    const weekDays = [];

    for (let i = 0; i < daysToShow; i++) {
      const day = addDays(currentDate, i);
      const isWeekend = day.getDay() === 0 || day.getDay() === 6; // 0 es domingo, 6 es sábado
      const disabled = isWeekend;

      weekDays.push({ day: day.toISOString(), disabled });
    }

    return weekDays;
  };
  // const startDayIndex = currentIndex * daysToShow;
  const visibleDays = getWeekDays(currentIndex);

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };
  const getMonthName = (date: Date) => {
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

    return months[getMonth(date)];
  };
  return (
    <div id="carousel-container" className="carouselContainer">
      <div className="calendarCarouselContainer">
        <div className="monthName">{getMonthName(new Date())}</div>
        <hr className="box-dotted-line" />
        <div className="calendarCarrousel">
          {visibleDays.map((dayData, index) => (
            <div
              key={index}
              className={`calendarDay ${
                dayData.day === selectedDay ? "selected" : ""
              } ${isToday(new Date(dayData.day)) ? "today" : ""} ${
                dayData.disabled ? "disabled" : ""
              }`}
              onClick={() => !dayData.disabled && handleDayClick(dayData.day)}
            >
              <div className="dayName">
                {format(new Date(dayData.day), "EE", { locale: esLocale })}
              </div>
              <div className="dayNumber">
                {format(new Date(dayData.day), "dd")}
              </div>
            </div>
          ))}
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
