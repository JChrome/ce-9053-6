var mongoose = require("mongoose");

var PersonSchema = new mongoose.Schema({
  name: String
});



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