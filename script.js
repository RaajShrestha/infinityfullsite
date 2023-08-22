var sign =document.querySelector("#btn")
var login =document.querySelector(".loginbox")

var flag=0;



sign.addEventListener("click", showlogin)

function showlogin(){
    if(flag == 0){
        
        login.style.display="block"
        flag=1;

    }else{
        login.style.display="none"
        flag=0;
    }
}