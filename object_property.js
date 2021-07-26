const students = [
    {id:21, name: "Alex"},
    {id:37, name: "Benda"},
    {id:41, name: "anika"},
    {id:45, name: "Muneem"},
    {id:66, name: "abir"},
];
const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);
const bigger = students.filter(s => s.id > 40);
console.log(bigger);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);