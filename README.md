# ReelTrack V1

A personal movie watchlist, built using the **MERN** stack.

---

## Features

- CRUD via **REST API**
- MongoDB connection via **Mongoose**
- Styled with **Tailwind CSS**, **DaisyUI**, and **Lucide**
- Tested locally via **Thunder Client**

---

## Endpoints

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| GET    | `/api/reels`       | Get all reels         |
| GET    | `/api/reels/:id`   | Get a reel by ID      |
| POST   | `/api/reels`       | Create a new reel     |
| PUT    | `/api/reels/:id`   | Update a reel by ID   |
| DELETE | `/api/reels/:id`   | Delete a reel by ID   |

---

## Tech Stack

- **Frontend**: React, Tailwind CSS, DaisyUI, Lucide
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Testing**: Thunder Client (for REST API)

---

## Setup

1. Create a `.env` file inside the `backend/` directory:

```env
# backend/.env
MONGODB_URI=mongodb+srv://<username>:<password>@backenddb.ifbuzax.mongodb.net/ReelTrack-V1?retryWrites=true&w=majority&appName=<dbname>
```

> Replace `<username>`, `<password>`, and `<dbame>` with your actual MongoDB Atlas credentials.

2. From the root directory, install all dependencies:

```bash
npm run build
```

3. From the root directory, start both servers:

```bash
npm run start
```
