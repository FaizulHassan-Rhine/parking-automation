import logo from './logo.svg';
import './App.css';
import Login from './components/LoginForm/Login';
import { users } from './components/FakeData/FakeData';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
