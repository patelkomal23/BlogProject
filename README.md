# PR-8 BLOG PROJECT

A full-featured blog application built with **Node.js**, **Express**, **MongoDB**, and **EJS templating**. This project includes user authentication, blog management, comments, and admin controls.

---

## 📁 Project Structure

```
PR-8-BLOG/
│
├── configs/
│   ├── db.js              # Database connection
│   ├── dotenv.js          # Environment setup
│
├── controllers/
│   ├── admin.controller.js
│   ├── blog.controller.js
│
├── middlewares/
│   ├── imageUpload.js     # Multer upload
│   ├── userAuth.js        # Auth middleware
│
├── models/
│   ├── blog.model.js
│   ├── comment.model.js
│   ├── user.model.js
│
├── public/
│   ├── assets/
│   ├── dist/
│
├── routers/
│   ├── admin.route.js
│   ├── blog.route.js
│   ├── index.js
│
├── uploads/               # Uploaded blog images
│
├── views/
│   ├── pages/
│   │   ├── add-blog.ejs
│   │   ├── get-all-blogs.ejs
│   │   ├── get-all-myblogs.ejs
│   │   ├── get-all-users.ejs
│   │   ├── login.ejs
│   │   ├── signup.ejs
│   ├── partials/
│       ├── footer.ejs
│       ├── header.ejs
│       ├── index.ejs
│
├── .env
├── index.js               # Main server file
├── package.json
```

---

## 🚀 Features

* User Signup & Login
* JWT Authentication
* Add / Edit / Delete Blogs
* Upload Blog Images (Multer)
* View All Blogs
* View Logged-in User Blogs
* Admin Routes:

  * Manage Users
  * Activate/Deactivate Users
* Comment System (If implemented)
* EJS Template UI

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB & Mongoose**
* **EJS** (Template Engine)
* **Multer** (Image Uploads)
* **JWT** (Authentication)
* **Dotenv**

---

## 📦 Installation

### 1️⃣ Clone the Repository

```
git clone https://github.com/devanshi78/PR-8-Blog
cd PR-8-BLOG
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URL=mongodb://localhost:27017/blog
SECRET_KEY=your_jwt_secret
```

---

## Run the Project

Start development server:

```
npm run dev
```

Or normal start:

```
npm start
```

Server will run at:

```
http://localhost:3000
```

---

## Routes Overview

### Auth Routes

| Method | Route     | Description     |
| ------ | --------- | --------------- |
| POST   | `/signup` | Create new user |
| POST   | `/login`  | User login      |

### Blog Routes

| Method | Route       | Description              |
| ------ | ----------- | ------------------------ |
| GET    | `/blogs`    | Get all blogs            |
| GET    | `/myblogs`  | Get blogs of logged user |
| POST   | `/add-blog` | Create blog              |

### Admin Routes

| Method | Route           | Description     |
| ------ | --------------- | --------------- |
| GET    | `/admin/users`  | All users       |
| GET    | `/active/:id`   | Activate user   |
| GET    | `/deactive/:id` | Deactivate user |

---

## Image Uploads

* Images uploaded using **multer**
* Stored inside `/uploads/`
* Accessible statically using Express

---

## Contributing

Pull requests are welcome! Make sure to follow clean coding practices.

---

## License

This project is for educational purposes only.

---