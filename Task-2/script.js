let input = document.getElementById("inp");
let task = document.querySelector(".text");

function Add(){
    if(input.value == ""){
        alert("Please Enter Task")
    }else{
        let taskEle = document.createElement("ul");
        taskEle.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        task.appendChild(taskEle);
        input.value="";
        taskEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            taskEle.remove()
        }
    }
}