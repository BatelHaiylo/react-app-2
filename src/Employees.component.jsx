import { Component } from "react";
import Employee from "./Employee.component";

export default class Employees extends Component{
    render(){
    const employee1 = new Employee("Or","Gedamo",new Date("11/16/98"))
    const employee2 = new Employee("Yaso","Melako",new Date("02/01/92"))
    const employee3 = new Employee("Simon","Berry",new Date("08/11/98"))
    const employee4 = new Employee("Shlomo","Hailo",new Date("04/11/89"))
    const EmployeesArr = [employee1,employee2,employee3,employee4]
    

        return(
            <div>
                {EmployeesArr.map(item => 
                   <Employee firstName ={`${item.firstName}`} lastName={`${item.lastName}`} dateOfBirth={`${item.dateOfBirth}`} picture={`${item.picture}`}/>
                )}
            </div>
        )
    }
}