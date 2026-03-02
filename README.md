# Experiment 5: Redux Toolkit State Management in React

This project is an extension of Experiment 4, upgrading the state management from `useReducer` to **Redux Toolkit** while retaining `useContext` for theme management and `useMemo` for performance optimization.

## Author
**Name:** Paras  
**UID:** 23BAI70497

---

## Experiment 5 Changes (New)

### 1. Redux Toolkit (Replaces useReducer)
- Configured a **Redux store** using `configureStore` in `src/redux/store.js`
- Created a **cart slice** using `createSlice` in `src/redux/cartSlice.js` with 4 actions:
  - `addItem`  Add product to cart (or increment quantity)
  - `removeItem`  Remove a product from cart
  - `updateQty`  Update quantity of a cart item
  - `clearCart`  Clear all items from cart
- Used `useSelector` and `useDispatch` in **Cart**, **Products**, **Checkout**, and **Navbar** components

### 2. useContext (Theme  Light/Dark Mode)
- Created `ThemeContext` in `src/context/ThemeContext.jsx`
- Provides a global `theme` state and `toggleTheme` function
- Used in **Navbar** (toggle button), **MainLayout** (footer), **Home**, **About**, **Cart**, **Checkout**, and **Products** pages
- Persists theme preference in localStorage

### 3. useMemo (Performance Optimization)
- Used in **Cart** page to compute `totalPrice` and `totalItems`
- Used in **Checkout** page to compute `subtotal`, `tax`, `shipping`, `grandTotal`, and `categoryBreakdown`
- Recomputes only when `cartItems` dependency changes

### 4. New Page: Checkout (`/checkout`)
- Demonstrates all three hooks: Redux (`useSelector`, `useDispatch`), `useContext` (theme), and `useMemo` (order summary)
- Displays order items, category-wise breakdown, and payment summary
- Includes a "Place Order" flow that clears the cart via Redux dispatch

---

## Retained from Previous Experiments
- **Exp 3**: React Router DOM v6  client-side routing across pages
- **Exp 4**: Shopping Cart system, useMemo for derived calculations

---

## Pages (5 Total)
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero section |
| Products | `/products` | Product catalog with Add to Cart |
| About | `/about` | Company stats and info |
| Cart | `/cart` | Cart management with quantity controls |
| **Checkout** | `/checkout` | **NEW**  Order review and placement |

---

## Tech Stack
- **Framework:** React 19 + Vite
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Global Context:** React Context API (Theme)
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS (with dark mode support)

---

## Project Structure
```
src/
 redux/
    store.js          # configureStore setup
    cartSlice.js      # createSlice with 4 reducers
 context/
    ThemeContext.jsx   # Light/Dark theme context (useContext)
    CartContext.jsx    # (Legacy  replaced by Redux)
 pages/
    Home.jsx
    Products.jsx       # useDispatch + useSelector
    About.jsx
    Cart.jsx           # useSelector + useMemo
    Checkout.jsx       # NEW  Redux + useMemo + useContext
 components/
    Navbar.jsx         # useSelector (cart count) + useContext (theme toggle)
 layouts/
    MainLayout.jsx     # useContext (theme)
 data/
    products.js
 main.jsx               # Redux Provider + ThemeProvider + BrowserRouter
```

---

## Screenshots

### Home Page
![Home Page](./screenshots/Screenshot%202026-02-19%20180435.png)

### Products Page
![Products Page](./screenshots/Screenshot%202026-02-19%20180445.png)

### Shopping Cart
![Cart Page](./screenshots/Screenshot%202026-02-19%20180503.png)

### About Page
![About Page](./screenshots/Screenshot%202026-02-19%20180520.png)

---

## How to Run
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start dev server:**
   ```bash
   npm run dev
   ```
3. **Open:** `http://localhost:5173`
