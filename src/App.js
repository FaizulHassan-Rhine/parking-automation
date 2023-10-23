import logo from './logo.svg';
import './App.css';
import Login from './components/LoginForm/Login';
import { users } from './components/FakeData/FakeData';
import { Route, Routes } from 'react-router';
import Search from './components/Search/Search';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
