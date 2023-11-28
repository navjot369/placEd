import React from "react";
import SampVideo from "./../Images/SampleVid1.mp4";

export default function VideoSection() {
  return (
    <div className="SecCont videoCont">
      <div className="SectionHeader vidheader">Videos</div>
      <div className="ContentSection">
        <VideoBox cont={SampVideo} vidTitle="This will description of first video" />
        <VideoBox cont={SampVideo} vidTitle="This will description of second video" />
        <VideoBox cont={SampVideo} vidTitle="This will description of third video" />
        <VideoBox cont={SampVideo} vidTitle="This will description of fourth video" />
      </div>
    </div>
  );
}

function VideoBox(props) {
  return (
    <div className="contentBox">
      <video src={props.cont} className="videoContent" controls/>
      <div className="DescriptText">{props.vidTitle}</div>
    </div>
  );
}
