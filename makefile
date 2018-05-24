.PHONY: lint
lint:
	npx eslint .

.PHONY: lint-fix
lint-fix:
	npx eslint --fix .

.PHONY: test
test:
	npx jest --passWithNoTests

