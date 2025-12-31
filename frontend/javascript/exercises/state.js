var a = 5;
console.log(a);

a = 10;
console.log(a);

//object
var person = {
  name: "John",
};
console.log(person.name);

person.name = "Doe";
console.log(person.name);

person= {
  name: "Alice",
};
console.log(person.name);

var obj1 = { key: "value1" };
var obj2 = obj1;

console.log("Object 1 Key: " + obj1.key);
console.log("Object 2 Key: " + obj2.key);

// modification
console.log("Modifying obj1.key to 'value2'");
obj1.key = "value2";

console.log("Object 1 Key: " + obj1.key);
console.log("Object 2 Key: " + obj2.key);

// reassignment
console.log("Reassigning obj2 to a new object");
obj2 = { key: "value3" };

console.log("Object 1 Key: " + obj1.key);
console.log("Object 2 Key: " + obj2.key);
