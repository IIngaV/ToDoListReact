var deal=2;
check();
made();
deleted();
function check(){
	var list = document.getElementsByTagName("li");
	list.className="list-group-item";
	for (var i = 0; i < list.length; i++) 
	{
		  var btn = document.createElement("BUTTON");
		  var t = document.createTextNode("Delete");
		  btn.appendChild(t);
		  list[i].appendChild(btn);
		  btn.className = "check";
		  var btn1 = document.createElement("BUTTON");
		  var t1 = document.createTextNode("Made");
		  btn1.appendChild(t1);
		  list[i].appendChild(btn1);
		  btn1.className = "made";
		  count();
		  made();
		  deleted();
	}
}
	var save = document.getElementById("save");
	save.onclick = function(){
		var item = document.getElementById("todoInput").value;
		var text = document.createTextNode(item);
		var newItem = document.createElement("li");
		newItem.className="list-group-item";
		if (text.length>0){
			var add=document.getElementById("todoList").appendChild(newItem);	
			newItem.appendChild(text);
			if (document.getElementById("importantCB").checked){
				add.style.backgroundColor ="#b94e48"; 	
			}
			else{
				add;	
			}
			deal++;
			check();
			count();
		}
		else{
			alert("Дело не может быть пустым");
		}
		document.getElementById("todoInput").value=null;
	}
	
function deleted(){
var ch = document.getElementsByClassName("check");
	for (var i = 0; i < ch.length; i++) {
		ch[i].onclick = function() {
			var del = this.parentElement;
    		del.remove();
    		deal--;
    		count();
		}
	}
}
function made(){
var list = document.getElementsByClassName("made");
	for (var i = 0; i < list.length; i++) {
		list[i].onclick = function() {
			var del = this.parentElement;
			del.style.backgroundColor ="#00a550";
		}
	}
}
function count(){
	document.getElementById("c").innerHTML = deal;
}
count();

