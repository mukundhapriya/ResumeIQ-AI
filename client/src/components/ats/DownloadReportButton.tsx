import { Download } from "lucide-react";
import { generateATSReport } from "../../utils/generateATSReport";

interface Props {
  analysis: any;
}

const DownloadReportButton = ({
  analysis,
}: Props) => {
  return (
    <button
      onClick={() => generateATSReport(analysis)}
      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      <Download size={20} />
      Download ATS Report
    </button>
  );
};

export default DownloadReportButton;