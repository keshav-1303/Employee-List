import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import EditEmployeePage from "./pages/EditEmployeePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addemployee" element={<CreateEmployeePage />} />
        <Route path="/editemployee/:id" element={<EditEmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
