import DownloadReportButton from "./DownloadReportButton";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

interface Props {
  analysis: any;
}

const ATSOverview = ({ analysis }: Props) => {
  const score =
    analysis.weightedATS.weightedATSScore;

  const status =
    score >= 80
      ? {
          icon: CheckCircle2,
          title: "Excellent ATS Match",
          color: "text-green-600",
          bg: "bg-green-100",
        }
      : score >= 60
      ? {
          icon: AlertTriangle,
          title: "Moderate ATS Match",
          color: "text-yellow-600",
          bg: "bg-yellow-100",
        }
      : {
          icon: XCircle,
          title: "Needs Improvement",
          color: "text-red-600",
          bg: "bg-red-100",
        };

  const Icon = status.icon;

  return (
    <div className="mt-10 rounded-2xl bg-white p-8 shadow-md">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            Resume Analysis Completed
          </h2>

          <p className="mt-2 text-slate-500">
            Here's how your resume compares with the job description.
          </p>
        </div>

        <div
          className={`flex items-center gap-3 rounded-xl px-5 py-3 ${status.bg}`}
        >
          <Icon
            className={status.color}
            size={28}
          />

          <span
            className={`font-semibold ${status.color}`}
          >
            {status.title}
          </span>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
  <DownloadReportButton analysis={analysis} />
</div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-slate-500">
            Overall Score
          </p>

          <h2 className="mt-2 text-5xl font-bold">
            {score}%
          </h2>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-slate-500">
            Matched Keywords
          </p>

          <h2 className="mt-2 text-5xl font-bold text-green-600">
            {analysis.matchedKeywords.length}
          </h2>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-slate-500">
            Missing Keywords
          </p>

          <h2 className="mt-2 text-5xl font-bold text-red-600">
            {analysis.missingKeywords.length}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ATSOverview;