"use client";

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          background: "#ffffff",
          color: "#000000",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>LUXE ARCH</h1>
        <p style={{ fontSize: 16, color: "#4B5563", marginTop: 16, maxWidth: 420 }}>
          Something went wrong loading the site. Please try again.
        </p>
        <button
          type="button"
          onClick={() => retry()}
          style={{
            marginTop: 24,
            background: "#000000",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: 14,
            padding: "14px 32px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
