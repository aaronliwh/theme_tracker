import './App.css';
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPagePresenter from './presenters/MainPagePresenter';
import LoginPresenter from './presenters/LoginPresenter';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPresenter />} />
    <Route path="/home" element={<MainPagePresenter />} />
  </Routes>
</BrowserRouter>
}

export default App;