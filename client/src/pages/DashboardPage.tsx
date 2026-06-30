import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/layout/DashboardNavbar";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <DashboardNavbar />

      <main className="min-h-screen bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Welcome, {user?.name} 👋
          </h1>

          <p className="mt-2 text-slate-600">{user?.email}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Resume Builder */}
            <div
              onClick={() => navigate("/dashboard/resumes")}
              className="cursor-pointer rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold">
                Resume Builder
              </h2>

              <p className="mt-2 text-slate-600">
                Create professional ATS-friendly resumes.
              </p>
            </div>

            {/* ATS Analyzer */}
            <div className="rounded-xl bg-white p-6 shadow">
              <h2 className="text-xl font-semibold">
                ATS Analyzer
              </h2>

              <p className="mt-2 text-slate-600">
                Analyze resume ATS compatibility.
              </p>
            </div>

            {/* AI Tools */}
            <div className="rounded-xl bg-white p-6 shadow">
              <h2 className="text-xl font-semibold">
                AI Tools
              </h2>

              <p className="mt-2 text-slate-600">
                Improve resumes using Google Gemini AI.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;