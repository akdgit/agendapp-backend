# AgendApp Backend

> A robust Express.js REST API for managing activities and user accounts with email notifications and JWT authentication.

[![Node.js](https://img.shields.io/badge/node-%3E%3D14.0-brightgreen)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-%5E4.19-blue)](https://expressjs.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)

## Overview

AgendApp is a backend service for an event and activity scheduling application. It provides a RESTful API for user management, activity tracking, and email notifications. The backend is designed to work seamlessly with the [AgendApp frontend](https://github.com/juancarlos/agendapp-frontend) React application.

### Key Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Activity Management**: Create, update, delete, and list activities/tasks
- **Email Notifications**: Send confirmation and password recovery emails
- **Session Management**: Express sessions with secure cookie handling
- **CORS Enabled**: Configured for secure cross-origin requests
- **MySQL Database**: Persistent data storage with promise-based queries
- **Password Security**: bcryptjs encryption for user credentials

## Get Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14.0 or higher
- [MySQL](https://www.mysql.com/) 5.7 or higher
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd agendapp-backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
# Database Configuration
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=your_mysql_user
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=agendapp_db

# Server Configuration
PORT=4000

# Email Configuration (for nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# JWT Secret (optional, uses default in app)
JWT_SECRET=your_secret_key
```

4. **Set up the database**

Ensure your MySQL database is created and running. The application will use the tables defined in your database schema.

5. **Start the development server**

```bash
npm run dev
```

The server will start on `http://localhost:4000` with hot-reload enabled via nodemon.

### Usage

#### Development

```bash
# Run with nodemon (auto-reload on file changes)
npm run dev

# Run with babel-node
npm run babel-node src/index.js
```

#### Production

```bash
# Start the server
npm start
```

### API Endpoints

#### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `POST /api/users/login` - Login user
- `GET /api/users/logout` - Logout user
- `PUT /api/users/:id` - Update entire user
- `PATCH /api/users/:id` - Partially update user
- `POST /api/users/check-active` - Check user active status
- `PATCH /api/users/activate/:email` - Activate user account
- `DELETE /api/users/:id` - Delete user

#### Activities
- `GET /api/activities` - Get all activities
- `GET /api/activities/:id` - Get activity by ID
- `GET /api/activities/user/:user_id` - Get activities for specific user
- `POST /api/activities` - Create new activity
- `PUT /api/activities/:id` - Update entire activity
- `PATCH /api/activities/:id` - Partially update activity
- `DELETE /api/activities/:id` - Delete activity
- `DELETE /api/activities/clear/:user_id` - Clear all activities for user

#### Email
- `POST /api/email` - Send recovery code via email

### Project Structure

```

```

### Technologies

- **Runtime**: Node.js
- **Web Framework**: Express.js
- **Database**: MySQL
- **Authentication**: JWT (jsonwebtoken)
- **Password Encryption**: bcryptjs
- **Email**: Nodemailer
- **Session Management**: express-session
- **HTTP Client Logging**: Morgan
- **Transpiler**: Babel
- **Development**: Nodemon

### Configuration

#### CORS

The API is configured to accept requests from:
- `http://192.168.10.16:3000` (development)
- `https://agendapp-frontend.vercel.app` (production)

To modify allowed origins, edit the `allowedOrigins` array in [src/app.js](src/app.js#L30).

#### Session

Session secret is configured in [src/app.js](src/app.js#L14). Change this to a strong secret in production.

## Support & Resources

- **Issue Tracker**: [GitHub Issues](<repository-issues-url>)
- **Frontend Repository**: [AgendApp Frontend](https://github.com/juancarlos/agendapp-frontend)
- **Documentation**: See [docs/](docs/) folder for detailed API documentation

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Maintenance

**Current Maintainer**: [Your Name](profile-url)

For issues or questions, please open an issue on GitHub or contact the maintainer directly.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

**Note**: This is the backend API for AgendApp. For the full-stack experience, ensure you also have the [frontend application](https://github.com/juancarlos/agendapp-frontend) running.
