import type {
  Control,
  UseFormRegister,
} from "react-hook-form";

import type { ResumeFormData } from "../../types/resume-form";

interface Props {
  control: Control<ResumeFormData>;
  register: UseFormRegister<ResumeFormData>;
  achievementIndex: number;
  onRemove: () => void;
}

const AchievementItem = ({
  register,
  achievementIndex,
  onRemove,
}: Props) => {
  return (
    <div className="space-y-4 rounded-lg border p-4">
      <input
        type="text"
        placeholder="Achievement Title"
        {...register(
          `achievements.${achievementIndex}.title`
        )}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="text"
        placeholder="Organization"
        {...register(
          `achievements.${achievementIndex}.organization`
        )}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="month"
        {...register(
          `achievements.${achievementIndex}.date`
        )}
        className="w-full rounded-lg border p-3"
      />

      <textarea
        rows={4}
        placeholder="Achievement Description"
        {...register(
          `achievements.${achievementIndex}.description`
        )}
        className="w-full rounded-lg border p-3"
      />

      <button
        type="button"
        onClick={onRemove}
        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Remove Achievement
      </button>
    </div>
  );
};

export default AchievementItem;