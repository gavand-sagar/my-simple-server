# Next.js API Server with Authentication

A Next.js API server with MongoDB integration, CORS support, and JWT-based authentication.

## Features

- User SignUp with validation
- User Login with JWT token generation
- Protected Profile endpoint
- MongoDB integration with Mongoose
- CORS support
- Password hashing with bcrypt

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file (copy from `.env.local.example`):
```bash
cp .env.local.example .env.local
```

3. Update `.env.local` with your MongoDB connection string and JWT secret:
```
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
```

4. Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## API Endpoints

### POST /api/auth/signup
Register a new user.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "city": "New York"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "user": {
    "id": "...",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "city": "New York"
  }
}
```

### POST /api/auth/login
Login and get JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "city": "New York"
  }
}
```

### GET /api/profile
Get user profile (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "user": {
    "id": "...",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "city": "New York"
  }
}
```

## User Model

- firstName (String, required)
- lastName (String, required)
- email (String, required, unique)
- password (String, required, hashed)
- city (String, required)

