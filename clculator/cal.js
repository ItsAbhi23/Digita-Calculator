console.log("hello");
let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screeValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
     buttontext=e.target.innerText;
     console.log("pressd !",buttontext);
     if(buttontext=='X'){
        screeValue = screeValue.slice(0, -1);
        screen.value = screeValue;
     }else if(buttontext=='C'){
        screeValue='';
        screen.value=screeValue;
     }else if(buttontext=='='){
        screen.value=eval(screeValue);
     }else{
        screeValue+=buttontext;
        screen.value=screeValue;
     }
    })
}
