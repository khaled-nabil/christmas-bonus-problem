import React from 'react'

function Employee(props){
    return (
        <li className="list-inline-item">{props.resource}</li>
    );
}
const RenderEmployees = (props) => {
    let results = props.selectedEmployees;
    return (
        <ul className="list-inline">
            {results.map((resource) => {
                return <Employee key={resource} resource={resource}/>
            })}
        </ul>
    )
};
export default RenderEmployees
