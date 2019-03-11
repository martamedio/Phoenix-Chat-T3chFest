[:arrow_left: Go back](README.md)

# Developing a step-by-step web chat with Elixir and Phoenix Framework using Docker

#### Prerequisities

1. Install **Elixir** on your machine:
    * Mac:  `brew install elixir` (using [Homebrew](https://brew.sh))
    * Windows: [Download the installer](https://repo.hex.pm/elixir-websetup.exe)
    * Unix: Check your version and follow the [official steps](https://elixir-lang.org/install.html#unix-and-unix-like)
     
2. Install **Phoenix framework** (`mix` utility will be available once you have installed Elixir), just execute: 
```mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez```


#### Step by Step Guide

1. Open a terminal and create an application, fetch and install the dependencies when it ask for it: `mix phx.new chat`

2. Copy inside the folder the Docker files available in this GitHub repository ([Dockerfile](https://github.com/martamedio/Phoenix-Chat-T3chFest/blob/master/Dockerfile) and [docker-compose.yml](https://github.com/martamedio/Phoenix-Chat-T3chFest/blob/master/docker-compose.yml))

3. Run the container: `docker-compose build web`

4. Obtain the project dependencies: `docker-compose run web mix deps.get`

5. Create the database: `docker-compose run web mix ecto.create`

6. Create a channel using Phoenix utility: `mix phx.gen.channel MyChat`, and activate the new channel editing `/lib/channels/user_socket.ex` (see [this commit](https://github.com/martamedio/Phoenix-Chat-T3chFest/commit/a0b79f18aa1ddd433654804f6fe3527c836c913c)):
```channel "my_chat:lobby", ChatWeb.MyChatChannel```

7. Build the frontend structure:

    8.1. Remove all content from `/lib/chat_web/templates/page/index.html.eex` and setup a message list and two inputs (for name and message), see this commit

    8.2. Update the javascript client code (`/assets/js/`) to work with the websocket funcionality, see this commit

8. Create a database schema to store the chat history: `docker-compose run web mix phx.gen.schema Message messages name:string message:string`

9. Migrate the schema to PostgreSQL: `docker-compose run web mix ecto.migrate`

10. Insert messages into database: each time the shout event is executed, save the received message (see this commit)

11. Create a function to load existing messages, see this commit

12. Send existing messages to the client (it will print them) when someone joins the chat, see this commit

13. Run it, execute: `docker-compose up` and you can visit [http://localhost:4000](http://localhost:4000) to play with the chat, it's recommended open the app in two separate browser windows to try it (if your machine only has one browser try using an "incognito" tab).

14. Test it, execute: `docker-compose run web mix test`
One of the tests will fail, since we changed the code in `/lib/chat_web/templates/page/index.html.eex` (step 8.1). You can fix it update the assertion to something that is on the page, see this commit and re-launch the test execution
