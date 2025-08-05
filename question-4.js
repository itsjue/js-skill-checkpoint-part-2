const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];
  
for (let i = 0; i < alphaTech.length; i++) {
  alphaTech[i].company = "alphaTech";
}
for (let i = 0; i < betaSoft.length; i++) {
  betaSoft[i].company = "betaSoft";
}
for (let i = 0; i < gammaDev.length; i++) {
  gammaDev[i].company = "gammaDev";
}

const allEmployees = alphaTech.concat(betaSoft, gammaDev);

let filteredEmployees = allEmployees.filter((employee) => employee.department === "Engineering" && employee.age >= 20);

let result = filteredEmployees.map((employee) => {
  return {
    name: employee.name, company: employee.company
  }
});

console.log(result);

// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

