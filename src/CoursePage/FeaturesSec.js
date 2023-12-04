import React from 'react';

export default function Features() {
    return(<div>
        <div className="featureTagline">Where Data Science : Gets You Placed</div>
        <div className="featureCont">
            <FeatureBox cont="Industry Proven Curricullum" />
            <FeatureBox cont="Real-Life Projects" />
            <FeatureBox cont="Live Classes" />
            <FeatureBox cont="Flexible Learning" />
        </div>
    </div>);
}

function FeatureBox(props) {
    return(<div className="FeatBox">
        <p className="featureLine">{props.cont}</p>
    </div>);
}