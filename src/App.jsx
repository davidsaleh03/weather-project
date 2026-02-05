import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/info' element={<Info />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
