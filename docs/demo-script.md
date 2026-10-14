# 3–5 minute demo script

1. Use a synthetic health report only. Upload it and explain the allowed formats and size limit.
2. Review extracted fields and confidence; correct uncertain values before confirming.
3. Confirm the record, refresh, and show that confirmed metadata is loaded through the profile API when durable storage is configured.
4. Show one result and its educational explanation/advice. Explain that this is not a diagnosis and does not replace clinician care.
5. Switch the interface language and show the screens currently translated; do not claim full-app localization until every active screen and message is covered.
6. Export the FHIR-style Bundle. State clearly that ABHA linking is mock-only and ABDM profile conformance is not yet validated.
7. Close with limitations: no authentication/per-user authorization, shared demo profile, and original file bytes are not durably stored on Vercel.

Never use real patient records in a public demo.
