VERSION := $$(cat package.json | grep version | sed 's/"/ /g' | awk {'print $$3'})


SVC=API-CEN
PORT=5000

version v:
	@echo $(VERSION)

init i:
	@echo "[Dependencies] Installing dependencies"
	@npm install

run r:
	@echo "[Running] Running service "
	@PORT=$(PORT) node src/start.js
	
.PHONY: version v init i run r