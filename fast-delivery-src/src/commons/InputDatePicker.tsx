import React, { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/l10n/es";
import "@/styles/input.css";
import "@/assets/ArrowIcon";
import ArrowIcon from "@/assets/ArrowIcon";

type DatePickerProps = {
  className: string;
  placeholder: string;
  name: string;
  onSelectPicker: (date: Date) => void;
};
const InputDatePicker: React.FC<DatePickerProps> = ({
  className,
  placeholder,
  name,
  onSelectPicker,
}) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const pickerRef = useRef<flatpickr.Instance | undefined>(undefined);

  useEffect(() => {
    const inputElement = document.getElementById(
      name || ""
    ) as HTMLInputElement;

    const picker = flatpickr(inputElement, {
      enableTime: false,
      dateFormat: "d/m/y",
      defaultDate: selectedDate,
      minDate: "today",
      locale: "es",
      disable: [
        function (date) {
          return date.getDay() === 6 || date.getDay() === 0;
        },
      ],
      onChange: (selectedDates) => {
        if (selectedDates && selectedDates.length > 0) {
          setSelectedDate(selectedDates[0]);
          onSelectPicker(selectedDates[0]);
        }
      },
      onClose: () => {
        setOpenCalendar(false);
      },
    });

    pickerRef.current = picker;

    return () => {
      picker.destroy();
    };
  }, [name, onSelectPicker, selectedDate]);

  const handleArrowButtonClick = () => {
    if (pickerRef.current) {
      if (openCalendar) {
        pickerRef.current.close();
        setOpenCalendar(false);
      } else {
        pickerRef.current.open();
        setOpenCalendar(true);
      }
    }
  };
  const handleInputClick = () => {
    if (pickerRef.current) {
      if (openCalendar) {
        pickerRef.current.close();
        setOpenCalendar(false);
      } else {
        pickerRef.current.open();
        setOpenCalendar(true);
      }
    }
  };
  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          id={name}
          name={name}
          className={className}
          placeholder={placeholder}
          data-input
          onClick={handleInputClick}
        />
        <button className="arrow-container" onClick={handleArrowButtonClick}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default InputDatePicker;
