# MediMind AI — presentation outline

1. **Problem:** medical records are fragmented and difficult to interpret.
2. **Solution:** upload, review extracted data, organize confirmed results, and view plain-language context.
3. **Live workflow:** synthetic report → extraction/review → confirm/save → refresh → timeline/insights → FHIR-style export.
4. **Architecture:** browser → Express API → OpenAI vision → human review → configured durable state adapter → profile/timeline/export.
5. **Safety and privacy:** educational, non-diagnostic guidance; synthetic data only; no authentication/per-user authorization yet; storage status must be verified.
6. **Roadmap:** complete localization; durable original-file object storage; authentication and authorization; consent/audit; FHIR/ABDM validation; OCR accuracy evaluation.
