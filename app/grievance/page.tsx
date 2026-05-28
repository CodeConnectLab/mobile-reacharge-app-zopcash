import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import GrievanceContent from "@/content/legal/grievance";

export const metadata: Metadata = {
  title: "Grievance Policy | Zopcash",
  description:
    "Zopcash grievance redressal mechanism, escalation matrix, and customer support for complaints and fraud reporting.",
};

export default function GrievancePage() {
  return (
    <LegalPageLayout title="Grievance Policy">
      <GrievanceContent />
    </LegalPageLayout>
  );
}
