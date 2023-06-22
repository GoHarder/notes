# Docker <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Networking](#networking)
  - [Localhost](#localhost)
  - [Between Containers](#between-containers)

---

## Networking

Containers can be hooked up in different ways depending on what you want.

### Localhost

The example below will show how to connect an express app to a mongodb localhost database.

MongoDB's default port is 27017.

```js
// The code before the server is in a container
mongoose.connect('mongodb://localhost:27017/swfacorites', { useNewUrlParser: true }, (error) => {
   if (error) {
      console.log(error);
   } else {
      app.listen(3000);
   }
});
```

Update for container

```js
// localhost:27017 is replaced with host.docker.internal:27017
mongoose.connect('mongodb://host.docker.internal:27017/swfacorites', { useNewUrlParser: true }, (error) => {
   if (error) {
      console.log(error);
   } else {
      app.listen(3000);
   }
});
```

### Between Containers

This example shows how to connect to a containerized database.

The first step connecting containers is to find the ip address of the container.

```bash
docker container inspect '[container name]'
```

It will produce a json object that contains the property IPAddress

In the example below it returns a container address of 172.17.0.2

```js
// localhost:27017 from the first example is replaced with 172.17.0.2:27017
mongoose.connect('mongodb://172.17.0.2:27017/swfacorites', { useNewUrlParser: true }, (error) => {
   if (error) {
      console.log(error);
   } else {
      app.listen(3000);
   }
});
```

Connecting containers is easier if they are in the same docker network.

```bash
# Create a network
docker network create "$network_name"
```

```bash
# Restart the container in the network
docker run -d --name mongodb --network "$network_name" mongodb
```

```js
// localhost:27017 in the first example is replaced with mongodb:27017
mongoose.connect('mongodb://mongodb:27017/swfacorites', { useNewUrlParser: true }, (error) => {
   if (error) {
      console.log(error);
   } else {
      app.listen(3000);
   }
});
```

If you use docker-compose.yaml then everything is automatically in a network.
