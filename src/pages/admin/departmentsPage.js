import React, { useEffect, useState } from "react";
import axios from 'axios';
const lemaBEConnector = require('../../connectors/lemaBeConnector.js');

const DepartmentsPage = () => {

    const [departmentsList, setDepartmentsList] = useState([])
    const [departmentEditId, setDepartmentEditId] = useState(0)
    const [departmentEditName, setDepartmentEditName] = useState('')

    const getList = async () => {
      let data = lemaBEConnector.departmentsListAll();
      setDepartmentsList(data);
    }

    const getSingleDepartment = async () => {
      let data = lemaBEConnector.departmentsGetById(departmentEditId);
      setDepartmentEditName(data);
    }

    const saveDepartment = async () => {
      const response = await axios.post(LEMABACKEND_ROOT_URL + "/api/departments/save",
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