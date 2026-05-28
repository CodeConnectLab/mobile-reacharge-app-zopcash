import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import RefundContent from "@/content/legal/refund";

export const metadata: Metadata = {
  title: "Return / Refund Policy | Zopcash",
  description:
    "Understand Zopcash refund eligibility, request process, and processing timelines for failed mobile recharge and utility payment transactions.",
};

export default function RefundPage() {
  return (
    <LegalPageLayout title="Return / Refund Policy">
      <RefundContent />
    </LegalPageLayout>
  );
}
