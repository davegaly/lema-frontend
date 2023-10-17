import React, { useEffect, useState } from "react";

const DepartmentsPage = () => {

    const [users, setUsers] = useState([])

    const fetchData = () => {
      fetch("https://swift-fragrant-deer.glitch.me/departments/list")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])


    return (
        <div>
            <h1>Departments management</h1>
            <div>
            {users.length > 0 && (
                <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
                </ul>
            )}
            </div>
        </div>
    )
};
  
export default DepartmentsPage;