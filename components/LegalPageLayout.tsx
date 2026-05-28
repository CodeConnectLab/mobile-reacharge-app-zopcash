import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LegalPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="font-heading mb-8 text-3xl font-bold text-brand-text-primary sm:text-4xl">
            {title}
          </h1>
          <div className="legal-prose">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
