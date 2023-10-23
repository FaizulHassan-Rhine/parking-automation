import logo from './logo.svg';
import './App.css';
import Login from './components/LoginForm/Login';
import { Route, Routes } from 'react-router';
import { createContext, useState } from 'react';
import Search from './components/Search/Search';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Report from './components/Report/Report';

export const userContextManager = createContext();

function App() {
  const [getUserInfo, setUserInfo] = useState({});

  return (
    <div className="App">
      <userContextManager.Provider value={[getUserInfo, setUserInfo]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search/" element={<PrivateRoute />}>
            <Route path="parking" element={<Search />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </userContextManager.Provider>
    </div>
  );
}

export default App;
