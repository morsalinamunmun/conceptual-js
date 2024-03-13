/* problem 5: convert your gems into diamond
tmk 1 ta function holo gemsToDiamond(). ata input hisabe 3ta number(tmder o bondhur ges er songkha) nibe.
1no friend proti gems er khomota = 21
2no friend proti gems er khomota = 32
3no friend proti gems er khomota = 43
[gems er khomota bolte 1ta gems ke koyta diamond a convert kora jabe seta bujano hocce]
task: sob friend er gems total koyti diamond pabe seta ber korte hobe. total diamond er songkha jodi 1000 er digun er upor hoye jay sekhetre total diamond theke 2000 badh diye joto gulo diamond obosisto thakbe,toto gula tmra pabe.
input: 1, 1, 1
output: 96
input: 20, 200, 50
output: 6970
input: 100, 5, 1
output: 303*/

function gemsToDiamond(x, y, z){
    if(typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number'){
        return 'Please Provide valid number'
    }else if(x < 0 || y < 0 || z < 0){
        return 'Please provide all positive number';
    }else if(x%1 !== 0 || y%1 !== 0 || z%1 !== 0){
        return 'please provide an integer number';
    }
    else{
        const frnd1 = 21;
        const frnd2 = 32;
        const frnd3 = 43;
        
        const total = (x * frnd1) + (y * frnd2) + (z * frnd3);
        if(total > 2000){
            return total - 2000;
        }else{
            return total;
        }
    }
}
console.log(gemsToDiamond(2, 3, 7));

function printDetails(person){
    if(typeof person !== 'Object'){
        return 'Please provide a valid object';
    }else{
        const name = person.name || 'nai';
        const age = person.age || 'nai';
        const email = person.email || 'nai';
        const bou = person.bou || 'nai';
    }
    return 'amr name ' + name + 'amr age '+age + 'amr mail '+ email;
}
const obj ={
    name: 'mehedi',
    age:32,
    email: 'abumehedi@gmail.com' 
}
console.log(printDetails(obj));