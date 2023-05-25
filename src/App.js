import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
