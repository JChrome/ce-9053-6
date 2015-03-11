var mongoose = require("mongoose");

var PersonSchema = new mongoose.Schema({
  name: String
});

PersonSchema.statics.getOneByName = function(name, cb){
  this.findOne({name: name}, cb);  
};

PersonSchema.statics.getOneById = function(id, cb){
  this.findOne({_id: id}, cb);
};

PersonSchema.statics.getAll = function(cb){
  this.find({}).sort("name").exec(cb);
};


var Person = mongoose.model("Person", PersonSchema);

function seed(cb){
  var people = [
    { name: "Moe" },
    { name: "Larry"},
    { name: "Curly" }
  ];
  Person.remove({}, function(){
    Person.create(people, function(err, moe, larry, curly){
       cb(err, moe, larry, curly); 
    });
  });
}

module.exports = {
  seed: seed,
  Person: Person
};