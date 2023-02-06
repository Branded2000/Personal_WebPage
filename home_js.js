const outputDiv = document.getElementById('animated_p');
const text = 'Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated Line to be animated';
const text_cursor = '|';
let intervalID2;
let reseted = false

reset(reseted);

function reset(r){
    if(r){ //stops last animation
        clearInterval(intervalID2)
    } 

    let text_cursor_on = false;
    let func_one_done = false
    let i = 0;
    outputDiv.innerHTML = '';

    const intervalID = setInterval(function(){
        outputDiv.innerHTML += text[i];
        i++;
        if(i === text.length){
            clearInterval(intervalID);
            func_one_done = true;
        }
    },50);
    
    intervalID2 = setInterval(function(){
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
let color_interval = 0;

function change_color(){
    if(color_interval == length.color_rotation){
        color_interval = 0;
    }
    var color_var = document.querySelector(':root');
    color_var.style.setProperty('--main_tittle_color', color_rotation[color_interval]);
    color_interval += 1;

}
