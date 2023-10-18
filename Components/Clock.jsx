import React from "react";
import { Container } from "react-bootstrap";

const Clock = () => {
  let GoalDate = new Date("05 01 ,2024");
  setInterval(() => {
    let DateNow = new Date().getTime();
    let DateDiff = GoalDate - DateNow;
    let Monthes = Math.floor(DateDiff / (1000 * 60 * 60 * 24) / 30);
    let Dayes = Math.floor(DateDiff / 1000 / 60 / 60 / 24);
    let Hours = Math.floor((DateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    let Min = Math.floor((DateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let Sec = Math.floor((DateDiff % (1000 * 60)) / 1000);

    let monthchange = document.querySelector(".months");
    monthchange.innerHTML = `${Monthes}  شهور`;
    ///////////
    let daysChange = document.querySelector(".days");
    daysChange.innerHTML = `${Dayes}  أيام`;
    ///////////////
    let HourChange = document.querySelector(".hours");
    HourChange.innerHTML = `${Hours}  ساعات`;
    ///////////////////
    let MinChange = document.querySelector(".min");
    MinChange.innerHTML = `${Min}  دقيقة`;
    /////////////////////
    let SecChange = document.querySelector(".sec");
    SecChange.innerHTML = `${Sec}  ثانية`;
  }, 1000);
  return (
    <div className="Clock">
      <Container>
        <div className="Clock-content">
          <div className="months clk"></div>
          <div className="days clk"></div>
          <div className="hours clk"></div>
          <div className="min clk"></div>
          <div className="sec clk"></div>
        </div>
        <div className="sala">ﷺ</div>
        <div className="owner">
          This Page created by{" "}
          <a
            target="_blank"
            href="https://abdallh-sabry.vercel.app"
            without
            rel="noreferrer"
          >
            Abdallh Sabry
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Clock;
