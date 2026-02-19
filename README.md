# Experiment 4: Advanced State Management in React

This project is an extension of Experiment 3, demonstrating advanced React concepts including Global State Management (`useContext`), Complex State Logic (`useReducer`), and Performance Optimization (`useMemo`).

## Author
**Name:** Paras  
**UID:** 23BAI70497

---

## Experiment 4 Features (New)
This update introduces a fully functional **Shopping Cart** system:

- **Global State Management (`useContext`)**: 
  - Created `CartContext` to manage cart state globally across the application.
  - Wrapped the entire application in `CartProvider` to make cart data accessible anywhere.

- **Complex State Logic (`useReducer`)**: 
  - Implemented a reducer to handle cart actions: `ADD_TO_CART`, `REMOVE_FROM_CART`, `UPDATE_QUANTITY`, and `CLEAR_CART`.
  - Ensures predictable state transitions for cart operations.

- **Performance Optimization (`useMemo`)**: 
  - Used `useMemo` in the Cart component to efficiently calculate the **Total Price** and **Total Items**.
  - Recalculates only when `cartItems` change, preventing unnecessary re-computations on every render.

- **New Page**: 
  - Added a **Cart Page** (`/cart`) that displays selected items, allows quantity updates, and shows the calculated total.

---

## Experiment 3 Features (Retained)
- **Client-Side Routing**: using **React Router DOM v6**.
- **Multiple Pages**: Home, Products, About, and now Cart.
- **Consistent Layout**: Shared Navbar and Footer using `Outlet`.
- **Responsive Design**: Styled with Tailwind CSS for mobile and desktop.

---

## Tech Stack
- **Framework:** React + Vite
- **State Management:** Context API + useReducer
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS

---

## Project Structure
```
src/
 context/
    CartContext.jsx  # Contains createContext, useReducer, and Provider
 pages/
    Home.jsx
    Products.jsx
    About.jsx
    Cart.jsx         # Demonstrates useMemo and useContext
 components/
    Navbar.jsx       # Displays dynamic cart count
 main.jsx             # App wrapped in CartProvider
```

---

## Screenshots

### Home Page
![Home Page](./screenshots/Screenshot%202026-02-19%20180435.png)

### Products Page
![Products Page](./screenshots/Screenshot%202026-02-19%20180445.png)

### Shopping Cart (New Feature)
![Cart Page](./screenshots/Screenshot%202026-02-19%20180503.png)

### About Page
![About Page](./screenshots/Screenshot%202026-02-19%20180520.png)

---

## How to Run
1. **Install dependencies:** 
   ```bash
   npm install
   ```
2. **Start server:** 
   ```bash
   npm run dev
   ```
3. **Open:** `http://localhost:5173`
