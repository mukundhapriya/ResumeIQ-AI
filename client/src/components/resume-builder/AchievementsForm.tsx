import { useFieldArray } from "react-hook-form";
import type {
  Control,
  UseFormRegister,
} from "react-hook-form";

import type { ResumeFormData } from "../../types/resume-form";
import AchievementItem from "./AchievementItem";

interface Props {
  control: Control<ResumeFormData>;
  register: UseFormRegister<ResumeFormData>;
}

const AchievementsForm = ({
  control,
  register,
}: Props) => {
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "achievements",
  });

  return (
    <div className="space-y-5 rounded-lg border p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Achievements
        </h2>

        <button
          type="button"
          onClick={() =>
            append({
              id: crypto.randomUUID(),
              title: "",
              organization: "",
              date: "",
              description: "",
            })
          }
          className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Add Achievement
        </button>
      </div>

      {fields.length === 0 && (
        <p className="text-sm text-slate-500">
          No achievements added yet.
        </p>
      )}

      {fields.map((achievement, index) => (
        <AchievementItem
          key={achievement.id}
          control={control}
          register={register}
          achievementIndex={index}
          onRemove={() => remove(index)}
        />
      ))}
    </div>
  );
};

export default AchievementsForm;