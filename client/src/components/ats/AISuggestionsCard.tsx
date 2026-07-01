import { Bot, CheckCircle2, AlertTriangle } from "lucide-react";

interface Props {
  analysis: any;
}

const AISuggestionsCard = ({ analysis }: Props) => {
  const ai = analysis.aiSuggestions;

  const priorityColor =
    ai.priority.toLowerCase().includes("high")
      ? "bg-red-100 text-red-700"
      : ai.priority.toLowerCase().includes("medium")
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <div className="mt-10 rounded-2xl bg-white p-8 shadow-md">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          <Bot className="text-blue-600" size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            AI Resume Suggestions
          </h2>

          <p className="text-slate-500">
            Generated using Google Gemini AI
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8 rounded-xl bg-slate-50 p-5">
        <h3 className="mb-3 text-lg font-semibold">
          Summary
        </h3>

        <p className="leading-7 text-slate-600">
          {ai.summary}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Strengths */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-green-700">
            <CheckCircle2 size={20} />
            Strengths
          </h3>

          <ul className="space-y-3">
            {ai.strengths.map(
              (item: string, index: number) => (
                <li
                  key={index}
                  className="rounded-lg bg-green-50 p-3 text-green-700"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Improvements */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-700">
            <AlertTriangle size={20} />
            Improvements
          </h3>

          <ul className="space-y-3">
            {ai.improvements.map(
              (item: string, index: number) => (
                <li
                  key={index}
                  className="rounded-lg bg-red-50 p-3 text-red-700"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Priority */}
      <div className="mt-8">
        <h3 className="mb-3 text-lg font-semibold">
          Priority
        </h3>

        <span
          className={`rounded-full px-4 py-2 font-medium ${priorityColor}`}
        >
          {ai.priority}
        </span>
      </div>
    </div>
  );
};

export default AISuggestionsCard;