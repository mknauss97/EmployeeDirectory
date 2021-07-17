  
import React from 'react'
import Header from './components/Header';
import EmployeesData from './components/EmployeeTable';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeTable />
    </div>
  );
}

export default App;
