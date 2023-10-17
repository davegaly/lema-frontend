import { FC } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import DashboardPage from './pages/dashboardPage';
import DepartmentsPage from './pages/admin/departmentsPage';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  
  /*
  // read all entitie
  // https://api.artic.edu/api/v1/artworks/search?q=cats
  fetch('https://swift-fragrant-deer.glitch.me/departments/getbyid/1', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log('dave');
      console.log(err);
    });
  */

  return (
    <Router> 
        <div className="App"> 
            <ul className="App-header"> 
            <li> 
                <Link to="/">Dashboard</Link> 
            </li> 
            <li> 
                <Link to="/admin/department">Manage dept</Link> 
            </li> 
            </ul> 
        <Routes> 
                <Route path='/' element={< DashboardPage />}></Route> 
                <Route path='/admin/department' element={< DepartmentsPage />}></Route> 
        </Routes> 
        </div> 
    </Router> 
  );

};


