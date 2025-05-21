# Alma LegalTech Frontend Assessment Project

A modern frontend lead tracking system built with Next.js App Router, Redux Toolkit, Tailwind CSS, and mock APIs.

## Live Site

Adding Leads (Homepage): [https://alma-legal-tech-frontend-assessment-project.vercel.app/](https://alma-legal-tech-frontend-assessment-project.vercel.app/)

Admin Login: [https://alma-legal-tech-frontend-assessment-project.vercel.app/admin/login](https://alma-legal-tech-frontend-assessment-project.vercel.app/admin/login)

Admin Dashboard: [https://alma-legal-tech-frontend-assessment-project.vercel.app/admin/dashboard](https://alma-legal-tech-frontend-assessment-project.vercel.app/admin/dashboard)
(**Only allowed after successful login**)

## Admin Credentials

Use these mock credentials to access the admin dashboard:

Username: **admin**

Password: **admin123$**

### Setup Instructions

### 1. Clone and install

```bash
git clone https://github.com/BibekLuffy/Alma-LegalTech-Frontend-Assessment-Project.git
cd Alma-LegalTech-Frontend-Assessment-Project
npm install
```

### 2. Run Locally

```bash
npm run dev
```

### 3. Build and Start

```bash
npm run buld
npm start
```

## Project Structure

```bash
src/
├── app/
│ ├── page.tsx # Public lead form
│ ├── admin/login/ # Admin login
│ ├── admin/dashboard/ # Admin dashboard
│ └── api/ # API endpoints
├── components/ # Form & dashboard components
├── redux/ # Redux slices and store
├── utils/ # Utility functions
```

## Technology Userd

- **Next.js App Router**
- **Redux Toolkit + redux persist + redux-state-sync**
- **Tailwind CSS**
- **Mocked API via Next.js API Routes**

## Component Structure

### Public Lead Form (`/`)

- Collects user info (with validation)
- File upload (resume/CV, **Not uploaded yet**)
- Country selector with search

### Admin Login (`/admin/login`)

- Authenticated via mock credentials

### Admin Dashboard (`/admin/dashboard`)

- Authenticated using redux login state (after successful login)
- Displays lead list
- Allows status change: `Pending → Reached out` or `Reached out → Pending`
- Pagination in the table

## State Management

- `leadsSlice`: Manages leads
- `adminSlice`: Handles admin auth
- `appSlice`: Handles submission state
- Redux state is persisted using `redux-persist` via `localStorage`
- `redux-state-sync` keeps tabs in sync

## API Structure

| Route              | Method | Purpose                   |
| ------------------ | ------ | ------------------------- |
| `/api/leads`       | POST   | Submit a new lead         |
| `/api/admin/login` | POST   | Mock admin authentication |

## Future Improvements

- Real backend API integration
- Role-based access and real admin login integration
- Filtering, search of leads in the table
- Notifications & email triggers
- Encryption of the redux store
