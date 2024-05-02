import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashoard";

function Routers() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
