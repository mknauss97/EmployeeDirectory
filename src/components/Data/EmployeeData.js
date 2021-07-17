import React, { Component } from "react";
import EmployeeTable from "../Table/EmployeeTable";
import API from '../../API'

class EmployeeData extends Component {
    state = {
        emp: [],
        filteredEmp: [],
        empInfo: this.empInfo,
    };
    get empInfo() {
        return {
            name: "",
            location: "",
            phone: "",
            email: "",
        };
    }

    componentDidMount() {
        API.getEmployees()
            .then((res) =>
                this.setState({
                    emp: res.data.resuls,
                    filteredEmp: res.data.results,
                })
            )
            .catch((err) => console.log(err));
    }
    sortEmployeeInfo = (key) => {
        let sortEmployee = this.state.filteredEmp;
        if (this.state.empInfo[key]) {
            this.setState({
                filteredEmp: sortEmployee.reverse()
            });
        }
        this.setState({
            filteredEmp: sortEmployee,
            empInfo: {
                ...this.empInfo, [key]: "asc",
            },
        });
    };
    render() {
        return (
            <div className="container">
                <EmployeeTable
                    state={this.state}
                    sortEmployeeInfo={this.sortEmployeeInfo}
                />
            </div>
        );
    }

}

export default Data;