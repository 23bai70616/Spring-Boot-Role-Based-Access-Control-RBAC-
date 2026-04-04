# 🔐 Spring Boot Role-Based Access Control (RBAC)

## 📌 Project Overview

This project demonstrates **Role-Based Access Control (RBAC)** using **Spring Boot** and **Spring Security**.
It implements authentication, authorization, and secured REST APIs based on user roles.

---

## 🚀 Features

* 🔑 User Authentication (Login)
* 🛡️ Role-Based Authorization (USER / ADMIN)
* 🔒 Secured REST APIs
* 💾 H2 In-Memory Database
* ⚙️ Spring Security Configuration
* 📡 HTTP Status Handling (401 / 403)

---

## 🛠️ Tech Stack

* Java
* Spring Boot
* Spring Security
* Spring Data JPA (Hibernate)
* H2 Database
* Maven

---

## 📂 Project Structure

```
src/main/java/com/example/demo
│
├── config        # Security configuration
├── controller    # REST controllers
├── entity        # JPA entities
├── repository    # Database layer
├── service       # Business logic
└── DemoApplication.java
```

---

## 🔐 Roles & Access Control

| Role   | Access           |
| ------ | ---------------- |
| USER   | `/api/user/**`   |
| ADMIN  | `/api/admin/**`  |
| PUBLIC | `/api/public/**` |

---

## 📡 API Endpoints

### 🌐 Public API

```
GET /api/public/hello
```

### 👤 User API (Requires USER role)

```
GET /api/user/profile
```

### 👑 Admin API (Requires ADMIN role)

```
GET /api/admin/dashboard
```

---

## 🔑 Default Users

| Username | Password | Role       |
| -------- | -------- | ---------- |
| user1    | admin123 | ROLE_USER  |
| admin1   | admin123 | ROLE_ADMIN |

---

## 🧪 Testing with Postman

### 1️⃣ Unauthorized Request (No Auth)

```
GET /api/user/profile
```

➡️ Response: **401 Unauthorized**

---

### 2️⃣ Valid USER Access

```
GET /api/user/profile
Auth: user1 / admin123
```

➡️ Response: **200 OK**

---

### 3️⃣ USER accessing ADMIN API

```
GET /api/admin/dashboard
Auth: user1 / admin123
```

➡️ Response: **403 Forbidden**

---

### 4️⃣ ADMIN Access

```
GET /api/admin/dashboard
Auth: admin1 / admin123
```

➡️ Response: **200 OK**

---

### 5️⃣ Invalid Login

```
Auth: wrong credentials
```

➡️ Response: **401 Unauthorized**

---

## 📸 Screenshots

Include the following screenshots:

* ✅ Login with valid credentials
* ✅ Successful access to secured endpoint
* ✅ USER accessing USER endpoint
* ✅ USER denied access to ADMIN endpoint (403)
* ⭐ Unauthorized request (401)
* ⭐ Invalid login attempt

---

## ⚙️ Configuration

### application.properties

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=

spring.jpa.hibernate.ddl-auto=create
spring.jpa.show-sql=true

spring.h2.console.enabled=true
server.port=8081
```

---

## ▶️ How to Run

1. Clone the repository
2. Open in IntelliJ / Eclipse
3. Run `DemoApplication`
4. Access APIs via browser or Postman

---

## 🎯 Learning Outcomes

* Understanding Spring Security
* Implementing RBAC
* Securing REST APIs
* Handling HTTP status codes
* Working with H2 database

---

## 🚀 Future Improvements

* JWT Authentication
* Refresh Tokens
* Role hierarchy
* Frontend integration (React)

---

## 👨‍💻 Author

Adarsh Kumar

---
