# Managing Components <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Starting and Stopping Containers](#starting-and-stopping-containers)
- [Interacting with Containers](#interacting-with-containers)
- [Interactive Mode](#interactive-mode)
- [Deleting Images and Containers](#deleting-images-and-containers)
- [Remove Stopped Containers Automatically](#remove-stopped-containers-automatically)
- [Naming and Tagging Containers](#naming-and-tagging-containers)
  - [Names](#names)
  - [Tags](#tags)
- [Storage](#storage)
- [Cheat Sheet](#cheat-sheet)

## Starting and Stopping Containers

Working with containers it is useful to see what containers are running.

```bash
# List all docker containers
# -a, --all Show all containers (default shows just running)
docker ps -a

CONTAINER ID   IMAGE                          COMMAND                  CREATED          STATUS         PORTS                                      NAMES
5f0b77d1250f   jonasal/nginx-certbot:latest   "/docker-entrypoint.…"   10 seconds ago   Up 9 seconds   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   nginx-certbot-1
```

It could be possible that there could be a stopped container to start it back up.
It can also be stopped again.

```bash
# Usage:  docker start [OPTIONS] CONTAINER [CONTAINER...]
docker start reverse-proxy

# Usage:  docker stop [OPTIONS] CONTAINER [CONTAINER...]
docker stop reverse-proxy
```

## Interacting with Containers

When working with containers from the terminal, the connection can be in two states attached and detached.

```bash
# This command will attach your terminal to the on in the container
docker run -p '80:80'

# To use the run command and detach the terminal add the -d option
# You will be able to use the terminal for other tasks
docker run -d -p '80:80'

# To attach to a container
docker attach nginx-certbot-1
```

To detach from attached container, press `Ctrl+P` followed by `Ctrl+Q`.

## Interactive Mode

To interact with a container when you start it up.

```bash
# Lets you use the terminal inside the container
docker run -it node-server
```

## Deleting Images and Containers

```bash
# Delete a container
docker rm node-server-container

# Delete an image
docker rmi node-server-image
```

## Remove Stopped Containers Automatically

```bash
# When the container is stopped it will be deleted
docker run --rm special-image
```

## Naming and Tagging Containers

### Names

Each container is assigned a unique id so that you can run commands against it.

```bash
# From the list example above
docker ps -a

CONTAINER ID   IMAGE                       
5f0b77d1250f   jonasal/nginx-certbot:latest
```

There is a more convenient way to select and manage containers names and tags.
When running a container you can assign the name to a container.

```bash
# The --name option allows you to give your container a specific name.
docker run --name 'my-container-name' 'my-image-name'
```

### Tags

The same idea of naming containers can also be applied to images.
There is a little bit more than simply giving any type of name.

```bash
# The format of the tag is as follows
example='name:tag'

# The name part of the tag is the name of the image repository.
# This will be important for storage.

# The tag portion can be used to describe a specific instance like a application version.

# You can add a tag with -t or --tag like below
docker build -t 'calculator-staging:1.0.0'
```

## Storage

To easily store and share images with a development team or to have versions of a server you can add images to a repository.
You can store your images at [Docker Hub](https://hub.docker.com/) and it included features like image security scanning but it is not the only option you can store your images in any repository.

The commands below will allow you to push and pull images from your repository.

```bash
# To push to a docker repository
# The goharder/ is the name of the repository followed by the image tag
docker push 'goharder/calculator-staging:1.0.0'

# Pulling an image is very similar
docker pull 'goharder/calculator-staging:1.0.0'

# If using a different registry the string needs to be
# HOST:NAME
```
## Cheat Sheet

[File](../assets/image-container-cheat-sheet.pdf)