import React, {Component} from 'react'
import RenderEmployees from "./selectedEmp"
import Test from "./test"


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfEmployees: 1000,
            employeesWithBonus: [],
            test: new Map(),
        };
        this.filterEmployees = this.filterEmployees.bind(this);
    }

    filterEmployees() {
        let map = new Map();
        let allEmployees = [...Array(this.state.numberOfEmployees + 1).keys()].slice(1);
        allEmployees = allEmployees.filter(v => [...Array(v).keys()].slice(1).reduce((sum, val) => {
            if (v % val === 0) {
                let dividors = [];
                if(map.has(v))
                    dividors = map.get(v);
                dividors.push(val);
                map.set(v,dividors);
                return sum + val;
            } else {
                return sum;
            }
            //return v % val ===0?sum+val:sum;
        }, 0) > v);
        let remap = new Map();
        for(let emp of allEmployees) {
            remap.set(emp,map.get(emp));
        }
        //console.log(map);
        this.setState({
            test: remap,
            employeesWithBonus: allEmployees
        });
    }

    componentDidMount() {
        this.filterEmployees();
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
                    <Test test={this.state.test} />
                </div>
            </div>
        )
    }
}

export default Calculator;
