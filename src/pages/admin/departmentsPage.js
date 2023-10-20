import React, { useEffect, useState } from "react";
import axios from 'axios';
import lemaBEConnector from '../../connectors/lemaBeConnector.mjs';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const DepartmentsPage = () => {

    const [departmentsList, setDepartmentsList] = useState([])
    const [departmentEditId, setDepartmentEditId] = useState(0)
    const [departmentEditName, setDepartmentEditName] = useState('')

    const getList = async () => {
      let response = await lemaBEConnector.departments.listAll(); 
      setDepartmentsList(response.data);
    }

    const getSingleDepartment = async () => {
      let response = await lemaBEConnector.departments.getbyid(departmentEditId); 
      setDepartmentEditName(response.data.name);
    }

    const saveDepartment = async () => {
      let response = await lemaBEConnector.departments.save(
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

    const rowClick = (e) => {
      console.log(e.data.id);
      setDepartmentEditId(e.data.id);
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
              <DataTable value={departmentsList} onRowClick={rowClick}>
                  <Column field="name" header="Name"></Column>
              </DataTable>
            </div>
            <div>
              <InputText value={departmentEditName} onChange={(e) => setDepartmentEditName(e.target.value)} />
              <Button label="Submit" onClick={()=>saveClick()}/>
            </div>
        </div>
    )
};
  
export default DepartmentsPage;
