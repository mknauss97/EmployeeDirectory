  
import React from 'react'
import Header from './components/Header/header';
import EmployeeData from './components/Data/EmployeeData';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeData />
    </div>
  );
}

export default App;
