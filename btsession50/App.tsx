import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Student from "./components/Student";
import Employee from "./components/Employee";
import Login from "./components/Login";
import Account from "./components/Account";
import PrivateRouter from "./components/PrivateRouter";
import TeamsIndex from "./components/TeamsIndex";
import Team from "./components/Team";
import PrivateRouterB8 from "./components/PrivateRouterB8";
import LazyLoadComp from "./components/LazyLoadComp";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/student/:name" element={<Student />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRouter />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/" element={<TeamsIndex />} />
          <Route path="/:teamId" element={<Team />} />
          <Route path="/admin/*" element={<PrivateRouterB8 />} />
        </Routes>
      </Router>
      <LazyLoadComp />
    </div>
  );
};

export default App;
