MONGODB NOTES

Document database. The database is a filing cabinet, the collections are drawers, the contents of the collections are documents. It is javascript, so the syntax should look familiar.

Mongoose allows for the creation of schemas, which allows for the construction of similar objects.

Mongos big selling point is the speed of its read operations.

Sidenote: was the first example of skeuomorphism calling a document "document"?

database: "zoo"

collections: "animals", "zookeepers", "feedings"

Mongo just takes json doc. Collections content can be widely varied.
An object in your "animals" collection could be very specific.

{
  "species": "tiger",
  "stripes": 7
}

{
  "species": "bear",
  "honeyPots": 14
}

Open two terminal windows. One runs mongod (your database). The other runs your server (heroku or live-server).

QUESTION: why is mongod already running?

win1:
$ mongod

win2:
$ mongod
$ use zoo //
$ db.createCollection('animals') //name of collection. creates a collection.
$ showdbs //now shows
$ db.animals.insert({ "name": "tiger", "stripes": 7 }) //creates a document. any json object is accepted.
$ db.starwars.find({}) //will return all documents in the starwars collection.
//find using ObjectId string - doesn't work!
//find using ObjectId("string") - works!
//update replaces entire object - careful!
//update replacing object with correct entire object - works!
//findAndModify - shows the old version of the object (query:) you are modifying (update:)
$eq $gt $gte $lt $ne $in $nin

$or $and $not $nor

$exists

best practice: use object ids whenever possible, because they are unique. For example, dont
say delete({"name": "john"}) or you will delete all of the johns.

typescript, less, sass, T-shaped developer, or Pi-shaped developer.
Tiers of coding: novice, intermediate, expert, GOD

<<<<<<< HEAD
FROM TERMINAL:
=======

>>>>>>> c25cb28c232ecc7136d2f3996f5d79704ead6cd4

mongo
> db.createCollection('')
> use action_figures
switched to db action_figures
> showdbs
showdbs is not defined
> use action_figures
switched to db action_figures
> db.createCollection('starwars')
{ "ok" : 1 }
> show dbs
action_figures  0.078GB
local           0.078GB
monsters        0.078GB
> db.starwars.insert({"name": "Boba Fett", "year": 1971, "size_in_inches": 12 })
WriteResult({ "nInserted" : 1 })
> db.starwars.find({})
{ "_id" : ObjectId("564b6d0c8ec6b0233e8770f1"), "name" : "Boba Fett", "year" : 1971, "size_in_inches" : 12 }
> db.starwars.insert({"name": "Luke", "lightSide": true, "year": 1979})
WriteResult({ "nInserted" : 1 })
> db.starwars.insert({"name": "R2D2", "year": 2014})
WriteResult({ "nInserted" : 1 })
> db.starwars.find({})
{ "_id" : ObjectId("564b6d0c8ec6b0233e8770f1"), "name" : "Boba Fett", "year" : 1971, "size_in_inches" : 12 }
{ "_id" : ObjectId("564b6db78ec6b0233e8770f2"), "name" : "Luke", "lightSide" : true, "year" : 1979 }
{ "_id" : ObjectId("564b6df58ec6b0233e8770f3"), "name" : "R2D2", "year" : 2014 }
> db.zoo.insert({"species": "tiger", "stripes":7})
WriteResult({ "nInserted" : 1 })
> show dbs
action_figures  0.078GB
local           0.078GB
monsters        0.078GB
> db.zoo.find({})
{ "_id" : ObjectId("564b6e1f8ec6b0233e8770f4"), "species" : "tiger", "stripes" : 7 }
> db.starwars.find({"name": *})
2015-11-17T11:13:51.151-0700 E QUERY    SyntaxError: Unexpected token *
> db.starwars.find({"name": "Luke"})
{ "_id" : ObjectId("564b6db78ec6b0233e8770f2"), "name" : "Luke", "lightSide" : true, "year" : 1979 }
> db.createCollection('zoo')
{ "ok" : 0, "errmsg" : "collection already exists", "code" : 48 }
> showdbs
2015-11-17T11:15:41.070-0700 E QUERY    ReferenceError: showdbs is not defined
    at (shell):1:1
