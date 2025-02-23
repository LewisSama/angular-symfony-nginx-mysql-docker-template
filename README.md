# IMPORTANT: 

At this time, the project is for dev environment only. I'll need to modify the configuration to be production ready.

The next step are: 

- Add production configuration through environment variables, secrets and docker-compose configuration.
- Add healthcheck for services
- Modify the frontend to serve static file in prod environment

## If you want to contribute to the project, feel free to fork it and submit a pull request or open an issue.

# Project description

I needed a simple boilerplate to work on different project and extends my knowledge on docker and docker-compose.
This project is the result of my work. It may not be perfect, but I'll try to improve it over time.

The project is composed of 4 services:
- A frontend service using Angular
- A backend service using Symfony
- A database service using MySQL
- A nginx service to serve the frontend and the backend

# How to launch the project

Simply run the following command:

```docker-compose up -d --build```

This will build the images and start the containers. 
The frontend will be available at `http://localhost:8080/` and the backend will be available at `http://localhost:8080/api/`.

You can modify ports for the nginx container in the `docker-compose.yml` file to point to another desired port.

# How to stop the project

To stop the project, run the following command:

```docker-compose down```

# How to edit database configuration

The database configuration is stored in the `.env` file. You can modify the database configuration there.

Actually, the DB infos are not shared to the backend configuration so you'll need to adapt the file `backend/.env` to match the database configuration.

If you want to change the database configuration, you'll need to rebuild the backend image by running the following command:

```docker-compose up -d --build database```  

Documentation to go further:

- [Symfony](https://symfony.com/doc/current/index.html)
- [Angular](https://angular.dev/overview)
- [MySQL](https://dev.mysql.com/doc/)
- [NGINX](https://nginx.org/en/docs/)
- [Docker](https://docs.docker.com/manuals/)
- [Docker-compose](https://docs.docker.com/compose/)