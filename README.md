# docker-elm

## Installation

```console
$ git clone https://github.com/aminnairi/docker-elm my-elm-project
```

## Usage

### Initialize a brand new Elm project

```console
$ make init
```

### Add an existing Elm project

```console
$ cp /path/to/my/existing/elm-project ./elm
```

### Start the Elm web server

```console
$ make start
```

### Stop the Elm web server

```console
$ make stop
```

### Restart the Elm web server

```console
$ make restart
$ #or
$ make stop start
```

### Run any Elm command from the Elm command line interface

```console
$ doker-compose run --rm elm --version
```

Where `--version` is the argument you want to pass to the `elm` command line interface.