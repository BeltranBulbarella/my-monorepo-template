# My Monorepo Template

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Prerequisites](#prerequisites)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Initializing Prisma](#initializing-prisma)
6. [Available Scripts](#available-scripts)
7. [Linting and Formatting](#linting-and-formatting)
8. [Version Control](#version-control)
9. [Troubleshooting](#troubleshooting)
10. [Contributing](#contributing)
11. [License](#license)
12. [Acknowledgements](#acknowledgements)

---

## Introduction

Welcome to the **My Monorepo Template**! This monorepo serves as a robust and scalable foundation for your full-stack projects, integrating a React frontend and a Node.js backend with TypeScript. It leverages powerful tools and libraries to ensure code quality, maintainability, and developer productivity.

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Zustand**: A small, fast, and scalable state-management solution.
- **Material-UI (MUI)**: A popular React UI framework with pre-built components.
- **Vite**: A fast build tool and development server for modern web projects.

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **Prisma**: An ORM for database access with TypeScript support.
- **TypeScript**: Ensuring type safety and enhanced development experience.

### Shared Tools
- **Yarn Workspaces**: For managing monorepos with multiple packages.
- **ESLint**: For identifying and reporting on patterns in JavaScript/TypeScript.
- **Prettier**: An opinionated code formatter.
- **Concurrently**: For running multiple commands concurrently.

---

## Prerequisites

Before getting started, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher): [Download and Install Node.js](https://nodejs.org/)
- **Yarn** (v1.22 or higher): [Install Yarn](https://classic.yarnpkg.com/en/docs/install/)
- **Git**: [Install Git](https://git-scm.com/downloads)
- **Database**: PostgreSQL, MySQL, or any other supported by Prisma. Ensure it's running and accessible.

---

## Project Structure

```
my-monorepo/
├── config/
│   ├── .eslintrc.js
│   └── .prettierrc
├── packages/
│   ├── frontend/
│   │   ├── node_modules/
│   │   ├── public/
│   │   ├── src/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── .eslintrc.js
│   │   └── ...other frontend files
│   └── backend/
│       ├── node_modules/
│       ├── prisma/
│       ├── src/
│       ├── package.json
│       ├── tsconfig.json
│       ├── .eslintrc.js
│       └── ...other backend files
├── package.json
├── yarn.lock
├── .prettierignore
├── .eslintignore
└── README.md
```

---

## Getting Started

Follow the steps below to set up and run the monorepo on your local machine.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/beltranbulbarella/my-monorepo.git
   cd my-monorepo
   ```

2. **Install Dependencies**

   From the root directory, install all dependencies using Yarn Workspaces:

   ```bash
   yarn install
   ```

   > **Note:** Yarn Workspaces will automatically install dependencies for both `frontend` and `backend` packages.

### Environment Variables

Both the frontend and backend require environment variables to function correctly. Follow these steps to set them up.

#### Backend Environment Variables

1. **Navigate to the Backend Package**

   ```bash
   cd packages/backend
   ```

2. **Create a `.env` File**

   ```bash
   touch .env
   ```

3. **Add the Following Variables to `.env`**

   ```env
   PORT=4000
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
   ```

   > **Replace** `user`, `password`, `localhost`, `5432`, and `mydb` with your actual database credentials and details.

#### Frontend Environment Variables

1. **Navigate to the Frontend Package**

   ```bash
   cd ../frontend
   ```

2. **Create a `.env` File**

   ```bash
   touch .env
   ```

3. **Add the Following Variables to `.env`**

   ```env
   VITE_API_URL=http://localhost:4000/api
   ```

   > **Note:** Vite requires environment variables to be prefixed with `VITE_`.

### Initializing Prisma

Prisma is used for database interactions in the backend. Follow these steps to set it up.

1. **Navigate to the Backend Package**

   ```bash
   cd packages/backend
   ```

2. **Install Prisma Client**

   ```bash
   yarn add @prisma/client
   ```

3. **Run Prisma Migrations**

   Assuming you've defined your Prisma schema in `prisma/schema.prisma`, apply the migrations:

   ```bash
   npx prisma migrate dev --name init
   ```

   This command will:
    - Create a new migration with the name `init`.
    - Apply the migration to your database.
    - Generate the Prisma Client.

4. **Generate Prisma Client (if not already done)**

   ```bash
   npx prisma generate
   ```

   > **Ensure** your database specified in `DATABASE_URL` is running before executing migrations.

---

## Available Scripts

### Root `package.json` Scripts

Located at the root of the monorepo, these scripts manage the entire workspace.

| Command         | Description                                             |
| --------------- | ------------------------------------------------------- |
| `yarn dev`      | Runs both frontend and backend in development mode concurrently. |
| `yarn build`    | Builds both frontend and backend for production.        |
| `yarn lint`     | Lints both frontend and backend codebases.             |
| `yarn format`   | Formats code across the monorepo using Prettier.        |

### Frontend `package.json` Scripts

Located at `packages/frontend/package.json`.

| Command                  | Description                                |
| ------------------------ | ------------------------------------------ |
| `yarn dev`               | Starts the Vite development server.        |
| `yarn build`             | Builds the React application for production. |
| `yarn lint`              | Runs ESLint to check for code quality issues. |
| `yarn type-check`        | Runs TypeScript type checking.            |

### Backend `package.json` Scripts

Located at `packages/backend/package.json`.

| Command                        | Description                                 |
| ------------------------------ | ------------------------------------------- |
| `yarn dev`                     | Starts the Express server with Nodemon for hot reloading. |
| `yarn build`                   | Compiles TypeScript to JavaScript.          |
| `yarn start`                   | Runs the compiled Express server.           |
| `yarn lint`                    | Runs ESLint to check for code quality issues. |
| `yarn prisma`                  | Access Prisma CLI commands.                 |
| `yarn prisma migrate dev`      | Applies database migrations.                |
| `yarn prisma generate`         | Generates the Prisma Client.                |

---

## Linting and Formatting

Maintaining code quality and consistency is crucial. This monorepo uses ESLint and Prettier for linting and formatting.

### ESLint

- **Configuration**: Shared ESLint configuration is located in `config/.eslintrc.js`.
- **Running ESLint**:
    - **Root**: `yarn lint`
    - **Frontend**: `yarn workspace frontend lint`
    - **Backend**: `yarn workspace backend lint`
- **Fixing Issues**: You can automatically fix linting issues by running:

  ```bash
  yarn lint --fix
  ```

### Prettier

- **Configuration**: Shared Prettier configuration is located in `config/.prettierrc`.
- **Running Prettier**:
    - **Root**: `yarn format`
- **Manual Formatting**: To format specific files, use:

  ```bash
  yarn prettier --write "packages/**/*.{js,jsx,ts,tsx,json,css,md}"
  ```

---

## Version Control

This monorepo is configured to use Git for version control. Essential files and directories are excluded via `.gitignore` to prevent unnecessary clutter.

### `.gitignore` Includes

- `node_modules/`
- `build/`
- `dist/`
- `.env`
- `yarn.lock`
- Other sensitive or build-related files.

### Initializing Git

If you haven't initialized Git yet, follow these steps:

1. **Initialize Git Repository**

   ```bash
   git init
   ```

2. **Add Remote Repository**

   ```bash
   git remote add origin https://github.com/your-username/my-monorepo.git
   ```

3. **Commit and Push**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

---

## Troubleshooting

Encountering issues? Here are some common problems and their solutions.

### `dev` Script Not Found

**Issue:**

When running `yarn dev`, you receive an error indicating that the `dev` script is not found in the backend workspace.

**Solution:**

1. **Verify `backend/package.json`**

   Ensure the `dev` script is defined:

   ```json
   {
     "scripts": {
       "dev": "nodemon src/index.ts",
       // ...other scripts
     }
   }
   ```

2. **Reinstall Dependencies**

   From the root directory, run:

   ```bash
   yarn install
   ```

3. **Run Backend Separately**

   Navigate to the backend package and run the `dev` script:

   ```bash
   cd packages/backend
   yarn dev
   ```

   If it runs successfully, the issue might be with the concurrent execution.

### Port Conflicts

**Issue:**

Ports `5173` (frontend) or `4000` (backend) are already in use.

**Solution:**

- **Change Frontend Port**: Modify `vite.config.ts` or `vite.config.js` in the frontend package.

  ```javascript
  export default defineConfig({
    server: {
      port: 3001, // New port number
    },
  });
  ```

- **Change Backend Port**: Update the `PORT` variable in `packages/backend/.env`.

  ```env
  PORT=4001
  ```

### Prisma Errors

**Issue:**

Errors related to database connections or migrations.

**Solution:**

1. **Check `DATABASE_URL`**

   Ensure the connection string in `packages/backend/.env` is correct.

2. **Run Migrations**

   ```bash
   cd packages/backend
   npx prisma migrate dev --name your_migration_name
   ```

3. **Generate Prisma Client**

   ```bash
   npx prisma generate
   ```

### ESLint or Prettier Issues

**Issue:**

Linting or formatting errors preventing the development server from running smoothly.

**Solution:**

1. **Check Configuration Files**

   Ensure `config/.eslintrc.js` and `config/.prettierrc` are correctly set up.

2. **Auto-fix Issues**

   ```bash
   yarn lint --fix
   yarn format
   ```

---

## Contributing

Contributions are welcome! Whether you're fixing bugs, improving documentation, or adding new features, your help is appreciated.

### How to Contribute

1. **Fork the Repository**

   Click the "Fork" button at the top-right corner of this repository to create a copy under your GitHub account.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/your-username/my-monorepo.git
   cd my-monorepo
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   Implement your feature or fix.

5. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Add feature: your-feature-name"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**

   Navigate to your fork on GitHub and click "Compare & pull request" to submit your changes for review.

### Code of Conduct

Please adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and respectful environment for all contributors.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Material-UI (MUI)](https://mui.com/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Concurrently](https://github.com/open-cli-tools/concurrently)

---

## Contact

For any questions, suggestions, or feedback, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

**Happy Coding! 🚀**

---
