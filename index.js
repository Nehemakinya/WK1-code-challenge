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




if(speed<70){
    print('Ok')
}else{

print("Points:"+((speed-70)/5));

if((speed-70)/5)>12)

print('License suspended');

}