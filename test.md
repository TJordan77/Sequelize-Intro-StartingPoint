# Sequelize + PostgreSQL Task Manager - No `.env` Version
### Group Work Breakdown (3 People)

## 👩‍💻 Person 1: Database & Models

### Files to Work On:
- `/database/db.js`
- `/database/task.js`
- `/database/user.js`
- `/database/index.js` (associations)
- `/database/seed.js`

### Tasks:
- Hardcode the PostgreSQL connection in `db.js` like this:
  ```js
  const db = new Sequelize('postgres://postgres:password@localhost:5432/ttp_backend', {
    logging: false,
  });
  ```
- Define the `Task` model with:
  - `title` (required string)
  - `description` (required string)
  - `completed` (boolean, default: false)
- Define the `User` model with:
  - `name` (required string)
- Set up associations:
  ```js
  User.hasMany(Task, { foreignKey: "userId" });
  Task.belongsTo(User,   { foreignKey: "userId" });
  ```
- In `seed.js`, create a few Users and Tasks. Confirm seed works with `npm run seed`.

---

## 👨‍💻 Person 2: Express API Routes

### Files to Work On:
- `/api/tasks.js`
- `/api/index.js`

### Tasks:
- Build the following routes in `tasks.js`:
  - `GET /api/tasks` (returns all tasks)
  - `GET /api/tasks/:id` (returns task with user)
  - `POST /api/tasks` (creates a new task)
  - `PATCH /api/tasks/:id` (updates a task)
  - `DELETE /api/tasks/:id` (deletes a task)
- Include error handling for invalid/missing input
- Mount routes in `api/index.js`
- Test routes using Postman

---

## 👩‍💻 Person 3: Frontend + Testing + CORS

### Files to Work On:
- Frontend repo (React)
- `index.js` (Express entrypoint if CORS setup is needed)

### Tasks:
- Make sure all frontend fetch requests go to `http://localhost:8080/api`
- Remove `.env` usage from frontend (`VITE_API_BASE` not needed)
- If CORS is enabled in backend, change to:
  ```js
  const cors = require("cors");
  app.use(cors()); // Allow all during dev
  ```
- Run frontend locally with `npm run dev`
- Test full workflow (create/edit/delete tasks)
- Verify persistence (data stays after server restarts)

---

## Group Testing Checklist:
- [ ] Can seed the DB with `npm run seed`
- [ ] All CRUD routes tested in Postman
- [ ] Frontend correctly displays all tasks
- [ ] Tasks persist after server restart
- [ ] Project works with NO `.env` file or `dotenv` dependency