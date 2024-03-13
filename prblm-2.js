//function name dite hobe isJavascript. ai function a parameter hisabe nibe akti string jeti hobe akti file name(ex: 'index.js'). jodi ati javascript file hoy tomake true return korte hobe r jodi na hoy tahole false return korte hobe.
function isJavascriptFile(filename){
    if(typeof filename !== 'string'){
        return 'please provide a valid file name string'
    }else{
        /*if(filename.toLowerCase().endsWith('.js') == true){
            return true;
        }else{
            return false;
        }*/
        return filename.toLowerCase().endsWith('.js');
    }
}
console.log(isJavascriptFile('hello.html'));

function isJavascriptFile(filename){
    if(typeof filename !== 'string'){
        return 'Please provide me a valid file name string';
    }else{
        //hello.world.html.js
        const arr = filename.split('.');
        const lastElement = arr.pop();
        /*if(lastElement.toLowerCase() == 'js'){
            return true;
        }else{
            return false;
        }*/
        return lastElement.toLowerCase() == 'js';
    }
}
console.log(isJavascriptFile('hello.world.html.js'));