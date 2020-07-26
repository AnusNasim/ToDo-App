var list = document.getElementById("list")
function adtodo(){
    var todo = document.getElementById("todo-item")
    var li = document.createElement("li")
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)
    li.setAttribute("class","li")

    var delBtn = document.createElement("button")
    var txtNode=document.createTextNode("Delete")
    delBtn.appendChild(txtNode)
    li.appendChild(delBtn)
    delBtn.setAttribute("class","delBtn")
    delBtn.setAttribute("onclick","Delete(this)")



var edBTn = document.createElement("button")
var ednode= document.createTextNode("Edit")
edBTn.appendChild(ednode)
li.appendChild(edBTn)
edBTn.setAttribute("class","edBtn")
edBTn.setAttribute("onclick","edit(this)")


    list.appendChild(li)
    todo.value = ""
}


function Delete(e){

    e.parentNode.remove();
}
function deleteall(){
    list.innerHTML = ""
}
function edit(e){

var Edit = prompt("enter your task..",e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue = Edit
}