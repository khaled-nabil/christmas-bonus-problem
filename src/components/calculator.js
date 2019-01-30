import React, {Component} from 'react'
import RenderEmployees from "./selectedEmp"

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfEmployees: 1000,
            employeesWithBonus: []
        };
        this.employeesFilter = this.employeesFilter.bind(this);
        this.secondPhaseFilter = this.secondPhaseFilter.bind(this);
    }

    secondPhaseFilter(numbers, target, next) {
        if (target === 0) //target has been reached
            return true;
        else if (next === 0 && target !== 0) //no subset can be equal to the target
            return false;
        else if (numbers[next - 1] > target) //if the current last value is bigger than the sum so far, then skip to next one
            return this.secondPhaseFilter(numbers, target, next - 1,);
        else if(numbers.slice(0,next).reduce((t, a) => t + a) < target) //optimization step: get the summation of the rest, if less than current value, then no point searching further
            return false;
        else { //branch out to find next different combos using the current value or not using it
            let newTarget = target - numbers[next - 1];
            return this.secondPhaseFilter(numbers, target, next - 1) || this.secondPhaseFilter(numbers, newTarget, next - 1);
        }
    }

    employeesFilter() {
        let listProperDivisors = new Map();
        let allEmployees = [...Array(this.state.numberOfEmployees + 1).keys()].slice(1);
        let higherSumDivisorEmployees = allEmployees.filter(v => [...Array(v).keys()].slice(1).reduce((sum, val) => {
            if (v % val === 0) {
                let dividors = [];
                if (listProperDivisors.has(v))
                    dividors = listProperDivisors.get(v);
                dividors.push(val);
                listProperDivisors.set(v, dividors);
                return sum + val;
            } else {
                return sum;
            }
        }, 0) > v);

        let filteredEmployees = higherSumDivisorEmployees.filter(e => {
            return !this.secondPhaseFilter(listProperDivisors.get(e), e, listProperDivisors.get(e).length)
        });
        this.setState({
            employeesWithBonus: filteredEmployees
        });
    }

    componentDidMount() {
        this.employeesFilter();
    }

    render() {
        return (
            <div>
                <div className={`row mt-5`}>
                    <div className={`col`}>For {this.state.numberOfEmployees} employees, the following will get
                        bonuses
                    </div>
                </div>
                <div className={`mt-3`}>
                    <RenderEmployees selectedEmployees={this.state.employeesWithBonus}/>
                </div>
            </div>
        )
    }
}
export default Calculator;
