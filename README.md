# Notes API

A REST API for a notes app, built with **Node.js, Express and MongoDB (Mongoose)**. It covers user signup and login with **JWT authentication** and **bcrypt** password hashing, protected CRUD endpoints for notes, and interactive **Swagger / OpenAPI** documentation.

## Tech stack

| Layer | Tools |
| --- | --- |
| Runtime & framework | Node.js, Express |
| Database | MongoDB with Mongoose |
| Auth | JSON Web Tokens (jsonwebtoken), bcryptjs |
| API docs | swagger-jsdoc, swagger-ui-express |
| Config | dotenv |

## Features

- Signup and login with hashed passwords (bcrypt) and JWT tokens
- Auth middleware that protects every notes endpoint
- Create, read, update and delete notes
- Reusable Mongoose plugin that adds `createdAt` / `updatedAt` timestamps and cleans the JSON output
- Swagger UI served at the root route for trying the API in the browser

## Project structure

```
config/        MongoDB connection
controllers/   auth and notes request handlers
middleware/    JWT auth middleware
models/        User and Note Mongoose models
plugins/       shared Mongoose schema plugin
routes/        /api/auth and /api/notes routers
swagger.js     OpenAPI spec setup
server.js      app entry point (port 8000)
```

## API endpoints

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| POST | `/api/auth/signup` | No | Register a new user |
| POST | `/api/auth/login` | No | Log in and receive a JWT |
| GET | `/api/auth/getAllUsers` | No | List users |
| POST | `/api/notes/create` | JWT | Create a note |
| GET | `/api/notes/get` | JWT | Get notes |
| PUT | `/api/notes/update` | JWT | Update a note |
| DELETE | `/api/notes/delete/:id` | JWT | Delete a note |

Swagger UI is available at `http://localhost:8000/` when the server is running.

## Environment variables

The server reads two variables from a local `.env` file (not committed):

```
MONGO_URI=<your MongoDB connection string>
JWT_SECRET=<a long random secret>
```

## Author

**Lokendra Kumar Prajapati**, Senior Frontend Engineer & Frontend Architect
[Portfolio](https://www.lokendra.work) · [LinkedIn](https://www.linkedin.com/in/lokendra-kumar-prajapati-9942072b8)

## License

All rights reserved. The code is public for portfolio review only; see [LICENSE](LICENSE).
