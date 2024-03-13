/* tmk akta function dawa holo findingBadData(). ata input hisebe akta array nibe. array te jekono songkhok koto gulo number thakbe. number gulo negitive number (less than zero) o hote pare, abr positive number(greater than or equal to zero) o hote pare. kono number jodi negitive hoy seta k amra bolbo 'Bad Data'. kono number jodi positive hoy seta k amra bolbo 'good data'. akhn tmr task: array te koto gulo Bad Data ace seta khuje ber korte hobe and sei number ta return korte hobe
sample input: [1, 2, 5]
output:0
input: [2, -5, -7, -13]
output: 3
*/
//!Array.isArray(arr) == true
function findingBadData(arr){
    if(!Array.isArray(arr)){
        return 'This is not an array';
    }else{
        let badDataCount = 0;
        let badData = [];
        for(let item of arr){
            if(typeof item !== 'number'){
                return 'Please Provide a array of number';
            }else{
                if(item < 0){
                    badDataCount++;
                    badData.push(item);
                }
            }
        }
        const obj ={
            badDataCount: badDataCount,
            badData: badData
        }
        return obj;
    }
}
const array = [2, -5, -7, -13];
console.log(findingBadData(array));