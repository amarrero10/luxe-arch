import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

const title = "Privacy Policy - Luxe Arch";
const description = "How Luxe Arch collects, uses, and protects your information.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="August 20, 2026">
      <section>
        <h2>Information We Collect</h2>
        <p>
          When you submit an inquiry about a property or an agent through our site, we collect
          the information you provide directly: your name, email address, phone number, and any
          message you include. If you create an agent account, we collect your name and email
          address to manage that account.
        </p>
        <p>
          We also automatically collect limited technical information, such as your browser type
          and general usage patterns, to help us keep the site running reliably.
        </p>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to inquiries you submit about a listing or agent</li>
          <li>To let agents manage the listings and inquiries associated with their account</li>
          <li>To maintain the security and proper functioning of the site</li>
        </ul>
      </section>

      <section>
        <h2>How We Share Your Information</h2>
        <p>
          Inquiry information is shared with the agent associated with the listing or profile you
          contacted. We do not sell your personal information, and we do not share it with third
          parties for their own marketing purposes.
        </p>
      </section>

      <section>
        <h2>Data Storage &amp; Security</h2>
        <p>
          Inquiry and account information is stored in a secured database. Listing photos are
          stored with our cloud storage provider. We use industry-standard practices to protect
          this information, but no method of electronic storage is completely secure.
        </p>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p>
          You can request that we delete personal information you&rsquo;ve submitted through an
          inquiry by contacting the agent you reached out to, or by using the contact details
          below.
        </p>
      </section>

      <section>
        <h2>Children&rsquo;s Privacy</h2>
        <p>
          This site is not directed at children under 13, and we do not knowingly collect
          information from them.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be posted on this page with
          an updated date.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>Questions about this policy can be sent to privacy@luxearch.demo.</p>
      </section>
    </LegalPageLayout>
  );
}
