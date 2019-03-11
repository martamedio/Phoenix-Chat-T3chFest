[:arrow_left: Go back](README.md)

# Developing a step-by-step web chat with Elixir and Phoenix Framework using Docker

#### Prerequisities

1. Install **Elixir** on your machine:
    * Mac:  `brew install elixir` (using [Homebrew](https://brew.sh))
    * Windows: [Download the installer](https://repo.hex.pm/elixir-websetup.exe)
    * Unix: Check your version and follow the [official steps](https://elixir-lang.org/install.html#unix-and-unix-like)
     
2. Install **Phoenix framework** (`mix` utility will be available once you have installed Elixir), just execute: 
```mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez```


#### Step-by-step Guide

1. Open a terminal and create an application, fetch and install the decependencies: `mix phx.new chat`

2. Copy inside the folder the Docker files available in this GitHub repository ([Dockerfile]() and [docker-compose.yml]())

3. Run the container: `docker-compose build web`

4. Obtain the project dependencies: `docker-compose run web mix deps.get`

5. Create the database: `docker-compose run web mix ecto.create`

6. Create a channel using Phoenix utility (see [this commit]()): `docker-compose run web mix phx.gen.channel MyChat`

7. Activate the new channel editing `/lib/channels/user_socket.ex` (see [this commit]()):
```channel "my_chat:lobby" MyChatWeb.COMPROBAR-CLASE```

8. Build the frontend structure:

    8.1. At 