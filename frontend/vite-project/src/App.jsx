import React from 'react';
import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import { Route, Routes } from "react-router-dom"; // Updated imports for React Router v6+

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Use 'element' instead of 'component' */}
        <Route path="/chats" element={<Chatpage />} /> {/* Use 'element' instead of 'component' */}
      </Routes>
    </div>
  );
}

export default App;
