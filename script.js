let btn = document.getElementById("addForm");
let itemList = document.getElementById("items");
let button = document.querySelector("button");

btn.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

function addItem(e) {
	e.preventDefault();
	inputVal = document.getElementById("item").value;

	// Adding input values to the list
	let li = document.createElement("li");
	li.className = "list-group-item";
	li.appendChild(document.createTextNode(inputVal));

	// Adding delete buttons to the added items

	let delbtn = document.createElement("button");
	delbtn.className = "btn btn-danger btn-sm float-right delete";
	delbtn.appendChild(document.createTextNode("X"));
	li.appendChild(delbtn);
	itemList.appendChild(li);

	let editbtn = document.createElement("button");
	editbtn.className = "btn button-edit";
	editbtn.appendChild(document.createTextNode("edit"));
	button.insertAdjacentElement("beforeend", editbtn);
}

//Remove item event

function removeItem(e) {
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you sure?")) {
			let li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}
