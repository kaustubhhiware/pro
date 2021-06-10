build:
	npm run build
	rm -rf docs
	mv build docs
	echo "kaustubhhiware.in" > docs/CNAME