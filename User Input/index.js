let username;
document.getElementById("button1").onclick=function(){
    username=document.getElementById("firstname").value;
    console.log(username);
    document.getElementById("q2").innerHTML="Hello "+username;
}