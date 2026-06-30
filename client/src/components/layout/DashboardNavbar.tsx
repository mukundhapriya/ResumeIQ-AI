import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const DashboardNavbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-blue-600">
            ResumeIQ AI
          </h1>
          <p className="text-sm text-slate-500">
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;