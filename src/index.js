import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	'To Do List',
	document.getElementById('title')
);    
const InputForm =
  	<form>
		<div class="input-group">
			<input id="todoInput" type="text" class="form-control" placeholder="If t's very important to note  ->"></input>
			    <span class="input-group-addon">
			        <input type="checkbox" id="importantCB"></input>
			    </span>
				<span class="input-group-btn">
			        <button id="save" class="btn btn-default" type="button">Save</button>
			    </span>
		</div>
	</form>

ReactDOM.render(InputForm, document.getElementById('form'));

const listToDo = 
	<ul id="todoList" class="list-group">
          <li class="list-group-item">todo</li>
          <li class="list-group-item">todo1</li>
    </ul>

ReactDOM.render(listToDo, document.getElementById('list'));

ReactDOM.render('Количество дел:', document.getElementById('countDo'));
registerServiceWorker();
var deal=2;
check();
made();
deleted();
function check(){
	var list = document.getElementsByTagName("li");
	list.className="list-group-item";
	for (var i = 0; i < list.length; i++) 
	{
		  var btn = document.createElement("HREF");
		  var t = document.createTextNode("✘");
		  btn.appendChild(t);
		  list[i].appendChild(btn);
		  btn.className = "check";
		  var btn1 = document.createElement("HREF");
		  var t1 = document.createTextNode("✔");
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

