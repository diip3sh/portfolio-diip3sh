"use client";

export function HeaderTag({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="pr-1 align-text-top font-italic text-base tracking-tight text-black/20">
        &lt;header&gt;
      </span>
      {children}
      <span className="pl-2 align-text-bottom font-italic text-base tracking-tight text-black/20">
        &lt;/header&gt;
      </span>
    </>
  );
}

export function SpanTag({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="pr-1 align-text-top font-italic text-base tracking-tight text-black/20">
        &lt;span&gt;
      </span>
      {children}
      <span className="pl-2 align-text-bottom font-italic text-base tracking-tight text-black/20">
        &lt;/span&gt;
      </span>
    </>
  );
}

export function ParagraphTag({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="pr-1 align-text-top font-italic text-sm tracking-tight text-black/20">
        &lt;p&gt;
      </span>
      {children}
      <span className="pl-2 align-text-bottom font-italic text-sm tracking-tight text-black/20">
        &lt;/p&gt;
      </span>
    </>
  );
}

export function LinkTag({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="pr-1 align-text-top font-italic text-base tracking-tight text-black/20">
        &lt;link&gt;
      </span>
      {children}
      <span className="pl-2 align-text-bottom font-italic text-base tracking-tight text-black/20">
        &lt;/link&gt;
      </span>
    </>
  );
}

export function H2Tag({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="pr-1 align-text-top font-italic text-base tracking-tight text-black/20">
        &lt;h2&gt;
      </span>
      {children}
      <span className="pl-2 align-text-bottom font-italic text-base tracking-tight text-black/20">
        &lt;/h2&gt;
      </span>
    </>
  );
}
