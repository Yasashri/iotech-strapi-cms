IO-TEC CMS (Strapi v5)

This repository contains the Headless CMS for the IO-TEC website.
Built using Strapi v5, it provides APIs for all frontend content, including:

Hero sliders
Services
Team members
Clients
Global settings
SEO metadata
Multilingual content (EN / AR)

The CMS is designed to work with the separate frontend repo built using Next.js 16 (App Router).

🚀 Tech Stack

Strapi v5
SQLite (default — easy development)
Supports PostgreSQL / MySQL for production
REST API (with optional GraphQL plugin)
i18n plugin (EN + AR)
Cloud-ready deployment (Railway / Render / VPS)

| Content      | Endpoint            |
| ------------ | ------------------- |
| Hero Slides  | `/api/hero-slides`  |
| Services     | `/api/services`     |
| Team Members | `/api/team-members` |
| Clients      | `/api/clients`      |
| Subscribers  | `/api/subscribers`  |
| Uploads      | `/uploads/...`      |


Localization (i18n)

CMS uses two locales:

EN → Default
AR → Right-to-left (used by frontend)