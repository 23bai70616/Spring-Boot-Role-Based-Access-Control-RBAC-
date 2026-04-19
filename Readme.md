# 🔐 Role-Based Access Control (RBAC) System

A robust Full-Stack RBAC implementation using **Spring Boot 3.x** and **React**. This project demonstrates secure authentication, hierarchical role authorization, and a responsive UI that dynamically adapts based on user permissions.

---

## 📸 visual Walkthrough

### 1. Secure Login
![Login UI](./screenshots/login.png)
*Modern Material-UI login with real-time validation and error handling for unauthorized/invalid attempts.*

### 2. User Dashboard
![User Dashboard](./screenshots/user_dashboard.png)
*Dynamic dashboard for users with `ROLE_USER`. Accesses protected profile data via authenticated REST calls.*

### 3. Admin Control Panel
![Admin Dashboard](./screenshots/admin_dashboard.png)
*High-level dashboard for users with `ROLE_ADMIN`. Demonstrates **Inherited Access**, where admins can view both Admin-only metrics and standard User profile data.*

### 4. Security Enforcement (Access Denied)
![Access Denied](./screenshots/access_denied.png)
*Server-side and Client-side protection ensure that standard users are blocked from Admin routes with clear feedback.*

---

## 🚀 Key Features

*   **⚡ Modern Tech Stack**: Spring Boot 3.5+, React 18+, and Material-UI.
*   **🛡️ Secure Authentication**: Basic Auth implementation with BCrypt password hashing.
*   **⚖️ Granular RBAC**: Strict separation between `USER` and `ADMIN` scopes.
*   **🔗 Unified Security**: Centralized CORS and Security Filter Chain configuration.
*   **💾 Auto-Seeding**: H2 in-memory database auto-populates with test users on startup.
*   **📱 Responsive UI**: React frontend dynamically renders components and navigation links based on the authenticated user's role.

---

## 🛠️ Tech Stack

### Backend
*   **Framework**: Spring Boot 3.5.13
*   **Security**: Spring Security 6+
*   **DB**: H2 In-Memory Database
*   **ORM**: Spring Data JPA / Hibernate
*   **Language**: Java 17+

### Frontend
*   **Framework**: React 18
*   **UI Library**: Material-UI (MUI)
*   **State**: SessionStorage based Auth
*   **API Client**: Axios with Interceptors

---

## 📡 API Endpoints & Access Grid

| Endpoint | Method | Required Role | Description |
| :--- | :--- | :--- | :--- |
| `/api/public/**` | ANY | NONE | Publicly accessible endpoints. |
| `/api/user/**` | GET | `USER` or `ADMIN` | User profile data. Admins have inherited access. |
| `/api/admin/**` | GET | `ADMIN` | Restricted administrative system data. |

---

## 🔑 Default Test Accounts

| Username | Password | Assigned Role |
| :--- | :--- | :--- |
| **`admin1`** | `password` | `ROLE_ADMIN` |
| **`user1`** | `password` | `ROLE_USER` |
| **`admin`** | `admin` | `ROLE_ADMIN` |

---

## ⚙️ How to Run

### 1. Backend (8081)
1.  Navigate to `/demo` folder.
2.  Run `./mvnw spring-boot:run` or run `DemoApplication.java` from your IDE.
3.  The backend will start at `http://localhost:8081`.

### 2. Frontend (3000)
1.  Navigate to `/frontend` folder.
2.  Install dependencies: `npm install`
3.  Start the app: `npm start`
4.  The frontend will open at `http://localhost:3000`.

---

## 👨‍💻 Author
**Adarsh Kumar**
