import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import PrivacyContent from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Zopcash",
  description:
    "Learn how Zopcash collects, uses, stores, and protects your personal and sensitive information on our platform.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <PrivacyContent />
    </LegalPageLayout>
  );
}
