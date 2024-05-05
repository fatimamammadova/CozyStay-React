import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./_reservationForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ResevationForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [open, setOpen] = useState(false)
  return (
    <div className="reservation">
      <div className="r-container">
        <div className="r-form-wrapper">
          <form>
            <div className="form-field">
              <div className="field-wrap">
                <label htmlFor="checkin" className="font-marcellus">
                  Check In
                </label>
                <div className="date-picker">
                  <DatePicker
                    renderCustomHeader={({
                      monthDate,
                      customHeaderCount,
                      decreaseMonth,
                      increaseMonth,
                    }) => (
                      <div>
                        <button
                          aria-label="Previous Month"
                          className={
                            "react-datepicker__navigation react-datepicker__navigation--previous"
                          }
                          style={
                            customHeaderCount === 1
                              ? { visibility: "hidden" }
                              : null
                          }
                          onClick={decreaseMonth}
                        >
                          <span
                            className={
                              "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                            }
                          >
                            {"<"}
                          </span>
                        </button>
                        <span className="react-datepicker__current-month">
                          {monthDate.toLocaleString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <button
                          aria-label="Next Month"
                          className={
                            "react-datepicker__navigation react-datepicker__navigation--next"
                          }
                          style={
                            customHeaderCount === 0
                              ? { visibility: "hidden" }
                              : null
                          }
                          onClick={increaseMonth}
                        >
                          <span
                            className={
                              "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                            }
                          >
                            {">"}
                          </span>
                        </button>
                      </div>
                    )}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    monthsShown={2}
                  />
                </div>
              </div>
            </div>
            <div className="form-field">
              <div className="field-wrap">
                <label htmlFor="checkout" className="font-marcellus">
                  Check Out
                </label>
                <div className="date-picker">
                  <DatePicker
                    renderCustomHeader={({
                      monthDate,
                      customHeaderCount,
                      decreaseMonth,
                      increaseMonth,
                    }) => (
                      <div>
                        <button
                          aria-label="Previous Month"
                          className={
                            "react-datepicker__navigation react-datepicker__navigation--previous"
                          }
                          style={
                            customHeaderCount === 1
                              ? { visibility: "hidden" }
                              : null
                          }
                          onClick={decreaseMonth}
                        >
                          <span
                            className={
                              "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                            }
                          >
                            {"<"}
                          </span>
                        </button>
                        <span className="react-datepicker__current-month">
                          {monthDate.toLocaleString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <button
                          aria-label="Next Month"
                          className={
                            "react-datepicker__navigation react-datepicker__navigation--next"
                          }
                          style={
                            customHeaderCount === 0
                              ? { visibility: "hidden" }
                              : null
                          }
                          onClick={increaseMonth}
                        >
                          <span
                            className={
                              "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                            }
                          >
                            {">"}
                          </span>
                        </button>
                      </div>
                    )}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    monthsShown={2}
                  />
                </div>
              </div>
            </div>
            <div className="form-field">
              <div className="field-wrap">
                <label htmlFor="guests" className="font-marcellus">
                  Guests
                </label>
                <div className="input-inner">
                  <input
                    type="text"
                    id="guests"
                    className="guests"
                    value={`${adult} ${
                      adult >= 2 ? "Adults" : "Adult"
                    }, ${child} ${child >= 2 ? "Children" : "Child"}`}
                    onChange={(e) => setAdult(parseInt(e.target.value))}
                    onClick={() => setOpen(o => !o)}
                    readOnly
                  />
                </div>
                <div className={`dropdown ${open ? "show" : ""}`}>
                  <div className="d-col">
                    <div className="d-wrap">
                      <span className="d-title font-marcellus">
                        {adult >= 2 ? "Adults" : "Adult"}
                      </span>
                      <div className="quantity">
                        <button
                          type="button"
                          className="minus"
                          onClick={() => setAdult(adult - 1)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input
                          type="text"
                          value={adult}
                          onChange={(e) => setAdult(parseInt(e.target.value))}
                        />
                        <button
                          type="button"
                          className="plus"
                          onClick={() => setAdult(adult + 1)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-col">
                    <div className="d-wrap">
                      <span className="d-title font-marcellus">
                        {child >= 2 ? "Children" : "Child"}
                      </span>
                      <div className="quantity">
                        <button
                          type="button"
                          className="minus"
                          onClick={() => setChild(child - 1)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input
                          type="text"
                          value={child}
                          onChange={(e) => setChild(parseInt(e.target.value))}
                        />
                        <button
                          type="button"
                          className="plus"
                          onClick={() => setChild(child + 1)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-field">
              <div className="field-wrap">
                <div className="input-inner">
                  <button type="submit" className="check font-marcellus">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResevationForm;

{
  /* <DatePicker
      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--previous"
            }
            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
            onClick={decreaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
              }
            >
              {"<"}
            </span>
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button
            aria-label="Next Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--next"
            }
            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
            onClick={increaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
              }
            >
              {">"}
            </span>
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      monthsShown={2}
    /> */
}
