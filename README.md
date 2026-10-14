# Vidhan Sharma — Personal Product Portfolio

Personal product management portfolio website for **Vidhan Sharma**, Product Associate working in enterprise SaaS, Order Management Systems (OMS), omnichannel commerce, and system integrations.

## Overview

This website showcases product case studies, operational workflows, and professional experience across enterprise commerce:

- **Home (`/`)**: Hero introduction, core focus areas, resume download, featured project showcase, and selected project previews.
- **About (`/about`)**: Background as a Product Associate at HotWax Commerce, cross-functional collaboration, technical troubleshooting, and product ownership.
- **Projects (`/projects`)**: Comprehensive catalog of product work and case studies.
- **Project Detail Pages (`/projects/[slug]`)**:
  - `vitaran-distribution-management-system`: Distribution Management System replacing spreadsheet-based operations for customer-specific pricing, inventory, deliveries, and expenses.
  - `enterprise-order-management-workflows`: Enterprise OMS requirements across ATP, QOH, order routing, fulfillment, and Shopify integrations.
  - `production-troubleshooting-system-integrations`: Technical investigation using SQL/PLSQL, API responses, JSON payloads, and logs for Root Cause Analysis and fix validation.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Static Site Generation / SSG)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content Engine**: Markdown with `gray-matter` & `remark`
- **Hosting Platform**: Designed and configured for [Netlify](https://www.netlify.com/)

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build and test static export:**
   ```bash
   npm run export
   ```
   Generated static files will be placed in the `out/` directory.

## Netlify Deployment Settings

When linking this repository (`https://github.com/Vidhansha31/Vidhan-Portfolio`) to Netlify:

- **Build Command**: `npm run export` (or `npm run build && next export`)
- **Publish Directory**: `out`
- **Routing Configuration**: Handled by [`netlify.toml`](./netlify.toml) with 301 redirects and fallback routing.

## License

Personal Portfolio © Vidhan Sharma. All rights reserved.
