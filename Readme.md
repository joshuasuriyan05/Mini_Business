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
`.env.example` for placeholder value

## Prisma Setup
This project uses Prisma ORM with PostgreSQL.
Prisma files:- `backend/prisma/schema.prisma` defines database models.- `backend/prisma.config.ts` configures Prisma CLI behavior and reads `DATABASE_URL`.- `backend/prisma/migrations/` stores database structure changes.- `backend/src/lib/prisma.js` creates the reusable Prisma Client instance.
Local setup:
1. Create PostgreSQL database `mini_business_app`.
2. Copy `backend/.env.example` to `backend/.env`.
3. Set the correct local `DATABASE_URL` in `backend/.env`.
4. Run:
```powershell
cd backend
npx prisma migrate dev--name init_product
npx prisma validate
npx prisma generate

## Week 3 Business Flow Test Scenarios
### Backend API tests
Run backend tests:
```powershell
cd backend
npm test
```
Covered API scenarios:- Health endpoint works- Product can be created- Customer can be created- Draft sales order can be created- Sales order can be confirmed- Product stock reduces after confirmation- Double confirmation is blocked- Insufficient stock is rejected
### Manual UI test scenario
1. Create product.
2. Create customer.
3. Create sales order.
4. Confirm sales order.
5. Verify stock reduction.
6. Verify double confirmation is blocked.
7. Verify insufficient stock is rejected

## CI and Deployment Notes
This project uses GitHub Actions for automated checks.
### CI
The CI workflow is located at:
`.github/workflows/ci.yml`
It runs on pull requests and pushes to `main`.
Current checks:- Backend dependency install- Backend tests- Frontend dependency install- Frontend tests- Frontend production build
### Deployment Workflow Placeholders
Deployment workflow placeholder files:- `.github/workflows/deploy-backend-hostinger.yml`- `.github/workflows/deploy-frontend-hostinger.yml`
These files do not contain real deployment secrets.
Actual deployment secrets must be configured in GitHub repository settings.
Required secret names may include:
        - `HOSTINGER_HOST`
        - `HOSTINGER_USERNAME`
        - `HOSTINGER_PORT`
        - `HOSTINGER_SSH_KEY`
        - `HOSTINGER_BACKEND_PATH`
        - `HOSTINGER_FRONTEND_PATH`
        - `PRODUCTION_DATABASE_URL`
        - `PRODUCTION_API_BASE_URL`