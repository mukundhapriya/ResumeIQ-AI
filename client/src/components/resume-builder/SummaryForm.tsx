import type { UseFormRegister } from "react-hook-form";
import type { ResumeContent } from "../../types/resume";

type ResumeFormData = {
  title: string;
  personalInfo: ResumeContent["personalInfo"];
  summary: string;
};

interface SummaryFormProps {
  register: UseFormRegister<ResumeFormData>;
}

const SummaryForm = ({ register }: SummaryFormProps) => {
  return (
    <div className="space-y-4 rounded-lg border p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Professional Summary
        </h2>

        <button
          type="button"
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
        >
          ✨ Generate with AI
        </button>
      </div>

      <textarea
        rows={6}
        placeholder="Write a professional summary..."
        {...register("summary")}
        className="w-full rounded-lg border p-3 resize-none"
      />
    </div>
  );
};

export default SummaryForm;