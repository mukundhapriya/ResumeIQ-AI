import { pdf } from "@react-pdf/renderer";

import ResumePDF from "../pdf/ResumePDF";

import type { ResumeFormData } from "../types/resume-form";

export const exportResumeToPDF = async (
  data: ResumeFormData
) => {
  const blob = await pdf(
    <ResumePDF
      title={data.title}
      personalInfo={data.personalInfo}
      summary={data.summary}
      education={data.education}
      experience={data.experience}
      skills={data.skills}
      projects={data.projects}
      certifications={data.certifications}
      achievements={data.achievements}
    />
  ).toBlob();

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${data.title || "resume"}.pdf`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};