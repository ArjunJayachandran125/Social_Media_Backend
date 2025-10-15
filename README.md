Social Media Backend API

A fully functional backend for a social media application built with **Node.js**, **Express**, and **MongoDB**.

Features
- User registration & login with JWT authentication  
- CRUD operations for posts  
- File uploads using Multer  
- Middleware protection for private routes  
- Scalable MVC architecture  
- Tested via Postman

Tech Stack
Node.js | Express | MongoDB | Mongoose | JWT | Multer | Bcrypt | Render | Postman

Installation
```bash
git clone https://github.com/ArjunJayachandran125/social-media-backend.git
cd social-media-backend
npm install
```

Create a `.env` file with:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000
```

Then run:
```bash
npm run dev
```

Test with Postman
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/posts` 
- POST `/api/posts` 

Example Request (Postman)
**POST** `/api/posts`  
Headers: `Authorization: Bearer <token>`  
Body: form-data → `caption: "My first post"`, `image: <file>`

Deployment
Deployed easily on Render

---
**Author:** [Arjun Jayachandran](https://github.com/ArjunJayachandran125)
