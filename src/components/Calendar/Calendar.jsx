import { useState } from "react";
import DatePicker from "react-datepicker";
import "./_calendar.scss";
const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
  return (
    <section className="calendar">
      <h4 className="c-title font-marcellus">Availability</h4>

      <DatePicker
        swapRange
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        selectsDisabledDaysInRange
        monthsShown={2}
        inline
      />

      <div className="buttons">
        <button>Cancel</button>
        <button>Apply</button>
      </div>
    </section>
  );
};

export default Calendar;
