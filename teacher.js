const teacherMap = new Map(); //creating hash map obj
teacherMap.set("Mr Mahajan", 1); // populating it 
teacherMap.set("Mr Sharma", 2);
teacherMap.set("Ms Dutta", 3);
teacherMap.set("Mr Ahmed", 4);
teacherMap.set("Mr Singh", 5);
teacherMap.set("Ms Bhan", 6);
teacherMap.set("Ms Gandotra", 7);
teacherMap.set("Ms Sharma", 8);
teacherMap.set("Remedial Class", 9);
teacherMap.set("Library", 10);
teacherMap.set("Lab 1", 11);
teacherMap.set("Lab 2", 12);


// creating two 5*4 array where each element is initialized with null
const Sem4 = Array(5).fill(null).map(() => Array(6).fill(null));
const Sem6 = Array(5).fill(null).map(() => Array(6).fill(null));

//Fisher Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) { //row iterate and in each row elements are shuffled..
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];// swapping here indices
  }
  return array;
}

const teacherNames = Array.from(teacherMap.keys()); // teacher name (key) and then converted to array
const shuffledTeacherNames = shuffleArray(teacherNames.slice()); // makes shallow copy of array no change in array, array inisde array will be changed
const breakColumn = 4; // Index of the column to display break
let index = 0;
// from 
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
    Sem4[i][j] = shuffledTeacherNames[index % shuffledTeacherNames.length]; // Fill every cell
    // so already shuffle vale mei se ek pick kr rhe hai
    index++;
  }
 
}

shuffleArray(shuffledTeacherNames);
// for fresh staet

index = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
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
// document.write(Sem4);
console.log("\nSem6:");
console.log(Sem6);
const sem4Table = document.getElementById("sem4");
const sem6Table = document.getElementById("sem6");

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const teacherColumns = 5; // Number of columns for teacher assignments

// const timeSlots = ["9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-1:00", "1:00-3:00", "3:00-5:00"]; // Example time slots

function createTableRows(table, data) {
  for (let i = 0; i < data.length; i++) {
    const row = table.insertRow();

    // Insert cell for the day of the week
    const dayCell = row.insertCell();
    dayCell.textContent = daysOfWeek[i];

    // Insert cells for teacher assignments and/or lunch break
    for (let j = 0; j < data[i].length; j++) {
      const cell = row.insertCell();
      if (j === breakColumn) {
        cell.textContent = "Break";
      } 
      else if (j < breakColumn || j >= breakColumn + 1) { // Check before and after break column
        cell.textContent = data[i][j - (j > breakColumn ? 1 : 0)] || "--"; // Adjust index for break
      }
    }
  }
}

// Populate tables with timetable data
createTableRows(sem4Table, Sem4);
createTableRows(sem6Table, Sem6);
