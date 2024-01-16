// Exercise #1
let element = 100;
if (element < 50) {
    console.log ("ნაკლებია 50ზე");
}  else if (element > 20) {
   console.log("მეტია 20ზე");
}
   else {
    console.log ("შეცდომა");
}

  
// Exercise #2
// New Syntax Using IF Statement 
let F_Name = 'მარიამ';
let resultCondition =  
F_Name == 'მარიამ-ს' ? "true" : "False";
console.log(resultCondition);

// Old Syntax Using IF Statement 

let FirstName = 'მარიამ'; 
if (FirstName == 'მარიამ-ს') {
    console.log ("true");
} else {
    console.log ("False");
}

// Exercise #3

let name$ = 'მარიამ';
switch (name$) {
    case 'მარიამ-ს':
        console.log('true');
        break;
        default:
            console.log('false');
}