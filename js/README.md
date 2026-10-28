# Harvest of Hygiene - WEDE5020 Part 3
**Student: Akanyang Montshiwa** | **NPO Website for Pretoria & Soweto**

## Project Overview
Harvest of Hygiene is a Non-Profit Organisation based at 123 Church Street, Pretoria and 45 Vilakazi Street, Soweto. The website provides information about hygiene pack distribution, volunteering, and donation drives in Gauteng.

Live Link: `https://[your-netlify-link].netlify.app/` (replace after deployment)

## Part 3 Features Implemented (WEDE Requirements)

### 1. Leaflet Maps - FIXED (No Blocked Error)
- **Location:** `contact.html`
- **Issue Solved:** Original OpenStreetMap `tile.openstreetmap.org` gave "Blocked" and CartoDB gave "API KEY REQUIRED" error.
- **Solution:** Switched to Esri World Street Map which requires NO API key:
  `https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}`
- **Maps:**
    - Map 1: Pretoria Office (Main) - [-25.7479, 28.2293] - 123 Church Street
    - Map 2: Soweto Distribution Centre - [-26.2384, 27.9089] - 45 Vilakazi Street
- Includes markers, popups, zoom controls, and attribution.

### 2. JavaScript Functionality (`js/main.js`)
- Mobile hamburger menu toggle (`mobileMenuToggle`)
- Dynamic footer year (`currentYear`)
- Lightbox gallery for images
- Contact form validation (name >=2 chars, valid email regex, message >=10 chars)
- Enquiry form handling
- Duplicate map initialization guard (`!mapEl._leaflet_id`)

### 3. SEO Optimization
- Meta description and keywords on all pages
- Semantic HTML5 tags (header, nav, main, footer)
- Alt text for images
- Title tags with location keywords
- Open Graph ready structure

### 4. Forms Validation
- HTML5 `required`, `minlength`, `type="email"`
- Custom JS error messages (`contactNameError`, etc.)
- Success message display

## Folder Structure