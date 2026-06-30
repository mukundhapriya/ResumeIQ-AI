import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  getResumeById,
  updateResume,
} from "../services/resume.service";
import { exportResumeToPDF } from "../services/pdf.service";

import PersonalInfoForm from "../components/resume-builder/PersonalInfoForm";
import SummaryForm from "../components/resume-builder/SummaryForm";
import EducationForm from "../components/resume-builder/EducationForm";
import ExperienceForm from "../components/resume-builder/ExperienceForm";
import SkillsForm from "../components/resume-builder/SkillsForm";
import ProjectsForm from "../components/resume-builder/ProjectsForm";
import CertificationsForm from "../components/resume-builder/CertificationsForm";
import AchievementsForm from "../components/resume-builder/AchievementsForm";
import ResumePreview from "../components/resume-preview/ResumePreview";

import type { ResumeFormData } from "../types/resume-form";
import type { Resume } from "../types/resume";

const ResumeBuilderPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resume, setResume] = useState<Resume | null>(null);


  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
  } = useForm<ResumeFormData>({
    defaultValues: {
      title: "",
      personalInfo: {
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        portfolio: "",
      },
      summary: "",
      education: [],
      experience: [],
      skills: [],
      projects: [],
      certifications: [],
      achievements: [],
    },
  });

  const title = watch("title");
  const personalInfo = watch("personalInfo");
  const summary = watch("summary");
  const education = watch("education") ?? [];
  const experience = watch("experience") ?? [];
  const skills = watch("skills") ?? [];
  const projects = watch("projects") ?? [];
  const certifications = watch("certifications") ?? [];
  const achievements = watch("achievements") ?? [];

  useEffect(() => {
    const fetchResume = async () => {
      try {
        if (!id) return;

        const response = await getResumeById(id);

        setResume(response.resume);

        reset({
          title: response.resume.title,

          personalInfo: {
            fullName:
              response.resume.content?.personalInfo?.fullName ?? "",
            email:
              response.resume.content?.personalInfo?.email ?? "",
            phone:
              response.resume.content?.personalInfo?.phone ?? "",
            location:
              response.resume.content?.personalInfo?.location ?? "",
            linkedin:
              response.resume.content?.personalInfo?.linkedin ?? "",
            github:
              response.resume.content?.personalInfo?.github ?? "",
            portfolio:
              response.resume.content?.personalInfo?.portfolio ?? "",
          },

          summary: response.resume.content?.summary ?? "",
          education: response.resume.content?.education ?? [],
          experience: response.resume.content?.experience ?? [],
          skills: response.resume.content?.skills ?? [],
          projects: response.resume.content?.projects ?? [],
          certifications:
            response.resume.content?.certifications ?? [],
          achievements:
            response.resume.content?.achievements ?? [],
        });
      } catch (error) {
        console.error("Failed to load resume:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [id, reset]);

  const handleSaveResume = async (
    data: ResumeFormData
  ) => {
    if (!id || !resume) return;

    try {
      setSaving(true);

      await updateResume(id, data.title, {
        personalInfo: data.personalInfo,
        summary: data.summary,
        education: data.education,
        experience: data.experience,
        skills: data.skills,
        projects: data.projects,
        certifications: data.certifications,
        achievements: data.achievements,
      });

      setResume({
        ...resume,
        title: data.title,
        content: {
          ...resume.content,
          personalInfo: data.personalInfo,
          summary: data.summary,
          education: data.education,
          experience: data.experience,
          skills: data.skills,
          projects: data.projects,
          certifications: data.certifications,
          achievements: data.achievements,
        },
      });

      alert("Resume saved successfully!");
    } catch (error) {
      console.error("Failed to save resume:", error);
      alert("Failed to save resume.");
    } finally {
      setSaving(false);
    }
  };

  const handleExportPDF = async () => {
  try {
    await exportResumeToPDF({
      title,
      personalInfo,
      summary,
      education,
      experience,
      skills,
      projects,
      certifications,
      achievements,
    });
  } catch (error) {
    console.error("PDF export failed:", error);
    alert("Failed to export PDF.");
  }
};
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-lg font-semibold">
        Loading Resume...
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="flex h-screen items-center justify-center text-lg font-semibold">
        Resume not found.
      </div>
    );
  }
    return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {/* Left Panel */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h1 className="text-2xl font-bold">
            Resume Builder
          </h1>

          <div className="mt-6 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Resume Title
              </label>

              <input
                type="text"
                {...register("title")}
                className="w-full rounded-lg border p-3"
              />
            </div>

            <PersonalInfoForm register={register} />

            <SummaryForm register={register} />

            <EducationForm
              control={control}
              register={register}
            />

            <ExperienceForm
              control={control}
              register={register}
            />

            <ProjectsForm
              control={control}
              register={register}
            />

            <CertificationsForm
              control={control}
              register={register}
            />

            <AchievementsForm
              control={control}
              register={register}
            />

            <SkillsForm
              control={control}
              register={register}
            />

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={handleSubmit(handleSaveResume)}
                disabled={saving}
                className="rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Resume"}
              </button>

              <button
                type="button"
                onClick={handleExportPDF}
                className="rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Export PDF
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <ResumePreview
          title={title}
          personalInfo={personalInfo}
          summary={summary}
          education={education}
          experience={experience}
          skills={skills}
          projects={projects}
          certifications={certifications}
          achievements={achievements}
        />
      </div>
    </div>
  );
};

export default ResumeBuilderPage;