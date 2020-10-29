var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = ul.getElementsByTagName("li");

//add done and delete button in the initial list
function addInitialButtons(){
	for(var i=0; i<list.length;i++){
		//done button
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Done"));
		list[i].appendChild(btn);
		var attdone = document.createAttribute("class");
		attdone.value = "done-button";
		btn.setAttributeNode(attdone);
		btn.style.backgroundColor= "lightgreen";
		//done button
		var delbtn = document.createElement("button");
		delbtn.appendChild(document.createTextNode("Delete"));
		list[i].appendChild(delbtn);
		var attdel = document.createAttribute("class");
		attdel.value="delete-button";
		delbtn.setAttributeNode(attdel);
		delbtn.style.backgroundColor="red";
	}
}



//the input length
function inputLength() {
	return input.value.length;
}
//create li elements when we click on enter
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Done"));
	li.appendChild(btn);
	btn.style.backgroundColor="lightgreen";
	btn.onclick = underlineParent;

	var delbtn = document.createElement("button");
	delbtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(delbtn);
	delbtn.onclick = removeParent;
	delbtn.style.backgroundColor="red";
}



function underlineParent(event){
	event.target.parentNode.classList.toggle("done");
}

function removeParent(evt){
	evt.target.parentNode.remove();
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


addInitialButtons();




var deleteButtons = ul.getElementsByClassName("delete-button");
var doneButtons = ul.getElementsByClassName("done-button")

for(var i=0 ; i<deleteButtons.length;i++){
	deleteButtons[i].addEventListener("click", removeParent);
}
for(var i=0; i<doneButtons.length;i++){
	doneButtons[i].addEventListener("click", underlineParent);
}
