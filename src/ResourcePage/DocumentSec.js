import React from "react";
import DocIcon from "./../Images/Docicon.png";
import document1 from "./../Images/sampleDoc.pdf";

export default function DocSection() {
  return (
    <div className="SecCont DocCont">
      <div className="SectionHeader docHeader">Documents</div>
      <div className="ContentSection">
        <DocumentBox docLink={document1} docTitle="Description_1" />
        <DocumentBox docLink={document1} docTitle="Description_2" />
        <DocumentBox docLink={document1} docTitle="Description_3" />
        <DocumentBox docLink={document1} docTitle="Description_4" />
        <DocumentBox docLink={document1} docTitle="Description_5" />
      </div>
    </div>
  );
}

function DocumentBox(props) {
  return (
    <div className="contentBox">
      <div className="docBox">
        <div className="upperHover">
            <div className="innerBttn">
          <a href={props.docLink} className="downLink" download>
            Download</a></div>
        </div>
        <img src={DocIcon} alt="DocIcon" />
      </div>
      <div className="DescriptText">{props.docTitle}</div>
    </div>
  );
}
