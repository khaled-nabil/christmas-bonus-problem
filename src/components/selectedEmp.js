import React from 'react'

function Employee(props){
    return (
        <p>Emp: {props.resource}</p>
    );
}
const RenderEmployees = (props) => {
    let results = props.selectedEmployees;
    return (
        <div className="card-columns">
            {results.map((resource) => {
                return <Employee key={resource} resource={resource}/>;
            })}
        </div>
    )
};
export default RenderEmployees
