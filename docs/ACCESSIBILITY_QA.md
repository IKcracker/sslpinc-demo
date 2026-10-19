# WCAG 2.2 Level AA accessibility test plan

Status: **Implementation targets, not a completed conformance claim.** A signed audit is a separate delivery artifact.

## Automated checks

Run axe-core and Lighthouse on each page template at 320px, 768px and desktop widths. Check labels, names, roles, contrast, headings, landmarks, page title, links, alt text, form errors, focus visibility and targets. Check the final version again after copy, images and CMS components are integrated.

## Manual keyboard

Test Tab, Shift+Tab, Enter, Space, arrow keys where relevant and Escape for any popup. Verify skip link, navigation, visible focus, modal focus management if used, accordions, filters, resource search, editor and form error focus. Test at 200% / 400% zoom, narrow reflow, reduced motion.

## Manual screen readers

Test NVDA + Firefox and NVDA + Chrome on Windows, VoiceOver + Safari on macOS/iOS. Document expected vs actual output for navigation, headings, live regions, status, form errors, labels and grouped controls. Repeat after remediation.

## Launch acceptance

- No known WCAG 2.2 A/AA defects from the accepted representative template matrix.
- All critical and high-severity findings remediated and retested.
- Report includes test date, browser/OS, screen reader versions, page URLs, methods, findings, remediations, residual caveats and responsible reviewer.
- No accessibility overlay or third-party accessibility widget is used as a substitute for source-code remediation.
- Independent audit may be commissioned by the client.
