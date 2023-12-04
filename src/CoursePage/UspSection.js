import React from "react";

export default function UspSection() {
  return (
    <div className="BelowCont">
      <BoxInner cont="100% Assured Placement" />
      <BoxInner cont="Pay when Placed" />
      <BoxInner cont="Learning With Projects" />
    </div>
  );
}



function BoxInner(props) {
    return(
        <div className="Boxusp"><div>{props.cont}</div></div>
    );
}
