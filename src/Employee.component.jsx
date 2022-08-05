import { Component } from "react";

export default class Employee extends Component{
    constructor(props){
        super()
    }
    render(){
        return (
            <h6>
                <p>Name: {this.props.firstName}  {this.props.lastName}</p>
                <p>Date of birth: {this.props.dateOfBirth}</p>
                <EmployeePic/>
            </h6>
        )
    }
}