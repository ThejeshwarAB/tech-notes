// Dot and Bracket Notation

var obj = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(obj.name);

console.log(obj["age"]);

// Updating object properties

obj.name = "Bob";
obj["postcode"] = "10001";
delete obj.city;

console.log(obj);
// Outputs: { name: 'Bob', age: 30, postcode: '10001' }

// Nested Objects

var nestedObj = {
    person: {
        name: "Charlie",
        age: 25,
    },
};

console.log(nestedObj.person.name); // Outputs: Charlie

nestedObj.person.age = 26;
console.log(nestedObj.person.age); // Outputs: 26

console.log(nestedObj);
// Outputs: { person: { name: 'Charlie', age: 26 } }

// Copying Objects

var originalObj = { key: "value1", nested: { innerKey: "innerValue" } };
var copiedObj = Object.assign({}, originalObj);

copiedObj.key = "value2";
copiedObj.nested.innerKey = "modifiedInnerValue";

console.log("Original Object:", originalObj);
// Outputs: { key: 'value1', nested: { innerKey: 'modifiedInnerValue' } }

console.log("Copied Object:", copiedObj);
// Outputs: { key: 'value2', nested: { innerKey: 'modifiedInnerValue' } }

