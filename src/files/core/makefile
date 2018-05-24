.PHONY: lint
lint:
	npx eslint .
	npx prettier --list-different **/*.css

.PHONY: lint-fix
lint-fix:
	npx eslint --fix .
	npx prettier --write **/*.css

.PHONY: test
test:
	npx jest --passWithNoTests

