menu.onclick = function myFunction(){
    var x = document.getElementById('myTopnav');

    if(x.className === "topnav"){
       x.classNAme += " responsive";
    } else{
       x.className = "topnav";
    }
}