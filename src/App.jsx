import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Bookshelf from "./components/Bookshelf.jsx";
import BookDetails from "./components/BookDetails";
import NewBook from "./components/Newbook.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/books" element={<Bookshelf />} />
          <Route
            path="/books/new"
            element={<NewBook />}
          />
          <Route
            path="/books/:id"
            element={<BookDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
