import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import TermsContent from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions | Zopcash",
  description:
    "Read the Terms & Conditions for using the Zopcash platform, including user account terms, payment arrangements, and service policies.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions">
      <TermsContent />
    </LegalPageLayout>
  );
}
