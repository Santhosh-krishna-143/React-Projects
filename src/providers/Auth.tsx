import { Outlet } from "react-router";

const AuthProvider = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthProvider;
