import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import MyResumesPage from "./pages/MyResumesPage";
import ResumeBuilderPage from "./pages/ResumeBuilderPage";
import ATSAnalyzer from "./pages/ATSAnalyzer";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/resumes"
        element={
          <ProtectedRoute>
            <MyResumesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/resumes/:id"
        element={
          <ProtectedRoute>
            <ResumeBuilderPage />
          </ProtectedRoute>
        }
      />

      {/* ✅ Add here */}
      <Route
        path="/dashboard/ats-analyzer"
        element={
          <ProtectedRoute>
            <ATSAnalyzer />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;