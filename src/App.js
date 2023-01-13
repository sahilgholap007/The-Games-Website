import React from 'react';
import './App.css';
import Client from "./Client/Client"
import Admin from "./Admin/Admin"
import Adminform from "./Admin/Adminform"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Client/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/admin/Adminform" element={<Adminform/>} />
    </Routes>
  );
}

export default App;
