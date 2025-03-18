
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"; // Import the Navbar
import "./App.css";

const App = () => {
  return (

      <div className="app-container">
        <Navbar /> {/* Add the Navbar here */}
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1, padding: "20px" }}>
            <Routes>
              <Route path="/overview" element={<h1>Overview Page</h1>} />
              <Route path="/analytics" element={<h1>Analytics Page</h1>} />
              <Route path="/reports" element={<h1>Reports Page</h1>} />
              <Route path="/users" element={<h1>All Users Page</h1>} />
              <Route path="/users/add" element={<h1>Add New User Page</h1>} />
              <Route path="/users/roles" element={<h1>Roles Page</h1>} />
              <Route
                path="/settings/profile"
                element={<h1>Profile Settings Page</h1>}
              />
              <Route
                path="/settings/security"
                element={<h1>Security Settings Page</h1>}
              />
              <Route
                path="/settings/preferences"
                element={<h1>Preferences Page</h1>}
              />
              <Route path="/" element={<h1>Welcome to the Dashboard!</h1>} />
            </Routes>
          </div>
        </div>
      </div>

  );
};

export default App;



// import { Route, Router, Routes } from "react-router-dom";
// import Sidebar from "./components/Sidebar";

// const App = () => {
//   return (

//       <div style={{ display: "flex" }}>
//         <Sidebar />
//         <div style={{ flex: 1, padding: "20px" }}>
//           <Routes>
//             <Route path="/overview" element={<h1>Overview Page</h1>} />
//             <Route path="/analytics" element={<h1>Analytics Page</h1>} />
//             <Route path="/reports" element={<h1>Reports Page</h1>} />
//             <Route path="/users" element={<h1>All Users Page</h1>} />
//             <Route path="/users/add" element={<h1>Add New User Page</h1>} />
//             <Route path="/users/roles" element={<h1>Roles Page</h1>} />
//             <Route
//               path="/settings/profile"
//               element={<h1>Profile Settings Page</h1>}
//             />
//             <Route
//               path="/settings/security"
//               element={<h1>Security Settings Page</h1>}
//             />
//             <Route
//               path="/settings/preferences"
//               element={<h1>Preferences Page</h1>}
//             />
//             <Route path="/" element={<h1>Welcome to the Dashboard!</h1>} />
//           </Routes>
//         </div>
//       </div>

//   );
// };

// export default App;