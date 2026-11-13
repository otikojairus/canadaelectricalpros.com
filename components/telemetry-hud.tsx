"use client";

import { useCallback, useState } from "react";

type TelemetryHudProps = {
  label?: string;
};

export function TelemetryHud({ label = "SERVICE DISPATCH HUB" }: TelemetryHudProps) {
  const [load, setLoad] = useState(4850);

  const pulse = useCallback(() => {
    setLoad(4800 + Math.floor(Math.random() * 120));
  }, []);

  return (
    <div className="relative rounded-2xl bg-surface-container/90 backdrop-blur-xl p-6 shadow-2xl border border-white/8 overflow-hidden">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/8 -mx-6 -mt-6 px-6 pt-4 bg-surface-container-low/60">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-on-surface">
          <span className="w-2.5 h-2.5 rounded-full bg-primary/80 animate-pulse" />
          {label}
        </div>
        <span className="px-2 py-0.5 rounded bg-secondary/20 text-secondary font-mono text-[10px]">FEEDER: ACTIVE</span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <Metric label="Apparent load" value={load.toLocaleString()} unit="kVA" accent="text-primary" bar={78} />
        <Metric label="Power factor" value="0.98" unit="LAG" accent="text-secondary" note="Optimal" />
        <Metric label="THD" value="1.2" unit="% THD" accent="text-on-surface" note="IEEE 519" />
        <Metric label="Bus voltage" value="13.8" unit="kV RMS" accent="text-tertiary" note="3Φ balanced" />
      </div>

      <div className="bg-surface-container-low rounded-xl p-3 mb-4 font-mono text-[10px] text-on-surface-variant">
        <div className="flex justify-between mb-2">
          <span>PHASE SYNC</span>
          <span className="text-secondary">60.00 Hz</span>
        </div>
        <svg className="w-full h-14 text-secondary" fill="none" viewBox="0 0 400 60" aria-hidden>
          <path
            d="M0,30 Q25,5 50,30 T100,30 T150,30 T200,30 T250,30 T300,30 T350,30 T400,30"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.8"
          />
          <path
            d="M0,30 Q25,50 50,30 T100,30 T150,30 T200,30 T250,30 T300,30 T350,30 T400,30"
            stroke="#f59e0b"
            strokeDasharray="4 2"
            strokeWidth="1.5"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-on-surface-variant">
          Last sweep: <span className="text-on-surface">08:14 EST</span>
        </span>
        <button
          type="button"
          onClick={pulse}
          className="px-3 py-1 rounded bg-surface-container-highest hover:bg-surface-bright text-primary font-mono text-[10px] transition-colors"
        >
          ↻ Diagnostic
        </button>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  unit,
  accent,
  bar,
  note,
}: {
  label: string;
  value: string;
  unit: string;
  accent: string;
  bar?: number;
  note?: string;
}) {
  return (
    <div className="bg-surface-container-low p-3 rounded-xl">
      <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-wider block mb-1">{label}</span>
      <span className={`text-2xl font-bold font-mono block ${accent}`}>
        {value} <span className="text-[10px] text-on-surface-variant font-normal">{unit}</span>
      </span>
      {bar !== undefined && (
        <div className="w-full bg-surface-container-highest h-1.5 rounded-full mt-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full"
            style={{ width: `${bar}%` }}
          />
        </div>
      )}
      {note && <span className="font-mono text-[9px] text-secondary mt-1 block">{note}</span>}
    </div>
  );
}
