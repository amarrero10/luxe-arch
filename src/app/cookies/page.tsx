import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy - Luxe Arch",
  description: "How Luxe Arch uses cookies.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" updated="August 20, 2026">
      <section>
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device that help a website function or
          remember information about your visit.
        </p>
      </section>

      <section>
        <h2>How We Use Cookies</h2>
        <p>We keep cookie use to what&rsquo;s necessary to run the site:</p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> Used to keep agents signed in to their dashboard.
            Without these, the agent dashboard won&rsquo;t work.
          </li>
        </ul>
        <p>We do not use advertising or third-party tracking cookies on this site.</p>
      </section>

      <section>
        <h2>Managing Cookies</h2>
        <p>
          Most browsers let you block or delete cookies through their settings. If you block
          essential cookies, some parts of the site, including the agent dashboard, may stop
          working correctly.
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
