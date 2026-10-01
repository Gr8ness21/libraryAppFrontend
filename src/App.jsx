import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Bookshelf from "./components/Bookshelf.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/books" element={<Bookshelf />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
