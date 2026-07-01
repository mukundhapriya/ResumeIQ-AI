interface Props {
  analysis: any;
}

const SkillGapCards = ({ analysis }: Props) => {
  const sections = [
    {
      title: "Technical Skills",
      data: analysis.skillGap.technicalSkills,
    },
    {
      title: "Frameworks",
      data: analysis.skillGap.frameworks,
    },
    {
      title: "Backend",
      data: analysis.skillGap.backend,
    },
    {
      title: "Databases",
      data: analysis.skillGap.databases,
    },
    {
      title: "Tools",
      data: analysis.skillGap.tools,
    },
    {
      title: "APIs",
      data: analysis.skillGap.apis,
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Skill Gap Analysis
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl bg-white p-6 shadow-md"
          >
            <h3 className="mb-4 text-lg font-semibold text-slate-800">
              {section.title}
            </h3>

            <div>
              <p className="mb-2 font-medium text-green-600">
                Matched
              </p>

              <div className="flex flex-wrap gap-2">
                {section.data.matched.length > 0 ? (
                  section.data.matched.map(
                    (skill: string) => (
                      <span
                        key={skill}
                        className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
                      >
                        ✓ {skill}
                      </span>
                    )
                  )
                ) : (
                  <span className="text-sm text-slate-400">
                    None
                  </span>
                )}
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-2 font-medium text-red-600">
                Missing
              </p>

              <div className="flex flex-wrap gap-2">
                {section.data.missing.length > 0 ? (
                  section.data.missing.map(
                    (skill: string) => (
                      <span
                        key={skill}
                        className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700"
                      >
                        ✕ {skill}
                      </span>
                    )
                  )
                ) : (
                  <span className="text-sm text-slate-400">
                    None
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGapCards;