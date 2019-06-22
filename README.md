# docker-elm

## Installation

```console
$ git clone https://github.com/aminnairi/docker-elm my-elm-project
```

## Usage

### Initialize a brand new Elm project

```console
$ make init
$ # or
$ docker-compose run --rm elm init
```

### Add an existing Elm project

```console
$ cp /path/to/my/existing/elm-project ./elm
```

### Start the Elm web server at http://localhost:8000/

```console
$ make start
$ # or
$ docker-compose up --detach --build elm
```

### Stop the Elm web server

```console
$ make stop
$ # or
$ docker-compose down
```

### Restart the Elm web server

```console
$ make restart
$ # or
$ make stop start
$ # or
$ docker-compose down && docker-compose up --detach --build elm
```

### Run any Elm command from the Elm command line interface

```console
$ doker-compose run --rm elm --version
```

Where `--version` is the argument you want to pass to the `elm` command line interface.

## Hello World in Elm example

```console
$ touch ./elm/src/Main.elm
```

```elm
module Main exposing (main)

import Html exposing (Html)

main : Html action
main =
    Html.text "Hello world!"
```