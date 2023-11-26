import React from 'react';

export default function Features() {
    return(<div>
        <div className="featureTagline">Expertise That Delivers : </div>
        <div className="featureCont">
            <FeatureBox num="1" />
            <FeatureBox num="2" />
            <FeatureBox num="3" />
        </div>
    </div>);
}

function FeatureBox(props) {
    return(<div className="FeatBox">
        <p className="featureLine">Feature_{props.num}</p>
    </div>);
}