import React from "react";
import Clock from "../Components/Clock";
function Content() {
  return (
    <div className="Home">
      <div className="overlay">
        <div className="head">
          <div className="content">رديف 01/06/2024 يوحد الله</div>
        </div>
        <div className="main-title">
          ✌≧◠‿◠≦✌ اي حاجة تلوشك سيبها تلوشك اهم حاجة الشهرين الي فاضلين يعدو
          خير
        </div>
        <div className="main-title">💋 مسير المر هيمر والعسكري هيرجع حر</div>
        <Clock />
      </div>
    </div>
  );
}

export default Content;
