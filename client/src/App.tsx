import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Allroutes from "./routes/Allroutes";
import SideNavbar from "./components/SideNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import CustomLoader from "./components/CustomLoader";

import "./App.css";

function App() {
  return (
    <div className="h-screen">
      <Router>
        <Navbar />

        <Suspense fallback="loading...">
          <div className="flex">
            <div className="w-[20%]">
              <SideNavbar />
            </div>
            <div className=" px-0 md:px-12 w-full md:w-[80%]">
              <Allroutes />
            </div>
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
