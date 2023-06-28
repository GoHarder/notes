# Main Components <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Images and Containers](#images-and-containers)
- [Finding and Creating Images](#finding-and-creating-images)
  - [Pre-Built Images](#pre-built-images)
  - [Building Custom Images](#building-custom-images)
- [Running Images](#running-images)
- [Image Anatomy](#image-anatomy)

## Images and Containers

As stated before a **container** is a running unit of software.
An **image** is a blueprint for a container and it can create multiple containers.
An **image** contains the application code, tools, dependencies, and runtimes.

## Finding and Creating Images

### Pre-Built Images

There are many official images from reputable vendors that you can run.
One place to easily find these official images is [Docker Hub](https://hub.docker.com/search?q=).

You can run one of these images just by entering the below command below in your terminal of choice.

```bash
docker run node:latest
```

When the command is run docker pulls the image from the repository and creates a local copy on your workstation then starts the container based on that image.

### Building Custom Images

To build a custom image you simply create a file called `Dockerfile`.

Below is an example of a custom dockerfile with annotations.

```dockerfile
# Base image as base stage
# - The 18 in the images states that it is using the LTS version of node version 18
# - The image below creates a linux machine running the bullseye version of debian
# - The slim notation means its the smallest version of bullseye to run Node.js
FROM node:18-bullseye-slim as base

# Install tini for better kernel signal handling
# - This is a linux command to get a package called tini
RUN apt-get update \
   && apt-get install -y --no-install-recommends tini \
   && rm -rf /var/lib/apt/lists/*

# Expose a port for the server
# - The #PORT is an environment variable
# - This allows you more flexibility not hard coding setting in an image
EXPOSE $PORT

# Create the app directory
# Change permissions to node user
# - For Node.js images there is an existing node user
RUN mkdir /app && chown -R node:node /app

# Change the application directory
# - Same as `cd /app`
WORKDIR /app

# Set the system user to the node user
USER node

# Copy in the package file with correct permissions
# Using * prevents errors if file is missing
COPY --chown=node:node package*.json ./

# Use ci to only install packages from lock files
# This prevents dev dependencies from being installed
# - This command gets the npm packages for the application
RUN npm ci --only=production && npm cache clean --force

# Copy files with correct permissions
COPY --chown=node:node . .

# Set entrypoint to always run commands with tini
# - This command start the server
ENTRYPOINT ["/usr/bin/tini", "--"]

# - Instead of make multiple docker files with small changes you can make variations so the settings.

# Start the server with node directly
# Starting with npm uses an unneeded process
CMD ["node", "index.mjs"]

# The staging stage
FROM base as staging
CMD ["node", "index.mjs"]

# The production stage
FROM base as production
CMD ["node", "index.mjs"]
```

Once the settings are to your liking to make the image run the build command.

```bash
# Usage:  docker build [OPTIONS] PATH | URL | -

# This will build the docker file located in the current directory.
# The -t --tag option allows you to set a tag to an image.
# The tag below is for the app repository its a staging server image and the version is 1.0.0
# Tag formats depends on your organizations standards.
docker build -t 'app:staging-1.0.0' .
```

## Running Images

Images can be run in different ways.
There are many options to run containers.

```bash
# docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
# -p, --publish [host port]:[container port] Publish a container's port(s) to the host
# -i, --interactive                          Keep STDIN open even if not attached
# -t, --tty                                  Allocate a pseudo-TTY
#     --rm                                   Automatically remove the container when it exits

# Run a server and connect the host port 80 to the container port 3000
docker run -p '80:3000' 'app:staging-1.0.0'

# Start the container and allow the use of the containers terminal (-it)
# Once the user exits the container stop the container running (--rm)
docker run -it --rm 'app:staging-1.0.0'
```

## Image Anatomy

An important concept to remember when making images is that images are made of layers.
Each line of a dockerfile is a layer.

```dockerfile
# A layer in an image file
RUN mkdir /app && chown -R node:node /app
```

To speed up creation of images docker will cache previously made layers.
If a change to a dockerfile is a lower layer of an image docker can recycle the previously made layers.
