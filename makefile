.PHONY: init start stop restart

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

bash:
	docker-compose exec elm bash