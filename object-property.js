const student = [
    {id: 21, name: 'Omar sunny'},
    {id: 24, name: 'Manna'},
    {id: 45, name: 'Sakib khan'},
    {id: 75, name: 'Dipzol'}
];

const nameList = [];
for(let i = 0; i < student.length; i++){
    const element = student[i];
    const nameProperty = element.name;
    nameList.push(nameProperty);
}

console.log(nameList);

const name = student.map(e => e.name);
console.log(name);

const nameAll = student.filter(e => e.name);
console.log(nameAll);

const nameOne = student.find( e => e.name)
console.log(nameOne);
// const ids = student.map(e => e.id);
// console.log(ids);