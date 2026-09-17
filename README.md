# DigiTools

DigiTools is a responsive digital-tools buying platform built for the A-6 assignment. Users can browse premium productivity products, add products to a cart, remove selections, and complete a simple checkout flow.

## Live Project

- Live site: Add the deployed URL here before submission.
- Repository: Add the GitHub repository URL here before submission.

## Features

- Responsive landing page with hero banner, statistics, product catalog, steps, pricing, CTA, and footer sections.
- JSON-driven product cards with tags, icons, pricing, periods, feature lists, and three-column desktop layout.
- Functional cart flow with navbar item count, duplicate prevention, remove actions, total calculation, checkout clearing, and React Toastify alerts.

## Technologies

- React 19
- React Router with `createBrowserRouter`
- Tailwind CSS
- Vite
- JavaScript (ES6+)
- React Toastify
- JSON product data

## Project Structure

```text
src/
├── components/       Reusable UI components
├── data/             Product JSON data
├── layouts/          Shared route layouts and cart state
├── pages/            Route-level page components
├── assets/           Hero, product, and step artwork
├── App.jsx           Router configuration
└── App.css           Responsive design system
```

## Run Locally

```bash
npm install
npm run dev
```

## Production Checks

```bash
npm run lint
npm run build
```

## Assignment Coverage

- Navbar with cart icon, navigation links, login, and get-started action
- Hero banner with heading, description, artwork, and action buttons
- Stats section matching the reference design
- Product and cart route views with product-first default behavior
- Six products loaded from JSON
- Product cards with all required product information
- One-column cart list with remove and checkout actions
- Steps, pricing, CTA, and footer sections
- Responsive desktop and mobile layouts
- React Toastify feedback for add, remove, duplicate, and checkout actions
