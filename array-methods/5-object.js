// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
for (let [key, value] of Object.entries(student)) {
  console.log(`${key} ${value}`);
}
console.log(Object.keys(student));

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
delete student.rollno;

// 3. Write a function to get the length of an object.
Object.keys(student).length;
