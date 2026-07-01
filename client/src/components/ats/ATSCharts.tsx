import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

interface Props {
  analysis: any;
}

const COLORS = ["#22c55e", "#ef4444"];

const ATSCharts = ({ analysis }: Props) => {
  const pieData = [
    {
      name: "Matched",
      value: analysis.matchedKeywords.length,
    },
    {
      name: "Missing",
      value: analysis.missingKeywords.length,
    },
  ];

  const barData = [
    {
      name: "ATS",
      score: analysis.atsScore,
    },
    {
      name: "Weighted",
      score: analysis.weightedATS.weightedATSScore,
    },
    {
      name: "Education",
      score: analysis.educationMatch.score,
    },
    {
      name: "Experience",
      score: analysis.experienceMatch.score,
    },
  ];

  return (
    <div className="mt-10 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-8 text-2xl font-bold text-slate-900">
        ATS Analytics
      </h2>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Pie Chart */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-center">
            Keyword Match
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-center">
            Score Comparison
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis domain={[0, 100]} />

              <Tooltip />

              <Bar
                dataKey="score"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10">
        <h3 className="mb-3 text-lg font-semibold">
          Overall Weighted ATS Score
        </h3>

        <div className="h-4 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-700"
            style={{
              width: `${analysis.weightedATS.weightedATSScore}%`,
            }}
          />
        </div>

        <p className="mt-2 text-right text-sm font-semibold text-slate-700">
          {analysis.weightedATS.weightedATSScore}%
        </p>
      </div>
    </div>
  );
};

export default ATSCharts;