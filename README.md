# Authentification application ft RCS

## Requirements

- RDS postgresql database

## Description

TODO

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
docker run -d -p 80:8080 remirubis/devops-ci-cd:latest
```

### More commands

*This steps is done by CI/CD*

- Build image

```shell
docker build -f ./docker/prod/Dockerfile -t remirubis/devops-ci-cd:latest .
```

- Push image to Docker Hub

```shell
docker push remirubis/devops-ci-cd:latest
```