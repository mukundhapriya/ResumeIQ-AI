import { useFieldArray } from "react-hook-form";
import type {
  Control,
  UseFormRegister,
} from "react-hook-form";

import type { ResumeFormData } from "../../types/resume-form";

interface Props {
  control: Control<ResumeFormData>;
  register: UseFormRegister<ResumeFormData>;
  projectIndex: number;
  onRemove: () => void;
}

const ProjectItem = ({
  control,
  register,
  projectIndex,
  onRemove,
}: Props) => {
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `projects.${projectIndex}.technologies`,
  });

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <input
        type="text"
        placeholder="Project Title"
        {...register(`projects.${projectIndex}.title`)}
        className="w-full rounded-lg border p-3"
      />

      <textarea
        rows={4}
        placeholder="Project Description"
        {...register(
          `projects.${projectIndex}.description`
        )}
        className="w-full rounded-lg border p-3"
      />

      <div className="space-y-3 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            Technologies
          </h3>

          <button
            type="button"
            onClick={() =>
              append({
                id: crypto.randomUUID(),
                name: "",
              })
            }
            className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
          >
            + Add Technology
          </button>
        </div>

        {fields.length === 0 && (
          <p className="text-sm text-slate-500">
            No technologies added.
          </p>
        )}

        {fields.map((field, techIndex) => (
          <div
            key={field.id}
            className="flex gap-3"
          >
            <input
              type="text"
              placeholder="React"
              {...register(
                `projects.${projectIndex}.technologies.${techIndex}.name`
              )}
              className="flex-1 rounded-lg border p-3"
            />

            <button
              type="button"
              onClick={() => remove(techIndex)}
              className="rounded bg-red-600 px-4 text-white hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}

      </div>

      <input
        type="url"
        placeholder="GitHub Repository URL"
        {...register(`projects.${projectIndex}.github`)}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="url"
        placeholder="Live Demo URL"
        {...register(
          `projects.${projectIndex}.liveDemo`
        )}
        className="w-full rounded-lg border p-3"
      />

      <button
        type="button"
        onClick={onRemove}
        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Remove Project
      </button>
    </div>
  );
};

export default ProjectItem;