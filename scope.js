let bonus = 20; // global-scope
function sum(first, second){
    let result = first + second + bonus;
    if(result > 9){
        let mood = "happy"; // local scope / block-scope
        mood = "fishky";
    }

    console.log(mood); // it will do not work.
}

sum(10, 15);

if(0==false){
    if(bonus == 20){
        var earn = 30; //hoisting
    }
}

console.log(earn);