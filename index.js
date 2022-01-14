console.log("this is a console")
const element = document.getElementById("App");
const inputTextBox = document.createElement("input");
inputTextBox.setAttribute('id', 'textBox');
inputTextBox.classList.add("input");
inputTextBox.placeholder = "Enter a Number..."
element.appendChild(inputTextBox);
const table = document.createElement("table");
var ctr = 0;
var evaluated=false;
table_row = document.createElement("tr");
table_cell = document.createElement("td");
table_cell.innerHTML = "AC"
table_cell.onclick = function () { Reset(this) };
table_row.appendChild(table_cell)
table_row.appendChild(table_cell)
table_cell = document.createElement("td");
table_cell.innerHTML = "%"
table_cell.onclick=function(){
    percentage(this);
}
table_row.appendChild(table_cell)
table_cell = document.createElement("td");
table_cell.innerHTML = "/"
table_cell.onclick=function(){
    evalfunc(this);
}
table_row.appendChild(table_cell)
table_cell = document.createElement("td");
table_cell.innerHTML = "Erase"
table_cell.onclick = function () { Erase(this) };
table_row.appendChild(table_cell)
table.appendChild(table_row)

for (i = 0; i < 3; i++) {
    table_row = document.createElement('tr');
    for (j = 0; j < 3; j++) {
        ctr++;
        table_cell = document.createElement('td');
        table_cell.innerHTML = ctr;
        table_cell.onclick = function () { displayNumber(this) };
        // table_cell.addEventListener('click',displayNumber(ctr),false);
        table_row.appendChild(table_cell);
    }
    table_cell = document.createElement('td');
    if (i == 0) table_cell.innerHTML = "+";
    table_cell.onclick=function(){
        evalfunc(this);
    }
    if (i == 1) table_cell.innerHTML = "-";
    table_cell.onclick=function(){
        evalfunc(this);
    }
    if (i == 2) table_cell.innerHTML = "*";
    table_cell.onclick=function(){
        evalfunc(this);
    }
    table_row.appendChild(table_cell);
    table.appendChild(table_row);
}
table_row = document.createElement("tr");
table_cell = document.createElement("td");
table_cell.innerHTML = "C"
table_cell.onclick = function () { Reset(this) };
table_row.appendChild(table_cell)
table_row.appendChild(table_cell)
table_cell = document.createElement("td");
table_cell.innerHTML = "0"
table_cell.onclick = function () { displayNumber(this) };
table_row.appendChild(table_cell)
table_cell = document.createElement("td");
table_cell.innerHTML = "."
table_cell.onclick = function () { displayNumber(this) };
table_row.appendChild(table_cell)
table_cell = document.createElement("td");
table_cell.innerHTML = "="
table_cell.onclick = function () { evaluate(this) };
table_row.appendChild(table_cell)
table.appendChild(table_row)

table.classList.add("table");
element.appendChild(table);

function displayNumber(ctr) {
    console.log(ctr.innerHTML);
    const ele = document.getElementById("textBox");
    if(evaluated === true){
        ele.value=ctr.innerHTML;
        evaluated=false;
    }
    else{
    ele.value += ctr.innerHTML;
    }
}
function Erase() {
    const ele = document.getElementById("textBox");
    ele.value = ele.value.substring(0,ele.value.length-1);
}
function Reset() {
    const ele = document.getElementById("textBox");
    ele.value = "";
}

function evalfunc(ctr){
    const ele=document.getElementById("textBox");
    let currVal=ele.value
    if(currVal[currVal.length-1] === '+' ||currVal[currVal.length-1] === "-" || currVal[currVal.length-1] === "*"){
       currVal= currVal.substring(0,currVal.length-1);
       console.log(currVal);
    }
    ele.value=currVal+ctr.innerHTML;

}

function evaluate(){
    const ele=document.getElementById("textBox");
    let expr=ele.value;
    let calculatedValue =  eval(expr);
    evaluated=true;
    ele.value=calculatedValue;
}

function percentage(){
    const ele=document.getElementById("textBox");
    let expr=ele.value;
    let calculatedValue =  eval(expr);
    ele.value=calculatedValue/100;
    evaluated = true
}
