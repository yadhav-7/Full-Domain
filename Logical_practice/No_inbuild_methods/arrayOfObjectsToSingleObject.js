//Convert an array of objects into a single object using a specific property as the key.
const users = [
  { id: 1, name: 'Yadhav', age: 22 },
  { id: 2, name: 'Rahul', age: 24 },
  { id: 3, name: 'Arun', age: 25 }
];
const usersObj = {}
for(let obj of users){
  usersObj[obj.id] = obj
}
console.log(usersObj)