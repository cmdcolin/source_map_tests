# source_map_tests

## UglifyJS

Install

    npm install -g uglify-js

Test using uglify JS

    uglifyjs script.js -o uglify.min.js --source-map uglify.js.map -c -m

Then open index.html in a web browser

## Google Closure Compiler

Install

    npm install -g google-closure-compiler

Test using google closure compiler


    java -jar /usr/local/lib/node_modules/google-closure-compiler/compiler.jar script.js --create_source_map=closure.js.map --js_output_file=closure.min.js


