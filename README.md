# ReelTrack V1

A personal movie watchlist, built using the **MERN** stack.

---

## Current Features

- Simple CRUD operations for movies (aka “Reels”)
- MongoDB connection via **Mongoose**
- Local testing via **Thunder Client**

---

## Endpoints

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| GET    | `/`                | Test root route       |
| GET    | `/api/reels`       | Get all reels         |
| POST   | `/api/reels`       | Create a new reel     |
| PUT    | `/api/reels/:id`   | Update a reel by ID   |
| DELETE | `/api/reels/:id`   | Delete a reel by ID   |

---

## Tech Stack

- MongoDB
- Express.js
- Node.js
- Thunder Client

---

## TODO

- [X] Build backend with MongoDB, Express.js, and Node.js
- [ ] Build frontend with React
- [ ] Connect frontend to backend via API
