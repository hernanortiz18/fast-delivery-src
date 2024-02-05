import React, { useState } from "react";
import "../styles/carrouselCalendar.css";
import { addDays, format, isToday, getMonth } from "date-fns";
import esLocale from "date-fns/locale/es";

type CalendarComponentProps = {};

function CalendarComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const daysToShow = 1;

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

  const visibleDays = getWeekDays(currentIndex);

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
        <div className="month">{getMonthName(new Date())}</div>
        <div className="calendarDay2">
          <div className="dayName">
            {format(new Date(), "EE", { locale: esLocale })}
          </div>
          <div className="dayNumber">{format(new Date(), "dd")}</div>
        </div>
      </div>
    </div>
  );
}

export default CalendarComponent;
