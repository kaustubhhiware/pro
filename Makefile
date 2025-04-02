start:
	export NODE_OPTIONS=--openssl-legacy-provider
	npm run start

build:
	npm run build
	rm -rf docs
	mv build docs
	echo "kaustubhhiware.in" > docs/CNAME