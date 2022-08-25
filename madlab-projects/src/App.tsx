import "./assets/plugins/global/plugins.bundle.css";
import "./assets/css/style.bundle.css";
import Navbar from "./components/NavBar";
import HeaderBar from "./components/HeaderBar";
function App() {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <div
            id="kt_header"
            className="header"
            data-kt-sticky="true"
            data-kt-sticky-name="header"
            data-kt-sticky-offset="{default: '200px', lg: '300px'}"
          >
            <HeaderBar/>
            <div className="separator"/>

              <Navbar/>
            </div>
          </div>
          {/* Content area */}
          <div
            id="kt_content_container"
            className="d-flex flex-column-fluid align-items-start container-fluid"
          >
            <div className="content flex-row-fluid" id="kt_content">
              CONTENT HERE
            </div>
          </div>
        </div>
      </div>

  );
}

export default App;
