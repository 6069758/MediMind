# MediMind AI prototype architecture

```text
Browser upload
  → Express API validation (PDF/JPG/PNG/WEBP, 10 MB limit)
  → OpenAI vision extraction (when configured)
  → user review and confirmation
  → existing state adapter (Supabase / Upstash when configured; local JSON in development)
  → normalized health profile
  → insights and timeline
  → FHIR-style Bundle export
```

## Implemented vs. planned

**Implemented in this prototype:** file-type/size validation, AI extraction integration, review-before-confirm, profile API, storage adapters, timeline generation, insights, and a FHIR-style export.

**Limitations:** no real authentication or per-user authorization; one shared profile; no consent workflow or audit log; no separate OCR engine; original uploaded bytes use a temporary filesystem path by default; ABHA is mock-only; FHIR/ABDM conformance has not been validated. Do not use real patient data or present this prototype as secure multi-user health software.

In Vercel production, configure a durable state provider before saving. The current project does not yet provide durable object storage for original uploaded files.
