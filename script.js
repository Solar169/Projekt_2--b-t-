document.querySelector("kundvagn");

let element = document.createElement("element-typ");

let ul_element = document.createElement("ul");

let li_element = document.createElement("li");

li_element.textContent = "städa imorgon"

ul_element.appendChild(li_element);

let kundvagn = [];

function lägg_till() {
    kundvagn.push("båt; 149,999 kr");
}

