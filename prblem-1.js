//tomake emon akta function banate hobe jeta akti songkha input nibe. function tir name hobe isInteger() output hisabe akti boolean return korbe. sonkha ti integer hole true return korbe onnothay false return korbe

function isInteger(number){
    if(typeof number !== 'number'){
        return 'Please give a number';
    }else{
        if(number%1 == 0){
            return true;
        }else{
            return false;
        }
    }
}
console.log(isInteger(2.34));