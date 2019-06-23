.PHONY: init start stop restart shell format

# make start (run the wev server)
start:
	rm -rf ./elm/elm-stuff
	docker-compose up --detach --build elm

# make stop (stop the container)
stop:
	docker-compose down

# make restart (restart the container)
# make stop start (equivalent)
restart: stop start

# make init (initialize a new Elm project under the "elm" folder)
init:
	docker-compose run --rm elm init

# make shell (open a GNU/Linux shell into the container)
shell:
	docker-compose exec elm zsh

# make format (format all files under the "src" folder)
format:
	docker-compose exec elm elm-format --yes src

# make build (transpile the main file "src/Main.elm" into "dist/elm.js" )
build:
	docker-compose run --rm elm make --output dist/elm.js src/Main.elm
