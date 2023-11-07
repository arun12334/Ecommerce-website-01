import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import Login from './login';
import Home from './pages/home';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path='/home' element={<Home />}/>
      
      </Routes>
    </Router>
  );
};

export default App;
