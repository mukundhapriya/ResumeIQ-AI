import { useFieldArray } from "react-hook-form";
import type {
  Control,
  UseFormRegister,
} from "react-hook-form";

import type { ResumeFormData } from "../../types/resume-form";

interface Props {
  control: Control<ResumeFormData>;
  register: UseFormRegister<ResumeFormData>;
}

const SkillsForm = ({
  control,
  register,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <div className="space-y-5 rounded-lg border p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Skills
        </h2>

        <button
          type="button"
          onClick={() =>
            append({
              id: crypto.randomUUID(),
              name: "",
            })
          }
          className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Add Skill
        </button>
      </div>

      {fields.length === 0 && (
        <p className="text-sm text-slate-500">
          No skills added yet.
        </p>
      )}

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="flex items-center gap-3 rounded-lg border p-4"
        >
          <input
            type="text"
            placeholder="Skill (Example: React)"
            {...register(`skills.${index}.name`)}
            className="flex-1 rounded border p-3"
          />

          <button
            type="button"
            onClick={() => remove(index)}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default SkillsForm;