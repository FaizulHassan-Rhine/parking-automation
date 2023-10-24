import logo from './logo.svg';
import './App.css';
import Login from './components/LoginForm/Login';
import { Route, Routes } from 'react-router';
import { createContext, useState } from 'react';
import Search from './components/Search/Search';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Report from './components/Report/Report';
import ReportDownload from './components/ReportDownload/ReportDownload';
import DataTable from './components/DataTable/DataTable';
import DetailsSearch from './components/DetailsSearch/DetailsSearch';

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
          <Route path="/report-download" element={<ReportDownload />} />
          <Route path="/data" element={<DataTable />} />
          <Route path="/details-search" element={<DetailsSearch />} />
        </Routes>
      </userContextManager.Provider>
    </div>
  );
}

export default App;
