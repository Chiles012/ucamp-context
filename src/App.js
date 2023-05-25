import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    console.log(user, token);
  }, [user, token]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            !user ?
            <Route path='/' element={<Login
              setToken={setToken}
              setUser={setUser}
            />}></Route>
            :
            <Route path='/' element={
              <h1>
                Bienvenido
              </h1>
            }></Route>
          }
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
