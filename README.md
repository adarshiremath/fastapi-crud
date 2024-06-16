# FastAPI CRUD App

This project is a simple CRUD application built with FastAPI. It allows you to manage a list of fresh produce items through a RESTful API.

## Features

- Create, read, update, and delete produce items.
- Dockerized for easy deployment.
- Environment configuration using `.env` file.
- Automatic API documentation with Swagger.
- Unit and integration tests with CI using GitHub Actions.

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/fastapi-crud.git
cd fastapi-crud

### Create a virtual environment and install dependencies

python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt


### Set up environment variables
Create a .env file in the root directory and add the following:

DATABASE_URL=sqlite:///./test.db

### Run the application
uvicorn main:app --reload


