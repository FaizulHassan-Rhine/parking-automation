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
import FakeData from './components/FakeData/FakeData.json';
import AdminPageTwo from './components/AdminPageTwo/AdminPageTwo';
import AdminPageTwo2 from './components/AdminPageTwo/AdminPageTwo2';
import AdminPageThree from './components/AdminPageThree/AdminPageThree';
import AdminPageThreeV2 from './components/AdminPageThree/AdminPageThreeV2';
import AdminPageFour from './components/AdminPageFour/AdminPageFour';
import AdminPageTwoV3 from './components/AdminPageTwo/AdminPageTwoV3';
import Navbar from './components/Navbar/Navbar';

export const userContextManager = createContext();

function App() {
  const [getUserInfo, setUserInfo] = useState({});

  return (
    <div className="App">
      <userContextManager.Provider value={[getUserInfo, setUserInfo]}>
      <Navbar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/" element={<PrivateRoute />}>
            <Route path="dash" element={<Search />} />
            <Route path="queue-info" element={<AdminPageTwoV3 />} />
            <Route path="gigo" element={<AdminPageFour />} />
            <Route path="stock-info" element={<AdminPageTwoV3 />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/report" element={<Report />} />
          <Route path="/report-download" element={<ReportDownload />} />
          <Route path="/data" element={<DataTable />} />
          <Route path="/details-search" element={<DetailsSearch />} />
          <Route path="/so-detail/:stocklocation" element={<AdminPageThree />} />

          {/* <Route path="/page-two" element={<AdminPageTwo2 />} /> */}
          <Route path="/page-two" element={<AdminPageTwoV3 />} />
          <Route path="/page-three" element={<AdminPageThree />} />
          <Route path="/page-three2" element={<AdminPageThreeV2 />} />
          <Route path="/page-four" element={<AdminPageFour />} />
        </Routes>
      </userContextManager.Provider>
    </div>
  );
}

export default App;
