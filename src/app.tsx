import type { FC } from 'react';
import './styles/global.css';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees/Employees';
import EmployeeDetails from './pages/EmployeeDetails/EmployeeDetails';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';


const App: FC = () => {
  return <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/employees' element={<Employees/>}/>
        <Route path='/employees/:id' element={<EmployeeDetails/>}/>
        <Route path='/employees/create' element={<CreateEmployee/>}/>
        <Route path='/employees/edit/:id' element={<CreateEmployee/>}/>

      </Routes>
    </BrowserRouter>
   
  </div>;
};

export default App;
