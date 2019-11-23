# docker-elm

![Editing Main.elm file](https://i.ibb.co/J7CXtnk/docker-elm-screen.png)

## :sparkles: Features

- Shipped with Elm and all his ecosystem (reactor, format, ...).
- Vim configured for Elm with syntax highlighting, asynchronous code linting,
autoformat on save, fuzzy file matcher & tree viewer.
- Does not requires Vim to be installed as it is living inside the container!
- Not confortable with Vim? No problem! I got you covered. You can easily
launch you favorite editor to change files in this architecture, just like
with any other project of yours!
- Highly portable and only requires Docker & Docker Compose.
- Everything you need to create your next Elm application. Just focus on your
next idea and let me do the configuration!
- Configured with Rollup to let you leverage all the HTML, CSS & JavaScript ecosystem's tools while still using the power of Elm.
- Development environment with a server and live reloading as you scale your applicaton to help you focus on your next big thing instead of the tooling.

*New to Elm? I strongly advised you follow the
[Elm Bridge Curriculum](https://elmbridge.github.io/curriculum/) to get along
with the language in no time!*

## :pencil2: Requirements
- [Docker Compose][dockercompose]
- [Docker][docker]
- [GNU/Make][gnumake] (optional)
- [Git][git]

## :rocket: Installation

```console
$ git clone https://github.com/aminnairi/docker-elm my-elm-project
```

## :construction_worker: Usage

### :tada: Initialize a brand new Elm project

```console
$ make init
$ # or
$ docker-compose run --rm elm init
```

### :heavy_plus_sign: Add an existing Elm project

```console
$ cp /path/to/my/existing/elm-project ./elm
```

### :whale: Start the containers

```console
$ make start
$ # or
$ docker-compose up --detach --build elm
```

### :rocket: Start the development server at `localhost:8000`

```console
$ make development
$ # or
$ docker-compose exec elm npm run development
```

### :raised_hand: Stop the containers

```console
$ make stop
$ # or
$ docker-compose down
```

### :recycle: Restart the containers

```console
$ make restart
$ # or
$ make stop start
$ # or
$ docker-compose down && docker-compose up --detach --build elm
```

### :robot: Run any Elm command from the Elm command line interface

```console
$ doker-compose run --rm elm --version
```

Where `--version` is the argument you want to pass to the `elm` command line
interface.

### :shell: Open a shell into the container

```console
$ make shell
$ # or
$ docker-compose exec elm zsh
```

### :pencil2: Edit files with Vim within the container

```console
$ make shell # or docker-compose exec elm zsh
$ vim
```

### :art: Manually format source-code

```console
$ make format
$ # or
$ docker-compose exec elm elm-format --yes src
```

Note: this is done automatically when saving edited files inside the container
using `vim`.

### :package: Build the Elm application

```console
$ make production
$ # or
$ docker-compose exec node npm run development
```

Note: this will generate a file called `main.js` under the `public` folder.


## :pray: Many thanks to

- [Airline](https://github.com/vim-airline/vim-airline)
- [Archlinux](https://www.archlinux.org/)
- [CtrlP](https://github.com/ctrlpvim/ctrlp.vim)
- [Docker Compose][dockercompose]
- [Docker][docker]
- [Elm](https://github.com/elm)
- [Fira Code](https://github.com/tonsky/FiraCode)
- [Fugitive](https://github.com/tpope/vim-fugitive)
- [GNU/Make][gnumake]
- [Git Gutter](https://github.com/airblade/vim-gitgutter)
- [Git][git]
- [NERDTree](https://github.com/scrooloose/nerdtree)
- [NPM](https://github.com/npm)
- [Node.js](https://github.com/nodejs)
- [Oh My ZSH](https://github.com/robbyrussell/oh-my-zsh)
- [Vim](https://github.com/vim)

[docker]: https://www.docker.com/
[dockercompose]: https://docs.docker.com/compose/
[gnumake]: https://www.gnu.org/software/make/
[git]: https://git-scm.com/
