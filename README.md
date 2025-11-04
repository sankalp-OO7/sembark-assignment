# 🛍️ Sembark Frontend React Assignment https://sembark-assignment-udi1.vercel.app/

This is my submission for the **Frontend Developer Assignment** by **Sembark Technologies**.  
The project is a small **e-commerce web app** built with **React (TypeScript)**, **MUI**, and **MobX**, where users can browse products, view details, and add them to a cart.

---

## 🚀 Project Overview

The goal was to build a basic e-commerce application with the following core features:

- 🏠 **Home Page (Product Listing)** — Displays products with name, price, and image.
- 📄 **Product Detail Page** — Shows product details with an “Add to My Cart” button.
- 🛒 **Cart Page** — Displays added items, count, and total price.
- 🌐 **Routing** — Implemented using React Router (dynamic route: `/product/:id/details`).
- 🧠 **State Management** — Done via **MobX + Context API**.
- 🎨 **Styling** — Fully responsive and styled using **Material UI (MUI)**.
- 💾 **Bonus** — Cart data persists in `sessionStorage`.

All data is fetched from the public **[FakeStore API](https://fakestoreapi.com/)**.

---

## 🧩 Tech Stack

| Technology                   | Purpose                                 |
| ---------------------------- | --------------------------------------- |
| ⚛️ React (Vite + TypeScript) | Core frontend framework                 |
| 🎨 MUI (Material UI)         | UI components and responsive styling    |
| 🧠 MobX + Context API        | Global cart state management            |
| 🌐 FakeStore API             | Data source for products and categories |
| 🔀 React Router v6           | Page routing and navigation             |

---

## 📂 Folder Structure

src/
├── api/
│ └── productAPI.ts # API calls (products, categories)
├── components/
│ ├── Navbar.tsx
│ ├── Footer.tsx
│ ├── ProductCard.tsx
│ └── ProductGrid.tsx
├── context/
│ └── CartContext.tsx # Provides global cart context
├── pages/
│ ├── HomePage.tsx
│ ├── ProductDetailPage.tsx
│ └── CartPage.tsx
├── store/
│ └── CartStore.ts # MobX store for cart
├── styles/
│ └── global.css
├── types.ts # Shared TypeScript types
├── App.tsx # Route setup
└── main.tsx # App entry point

---

## ⚙️ Setup & Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/sankalp-OO7/sembark-assignment.git
cd sembark-assignment
npm install
npm run dev

Now project Runs on development server:
Open your browser and go to:
http://localhost:5173/
production Link : https://sembark-assignment-udi1.vercel.app/

 State Management (MobX + Context)

The cart logic is managed through a MobX store wrapped inside a React Context.

CartStore.tsx — Defines observable states, actions, and computed values like totalItems & totalPrice.

CartContext.tsx — Provides the store across all components.

Components are wrapped in observer so the UI updates automatically when cart data changes.

🎨 UI & Styling

Built with Material UI (MUI) for responsiveness and clean layout.

Mobile-first approach with flexible grid layout.

Inline styles & MUI sx prop ensure a consistent responsive design.

 Home Page,	Product Details	,Cart Page,
🏠 Product grid	📄, Add to Cart,	🛒 Cart summary

 
 
Requirement	Implemented
Product Listing Page	 
Product Detail Page	 
Add to Cart	 
Remove from Cart	 
Cart Footer with Summary	 
Dynamic Routing 
Context + MobX	 
Responsive Inline Styling	  (via MUI)
TypeScript	 
Persist Cart (Bonus)	 
  
👨‍💻 Developer

Sankalp Racchewar
Frontend Developer | React | TypeScript | MERN Stack
📍 Based in India


This project was developed with a focus on:

Clean, readable code.

Proper React component structure.

Functional + class component usage (as per assignment).

Realistic user experience and maintainability.

“Being a web developer is good — but combining clean architecture, state management, and solid fundamentals is what makes a great one.”

 



```
