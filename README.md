# docker-elm

![Editing Main.elm file](https://i.ibb.co/J7CXtnk/docker-elm-screen.png)


## Features

- Shipped with Elm and all his ecosystem (reactor, format, ...).
- Vim configured for Elm with syntax highlighting, asynchronous code linting, autoformat on save, fuzzy file matcher & tree viewer.
- Highly portable and only requires Docker & Docker Compose.
- Does not requires Vim to be installed as it is living inside the container!
- Everything you need to create your next Elm application. Just focus on your next idea and let me do the configuration!

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

### Open a shell into the container

```console
$ make shell
```

### Edit files with Vim within the container

```console
$ make shell
$ vim src/Main.elm
```

### Manually format source-code

```console
$ make format
$ # or
$ docker-compose exec elm elm-format --yes src
```

Note: this is done automatically when saving edited files inside the container using `vim`.

## Hello World in Elm example

```console
$ touch ./elm/src/Main.elm
```

```elm
module Main exposing (main)

import Html exposing (Html)

main : Html Never
main =
    Html.text "Hello world!"
```

## Many thanks to

- [Airline](https://github.com/vim-airline/vim-airline)
- [Archlinux](https://www.archlinux.org/)
- [CtrlP](https://github.com/ctrlpvim/ctrlp.vim)
- [Docker Compose](https://docs.docker.com/compose/)
- [Docker](https://www.docker.com/)
- [Elm](https://github.com/elm)
- [Fira Code](https://github.com/tonsky/FiraCode)
- [Fugitive](https://github.com/tpope/vim-fugitive)
- [Git Gutter](https://github.com/airblade/vim-gitgutter)
- [NERDTree](https://github.com/scrooloose/nerdtree)
- [NPM](https://github.com/npm)
- [Node.js](https://github.com/nodejs)
- [Oh My ZSH](https://github.com/robbyrussell/oh-my-zsh)
- [Vim](https://github.com/vim)
