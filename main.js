document.getElementById("plus").onclick = glow;
document.getElementById("box11").onclick = closep;
document.getElementById("box22").onclick = closeb;
document.getElementById("box33").onclick = closeg;
document.getElementById("box44").onclick = closeb;
var text = document.getElementById("text").onclick.value;
document.getElementById("boxx").onclick = del;
function del() {
    alert("dfghj");
    document.getElementById("boxx").style.position = "absolute";
    document.getElementById("boxx").style.zIndex = -1;
}
function glow() {
    document.getElementById("bigbox").style.zIndex = 1;
}
function closeg() {
    document.getElementById("bigbox").style.zIndex = -1;
    var text = document.getElementById("text").value;
    // alert(text);
    document.getElementById("second").innerHTML +=
        "<div id='boxx'><div id='topp'></div><h3>#h56f7a</h3><h3 id='intext'></h3></div>";
    document.getElementById('topp').style.backgroundColor = "green";
    document.getElementById("intext").innerText = text;


}
function closep() {
    document.getElementById("bigbox").style.zIndex = -1;
    var text = document.getElementById("text").value;
    // alert(text);
    document.getElementById("second").innerHTML +=
        "<div id='boxx'><div id='topp'></div><h3>#h2h77a</h3><h3 id='intext'></h3></div>";
    document.getElementById('topp').style.backgroundColor = "pink";
    document.getElementById("intext").innerText = text;


}
function closeb() {
    document.getElementById("bigbox").style.zIndex = -1;
    var text = document.getElementById("text").value;
    // alert(text);
    document.getElementById("second").innerHTML +=
        "<div id='boxx'><div id='topp'></div><h3>#hj767a</h3><h3 id='intext'></h3></div>";
    document.getElementById('topp').style.backgroundColor = "skyblue";
    document.getElementById("intext").innerText = text;

}
function closebl() {
    document.getElementById("bigbox").style.zIndex = -1;
    var text = document.getElementById("text").value;
    // alert(text);
    document.getElementById("second").innerHTML +=
        "<div id='boxx'><div id='topp'></div><h3>#h267a</h3><h3 id='intext'></h3></div>";
    document.getElementById('topp').style.backgroundColor = "black";
    document.getElementById("intext").innerText = text;

}