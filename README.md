# Developing a step-by-step web chat with Elixir and Phoenix Framework

Developed live during a workshop at [T3chFest 2019](https://t3chfest.uc3m.es/2019/learn-with-t3chfest/introduccion-elixir-phoenix-framwork-desarrollando-chat-paso-paso/)


### Show me the step-by-step guide!

Bellow you will find the links explaining how I developed this application, you can follow the instructions:

- [Using a Docker image](step-by-step-docker-guide.md): an executable package with everything you need to run this application (Elixir + Phoenix Framework + PostgreSQL), develop and run this application
- [Doing a traditional instalation](step-by-step-guide.md) install on your computer everything you need (Elixir + Phoenix Framework + PostgreSQL), develop and run this application 


### I just want to run this application on my computer!

If you don't want to follow the step-by-step guide and you only want to run this application, keep reading

#### Prerequisities

1. Install **Elixir** on your machine:
    * Mac:  `brew install elixir` (using [Homebrew](https://brew.sh))
    * Windows: [Download the installer](https://repo.hex.pm/elixir-websetup.exe)
    * Unix: Check your version and follow the [official steps](https://elixir-lang.org/install.html#unix-and-unix-like)
     
2. Install **Phoenix framework** (`mix` utility will be available once you have installed Elixir), just execute: 
```mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez```

3. A **PostgreSQL** (Database Server) instance to save chat messages, two options: 
	3.1 Install it on your computer
    * Mac: [Download Postgres.app](http://postgresapp.com/)
    * Windows & Unix: [Download it](https://www.postgresql.org/download/)

	3.2 Use Docker to avoid installing more software on your computer
    * Install [Docker](https://www.docker.com/) and download this files from this repository: `DockerFile` and `docker-compose.yml`: this image will an executable package with everything you need to run an application (Elixir + Phoenix Framework + PostgreSQL)


#### Check if you have installed what that you need
Open a terminal and check:
1. **Elixir** `elixir - v`: you should see a text explaining that Erlang and Elixir are running
2. **Phoenix Framework** `mix phx.new -v`: this will show you the lastest Phoenix version
3. Confirm **PostgreSQL** is running (ignore this step if you are going to use Docker, as indicated in 3.2)

##### Run it with Docker!
1. Setup the web container: `docker-compose build web`
2. Install dependencies: `docker-compose run web mix deps.get`
3. Create your database: `docker-compose run web mix ecto.create`
4. Install Node.js dependencies: `docker-compose run web bash -c "cd assets; npm install"`
5. Start the application: `docker-compose up`

##### Run it without Docker (you have PostgreSQL installed on your computer)
1. Install dependencies: `mix deps.get`
2. Check PostgreSQL credentials at config directory (`config/dev.exs`), create and migrate your database with `mix ecto.create && mix ecto.migrate`
3. Install Node.js dependencies with `cd assets && npm install`
4. Start the appliation: `mix phx.server` 

You can visit [http://localhost:4000](http://localhost:4000) to play with the chat, it's recommended open the app in two separate browser windows to try it (if your machine only has one browser try using an "incognito" tab).