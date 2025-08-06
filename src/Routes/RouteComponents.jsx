import { Route, Router, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import CreateAccountPage from "../Components/CreateAccountForm";
import HomePage from "../Pages/HomePage";

const RouteApps = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/create" element={<CreateAccountPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
  );
};

export default RouteApps;