# Mini Business Operations App
## Project Overview
The Mini Business Operations App is a full-stack web application developed to manage business operations such as products, customers, sales orders, and stock management.
The project contains:
- Backend API using Express.js
- Frontend dashboard using React
- Responsive UI using Tailwind CSS
---
# Tech Stack
## Frontend
- React
- Vite
- Tailwind CSS
## Backend
- Node.js
- Express.js
- CORS
- Nodemon
---
# Project Structure
```text
Mini_Business/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app1.js
│   │   └── index.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── layouts/
│   │
│   └── package.json
│
└── README.md
```
---
# Backend Setup
## Install Backend Dependencies
```bash
cd backend
npm install
```
---
# Frontend Setup
## Install Frontend Dependencies
```bash
cd frontend
npm install
```
---
# Running the Backend
```bash
npm run dev
```
Backend runs on:
```text
http://localhost:3000
```
---
# Running the Frontend
```bash
npm run dev
```
Frontend runs on:
```text
http://localhost:5173
```
---
# Tailwind CSS Usage
Tailwind CSS is used for:
- Responsive layouts
- Dashboard UI
- Cards and tables
- Buttons and hover effects
- Modern styling
- Hover animations and transitions
Example:
```jsx
className="bg-slate-800 rounded-xl shadow-lg"
```
---
# API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Backend health check |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/products` | Create new product |
---
# Ports Used
| Service | Port |
|---|---|
| Backend | 3000 |
| Frontend | 5173 |
---
# Week 1 Status
## Status
- Completed Successfully
---
# Completed Features
## Backend
- Express.js server setup
- Health check API (`GET /health`)
- Product API routes
- Product controller layer
- Product service layer
- Error handling middleware
- CORS middleware integration
- Product validation
- Duplicate SKU validation
- In-memory product storage
- REST API testing using Postman
---
## Frontend
- React + Vite setup
- Tailwind CSS integration
- Dashboard page UI
- Products page UI
- Reusable Card component
- Reusable Button component
- Responsive layout
- Modern dashboard styling
- Hover effects and transitions
- Product table UI
---
# APIs Completed
| Method | Endpoint | Status |
|---|---|---|
| GET | `/health` |  Completed |
| GET | `/api/products` |  Completed |
| GET | `/api/products/:id` |  Completed |
| POST | `/api/products` |  Completed |
---
# Current Progress
- Backend structure completed
- Frontend UI completed
- API integration pending
- Database integration pending
---
# Overall Week 1 Progress
- Backend Setup Completed  
- Frontend Setup Completed  
- API Development Completed  
- UI Development Completed  
- Database Integration Pending  
- Authentication Pending
---
# Future Improvements

- Database integration
- Authentication
- Customer management
- Sales order module
- Inventory tracking
- Deployment
- Frontend API integration

## Database Setup
This project uses PostgreSQL.
Local database name:
mini_business_app
Basic setup:
1. Install PostgreSQL for Windows.
2. Open pgAdmin or psql.
3. Create a database named `mini_business_app`.
4. Verify the connection using:
```sql
SELECT version();
```
Do not commit real database passwords. Use `.env` for local secrets and 
`.env.example` for placeholder values