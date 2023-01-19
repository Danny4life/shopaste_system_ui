

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './component/AddEmployee';
import NavBar from './component/NavBar.jsx';
import EmployeeList from './component/EmployeeList.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<EmployeeList />} />
        <Route path='/' element={<EmployeeList />} />
        <Route path='/employeeList' element={<EmployeeList />} />
        <Route path='/addEmployee' element={<AddEmployee />} />

      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
