import React, { useEffect, useState } from "react";
import axios from 'axios';

const DepartmentsPage = () => {

    const [departmentsList, setDepartmentsList] = useState([])
    const [departmentEditId, setDepartmentEditId] = useState(0)
    const [departmentEditName, setDepartmentEditName] = useState('')

    const getList = async () => {
      const response = await axios.get("https://swift-fragrant-deer.glitch.me/departments/list");
      setDepartmentsList(response.data);
    }

    const getSingleDepartment = async () => {
      const response = await axios.get("https://swift-fragrant-deer.glitch.me/departments/getbyid/" + departmentEditId);
      setDepartmentEditName(response.data.name);
    }

    const saveDepartment = async () => {
      const response = await axios.post("https://swift-fragrant-deer.glitch.me/departments/save",
        {id:departmentEditId, name:departmentEditName}
      );
      getList();
    }

    const listEditClick = (departmentId) => {
      setDepartmentEditId(departmentId);
    }

    const saveClick = () => {
      saveDepartment();
    }
  
    useEffect(() => {getList()}, [])
    useEffect(() => {
      if (departmentEditId > 0) {
        getSingleDepartment();
      }
    }, [departmentEditId]);

    return (
        <div>
            <h1>Departments management</h1>
            <div>
            {departmentsList.length > 0 && (
                <ul>
                {departmentsList.map(department => (
                    <li key={department.id}>{department.name}
                    <button onClick={()=>listEditClick(department.id)}>Edit</button>
                    </li>
                ))}
                </ul>
            )}
            </div>
            <div>
              <input type="text" value={departmentEditName} onChange={e => setDepartmentEditName(e.target.value)}></input>
              <button onClick={()=>saveClick()}>Save</button>
            </div>
        </div>
    )
};
  
export default DepartmentsPage;