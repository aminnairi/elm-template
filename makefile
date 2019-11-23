.PHONY: install development production shell format vim

# make install
install:
	# this will install all dependencies listed in our package.json file
	docker-compose run npm install

# make development
development:
	# run the development server
	docker-compose run npm run development

# make production
production:
	# transpile the main file "src/main.js" into "public/main.js"
	docker-compose run npm run production

# make shell
shell:
	# open a GNU/Linux shell into the container
	docker-compose run shell

# make format
format:
	# format all files under the "src" folder
	docker-compose run elm-format --yes src

# make vim
vim:
	# open vim
	docker-compose run --rm vim
