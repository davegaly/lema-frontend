import { FC } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import { PrimeReactProvider } from 'primereact/api';
import DashboardPage from './pages/dashboardPage';
import DepartmentsPage from './pages/admin/departmentsPage';
import './style.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";

export const App: FC<{ name: string }> = ({ name }) => {
  
  return (
    <PrimeReactProvider>
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
    </PrimeReactProvider>
  );

};


