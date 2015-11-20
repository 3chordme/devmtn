Data modeling: how to represent information, esp from the real world, digitally.

1...1
One to one.
Car has driver.
Driver has car.

1...n
One to many.
Driver has cars.
Car has drivers.

n...n
Many to many.
Drivers have cars.
Cars have drivers.

Get 3 opinions on your schema design before you write code, or you will have to rewrite your code.

One to One, Driver has car.
//CarModel.js

var CarSchema = mongoose.Schema ({
  year: {type: Number},
  model: {type: String}
})

var DriverSchema = mongoose.Schema ({
  name: {type: String},
  age: {type: Number},
  car: CarSchema
});


One to One - Car has driver.

var CarSchema = mongoose.Schema ({
  year: {type: Number},
  model: {type: String},
  driver: DriverSchema
})

var DriverSchema = mongoose.Schema ({
  name: {type: String},
  age: {type: Number},
});


One to Many - Driver has cars.

var CarSchema = mongoose.Schema ({
  year: {type: Number},
  model: {type: String},
})

var DriverSchema = mongoose.Schema ({
  name: {type: String},
  age: {type: Number},
  cars: [CarSchema]
});

One to Many - Car has drivers.

var CarSchema = mongoose.Schema ({
  year: {type: Number},
  model: {type: String},
  drivers: [DriverSchema]
})

var DriverSchema = mongoose.Schema ({
  name: {type: String},
  age: {type: Number},
});

Many to Many - Cars have Drivers

var CarSchema = mongoose.Schema ({
  year: {type: Number},
  model: {type: String},
  drivers: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Car' } //an array of object ids. referenced but not moved.
    // { type: mongoose.Types.ObjectId, ref: 'Car' } may also work
  ]
})

var DriverSchema = mongoose.Schema ({
  name: {type: String},
  age: {type: Number},
});
