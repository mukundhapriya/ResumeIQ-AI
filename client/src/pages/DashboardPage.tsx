import { useNavigate } from "react-router-dom";
import {
  FileText,
  ScanSearch,
  Sparkles,
  ArrowRight,
} from "lucide-react";

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
              className="group cursor-pointer rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <FileText size={42} />
                <ArrowRight className="transition-transform group-hover:translate-x-2" />
              </div>

              <h2 className="mt-8 text-2xl font-bold">
                Resume Builder
              </h2>

              <p className="mt-3 text-blue-100">
                Create professional ATS-friendly resumes with live preview and
                AI assistance.
              </p>
            </div>

            {/* ATS Analyzer */}
            <div
              onClick={() => navigate("/dashboard/ats-analyzer")}
              className="group cursor-pointer rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <ScanSearch size={42} />
                <ArrowRight className="transition-transform group-hover:translate-x-2" />
              </div>

              <h2 className="mt-8 text-2xl font-bold">
                ATS Analyzer
              </h2>

              <p className="mt-3 text-emerald-100">
                Upload your resume and receive ATS score, skill gap analysis,
                and AI-powered suggestions.
              </p>
            </div>

            {/* AI Tools */}
            <div className="group rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-6 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center justify-between">
                <Sparkles size={42} />
                <ArrowRight className="opacity-50" />
              </div>

              <h2 className="mt-8 text-2xl font-bold">
                AI Tools
              </h2>

              <p className="mt-3 text-violet-100">
                Enhance resumes with Google Gemini AI, optimize content, and
                generate professional improvements.
              </p>

              <span className="mt-5 inline-block rounded-full bg-white/20 px-3 py-1 text-sm">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;