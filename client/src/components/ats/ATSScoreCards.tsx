import {
  Target,
  Search,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";

interface Props {
  analysis: any;
}

const ATSScoreCards = ({ analysis }: Props) => {
  const cards = [
    {
      title: "ATS Score",
      value: `${analysis.atsScore}%`,
      icon: Target,
      color: "bg-blue-500",
    },
    {
      title: "Keyword Match",
      value: `${analysis.keywordMatch}%`,
      icon: Search,
      color: "bg-purple-500",
    },
    {
      title: "Weighted ATS",
      value: `${analysis.weightedATS.weightedATSScore}%`,
      icon: Award,
      color: "bg-green-500",
    },
    {
      title: "Education",
      value: `${analysis.educationMatch.score}%`,
      icon: GraduationCap,
      color: "bg-orange-500",
    },
    {
      title: "Experience",
      value: `${analysis.experienceMatch.score}%`,
      icon: Briefcase,
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`inline-flex rounded-xl p-3 text-white ${card.color}`}
            >
              <Icon size={24} />
            </div>

            <h3 className="mt-5 text-sm font-medium text-slate-500">
              {card.title}
            </h3>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {card.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ATSScoreCards;