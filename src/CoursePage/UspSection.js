import React from "react";

export default function UspSection() {
  return (
    <div className="BelowCont">
      <BoxInner num="1" />
      <BoxInner num="2" />
      <BoxInner num="3" />
      <BoxInner num="4" />
    </div>
  );
}



function BoxInner(props) {
    return(
        <div className="Boxusp">Box {props.num}</div>
    );
}
