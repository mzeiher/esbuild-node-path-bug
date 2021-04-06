How to reproduce:
```
# bundle project
> go run main.go
# go to ./project
> export NODE_PATH=$(pwd)/../NODE_PATH/node_modules
> node ./index.js
# expected output
# package_a: 1.0.0
# package_b: package_c version:2.0.0
> node ./out.js 
# expected output
# package_a: 1.0.0
# package_b: package_c version:undefined (should be 2.0.0)
```
