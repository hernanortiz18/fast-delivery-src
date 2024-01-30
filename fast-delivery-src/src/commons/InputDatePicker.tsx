import React, { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "@/styles/input.css";

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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    const inputElement = document.getElementById(
      name || ""
    ) as HTMLInputElement;

    const picker = flatpickr(inputElement, {
      enableTime: false,
      dateFormat: "d/m/y",
      defaultDate: selectedDate,
      onChange: (selectedDates) => {
        if (selectedDates && selectedDates.length > 0) {
          setSelectedDate(selectedDates[0]);
          onSelectPicker(selectedDates[0]);
        }
      },
    });
    return () => {
      picker.destroy();
    };
  }, [name, onSelectPicker, selectedDate]);
  return (
    <div>
      <input
        type="text"
        id={name}
        name={name}
        className={className}
        placeholder={placeholder}
        data-input
      />
    </div>
  );
};

export default InputDatePicker;
