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

shell:
	docker-compose exec elm zsh

format:
	docker-compose exec elm elm-format --yes src
