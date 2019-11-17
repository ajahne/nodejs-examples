# Hello CRUD!

## Goals
- create simple CRUD "app" with minimum dependencies
  - e.g. just have Node, Express, and Mongo
- implement each CRUD method
  - Create (POST)
  - Read (GET)
  - Update (PUT)
  - Delete (DELETE)
- run on localhost
- have fun!

## Steps
### start with init  
`npm init -y`

### install express
`npm install express`

### create `app.js`
`touch app.js`

### edit `app.js`
see `app.js` file

### create `index.html`
touch `index.html`

### edit `index.html`
this file is a form that we will use to enter data into our database

### install `nodemon` to allow for refresh of server on change
`npm install nodemon --save-dev`
add the `dev` line to `scripts` in `package.json`
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "nodemon app.js"
},
```

### do express stuff
:)

### install mongodb
_see resources for details_
start mongodb type `mongod`
can hit mongodb on localhost

### make simple express hello world

### get to mongo db


## Resources
- [Installing MongoDB](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
- [Another helpful MongoDB setup article](https://www.bmc.com/blogs/how-to-install-mongodb-ubuntu-mac/)
