const outputDiv = document.getElementById('animated_p');
const text = 'Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated';
const text_cursor = '|';
let text_cursor_on = false;
let func_one_done = false
let i = 0;

const intervalID = setInterval(function(){
    outputDiv.innerHTML += text[i];
    i++;
    if(i === text.length){
        clearInterval(intervalID);
        func_one_done = true;
    }
},50);

setInterval(function(){
    if(func_one_done){
        if(!text_cursor_on){
            outputDiv.innerHTML += text_cursor;
            text_cursor_on = true;
        }
        else{
            outputDiv.innerHTML = outputDiv.innerHTML.substring(0,i);
            text_cursor_on = false;
        }
    }   
},500);
