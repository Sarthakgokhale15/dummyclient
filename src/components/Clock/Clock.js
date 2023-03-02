import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <h2>{timerDays}</h2>
              <small>Days</small>
            </section>
            <div className="separator">
              <h1>:</h1>
            </div>
            <section>
                <h2>{timerHours}</h2>
              <small>Hrs</small>
            </section>
            <div className="separator">
              <h1>:</h1>
            </div>
            <section>
              <h2>{timerMinutes}</h2>
              <small>Min</small>
            </section>
            <div className="separator">
              <h1>:</h1>
            </div>
            
            <section>
              <h2>{timerSeconds}</h2>
              <small>Sec</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;