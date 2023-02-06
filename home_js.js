const outputDiv = document.getElementById('animated_p');
const text = 'Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated';
const text_cursor = '|';
let intervalID_text;
let intervalID_text_cursor;
let reseted = false;

reset(reseted);

function reset(r){
    if(r){ //stops last animation
        clearInterval(intervalID_text_cursor);
        clearInterval(intervalID_text);
    } 

    let text_cursor_on = false;
    let func_one_done = false
    let i = 0;
    outputDiv.innerHTML = '';

    intervalID_text = setInterval(function(){
        outputDiv.innerHTML += text[i];
        i++;
        if(i === text.length){
            clearInterval(intervalID_text);
            func_one_done = true;
        }
    },50);
    
    intervalID_text_cursor = setInterval(function(){
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
}

let color_rotation = ['blue','green','purple','orange','yellow','brown','white','black','red'];
var color_interval = 0;
var color_var = document.querySelector(':root');

function change_color(){
    if(color_interval === (color_rotation.length)){
        color_interval = 0;
        console.log(color_interval)
    }
    color_var.style.setProperty('--main_tittle_color', color_rotation[color_interval]);
    color_interval += 1;
}
