import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfEmployees: 1000,
            employeesWithBonus: []
        }
    }
    render(){
        return(
            <div>Test app</div>
        )
    }
}
export default Calculator;
