//import logo from "../src/assets/logo.svg"
//import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="accommodations" element={<Accommodations />} /> */}
          <Route path="/user/:id" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

export default App
