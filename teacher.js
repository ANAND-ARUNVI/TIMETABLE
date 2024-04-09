const teacherMap = new Map();
teacherMap.set("Dr. Jyoti Mahajan", 1);
teacherMap.set("Dr Bhawna Sharma", 2);
teacherMap.set("Dr Simmi Dutta", 3);
teacherMap.set("Mr Bilal Ahmed", 4);
teacherMap.set("Mr Prabjot Singh", 5);
teacherMap.set("Mr Akhil Sir", 6);
teacherMap.set("Mr xyz Dubey", 7);
teacherMap.set("Mr abc Dubey", 8);

let flag = -1;
const Sem4 = Array(4).fill(null); // Creating an empty 1x4 array
const Sem6 = Array(4).fill(null); // Creating an empty 1x4 array
let period = 0;
let p =0;
let displaysem4 = false;
let displaysem6 = false;
function assignTeachers() {
   
    for (const [teacher, id] of teacherMap.entries()) {
     // any avialable slots check
        if (Sem4.includes(null)) {
            const index = Sem4.indexOf(null);// finds index of first null value
            Sem4[index] = id;
            flag++;
            period++;
            if (!displaysem4) {
                console.log("4th sem");
                displaysem4 = true; // Set the flag to true after displaying the headline
            }
            console.log(` Period ${period}: ${teacher}`);
        } 
        
        else if (Sem6.includes(null)) {
            const index = Sem6.indexOf(null);
            Sem6[index] = id;
            flag++;
            p++;
            if (!displaysem6) {
                console.log("6th sem");
                displaysem6 = true; // Set the flag to true after displaying the headline
            }
            console.log(`Period ${p}: ${teacher}`);
        } else {
            console.log("No more slots available.");
            break; // Exit loop if no more slots available
        }
    }
}

assignTeachers();
console.log("Sem4:", Sem4);
console.log("Sem6:", Sem6);
