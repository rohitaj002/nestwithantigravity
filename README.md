# NestJS Users & Auth API

A progressive [Nest](https://github.com/nestjs/nest) framework starter project implementing a robust User Management system with JWT Authentication.

## Features

- **User Management**: Complete CRUD operations for users.
- **Authentication**: Secure JWT-based authentication (Login, Register).
- **API Documentation**: Interactive Swagger documentation available at `/api`.
- **Database**: SQLite integration using TypeORM for easy setup and development.
- **Security**: Password hashing with `bcrypt` and protected routes via Passport.

## Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Database**: [SQLite](https://www.sqlite.org/)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Auth**: [Passport.js](https://www.passportjs.org/) + [JWT](https://jwt.io/)
- **Documentation**: [Swagger (OpenAPI)](https://swagger.io/)

## Installation

```bash
$ npm install
```

## Configuration

1. Create a `.env` file in the root directory (refer to `.env` example).
2. Set your `JWT_SECRET` and other environment variables:

```env
DATABASE_TYPE=sqlite
DATABASE_NAME=db.sqlite
JWT_SECRET=your_secret_key
JWT_EXPIRATION=3600s
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Documentation

Once the application is running, you can access the interactive Swagger UI documentation at:
[http://localhost:3000/api](http://localhost:3000/api)

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

This project is [MIT licensed](LICENSE).
