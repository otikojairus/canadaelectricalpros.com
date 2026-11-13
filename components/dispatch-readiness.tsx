"use client";

import { useMemo, useState } from "react";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/pages";

const facilities = [
  { id: "industrial", label: "Industrial", icon: "🏭" },
  { id: "commercial", label: "Commercial", icon: "🏢" },
  { id: "residential", label: "Residential", icon: "🏠" },
  { id: "ev", label: "EV / Fleet", icon: "⚡" },
] as const;

const scopes = [
  { id: "panel", label: "Panel & service", detail: "Upgrades, replacements, load studies" },
  { id: "install", label: "New installation", detail: "Rough-in, device counts, permitting" },
  { id: "repair", label: "Fault & repair", detail: "Breakers, outlets, emergency lighting" },
  { id: "evdepot", label: "EV infrastructure", detail: "Level 2 / DC, utility coordination" },
] as const;

const voltages = [
  { id: "120/240", label: "120/240V", sub: "Residential" },
  { id: "600V", label: "600V 3Φ", sub: "Commercial" },
  { id: "13.8kV", label: "13.8kV+", sub: "Utility class" },
] as const;

export function DispatchReadiness() {
  const [facility, setFacility] = useState<(typeof facilities)[number]["id"]>("commercial");
  const [scope, setScope] = useState<(typeof scopes)[number]["id"]>("panel");
  const [voltage, setVoltage] = useState<(typeof voltages)[number]["id"]>("600V");

  const readout = useMemo(() => {
    let lead = "7–14 business days";
    let standards = "CSA C22.1 · Provincial ESA";
    if (voltage === "13.8kV") {
      lead = "21–35 business days";
      standards = "IEEE 1584 · Utility coordination";
    } else if (scope === "repair") {
      lead = "Same-day to 48 hr";
      standards = "CEC Part I · Live-work protocol";
    } else if (scope === "evdepot") {
      lead = "14–28 business days";
      standards = "CEC Sect. 86 · NRCAN incentives";
    }
    return { lead, standards };
  }, [scope, voltage]);

  return (
    <section className="py-16 lg:py-24 bg-surface-container-lowest" id="dispatch-readiness">
      <div className="wrap">
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Dispatch readiness</span>
        <h2 className="text-3xl font-bold text-on-surface mt-1 mb-2">Configure scope — call to lock a crew</h2>
        <p className="text-on-surface-variant max-w-2xl mb-8">
          No forms or quote bots. Pick your facility profile below, then call dispatch with the readout our Master Electrician
          uses to stage permits, gear, and crew class.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-surface-container rounded-3xl p-6 lg:p-8 border border-white/8 shadow-2xl">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <fieldset>
              <legend className="font-mono text-xs text-on-surface uppercase font-bold mb-3">1. Facility</legend>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {facilities.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFacility(f.id)}
                    className={`px-3 py-3 rounded-xl text-center flex flex-col items-center gap-1 font-mono text-[10px] font-semibold transition-all ${
                      facility === f.id
                        ? "bg-surface-container-high text-on-surface ring-1 ring-primary/40"
                        : "bg-surface-container-low text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <span className="text-lg">{f.icon}</span>
                    {f.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-mono text-xs text-on-surface uppercase font-bold mb-3">2. Scope</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {scopes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setScope(s.id)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      scope === s.id ? "bg-surface-container-high ring-1 ring-secondary/30" : "bg-surface-container-low hover:bg-surface-container-high"
                    }`}
                  >
                    <span className="font-mono text-xs font-semibold text-on-surface block">{s.label}</span>
                    <span className="text-sm text-on-surface-variant">{s.detail}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-mono text-xs text-on-surface uppercase font-bold mb-3">3. Voltage class</legend>
              <div className="grid grid-cols-3 gap-2">
                {voltages.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVoltage(v.id)}
                    className={`p-3 rounded-xl text-center font-mono transition-all ${
                      voltage === v.id ? "bg-surface-container-high text-primary" : "bg-surface-container-low text-on-surface-variant"
                    }`}
                  >
                    <span className="text-sm font-bold block">{v.label}</span>
                    <span className="text-[10px]">{v.sub}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-high/80 rounded-2xl p-6 border border-white/8">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/8 mb-4">
                <span className="font-mono text-[10px] text-primary uppercase tracking-wider">Crew staging HUD</span>
                <span className="font-mono text-[10px] text-primary bg-primary/20 px-2 py-0.5 rounded">LIVE</span>
              </div>
              <dl className="space-y-3 font-mono text-xs">
                <div className="flex justify-between gap-4">
                  <dt className="text-on-surface-variant">Facility</dt>
                  <dd className="text-on-surface">{facility}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-on-surface-variant">Scope</dt>
                  <dd className="text-on-surface">{scope}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-on-surface-variant">Lead electrician</dt>
                  <dd className="text-secondary">Red Seal senior</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-on-surface-variant">Target window</dt>
                  <dd className="text-primary font-bold">{readout.lead}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-on-surface-variant">Standards</dt>
                  <dd className="text-on-surface text-right max-w-[55%]">{readout.standards}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 pt-6 border-t border-white/8 flex flex-col gap-3">
              <p className="text-sm text-on-surface-variant">
                Reference code <span className="text-on-surface font-mono">CES-{facility}-{scope}</span> when you call — dispatch
                routes to the right provincial hub.
              </p>
              <a
                href={`tel:${PHONE_E164}`}
                className="w-full py-3 rounded-xl bg-primary-container hover:bg-primary text-on-primary-container font-semibold text-center shadow-[0_0_20px_-3px_rgba(245,158,11,0.3)] transition-all"
              >
                Call {PHONE_DISPLAY}
              </a>
              <span className="text-center font-mono text-[10px] text-on-surface-variant/70">
                Speak with a Master Electrician — no online quote required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
