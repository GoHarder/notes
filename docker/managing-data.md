# Managing Data <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Types of Data](#types-of-data)
  - [Application Data](#application-data)
  - [Temporary Data](#temporary-data)
  - [Permanent Data](#permanent-data)
- [Volumes Overview](#volumes-overview)
  - [Volumes](#volumes)
  - [Bind Mounts](#bind-mounts)
- [Ignore Files](#ignore-files)
- [Environment Variables](#environment-variables)

## Types of Data

There are three types of data that are used to make a containerized application.

- Application (Code + Environment)
- Temporary App Data (e.g. Entered User Input)
- Permanent App Data (e.g. User Accounts)

### Application Data

The application data is created by the developer.
The developer code and packages are added in the build phase of the container.
Once the image is made it can't be changed and it is read only.

### Temporary Data

This data is fetched or created in the running container.
A server may produce a temporary file or it may fetch data from another application.
This data can be stored in temporary files or in memory.
If for some reason the container dies then this data dies with the container.

### Permanent Data

This data is similar to the application data but this data is required to run an application.
Data such as user accounts or user project files are required to survive if anything goes wrong.
The best method for storing this data is in a database that has redundant backup systems to prevent data loss.
There is another option called volumes that can store files on the host machine.

## Volumes Overview

Volumes are folders on your host machine hard drive which are mounted into containers.
There are two different types of containers that can be used.

- Volumes
- Bind Mounts

### Volumes

Volumes can be made anonymously or they can be given specific names.
Docker sets up a folder on the host machine and the exact location isn't readily available.
These volumes are manages using `docker volume` commands.
It's useful for data that should persist but you don't need access directly.

```bash
# Anonymous Volume
docker run —v /app/data

# Named Volume
# volume-name:location-in-container
docker run —v data:/app/data

```

### Bind Mounts

Bind mounts are volumes that are managed by the user, this requires the user to specify the source and destination.

```bash
# Bind Mount
# location-on-host-machine:location-in-container
docker run —v /path/to/code:/app/code
```

## Ignore Files

There are time when you need to manage the files inside of a docker image.
Below is an example.

```dockerfile
# This docker command on this layer installs packages from a manifest
RUN npm ci --only=production && npm cache clean --force

# This commands all the files in the host into the container
COPY --chown=node:node . .
```

These instructions will copy the packages twice into the container which wastes space and time.
Fortunately there is an easy solution to this just create a .dockerignore file.
A docker ignore file behaves like a gitignore file so prevent copying file just list it in the ignore file.

```gitignore
.vscode
node_modules
file-with-secrets.config
```

## Environment Variables

For creating different instances of a server sometimes a environment variable needs to be changes between them.

```bash
# The --env option allows you to set the PORT environment variable
docker run --env PORT=8000 example-image
```

```dockerfile
# The above command will override the default port 80 option
ENV PORT 80

EXPOSE $PORT
```