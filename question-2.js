const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let studentsMoreThanFifty;
let newScores;
let totalScore;
studentsMoreThanFifty = students.filter((student) => student.score > 50);
newScores = studentsMoreThanFifty.map((student) => +(student.score *1.10).toFixed(2))
totalScore = newScores.reduce((total, score) => total += score);

console.log(`Total score is ${totalScore}`);
