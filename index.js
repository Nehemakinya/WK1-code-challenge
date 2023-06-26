let students = [['Jackline', 80], ['Sammy', 76], ['Shanel', 55], ['Royford', 47], ['Ladasha', 36]];
let Averagemarks = 0;

for (let i = 0; i < students.length; i++){
    Averagemarks += students[i][1];
    let avg = (Averagemarks/students.length);
}

console.log("Average grade: " + (Averagemarks)/students.length);

if (avg < 40){
    console.log("Grade : E");
}
else if (avg < 49){
    console.log("Grade : D");
}
else if(avg < 59){
    console.log("Grade : C");
}
else if(avg < 79){
    console.log("Grade : B");
}
else if(avg > 79){
    console.log("Grade : A");
}




function getSpeed() {
    let speed = prompt("Speed: ");
    checkSpeed(speed);
}

function checkSpeed(speed) {
    let points = speed;
    points -= 70;
    points /= 5;
    if (speed <= 70) {
      alert("Ok");
    }
    else if (points >= 12) {
      alert("License suspended");
    }
    else {
      alert(points + " Points");
    }
}
