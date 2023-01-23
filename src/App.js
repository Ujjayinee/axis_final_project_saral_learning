import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeLogin from './pages/EmployeeLogin';
import About from './pages/About';
import Contact from './pages/Contact';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeProfile from './pages/EmployeeProfile';
import EmployeeList from './pages/EmployeeList';
import AdminAddEmployee from './pages/AdminAddEmployee';
import CurrentProjectList from './pages/CurrentProjectList';
import StakeholderList from './pages/StakeholderList';
import ProjectDetails from './pages/ProjectDetails';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<EmployeeLogin/>}/>
        <Route path="/aboutUs" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/employeedashboard" element={<EmployeeDashboard/>}/>
        <Route path="/myprofile" element={<EmployeeProfile/>}/>
        <Route path="/bankemployees" element={<EmployeeList/>}/>
        <Route path="/cp" element={<CurrentProjectList/>}/>
        <Route path="/stake" element={<StakeholderList/>}/>
        <Route path="/projectdetails" element={<ProjectDetails/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/addemployee" element={<AdminAddEmployee/>}/>
      </Routes>
    </div>
  );
}

export default App;
