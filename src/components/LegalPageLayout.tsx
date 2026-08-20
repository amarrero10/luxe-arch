import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPageLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header active="" />
      </div>

      <main className="grow w-full max-w-3xl mx-auto px-6 md:px-margin-desktop py-12 md:py-20 flex flex-col gap-stack-lg">
        <div className="border-b border-outline-variant pb-4">
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">{title}</h1>
          <p className="text-body-md text-on-surface-variant mt-2">Last updated: {updated}</p>
        </div>

        <div className="flex flex-col gap-stack-lg text-body-lg text-on-surface-variant leading-relaxed [&_h2]:text-headline-md [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1 [&_p+p]:mt-4 [&_p+ul]:mt-2 [&_ul+p]:mt-2">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
