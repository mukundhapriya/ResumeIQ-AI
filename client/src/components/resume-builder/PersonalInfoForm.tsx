import type { UseFormRegister } from "react-hook-form";

type ResumeFormData = {
  title: string;

  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
};

interface PersonalInfoFormProps {
  register: UseFormRegister<ResumeFormData>;
}

const PersonalInfoForm = ({
  register,
}: PersonalInfoFormProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">
        Personal Information
      </h2>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Full Name
        </label>

        <input
          type="text"
          placeholder="John Doe"
          {...register("personalInfo.fullName")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="john@example.com"
          {...register("personalInfo.email")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Phone
        </label>

        <input
          type="text"
          placeholder="+91 9876543210"
          {...register("personalInfo.phone")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Location
        </label>

        <input
          type="text"
          placeholder="Hyderabad, India"
          {...register("personalInfo.location")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          LinkedIn
        </label>

        <input
          type="url"
          placeholder="https://linkedin.com/in/..."
          {...register("personalInfo.linkedin")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          GitHub
        </label>

        <input
          type="url"
          placeholder="https://github.com/..."
          {...register("personalInfo.github")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Portfolio
        </label>

        <input
          type="url"
          placeholder="https://yourportfolio.com"
          {...register("personalInfo.portfolio")}
          className="w-full rounded-lg border p-3"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;