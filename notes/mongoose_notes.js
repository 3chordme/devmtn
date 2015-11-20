MONGOOSE NOTES

The main benefit from mongoose is validation and joins.
Mongoose uses dynamic schemas, so you dont have to have the same keys on the same types of objects.

Indexing. A way to speed up your performance by building maps of mongodb contents in order to search fields faster.


var mongoose = require('mongoose');

//schema
var bookSchema = new mongoose.Schema({
	title: { type: String, maxlength: 100, required: true }, //validators
	genre: {
		type: String,
		maxlength: 40,
		lowercase: true,
		enum: [ 'sci-fi', 'romance', 'how-to', 'biographies' ] //has to be one of these
	},
	pages: { type: Number, min: 1 }, //not a required field
	checked_out: { type: Boolean, default: false }
})




Mongo II / Mongoose I - Objectives

Last cohorts lecture video:
https://vimeo.com/groups/331341/videos/142154715
https://vimeo.com/142154715


Mongoose Official page:
http://mongoosejs.com/

Scotch.io starter project :
https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

Simple Mongo Crud :
http://blog.modulus.io/getting-started-with-mongoose

Students will know the difference between mongoose and mongo
Students will know how to make a mongoose model
Students will know how to define schema for a model
Students will know how to define types on mongoose schema properties
Students will know how to do CRUD operations using a mongoose model
Students will understand mongoose middleware

There exist "hook"s that we can watch on our models when data is saved. There are "pre" and "post" middleware that we can watch.

For example, we could make sure a user's first name is capitalized before it's saved into a database:
var schema = new mongoose.Schema({
	name: String,
	age: Number
});
schema.pre('save', function(next) {
	this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
	next();
});
Students will understand database indexing
why use them and tradeoffs, specially space cost.

Students will understand mongoose .exec() , .where() , .limit() , and .sort()
Person
.find()
.where('role').equals('admin')
.where('age').gt(30)
.limit(10)
.sort(-'name')
.exec(function(err, persons) {
  //do this next
});
Students install and use bcrypt to hash a password and check against future log-ins

//basic schema
var schema = new mongoose.Schema({
	username: String,
	password: String
});

Never store passwords on a production website in plain text. Everyone will hate you. You will be hacked. So how do we store a username and password?
We need a formula that translates the password into a different string. That get stored.
We provide a seed (starting point unique to app), that encrypts the password.
Then we check the encrypted version entered with the encrypted version stored.
We use bcrypt:

//middleware to save a hashed password
schema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password')) {
		return next();
	}
	bcrypt.genSalt(12, function(err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

//Login comparison method
schema.methods.comparePassword = function(pass) {
	var deferred = q.defer();
	bcrypt.compare(pass, this.password, function(err, isMatch) {
		if (err) {
			return deferred.reject(err);
		}
		return deferred.resolve(isMatch);
	}
	return deferred.promise;
};

//Usage inside a controller
User.findOne({email: req.body.email}).exec().then(function(err, user) {
user.comparePassword(req.body.password)
	.then(function(isMatch) {
		if (isMatch) {
			//log them in!
		}
	})
	.catch(function(err) {
		//no luck!
	});
});
