let a;
let b;
let c;

document.getElementById("submitbutton").onclick = function() {
    a = document.getElementById("i1").value;
    a = Number(a);

    b = document.getElementById("i2").value;
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("q3").innerHTML = "Side C: " + c;
}
