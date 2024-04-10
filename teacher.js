const teacherMap = new Map();
teacherMap.set("Dr. Jyoti Mahajan", 1);
teacherMap.set("Dr Bhawna Sharma", 2);
teacherMap.set("Dr Simmi Dutta", 3);
teacherMap.set("Mr Bilal Ahmed", 4);
teacherMap.set("Mr Prabjot Singh", 5);
teacherMap.set("Mr Akhil Sir", 6);
teacherMap.set("Dr Sheetal Gandotra", 7);
teacherMap.set("Mr Ankita Sharma", 8);

const Sem4 = Array(5).fill(null).map(() => Array(5).fill(null));
const Sem6 = Array(5).fill(null).map(() => Array(5).fill(null));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const teacherNames = Array.from(teacherMap.keys());
const shuffledTeacherNames = shuffleArray(teacherNames.slice());

let index = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    Sem4[i][j] = shuffledTeacherNames[index % shuffledTeacherNames.length]; // Fill every cell
    index++;
  }
}

shuffleArray(shuffledTeacherNames);

index = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let assignedTeacher = shuffledTeacherNames[index % shuffledTeacherNames.length];
    while (Sem4[i][j] === assignedTeacher) { // Check for clash
      index = (index + 1) % shuffledTeacherNames.length; // Get a different teacher
      assignedTeacher = shuffledTeacherNames[index];
    }
    Sem6[i][j] = assignedTeacher; // Assign the clash-free teacher
    index++;
  }
}


console.log("Sem4:");
console.log(Sem4);
console.log("\nSem6:");
console.log(Sem6);
// Function to create table rows
function createTableRows(table, data) {
  for (let i = 0; i < data.length; i++) {
    const row = table.insertRow();
    for (let j = 0; j < data[i].length; j++) {
      const cell = row.insertCell();
      cell.textContent = data[i][j] || "---"; // Display --- for empty cells
    }
  }
}

// Populate tables with timetable data
createTableRows(sem4Table, Sem4);
createTableRows(sem6Table, Sem6);

