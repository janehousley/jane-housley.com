import PageShell from "@components/PageShell";

export default function Resume() {
  return (
    <PageShell>
      <div className="flex items-baseline justify-between mb-6">
        <h1 className="text-3xl font-light tracking-tight">Resume</h1>
        <a href="/Jane_Housley_Resume.pdf" download className="rainbow-link text-sm uppercase tracking-[0.15em]">
          Download PDF
        </a>
      </div>
      <div
        className="w-full border border-line rounded-sm overflow-hidden bg-paper shadow-sm"
        style={{ aspectRatio: "8.5 / 11" }}
      >
        {/* Ask the browser's PDF viewer to hide the page-thumbnail sidebar and open at 80% */}
        <iframe src="/Jane_Housley_Resume.pdf#navpanes=0&zoom=80" title="Jane Housley Resume" className="w-full h-full" />
      </div>
    </PageShell>
  );
}
