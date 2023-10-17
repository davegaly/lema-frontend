import React, { useEffect, useState } from "react";
import axios from 'axios';

const DepartmentsPage = () => {

    const [departmentsList, setDepartmentsList] = useState([])
    const [departmentEdit, setDepartmentEdit] = useState({})

    const getList = async () => {
      const response = await axios.get("https://swift-fragrant-deer.glitch.me/departments/list");
      setDepartmentsList(response.data);
    }

    const getSingleDepartment = () => {
      fetch("https://swift-fragrant-deer.glitch.me/departments/getbyid/")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }

    const saveDepartment = async () => {
      const response = await axios.post("https://swift-fragrant-deer.glitch.me/departments/update",{id:1, name:'ciao'});
      console.log(response.data);
    }
  
    useEffect(() => {getList()}, [])

    return (
        <div>
            <h1>Departments management</h1>
            <div>
            {departmentsList.length > 0 && (
                <ul>
                {departmentsList.map(department => (
                    <li key={department.id}>{department.name}</li>
                ))}
                </ul>
            )}
            </div>
            <div>
              <input type="text" ></input>
            </div>
        </div>
    )
};
  
export default DepartmentsPage;