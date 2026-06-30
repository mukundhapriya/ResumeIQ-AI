import { useFieldArray } from "react-hook-form";
import type {
  Control,
  UseFormRegister,
} from "react-hook-form";

import type { ResumeFormData } from "../../types/resume-form";
import CertificationItem from "./CertificationItem";

interface Props {
  control: Control<ResumeFormData>;
  register: UseFormRegister<ResumeFormData>;
}

const CertificationsForm = ({
  control,
  register,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "certifications",
  });

  return (
    <div className="space-y-5 rounded-lg border p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Certifications
        </h2>

        <button
          type="button"
          onClick={() =>
            append({
              id: crypto.randomUUID(),
              name: "",
              issuer: "",
              issueDate: "",
              credentialId: "",
              credentialUrl: "",
            })
          }
          className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Add Certification
        </button>
      </div>

      {fields.length === 0 && (
        <p className="text-sm text-slate-500">
          No certifications added yet.
        </p>
      )}

      {fields.map((certification, index) => (
        <CertificationItem
          key={certification.id}
          control={control}
          register={register}
          certificationIndex={index}
          onRemove={() => remove(index)}
        />
      ))}
    </div>
  );
};

export default CertificationsForm;