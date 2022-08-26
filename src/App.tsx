import "./assets/plugins/global/plugins.bundle.css";
import "./assets/css/style.bundle.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HeaderBar from "./components/HeaderBar";
import Main from "./components/Main";
import { Account, Home, NewCases, Patients, Schedule } from "./pages";

function App() {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <header className="header">
            <HeaderBar />
            <div className="separator" />
            <Navbar />
          </header>
        </div>

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/new_cases" element={<NewCases />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
}

export default App;
