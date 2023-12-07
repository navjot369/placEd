import React from "react";
import logo1 from './../Images/logo1.svg';
import logo2 from './../Images/logo2.svg';
import logo3 from './../Images/logo3.svg';

export default function UspSection() {
  return (
    <div className="BelowCont">
      <BoxInner icon={logo1} cont="100% Assured Placement" />
      <BoxInner icon={logo2} cont="Pay when Placed" />
      <BoxInner icon={logo3} cont="Learning With Projects" />
    </div>
  );
}



function BoxInner(props) {
    return(
        <div className="Boxusp">
          <div className="box-icon"><img src={props.icon} className="box-icon" alt="Match" /></div>
          <div className="box-content">{props.cont}</div>
        </div>
    );
}
