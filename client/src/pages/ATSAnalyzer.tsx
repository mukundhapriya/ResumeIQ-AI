import { useState } from "react";

import ATSUploadForm from "../components/ats/ATSUploadForm";
import ATSScoreCards from "../components/ats/ATSScoreCards";
import SkillGapCards from "../components/ats/SkillGapCards";
import AISuggestionsCard from "../components/ats/AISuggestionsCard";
import ATSCharts from "../components/ats/ATSCharts";
import ATSOverview from "../components/ats/ATSOverview";
import type { ATSAnalysisResult } from "../types/ats";



const ATSAnalyzer = () => {
  const [analysis, setAnalysis] =
  useState<ATSAnalysisResult | null>(null);

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            ATS Resume Analyzer
          </h1>

          <p className="mt-3 text-slate-600">
            Upload your resume to receive an ATS score,
            identify missing skills, and get AI-powered
            suggestions.
          </p>
        </div>

        {/* Upload Form */}
        <ATSUploadForm
          onAnalysisComplete={setAnalysis}
        />

        {/* ATS Score Cards */}
        {analysis && (
  <>
    <ATSOverview analysis={analysis} />

    <ATSScoreCards analysis={analysis} />

    <ATSCharts analysis={analysis} />

    <SkillGapCards analysis={analysis} />

    <AISuggestionsCard analysis={analysis} />
  </>
)}
      </div>
    </div>
  );
};

export default ATSAnalyzer;