# Authentification application ft RCS

## Description

TODO

## How it works

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