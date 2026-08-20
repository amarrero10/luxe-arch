import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service - Luxe Arch",
  description: "The terms that govern your use of the Luxe Arch site.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service" updated="August 20, 2026">
      <section>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using the Luxe Arch website, you agree to be bound by these Terms of
          Service. If you do not agree, please do not use the site.
        </p>
      </section>

      <section>
        <h2>Use of the Site</h2>
        <p>
          You may browse listings, contact agents, and use the site&rsquo;s features for
          personal, non-commercial purposes. You agree not to misuse the site, including
          attempting to access accounts or data that don&rsquo;t belong to you, or submitting
          false or misleading information through our forms.
        </p>
      </section>

      <section>
        <h2>Listing Information</h2>
        <p>
          Property details, pricing, and availability are provided by listing agents and are
          subject to change without notice. We make reasonable efforts to keep listings accurate
          and current, but we do not guarantee the accuracy, completeness, or availability of any
          listing. Always confirm details directly with the listing agent.
        </p>
      </section>

      <section>
        <h2>Agent Accounts</h2>
        <p>
          Agent accounts are provided to authorized real estate professionals for the purpose of
          managing their own listings and inquiries. You are responsible for maintaining the
          confidentiality of your account credentials and for all activity under your account.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          The Luxe Arch name, logo, and site design are the property of Luxe Arch Global Realty.
          Property photos and descriptions are the property of the respective listing agent or
          their client.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          The site is provided &ldquo;as is&rdquo; without warranties of any kind. Luxe Arch is
          not liable for any damages arising from your use of the site or reliance on information
          found on it.
        </p>
      </section>

      <section>
        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after changes
          are posted constitutes acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>Questions about these terms can be sent to legal@luxearch.demo.</p>
      </section>
    </LegalPageLayout>
  );
}
