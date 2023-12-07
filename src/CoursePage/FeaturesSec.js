import React from 'react';
import icon1 from './../Images/automation.png';
import icon2 from './../Images/project.png';
import icon3 from './../Images/webinar.png';
import icon4 from './../Images/reading-book.png';

export default function Features() {
    return(<div>
        <div className="featureTagline">Where Data Science: <span className="getPlaced">Gets You Placed</span></div>
        <div className="featureCont">
            <FeatureBox icon={icon1} cont="Industry Proven Curricullum" />
            <FeatureBox icon={icon2} cont="Real-Life Projects" />
            <FeatureBox icon={icon3} cont="Live Classes" />
            <FeatureBox icon={icon4} cont="Flexible Learning" />
        </div>
    </div>);
}

function FeatureBox(props) {
    return(<div className="FeatBox">
        <img src={props.icon} alt="Match" className="feature-icon" />
        <p className="featureLine">{props.cont}</p>
    </div>);
}