import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import UrlShortener from './components/UrlShortener';
import RetrieveUrl from './components/RetrieveUrl';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <UrlShortener/>
            }>
          </Route>
          <Route
            path='/to/:id'
            element={
              <RetrieveUrl/>
            }>
          </Route>
          <Route
            path='/NotFound'
            element={
              <NotFound/>
            }>

          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
    
   
  );
}

export default App;
