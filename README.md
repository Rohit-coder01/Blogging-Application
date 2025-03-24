# Blogging Web Application

## Overview
This is a full-fledged blogging web application built using **React** and **Tailwind CSS**, with **JWT-based authentication** for secure access. It allows users to create, manage, and categorize blog posts while ensuring that only authenticated users can perform write operations.

## Features
- 📝 **Create, view Blog Posts** (Only for authenticated users)
- 📌 **Categorization**: Add categories to organize posts
- 📜 **Rich Text Editor** for better formatting
- 🔍 **Search and Filter** Blogs
- 🔒 **JWT Token Authentication** for secure login
- 🔐 **Password Hashing** using Bcrypt.js
- 🌍 **CORS Handling** for secure API requests
- 🎨 **Fully Responsive UI** with Tailwind CSS
- 🚀 **Fast and Optimized Performance**

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **State Management:** React Hooks (useState, useEffect, useContext)
- **Routing:** React Router
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Security:** Bcrypt.js for password hashing
- **API Integration:** RESTful API
- **CORS Handling:** Configured using CORS middleware

## Authentication & Security
### JWT Authentication
- Users log in using their credentials.
- Upon successful login, a **JWT token** is generated and sent to the client.
- This token is stored in the browser (local storage or HTTP-only cookie) and used for authentication in subsequent requests.
- Protected routes ensure that only authenticated users can create, edit, or delete posts.

### Password Hashing with Bcrypt.js
- **Bcrypt.js** is used to securely hash user passwords before storing them in the database.
- When a user logs in, the hashed password is compared with the stored hash using Bcrypt’s compare function.

### CORS Handling
- **CORS (Cross-Origin Resource Sharing)** is configured to allow secure communication between the frontend and backend.
- Used to prevent unauthorized access while enabling necessary cross-origin requests.

## Usage
### For Users:
- **Register/Login** to access the platform.
- **Create a Post**: Authenticated users can create blog posts.
- **View Posts**: All users (authenticated or not) can view published blog posts.
- **Add Categories**: Users can assign categories to their posts.

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate and get a JWT token

### Posts
- `GET /api/posts` - Fetch all blog posts
- `GET /api/posts/:id` - Fetch a single post
- `POST /api/posts` - Create a new post (Authenticated users only)
- `PUT /api/posts/:id` - Update a post (Only the owner can edit)
- `DELETE /api/posts/:id` - Delete a post (Only the owner can delete)

### Categories
- `GET /api/categories` - Fetch all categories
- `POST /api/categories` - Create a new category (Authenticated users only)

## Contributing
Contributions are welcome! If you find a bug or want to add a new feature:
1. Fork the repository.
2. Create a new branch (`feature-new-feature`).
3. Commit your changes.
4. Push to your branch and create a Pull Request.

## License
This project is open-source.

---
Made with ❤️ by Rohit Negi
