//tmk akta function dawa hobe isLGSeven(). ata input hisabe akta number nibe.akhn tmr task: tmk input value and 7 er modde parthokko ber korte hobe. jodi ai parthokko 7 er ceye choto hoy, tkhon tmk return korte hobe sei biogfol nahole tmk return korte hobe double of the input mane je songkha input hisabe niyecho setir digun.
/*input: 6
output:-1
input:-15
output: -22
input: 15
output: 30*/

function isLGSeven(n){
    if(typeof n !== 'number'){
        return 'Please provide a number'
    }
    let difference = n-7;
    if(difference < 7){
        return difference;
    }else{
       return n*2;
    }
}
console.log(isLGSeven(7));