import React, { Component } from "react";
import Table from "../components/Table";
import API from "../utils/API";

class Employee extends Component {
    state = {
        image: "",
        match: false,
        matchCount: 0
    };

    componentDidMount() {
        this.loadEmployees();
    }

    handleSort = event => {
        console.log("sort by name");
        this.sortEmployees();
    };

    handleFilter = event => {
        console.log("filter by name");
        let filterText = document.getElementById('filter').value
        console.log(filterText);
        this.filterEmployees(filterText);
    };

    handleClearFilter = event => {
        console.log("Clear Filter");
        this.clearFilterEmployees();
    };

    loadEmployees = () => {
        API.getEmployees()
            .then(res => {
                return this.setState({
                    employees: res.data.results
                });
            }
            )
            .catch(err => console.log(err));
    };

    sortEmployees = () => {
        let employees = this.state.employees
        employees.sort(function (a, b) {
            return a.name.first > b.name.first ? 1 : -1;
        });
        return this.setState({
            employees: employees
        });
    };

    filterEmployees = (filterText) => {
        console.log("inside")
        console.log(filterText)
        let employees = this.state.employees
        let newEmployees = employees.filter(function (employee) {
            return employee.name.first.toLowerCase().includes(filterText.toLowerCase());
        });

        return this.setState({
            employees: newEmployees,
            original: employees
        });
    };

    clearFilterEmployees = (filterText) => {
        return this.setState({
            employees: this.state.original
        });
    };

    render() {
        return (

            <div className="container" >
                <button className="btn btn-secondary mt-3 btn-lg btn-block" onClick={this.handleSort}>Organize by alphabetical order</button> <br />

                <div className="row">
                    <input className="col mr-3 ml-3 form-control" id="filter" placeholder="Search By Name"></input>
                    <button className="btn btn-primary col mr-3 ml-3" onClick={this.handleFilter}>Search</button>
                    <button className="btn btn-danger col mr-3 ml-3" onClick={this.handleClearFilter}>Clear Filter</button>
                </div>
                <br />

                <Table results={this.state.employees} />
            </div>
        );
    }
}

export default Employee;