import React from 'react';
import SearchPage from './pages/SearchPage';
import BookshelfPage from './pages/BookshelfPage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' Component={SearchPage}/>
        <Route exact path='/bookshelf' Component={BookshelfPage}/>
      </Routes>

    </Router>
  );
}

export default App;
