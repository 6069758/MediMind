import React from 'react';
import { ArrowRight, Braces, Brain, Database, Lock, ScanText, Smartphone, Sparkles, ShieldCheck, Upload } from 'lucide-react';
import { Head, Reveal } from './ui.jsx';

const LANES = [
  { t: '1 · Capture', c: 'teal', n: [[Smartphone, 'React web / PWA', 'Camera + file upload'], [Upload, 'Upload API', 'Validates type & size'], [Lock, 'Storage adapter', 'Supabase / Upstash when configured; local fallback otherwise']] },
  { t: '2 · Understand', c: 'violet', n: [[ScanText, 'Document reading', 'OpenAI vision when configured; no separate OCR engine'], [Brain, 'LLM extraction', 'Schema-validated JSON'], [ShieldCheck, 'Review before save', 'User reviews extracted fields before confirmation']] },
  { t: '3 · Structure', c: 'blue', n: [[Braces, 'FHIR-style mapper', 'Prototype export; ABDM conformance not validated'], [Database, 'Postgres + JSONB', 'Patient · Observation · Rx'], [Lock, 'Privacy & access', 'Single shared demo profile; no auth or audit log']] },
  { t: '4 · Explain', c: 'orange', n: [[Sparkles, 'Summary + translation', 'EN / हिन्दी / తెలుగు'], [ShieldCheck, 'Safety rails', 'No diagnosis, disclaimers'], [Smartphone, 'Timeline & profile', 'What you see in this app']] },
];

export function Architecture() {
  return <div>
    <Head eyebrow="HOW IT WORKS" title="System architecture" desc="Prototype flow from a report upload to a FHIR-style health profile export." />
    <div className="x-arch">{LANES.map((l, i) => <React.Fragment key={l.t}>
      <Reveal delay={i * 120} className="x-lane"><div className={`x-lane-t x-${l.c}`}>{l.t}</div>
        {l.n.map(([Ic, a, b]) => <div className="surface x-anode" key={a}><span className={`x-aic x-${l.c}`}><Ic size={16} /></span><div><strong>{a}</strong><small>{b}</small></div></div>)}</Reveal>
      {i < LANES.length - 1 && <div className="x-link"><ArrowRight size={20} /></div>}
    </React.Fragment>)}</div>
    <Reveal><section className="surface x-block"><h3>ABDM-ready data model</h3>
      <div className="x-model">{['Patient (ABHA)', 'DocumentReference', 'DiagnosticReport', 'Observation', 'MedicationRequest', 'Condition'].map((m, i) => <React.Fragment key={m}><span>{m}</span>{i < 5 && <i>→</i>}</React.Fragment>)}</div>
      <p className="x-mini">Every extracted value keeps a link to its source document, page and confidence score, so each insight stays traceable.</p></section></Reveal>
  </div>;
}
