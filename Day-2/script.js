let pTag=document.querySelector('p');
let largeBox=document.querySelector('#large-box');
let buttons=document.querySelectorAll('button');
let boxContent=largeBox.innerHTML;


//updating p tag text
pTag.innerHTML='Ayana samuel';
pTag.style.color='darkgray';
pTag.style.fontSize='20px';
pTag.style.fontFamily='Arial';

//updating large box content by adding an event listener to the buttons
buttons.forEach((button)=>{
    button.onclick=function(){
        if(button.innerHTML==='Get back the fist box content'){
            largeBox.innerHTML=boxContent +' is the content of the first box';
        }
        else largeBox.innerHTML=button.innerHTML+' is clicked';
    }
})
