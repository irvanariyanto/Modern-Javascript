// For loops
const names = ['shoun', 'the', 'corner'];

for(let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// While loops
let i = 0;

while(i < 5){
    console.log('in loop: ' + i);
    i++;
}

// Do while loops

i = 5;

do{
    console.log('val of i is: ', i);
    i++;
}while( i < 5 )

// Switch statement

 const grade = 'C';

 switch(grade){
    case 'A':
        console.log('you got an A!');
    case 'B':
        console.log('you got an A!');
    case 'C':
        console.log('you got an C!');
    default:
        console.log('not valid grade!');
 }