> show dbs
action_figures  0.078GB
local           0.078GB
monsters        0.078GB
> db.starwars.find({"_id":"564b6db78ec6b0233e8770f2"})
> db.starwars.find({"_id":ObjectId("564b6db78ec6b0233e8770f2")})
{ "_id" : ObjectId("564b6db78ec6b0233e8770f2"), "name" : "Luke", "lightSide" : true, "year" : 1979 }
> db.starwars.update({"_id":ObjectId("564b6db78ec6b0233e8770f2")}, {"year": 1978})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.starwars.find({"_id":ObjectId("564b6db78ec6b0233e8770f2")})
{ "_id" : ObjectId("564b6db78ec6b0233e8770f2"), "year" : 1978 }
> db.starwars.find()
{ "_id" : ObjectId("564b6d0c8ec6b0233e8770f1"), "name" : "Boba Fett", "year" : 1971, "size_in_inches" : 12 }
{ "_id" : ObjectId("564b6db78ec6b0233e8770f2"), "year" : 1978 }
{ "_id" : ObjectId("564b6df58ec6b0233e8770f3"), "name" : "R2D2", "year" : 2014 }
> db.starwars.update({"_id":ObjectId("564b6db78ec6b0233e8770f2")}, {"name": "Luke","year": 1978})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.starwars.find()
{ "_id" : ObjectId("564b6d0c8ec6b0233e8770f1"), "name" : "Boba Fett", "year" : 1971, "size_in_inches" : 12 }
{ "_id" : ObjectId("564b6db78ec6b0233e8770f2"), "name" : "Luke", "year" : 1978 }
{ "_id" : ObjectId("564b6df58ec6b0233e8770f3"), "name" : "R2D2", "year" : 2014 }
> db.starwars.find({"year":{$lt: 2000})
... ^C

> db.starwars.find({"year": {$lt: 2000}})
{ "_id" : ObjectId("564b6d0c8ec6b0233e8770f1"), "name" : "Boba Fett", "year" : 1971, "size_in_inches" : 12 }
{ "_id" : ObjectId("564b6db78ec6b0233e8770f2"), "name" : "Luke", "year" : 1978 }
> db.collection.drop("zoo")
2015-11-17T11:32:36.691-0700 E QUERY    Error: drop takes no argument
    at Error (<anonymous>)
    at DBCollection.drop (src/mongo/shell/collection.js:615:15)
    at (shell):1:15 at src/mongo/shell/collection.js:615
> show db
2015-11-17T11:32:44.375-0700 E QUERY    Error: dont know how to show [db]
    at Error (<anonymous>)
    at shellHelper.show (src/mongo/shell/utils.js:733:11)
    at shellHelper (src/mongo/shell/utils.js:524:36)
    at (shellhelp2):1:1 at src/mongo/shell/utils.js:733
> show dbs
action_figures  0.078GB
local           0.078GB
monsters        0.078GB
> db.zoo.drop()
true
> db.zoo.find()
> db.starwars.find()
{ "_id" : ObjectId("564b6d0c8ec6b0233e8770f1"), "name" : "Boba Fett", "year" : 1971, "size_in_inches" : 12 }
{ "_id" : ObjectId("564b6db78ec6b0233e8770f2"), "name" : "Luke", "year" : 1978 }
{ "_id" : ObjectId("564b6df58ec6b0233e8770f3"), "name" : "R2D2", "year" : 2014 }
> db.zoo.drop()
false
> db.starwars.find({ $or: [{"name": "Luke"},{"name": "R2D2"}]})
{ "_id" : ObjectId("564b6db78ec6b0233e8770f2"), "name" : "Luke", "year" : 1978 }
{ "_id" : ObjectId("564b6df58ec6b0233e8770f3"), "name" : "R2D2", "year" : 2014 }
>
