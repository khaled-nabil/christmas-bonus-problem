import React from 'react'


const Test = (props) => {
    let results = props.test;
    let rows = [];
    for (let rs of results) {
        if (rs[1].length > 1)
            rows.push(<p key={rs[0]}>{rs[0]} {rs[1].join("\t")}</p>);
    }
    return <div>{rows}</div>;

};
export default Test
