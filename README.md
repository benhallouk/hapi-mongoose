# Sample Application with Nodejs, Hapi and Mongoose/MongoDB

This is a sample nodejs hapi application that show how you can use nodejs with hapi and mongoose/mongodb

Pluguins used:

- hapi
- inert
- vision
- handlebars
- joi
- boom
- mongoose

Dev plugins:

- nodemon
- npm-watch
- lab
- code
- sinon


## Instructions

Install mongodb from [download link](https://www.mongodb.com/download-center#community)

To start create a db

```sh
cd "C:\Program Files\MongoDB\Server\3.4\bin"

mongod.exe --port 27017
```

Ensure you choose private network only, open another command line and connect to create db

```sh
mongo.exe --port 27017

use tododb

db.createUser(
  {
    user: "dbuser",
    pwd: "dbpassword",
    roles: [{ role: "readWrite", db: "tododb" }]
  }
)
```

Create a dummy document, you need to do that inrder to see the collection of documents as it need at least one existing document

```sh
db.todos.insert({x:y})
``` 

Now that we have user, and db created start mongodb in authentication mode

```sh
cd "C:\Program Files\MongoDB\Server\3.4\bin"

mongod.exe --auth --port 27017
```

Install robomongo from [download link](https://robomongo.org/download)

connect to the mongodb using the `localhost` port `27017` and your credentials you should see the tododb with single dummy document, you can delete the dummy document later

Install the node dependancies by naviagating to the application folder and run the command

```sh
npm install
```

Set the DB connection string enviroment variable `DBConnection` for example in windows you would run the command

```sh
$env:DBConnection = "mongodb://dbuser:dbpssword@localhost:27017/tododb"
```

Run the server using
 
```sh
npm start
```