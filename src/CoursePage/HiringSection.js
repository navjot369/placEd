import React from 'react';

export default function HiringSec() {
    return(<div className="hiringCont">
        <div className="hiringTagline">Our Alumni works at</div>
        <ListCompanies />
    </div>);
}

function ListCompanies() {
    let list1 = [];
    for(let i = 0; i < 7; i++) {
        list1.push(<div className="CompIcon">icon {i}</div>);
    }
    return(<div className="iconsCont">
        {list1}
        <div class="andMore">and more</div>
    </div>);
}