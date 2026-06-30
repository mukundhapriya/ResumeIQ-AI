import { useFieldArray, type Control, type UseFormRegister } from "react-hook-form";

import type { ResumeFormData } from "../../types/resume-form";

interface Props {
  control: Control<ResumeFormData>;
  register: UseFormRegister<ResumeFormData>;
}

const EducationForm = ({
  control,
  register,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  return (
    <div className="rounded-lg border p-5 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Education
        </h2>

        <button
          type="button"
          onClick={() =>
            append({
  id: crypto.randomUUID(),
  institution: "",
  degree: "",
  fieldOfStudy: "",
  startDate: "",
  endDate: "",
  cgpa: "",
})
          }
          className="rounded-lg bg-green-600 px-4 py-2 text-white"
        >
          + Add Education
        </button>
      </div>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="space-y-4 rounded-lg border p-4"
        >
          <input
            placeholder="Institution"
            {...register(
              `education.${index}.institution`
            )}
            className="w-full rounded border p-3"
          />

          <input
            placeholder="Degree"
            {...register(
              `education.${index}.degree`
            )}
            className="w-full rounded border p-3"
          />

          <input
            placeholder="Field of Study"
            {...register(
              `education.${index}.fieldOfStudy`
            )}
            className="w-full rounded border p-3"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              {...register(
                `education.${index}.startDate`
              )}
              className="rounded border p-3"
            />

            <input
              type="date"
              {...register(
                `education.${index}.endDate`
              )}
              className="rounded border p-3"
            />
          </div>

          <input
            placeholder="CGPA"
            {...register(
              `education.${index}.cgpa`
            )}
            className="w-full rounded border p-3"
          />

          <button
            type="button"
            onClick={() => remove(index)}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default EducationForm;