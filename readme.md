<h1 align="center" style="border-bottom: none">
  <img alt="StockIt" src="https://github.com/IgnacioGalliano/be-stockit/blob/main/sources/images/StockIt.png?raw=true"><br>
  StockIt
</h1>

StockIt is a backend service designed to work with the **StockIt iOS app**.  
It can be easily run using **Docker Compose**, making it ideal for self-hosting at home, for example on a **Raspberry Pi**.

---

## Requirements

- Docker
- Docker Compose

---

## Setup

### 1. Environment variables

In the **root of the project**, create a `.env` file.  
Example:

```env
NODE_ENV=development
PORT=3000

DATABASE=your_remote_data_base
DATABASE_PASSWORD=your_password
DATABASE_DOCKER=mongodb://mongo:27017/stockit

MINIO_ENDPOINT=minio
MINIO_PORT=9000
MINIO_ACCESS_KEY=your_access_key
MINIO_SECRET_KEY=your_secret
MINIO_BUCKET=stockit-images
MINIO_USE_SSL=false

JWT_SECRET=your-ultra-secure-and-ultra-long-secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com // Google sign in
```

### 2. Run the project

From the project root, run:

`docker-compose up --build`

The backend will be available on the configured port once all containers are up.

### 3. Create a local MinIO bucket (to save images) and make it public

`docker exec -it minio_client sh`

`mc alias set localminio http://minio:9000 user secret123456`

`mc mb localminio/stockit-images`

`mc anonymous set download localminio/stockit-images`

## Use the postman collections to interact with the API

[Link To Postman](https://www.postman.com/ignaciogalliano/workspace/stockit/collection/9001181-bf104ce3-9f28-4080-8003-11687dd7fe76?action=share&source=copy-link&creator=9001181)