import axios from "axios";

const EMPLOYEE_API_BASE_URL = "localhost:8080/api/v1/employees";


class EmployeeService {

    saveEmployee(employeeModel){
        return axios.post(EMPLOYEE_API_BASE_URL, employeeModel);
    }
}

export default new EmployeeService();