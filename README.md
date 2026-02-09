# User Management CRUD Application

A React-based CRUD (Create, Read, Update, Delete) application for managing user data.
The application is designed with extensibility, clean architecture, and maintainability in mind.

---

## Tech Stack

- React (Vite)
- Material UI
- React Hook Form
- Zod
- Axios
- JSON Server
- React Router (HashRouter)

---

## Setup Instructions

### Prerequisites

- Node.js 20.19+
- npm

### Install and Run

npm install  
npm run api  
npm run dev  

Mock API URL:  
http://localhost:3000/users

---

## Extensibility

The form architecture is configuration-driven and schema-based.

### Adding a New Field (Example: Address)

Step 1: Update form configuration

name: "address"  
label: "Address"  
type: "text"  
multiline: true  
rows: 3  

Step 2: Update validation schema

address: z.string().optional()

No changes are required in pages, components, or API logic.

---

## Assumptions and Design Decisions

- Backend API was not provided, so JSON Server is used as a mock API
- React Hook Form and Zod are used for centralized validation
- Hash-based routing is used for compatibility with static hosting

---

## Summary

- Clean and modular React architecture
- Fully functional CRUD operations
- Extensible form design
- Centralized validation and API handling
- Easy to maintain and scale
