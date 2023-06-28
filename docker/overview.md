# Overview <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [What is Docker?](#what-is-docker)
- [What are Containers?](#what-are-containers)
- [Benefits of Using Containers](#benefits-of-using-containers)
- [Docker Installation](#docker-installation)
- [Docker Components](#docker-components)
  - [Docker Engine](#docker-engine)
  - [Docker Desktop](#docker-desktop)
  - [Docker Hub](#docker-hub)
  - [Docker Compose](#docker-compose)

## What is Docker?

**Docker** is a container technology.
A tool for creating and managing containers.

**Docker** simplifies the creation and management of containers but it isn't the only option.
There are other options to create and run containers.
Docker happens to be, for now, the best option to create containers.

## What are Containers?

A **Container** is a standardized unit of software.
This unit contains the code and the dependencies to run the code.
For example it can be a Node.js application code with the Node.js runtime.

## Benefits of Using Containers

1. The same container always yields the exact same application and execution behavior.
This removes the "It works on my machine" problem when debugging an application.

2. Support for containers is built into modern operating systems.
Windows, Linux, and Apple users can use containers on their own system.
A team could use different operating systems but can work on the same Linux server for example.

3. If a developer is working on multiple projects the tooling from one project can be isolated from another project.
For example if one project uses an older version of python to another there isn't a need to have uninstall and reinstall versions of python on the developers machine.

## Docker Installation

Below is an official reference to install docker on your workstation.

- [Mac](https://docs.docker.com/desktop/install/mac-install/)
- [Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Linux](https://docs.docker.com/desktop/install/linux-install/)

## Docker Components

### Docker Engine

> Docker Engine is an open source containerization technology for building and containerizing your applications. Docker Engine acts as a client-server application with:

> A server with a long-running daemon process dockerd.
> APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon.
> A command line interface (CLI) client docker.
> The CLI uses Docker APIs to control or interact with the Docker daemon through scripting or direct CLI commands.
> Many other Docker applications use the underlying API and CLI.
> The daemon creates and manage Docker objects, such as images, containers, networks, and volumes.

[Source](https://docs.docker.com/engine/)

### Docker Desktop

> Docker Desktop is a one-click-install application for your Mac, Linux, or Windows environment that enables you to build and share containerized applications and microservices.

> It provides a straightforward GUI (Graphical User Interface) that lets you manage your containers, applications, and images directly from your machine.
> Docker Desktop can be used either on it’s own or as a complementary tool to the CLI.

> Docker Desktop reduces the time spent on complex setups so you can focus on writing code.
> It takes care of port mappings, file system concerns, and other default settings, and is regularly updated with bug fixes and security updates.

[Source](https://docs.docker.com/desktop/)

### Docker Hub

> Docker Hub is the world's largest library and community for container images.

[Source](https://hub.docker.com/)

Docker hub is also a repository for your self made images.

### Docker Compose

> Compose is a tool for defining and running multi-container Docker applications.
> With Compose, you use a YAML file to configure your application’s services.
> Then, with a single command, you create and start all the services from your configuration.

> Compose works in all environments: production, staging, development, testing, as well as CI workflows.
> It also has commands for managing the whole lifecycle of your application:

> - Start, stop, and rebuild services
> - View the status of running services
> - Stream the log output of running services
> - Run a one-off command on a service

[Source](https://docs.docker.com/compose/)