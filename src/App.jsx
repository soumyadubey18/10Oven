import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Navbar";
import "./App.css";
import Home from './components/Home';
import FeedbackForm from './components/FeedbackForm';
import Loader from "./components/Loader";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{setIsLoading(false)},2800)
  },[])

  return (
    <div className="">
      {isLoading ? <Loader/>: (
        <>
          {location.pathname !== '/feedback' && <Header />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/feedback' element={<FeedbackForm />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
