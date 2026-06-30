import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllResumes,
  createResume,
} from "../services/resume.service";
import type { Resume } from "../services/resume.service";

const MyResumesPage = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const data = await getAllResumes();
        setResumes(data);
      } catch (error) {
        console.error("Failed to fetch resumes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const handleCreateResume = async () => {
    try {
      const resume = await createResume("Untitled Resume", {});

      navigate(`/dashboard/resumes/${resume.id}`);
    } catch (error) {
      console.error("Failed to create resume:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 text-lg font-medium">
        Loading resumes...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Resumes</h1>

        <button
          onClick={handleCreateResume}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Create Resume
        </button>
      </div>

      {resumes.length === 0 ? (
        <div className="border rounded-lg p-10 text-center text-gray-500">
          No resumes found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{resume.title}</h2>

              <p className="text-sm text-gray-500 mt-2">
                Created on{" "}
                {new Date(resume.createdAt).toLocaleDateString()}
              </p>

              <Link
                to={`/dashboard/resumes/${resume.id}`}
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                Open Resume →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyResumesPage;