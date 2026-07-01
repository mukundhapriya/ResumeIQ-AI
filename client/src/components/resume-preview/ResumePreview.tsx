
 import type {
  Achievement,
  Certification,
  Education,
  Experience,
  PersonalInfo,
  Project,
  Skill,
} from "../../types/resume";

interface Props {
  title: string;
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
}
const ResumePreview = ({
  title,
  personalInfo,
  summary,
  education,
  experience,
  skills,
  projects,
  certifications,
  achievements,
}: Props) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold">
        Live Preview
      </h2>

      <div className="mt-8 min-h-[600px] rounded-lg border bg-slate-50 p-8">
        {/* Resume Title */}
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        {/* Personal Information */}
        <div className="mt-6 space-y-2">
          <h2 className="text-xl font-semibold">
            {personalInfo.fullName}
          </h2>

          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.location}</p>
          <p>{personalInfo.linkedin}</p>
          <p>{personalInfo.github}</p>
          <p>{personalInfo.portfolio}</p>
        </div>

        <hr className="my-6" />

        {/* Summary */}
        <h3 className="text-xl font-semibold">
          Professional Summary
        </h3>

        <p className="mt-3 whitespace-pre-wrap text-slate-700">
          {summary}
        </p>

        <hr className="my-6" />

        {/* Education */}
        <h3 className="text-xl font-semibold">
          Education
        </h3>

        <div className="mt-4 space-y-4">
          {education.length === 0 ? (
            <p className="text-slate-500">
              No education added yet.
            </p>
          ) : (
            education.map((edu) => (
              <div
                key={edu.id}
                className="border-b pb-4"
              >
                <h4 className="font-semibold">
                  {edu.degree}
                </h4>

                <p>{edu.institution}</p>

                <p>{edu.fieldOfStudy}</p>

                <p className="text-slate-500">
                  {edu.startDate} - {edu.endDate}
                </p>

                <p>CGPA: {edu.cgpa}</p>
              </div>
            ))
          )}
        </div>

        <hr className="my-6" />

        {/* Experience */}
        <h3 className="text-xl font-semibold">
          Experience
        </h3>

        <div className="mt-4 space-y-5">
          {experience.length === 0 ? (
            <p className="text-slate-500">
              No experience added yet.
            </p>
          ) : (
            experience.map((exp) => (
              <div
                key={exp.id}
                className="border-b pb-4"
              >
                <h4 className="font-semibold">
                  {exp.jobTitle}
                </h4>

                <p>{exp.company}</p>

                <p className="text-slate-500">
                  {exp.startDate} - {exp.endDate}
                </p>

                <p className="mt-2 whitespace-pre-wrap">
                  {exp.description}
                </p>
              </div>
            ))
          )}
        </div>

        <hr className="my-6" />

        {/* Skills */}
        <h3 className="text-xl font-semibold">
          Skills
        </h3>

        {skills.length === 0 ? (
          <p className="mt-3 text-slate-500">
            No skills added yet.
          </p>
        ) : (
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}

        <hr className="my-6" />

        {/* Projects */}
        <h3 className="text-xl font-semibold">
          Projects
        </h3>

        <div className="mt-4 space-y-5">          {projects.length === 0 ? (
            <p className="text-slate-500">
              No projects added yet.
            </p>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="border-b pb-4"
              >
                <h4 className="font-semibold">
                  {project.title}
                </h4>

                <p className="mt-2 whitespace-pre-wrap">
                  {project.description}
                </p>

                {project.technologies.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.id}
                        className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                )}

                {project.github && (
                  <p className="mt-3 text-blue-600">
                    GitHub: {project.github}
                  </p>
                )}

                {project.liveDemo && (
                  <p className="text-blue-600">
                    Live Demo: {project.liveDemo}
                  </p>
                )}
              </div>
            ))
          )}
        </div>

        <hr className="my-6" />

        {/* Certifications */}
        <h3 className="text-xl font-semibold">
          Certifications
        </h3>

        <div className="mt-4 space-y-5">
          {certifications.length === 0 ? (
            <p className="text-slate-500">
              No certifications added yet.
            </p>
          ) : (
            certifications.map((certification) => (
              <div
                key={certification.id}
                className="border-b pb-4"
              >
                <h4 className="font-semibold">
                  {certification.name}
                </h4>

                <p>{certification.issuer}</p>

                {certification.issueDate && (
                  <p className="text-slate-500">
                    Issued: {certification.issueDate}
                  </p>
                )}

                {certification.credentialId && (
                  <p>
                    Credential ID:{" "}
                    {certification.credentialId}
                  </p>
                )}

                {certification.credentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Credential
                  </a>
                )}
              </div>
            ))
          )}
        </div>

        <hr className="my-6" />

        {/* Achievements */}
        <h3 className="text-xl font-semibold">
          Achievements
        </h3>

        <div className="mt-4 space-y-5">
          {achievements.length === 0 ? (
            <p className="text-slate-500">
              No achievements added yet.
            </p>
          ) : (
            achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="border-b pb-4"
              >
                <h4 className="font-semibold">
                  {achievement.title}
                </h4>

                {achievement.organization && (
                  <p>{achievement.organization}</p>
                )}

                {achievement.date && (
                  <p className="text-slate-500">
                    {achievement.date}
                  </p>
                )}

                {achievement.description && (
                  <p className="mt-2 whitespace-pre-wrap">
                    {achievement.description}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;