import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Home from "./pages/Home";
import Info from "./pages/Info";
import Current from "./pages/Current";
import Quality from "./pages/Quality";
import Forecast from "./pages/Forecast";
import Riseset from "./pages/Astronomy";
import { useNavigate } from "react-router-dom";

function App() {
  const [city, setCity] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0].type;
    if (navType === "reload") {
      navigate("/");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/info/:city' exact element={<Info />}/>
        <Route path='/info/current/:city' element={<Current />}/>
        <Route path='/info/quality/:city' element={<Quality />}/>
        <Route path='/info/forecast/:city' element={<Forecast />}/>
        <Route path='/info/astronomy/:city' element={<Riseset />}/>
      </Routes>
    </div>
  );
}

export default App;
