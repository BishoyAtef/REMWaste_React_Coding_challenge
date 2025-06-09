# REMWaste Skip Selector

A modern React application for browsing and selecting skip sizes, built with reusability, smooth UX, and clean architecture in mind.

## 🚀 Features

- ⚛️ **React** with functional components and hooks
- 🌐 **React Router DOM** for seamless client-side routing
- 📦 **Context API + LocalStorage** to persist skip selection across reloads and navigation
- 💅 **Tailwind CSS** for responsive and elegant styling
- 📸 **Dynamic assets** based on skip size
- 🌀 **Loading spinner** while fetching backend data
- 🐳 **Dockerized** for easy deployment and environment consistency

---

## 🧱 Project Structure

### 📁 Components

- `Navbar.jsx` – Responsive navigation bar with mobile support
- `AnimatedFooter.jsx` – Dynamic footer showing selected skip and navigation buttons
- `Card.jsx` – Individual skip card with hover effects and selection state
- `Cards.jsx` – Grid layout to display available skips
- `Spinner.jsx` – Simple loading animation during data fetching

### 📄 Pages

- `HomePage.jsx` – Main page for selecting skips
- `NotFoundPage.jsx` – Fallback page for unmatched routes

### 🧩 Layouts

- `MainLayout.jsx` – Shared layout structure with navbar and content container

---

## 🧠 State Management

A custom context handles the selected skip state and persists it using `localStorage`, ensuring the selection remains intact even after a page reload or navigation.

---

## 🛠 Utilities

- `calculateSkipPrice()` – Computes the final price based on VAT and base price
- `getSkipImage()` – Dynamically selects the correct image based on skip size

---

## 🐳 Running with Docker

To simplify setup and deployment, the app is fully containerized using Docker.

```bash
# Build the image
docker compose up --build

# For subsequent runs
docker compose up

# Stop the app
docker compose down

# Stop and remove containers, volumes, and networks
docker compose down --volumes

