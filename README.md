# Authentification application ft RCS

## Requirements

- RDS postgresql database

## Description

This repository provides a robust and secure user authentication system built using Node.js, Express, and PostgreSQL. It enables users to register and login to an application by securely storing their credentials in a PostgreSQL database hosted on Amazon RDS.

*Key Features:*

- User Registration: The repository includes a user registration functionality that allows new users to create an account by providing their desired username and password. The registration process includes password hashing and salting techniques to ensure the security of user credentials.
- User Login: Registered users can securely log in to the application using their credentials. The repository handles the authentication process by verifying the entered username and password against the stored values in the PostgreSQL database.
- Database Integration: The repository seamlessly integrates with a PostgreSQL database hosted on Amazon RDS. It utilizes the PostgreSQL driver for Node.js to establish a connection and execute database operations efficiently. The database schema includes tables for storing user information, such as usernames and hashed passwords.

## How it works

### Setup environment

```shell
mv .env.sample .env
```

Edit `.env` file and set your own values.

*Example:*

```
PORT=8080

POSTGRESQL_DB_HOST=<AWS endpoint>
POSTGRESQL_DB_USER=dev
POSTGRESQL_DB_PASSWORD=MyPassword
POSTGRESQL_DB=postgres

```

### Launch application

```shell
docker run -d -p 80:8080 --name auth_app --rm remirubis/devops-ci-cd:latest
```

### More commands

- See logs of container

*This steps is done by CI/CD*

- Build image

```shell
docker build -f ./docker/prod/Dockerfile -t remirubis/devops-ci-cd:latest .
```

- Push image to Docker Hub

```shell
docker push remirubis/devops-ci-cd:latest
```

## Security and maintainability

- [codeclimate.com](https://codeclimate.com/github/MDS-M1/dev-secops-ci-cd)

[Screenshot-2023-06-30-at-16-49-56.png](https://postimg.cc/wtxrLzx0)

- [sonarcloud.io](https://sonarcloud.io/summary/overall?id=MDS-M1_dev-secops-ci-cd)

[Screenshot-2023-06-30-at-16-50-33.png](https://postimg.cc/dLBmdy7c)