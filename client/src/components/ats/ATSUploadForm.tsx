import { useRef, useState } from "react";
import {
  UploadCloud,
  FileText,
  Trash2,
} from "lucide-react";
import toast from "react-hot-toast";

import { analyzeResume } from "../../services/ats.service";
import type { ATSAnalysisResult } from "../../types/ats";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

interface Props {
  onAnalysisComplete: (data: ATSAnalysisResult) => void;
}

const ATSUploadForm = ({
  onAnalysisComplete,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] =
    useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateFile = (selectedFile: File) => {
  if (selectedFile.type !== "application/pdf") {
    const message = "Only PDF files are allowed.";
    setError(message);
    toast.error(message);
    return false;
  }

  if (selectedFile.size > MAX_FILE_SIZE) {
    const message = "File size must be less than 5 MB.";
    setError(message);
    toast.error(message);
    return false;
  }

  setError("");
  return true;
};

  const handleFile = (selectedFile: File) => {
    if (!validateFile(selectedFile)) return;

    setFile(selectedFile);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.length) return;

    handleFile(e.target.files[0]);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();

    if (!e.dataTransfer.files.length) return;

    handleFile(e.dataTransfer.files[0]);
  };

  const handleAnalyze = async () => {
  if (!file) {
    toast.error("Please upload a resume.");
    return;
  }

  if (!jobDescription.trim()) {
    toast.error("Please enter the job description.");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const data = await analyzeResume(
      file,
      jobDescription
    );

    onAnalysisComplete(data);

    toast.success("Resume analyzed successfully!");
  } catch (err: any) {
    const message =
      err?.response?.data?.message ||
      "Failed to analyze resume.";

    setError(message);
    toast.error(message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      {/* Upload Area */}
      <div
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="cursor-pointer rounded-xl border-2 border-dashed border-blue-300 p-10 transition hover:border-blue-500 hover:bg-blue-50"
      >
        <div className="flex flex-col items-center">
          <UploadCloud
            className="text-blue-600"
            size={60}
          />

          <h2 className="mt-5 text-2xl font-semibold">
            Drag & Drop Resume
          </h2>

          <p className="mt-2 text-slate-500">
            or click to browse your computer
          </p>

          <p className="mt-4 text-sm text-slate-400">
            PDF • Maximum 5 MB
          </p>

          <input
            ref={inputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-lg bg-red-100 p-3 text-red-700">
          {error}
        </div>
      )}

      {/* Selected File */}
      {file && (
        <div className="mt-6 flex items-center justify-between rounded-xl border p-4">
          <div className="flex items-center gap-3">
            <FileText
              className="text-red-500"
              size={32}
            />

            <div>
              <h3 className="font-semibold">
                {file.name}
              </h3>

              <p className="text-sm text-slate-500">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setFile(null)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 />
          </button>
        </div>
      )}

      {/* Job Description */}
      <div className="mt-8">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Job Description
        </label>

        <textarea
          rows={8}
          value={jobDescription}
          onChange={(e) =>
            setJobDescription(e.target.value)
          }
          placeholder="Paste the complete job description here..."
          className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Analyze Button */}
      <button
        onClick={handleAnalyze}
        disabled={
          !file ||
          !jobDescription.trim() ||
          loading
        }
        className={`mt-8 w-full rounded-xl py-3 font-semibold transition ${
          file &&
          jobDescription.trim() &&
          !loading
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "cursor-not-allowed bg-slate-300 text-slate-500"
        }`}
      >
        {loading
          ? "Analyzing Resume..."
          : "Analyze Resume"}
      </button>
    </div>
  );
};

export default ATSUploadForm;