import logo from './logo.svg';
import './App.css';
import Login from './components/LoginForm/Login';
import { Route, Routes } from 'react-router';
import { createContext, useState } from 'react';
export const userContextManager = createContext();
import Search from './components/Search/Search';
function App() {
  const [getUserInfo, setUserInfo] = useState({});

  return (
    <div className="App">
      <userContextManager.Provider value={[getUserInfo, setUserInfo]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </userContextManager.Provider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
