import { useFieldArray } from "react-hook-form";
import type {
  Control,
  UseFormRegister,
} from "react-hook-form";

import type { ResumeFormData } from "../../types/resume-form";
import ProjectItem from "./ProjectItem";

interface Props {
  control: Control<ResumeFormData>;
  register: UseFormRegister<ResumeFormData>;
}

const ProjectsForm = ({
  control,
  register,
}: Props) => {
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "projects",
  });

  return (
    <div className="space-y-5 rounded-lg border p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Projects
        </h2>

        <button
          type="button"
          onClick={() =>
            append({
              id: crypto.randomUUID(),
              title: "",
              description: "",
              technologies: [],
              github: "",
              liveDemo: "",
            })
          }
          className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Add Project
        </button>
      </div>

      {fields.length === 0 && (
        <p className="text-sm text-slate-500">
          No projects added yet.
        </p>
      )}

      {fields.map((project, index) => (
        <ProjectItem
          key={project.id}
          control={control}
          register={register}
          projectIndex={index}
          onRemove={() => remove(index)}
        />
      ))}
    </div>
  );
};

export default ProjectsForm;