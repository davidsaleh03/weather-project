import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Current from "./pages/Current";
import Quality from "./pages/Quality";
import Forecast from "./pages/Forecast";
import Riseset from "./pages/Astronomy";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/info' exact element={<Info />}/>
        <Route path='/info/current' element={<Current />}/>
        <Route path='/info/quality' element={<Quality />}/>
        <Route path='/info/forecast' element={<Forecast />}/>
        <Route path='/info/astronomy' element={<Riseset />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
