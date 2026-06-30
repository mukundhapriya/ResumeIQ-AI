import type {
  Control,
  UseFormRegister,
} from "react-hook-form";

import type { ResumeFormData } from "../../types/resume-form";

interface Props {
  control: Control<ResumeFormData>;
  register: UseFormRegister<ResumeFormData>;
  certificationIndex: number;
  onRemove: () => void;
}

const CertificationItem = ({
  register,
  certificationIndex,
  onRemove,
}: Props) => {
  return (
    <div className="space-y-4 rounded-lg border p-4">
      <input
        type="text"
        placeholder="Certification Name"
        {...register(
          `certifications.${certificationIndex}.name`
        )}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="text"
        placeholder="Issuing Organization"
        {...register(
          `certifications.${certificationIndex}.issuer`
        )}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="month"
        {...register(
          `certifications.${certificationIndex}.issueDate`
        )}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="text"
        placeholder="Credential ID"
        {...register(
          `certifications.${certificationIndex}.credentialId`
        )}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="url"
        placeholder="Credential URL"
        {...register(
          `certifications.${certificationIndex}.credentialUrl`
        )}
        className="w-full rounded-lg border p-3"
      />

      <button
        type="button"
        onClick={onRemove}
        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Remove Certification
      </button>
    </div>
  );
};

export default CertificationItem;