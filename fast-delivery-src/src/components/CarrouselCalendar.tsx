import React, { useEffect, useState } from "react";
import "@/styles/carrouselCalendar.css";
import DoubleRigthArrow from "@/assets/DoubleRigthArrow";
import DoubleLeftArrow from "@/assets/DoubleLeftArrow";
import {
  addDays,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isToday,
} from "date-fns";
import esLocale from "date-fns/locale/es";

type CalendarCarouselProps = {};

function CarrouselCalendar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const daysToShow = 5;
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const updateCarousel = () => {
    const container = document.getElementById("carousel-container");

    if (container !== null) {
      const offset = -currentIndex * 100;
      container.style.transform = `translateX(${offset}%)`;
    } else {
      console.error(
        "El elemento con ID 'carousel-container' no fue encontrado."
      );
    }
  };
  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  const getWeekDays = (): string[] => {
    const currentDate = new Date();
    const daysInWeek = 5;
    const weekDays = [];

    for (let i = 0; i < daysInWeek; i++) {
      const day = addDays(currentDate, i);
      weekDays.push(day.toISOString()); // Usar el formato ISO para asegurar compatibilidad
    }

    return weekDays;
  };
  const startDayIndex = currentIndex * daysToShow;
  const visibleDays = getWeekDays().slice(
    startDayIndex,
    startDayIndex + daysToShow
  );

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

    return months[date.getMonth()];
  };

  return (
    <div id="carousel-container" className="carouselContainer">
      <div className="calendarCarouselContainer">
        <div className="monthName">{getMonthName(new Date())}</div>
        <hr className="box-dotted-line" />
        <div className="calendarCarrousel">
          {visibleDays.map((day, index) => (
            <div
              key={index}
              className={`calendarDay ${
                day === selectedDay ? "selected" : ""
              } ${isToday(new Date(day)) ? "today" : ""}`}
            >
              <div className="dayName">
                {format(new Date(day), "EE", { locale: esLocale })}
              </div>
              <div className="dayNumber">{format(new Date(day), "dd")}</div>
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
