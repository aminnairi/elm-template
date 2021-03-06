.PHONY: install build development production shell format

# make install
install:
	# this will install all dependencies listed in our package.json file
	docker-compose run --rm npm install

# make build
build:
	# rebuild the docker images in the ./docker folder
	docker-compose build --force-rm --no-cache --pull --parallel

# make development
development:
	# run the development server
	docker-compose run --rm --service-ports npm run development

# make production
production:
	# transpile the main file "src/main.js" into "public/main.js"
	docker-compose run --rm npm run production

# make shell
shell:
	# open a GNU/Linux shell into the container
	docker-compose run --rm shell

# make format
format:
	# format all files under the "src" folder
	docker-compose run --rm elm-format --yes src
