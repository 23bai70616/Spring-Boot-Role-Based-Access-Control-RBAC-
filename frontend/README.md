# RBAC Frontend (React + Session-Based UI)

This project is a React-based frontend integrated with a Spring Boot Role-Based Access Control (RBAC) backend.

## Features
- **Premium UI**: Built with Material UI and Bootstrap for a professional look.
- **Session-Based Auth**: Stores credentials and roles in `sessionStorage`.
- **Route Protection**: Client-side redirection based on user roles (USER/ADMIN).
- **Backend Sync**: Automatic Basic Auth headers via Axios interceptors.
- **Responsive Design**: Clean and interactive dashboards.

## Installation & Setup
1. Ensure the Spring Boot backend is running on `http://localhost:8080`.
2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
3. Install dependencies (if not already done):
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Test Accounts
- **User Role**: Login with any username (without "admin"), e.g., `user1`.
- **Admin Role**: Login with any username containing "admin", e.g., `admin_user`.
- **Credentials**: Ensure credentials match those stored in your backend database/H2 console.
