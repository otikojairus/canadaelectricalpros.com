import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/pages";

type DispatchSidebarProps = {
  place: string;
  keyword?: string;
  referenceCode?: string;
};

export function DispatchSidebar({ place, keyword, referenceCode }: DispatchSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-28 flex flex-col gap-4">
      <div className="rounded-2xl bg-surface-container-high/90 backdrop-blur-xl p-6 border border-secondary/25 shadow-[0_0_24px_-4px_rgba(14,165,233,0.15)]">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/8">
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Dispatch panel</span>
          <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" aria-label="Live" />
        </div>

        <dl className="space-y-3 font-mono text-xs mb-6">
          <div className="flex justify-between gap-2">
            <dt className="text-on-surface-variant">Area</dt>
            <dd className="text-on-surface text-right">{place}</dd>
          </div>
          {keyword && (
            <div className="flex justify-between gap-2">
              <dt className="text-on-surface-variant">Scope</dt>
              <dd className="text-secondary text-right max-w-[60%]">{keyword}</dd>
            </div>
          )}
          <div className="flex justify-between gap-2">
            <dt className="text-on-surface-variant">Crew class</dt>
            <dd className="text-primary">Red Seal</dd>
          </div>
          {referenceCode && (
            <div className="flex justify-between gap-2">
              <dt className="text-on-surface-variant">Ref</dt>
              <dd className="text-on-surface font-bold">{referenceCode}</dd>
            </div>
          )}
        </dl>

        <a className="btn-dispatch" href={`tel:${PHONE_E164}`}>
          <span className="label">Call dispatch</span>
          <span className="value">{PHONE_DISPLAY}</span>
        </a>
        <p className="text-[10px] font-mono text-on-surface-variant/80 text-center mt-3 leading-relaxed">
          Share panel photos, voltage, and access notes—no web forms.
        </p>
      </div>

      <div className="rounded-xl bg-surface-container p-4 border border-error/30">
        <span className="font-mono text-[10px] text-error uppercase tracking-widest font-bold">Emergency</span>
        <p className="text-sm text-on-surface-variant mt-1">Power loss, arcing, or life-safety lighting—say emergency when you call.</p>
      </div>
    </aside>
  );
}
