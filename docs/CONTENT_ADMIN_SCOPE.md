# Custom-code content-management approach

The preview's `/content-studio` is a **browser-only working demonstration**. It stores edits in localStorage and can export edited content as JSON. It does not offer real logins, staff accounts, production persistence, media upload, or a shared editorial workflow. This deliberately avoids storing client or patient data before agreement.

## Contracted production scope

- Accessible authenticated admin dashboard with roles: Owner/Admin, Editor; enforced on the server.
- Relational data and audit log; categories and services managed as publishable records.
- Owner can edit page titles, content sections and CTA labels.
- Owner can add / edit / archive team profiles and approved photos.
- Owner can publish new services from a template with auto-generated unique slugs, metadata, preview and navigation placement.
- Owner can add / edit / unpublish FAQs, articles/resources, and careers listings.
- Draft/preview/publish workflow with dated revisions and rollback.
- Accessible forms with spam controls, approval-based inbox integration and a documented retention policy.
- Asset management with optimized derivatives and accessible text alternatives.
- Video-recorded administrator training and a simple written editing guide.

## Security boundary

The website and CMS shall not store protected health information by default. For any workflow involving PHI, conduct a documented privacy/security review with a qualified advisor, confirm appropriate vendor agreements and evaluate HIPAA applicability before integrating systems or collecting data.
