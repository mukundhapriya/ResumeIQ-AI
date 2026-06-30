import {
  useFieldArray,
  type Control,
  type UseFormRegister,
} from "react-hook-form";

import type { ResumeFormData } from "../../types/resume-form";

interface Props {
  control: Control<ResumeFormData>;
  register: UseFormRegister<ResumeFormData>;
}

const ExperienceForm = ({
  control,
  register,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  return (
    <div className="space-y-5 rounded-lg border p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Experience
        </h2>

        <button
          type="button"
          onClick={() =>
            append({
              id: crypto.randomUUID(),
              company: "",
              jobTitle: "",
              startDate: "",
              endDate: "",
              description: "",
            })
          }
          className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Add Experience
        </button>
      </div>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="space-y-4 rounded-lg border p-4"
        >
          <input
            placeholder="Company"
            {...register(
              `experience.${index}.company`
            )}
            className="w-full rounded border p-3"
          />

          <input
            placeholder="Position"
            {...register(
              `experience.${index}.jobTitle`
            )}
            className="w-full rounded border p-3"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              {...register(
                `experience.${index}.startDate`
              )}
              className="rounded border p-3"
            />

            <input
              type="date"
              {...register(
                `experience.${index}.endDate`
              )}
              className="rounded border p-3"
            />
          </div>

          <textarea
            rows={4}
            placeholder="Describe your responsibilities..."
            {...register(
              `experience.${index}.description`
            )}
            className="w-full rounded border p-3"
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

export default ExperienceForm;