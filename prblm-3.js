// tomake akta function dawa hobe called mindGame() ja input hisabe akta positive number nibe.  akhn tmar task: tomake sei number er sathe 3 gun kore, tarpor 10 jog kore, tarpor 2 diye vag kore, tarpor 5 biog kore, ja output asbe ta return korte hobe input: 5 output: 7.5
function mindGame(n){
    // if(typeof n !== 'number'){
    //     return 'please provide a number';
    // }else if(n <= 0){
    //     return 'please provide a number';
    if(typeof n !== 'number' || n <= 0){
        return 'Please provide a positive number'
    }
    else{
        const result = (((n*3) + 10)/2)-5;
        return result;
    }
}
console.log(mindGame(5));