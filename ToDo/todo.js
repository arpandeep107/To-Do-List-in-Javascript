var mynodelist=document.getElementsByTagName("LI");
var i;
for(i=0;i<mynodelist.length;i++){
    var span=document.createElement("SPAN");
    var mynode=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(mynode);
    mynodelist[i].appendChild(span);
                                       
}

//deleting existing items;
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//checked when clicked
var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
}, false);



function run(){
    
   //creating <li> item
    var task=document.getElementById("mytask").value;
    var li=document.createElement("LI");
    var txt=document.createTextNode(task);
    li.appendChild(txt);
    if(task===''){alert("You must write something!");}
    else{
    document.getElementById("myUL").appendChild(li);}
    document.getElementById("mytask").value ="";
    
    //creating close button
    var span =  document.createElement("SPAN");
    span.className="close";
    var node = document.createTextNode("\u00D7");
    span.appendChild(node);
    li.appendChild(span);

    //code for closing
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
    
    
    
    
}

