.PHONY: install start stop restart development production shell format

# make install
install:
	# this will install all dependencies listed in our package.json file
	docker-compose run elm npm install

# make start
start:
	# starting our containers in the background
	docker-compose up --detach --build

# make stop 
stop:
	# stop containers, removes orphans & local images & removes volumes
	docker-compose down --rmi local --remove-orphans --volumes

# make restart (restart the container)
# make stop start (equivalent)
restart: stop start

# make development
development:
	# run the development server
	docker-compose exec elm npm run development

# make production
production:
	# transpile the main file "src/main.js" into "public/main.js"
	docker-compose exec elm npm run production

# make shell
shell:
	# open a GNU/Linux shell into the container
	docker-compose exec elm zsh

# make format
format:
	# format all files under the "src" folder
	docker-compose exec elm elm-format --yes src
