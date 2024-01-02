import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPresenter from './presenters/LoginPresenter'
import MainPagePresenter from './presenters/MainPagePresenter';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPresenter />} />
    <Route path="/home" element={<MainPagePresenter />} />
  </Routes>
</BrowserRouter>
}

export default App;