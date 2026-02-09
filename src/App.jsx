import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Home from "./pages/Home";
import Info from "./pages/Info";
import Current from "./pages/Current";
import Quality from "./pages/Quality";
import Forecast from "./pages/Forecast";
import Riseset from "./pages/Astronomy";

function App() {
  const [city, setCity] = useState('');

  return (
    <Router>
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
    </Router>
  );
}

export default App;
