import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/userContex';
import Checkout from './pages/Checkout';

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  const { 
    userContex
  } = useContext(UserContext)

  useEffect(() => {
    console.log(userContex);
  }, [userContex])

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
          <Route path='/checkout' Component={Checkout} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
