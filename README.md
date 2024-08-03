# FastAPI + React CRUD Application

This repository contains a React frontend and a FastAPI backend, both containerized using Docker. Docker Compose is used to manage and run the services together.

## Prerequisites

- **Docker**: Ensure Docker is installed on your machine. [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Docker Compose is included with Docker Desktop for Windows and Mac. For Linux, follow [Docker Compose installation instructions](https://docs.docker.com/compose/install/).


## Setting Up and Running the Services

1. **Clone the Repository**

   ```
   git clone <repository-url>
   cd my-project
   ```
   
2. **Build and Start the Services**

Build the Docker images and start the containers using Docker Compose:

    ```
    docker-compose up --build
    ```

3. **Access the Services**

Frontend: Open http://localhost:3000 in your web browser to access the React frontend.
Backend: Access the FastAPI backend at http://localhost:8000.
Stopping the Services

4. **To stop and remove the containers, run:**
    ```
    docker-compose down
    ```
