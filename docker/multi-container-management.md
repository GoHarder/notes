# Multiple Container Management <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [The Problem](#the-problem)
- [Docker Compose File](#docker-compose-file)
- [Using The Compose File](#using-the-compose-file)

## The Problem

Using containers is a powerful option to quickly build various software projects.
However, running multiple containers that are networked together using long CLI commands can get very cumbersome.
Docker has a simple solution for that the docker compose file.

## Docker Compose File

Below is an example of a docker compose file (docker-compose.yaml).

```yaml
# This is a list of services inside the network
services:
  # A container in the network
  nginx-certbot:
    # The image the container is based off of
    image: jonasal/nginx-certbot:latest
    # An option to restart the container unless its stopped by the user
    restart: unless-stopped
    # This is a file containing the environment variables for the container. 
    env_file:
      - ./nginx-certbot/.env
    # Map ports 80 and 443 from the host machine to the container
    ports:
      - '80:80'
      - '443:443'
    # Insert bind mount volumes into the container
    volumes:
      - ./nginx-certbot/etc:/etc/letsencrypt
      - ./nginx-certbot/config:/etc/nginx/user_conf.d
  # Another container
  staging:
    image: goharder/calculator:0.5.0
    # Instructions to build the image  
    build:
      # The dockerfile is in the same directory as this file
      context: ./
      # Use the staging variant of the docker file
      target: staging
    ports: 
      '5000:5000'
``` 

## Using The Compose File

Starting all the containers uses a very simple command.

```bash
docker-compose up
```

Including starting all the containers and networking them the command also builds the images if instructed to.