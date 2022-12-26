// const addBtn = document.getElementById("add");
// const taskList = document.getElementById("tasks");
// const inputText = document.getElementById("to-do-input");




// const cardItem = (text) =>{ 
//     const item = `
//                 <div class="task">
//                     <input type="text" class="text" readonly value="${text}" />
//                     <div class="actions">
//                         <button class="edit"><i class="fas fa-pen"></i></button>
//                         <button class="done"><i class="fas fa-check"></i></button>
//                         <button class="delete"><i class="fas fa-trash"></i></button>
//                     </div>
//                 </div>`;
//     return item;
// }

// const taskAdd = () => {
//     let text = inputText.value;
//     if(text === ""){
//         alert("Ta utga oruulaagui baina");
//     }else{

//         taskList.innerHTML += cardItem(text);
//     }
// }

// addBtn.addEventListener("click",taskAdd);
// document.addEventListener('keyup',(e)=>{
//     if(e.key === "Enter"){
//         taskAdd();
//     }
// })

// Ognoo heseg
  let d = new Date();
    let curr_date = d.getDate();
    let curr_month = d.getMonth() + 1; 
    let curr_year = d.getFullYear();
    let formattedDate =  curr_year + "-" + curr_month  + "-" + curr_date  + " ";
document.getElementById("DATE").innerHTML = `Он Сар Өдөр: ${formattedDate}`;
    
const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");

const ustgah = (e) => {
    // alert("Ustgagdlaa.");
    const parent = e.parentNode.parentNode.parentNode;
    const child = e.parentNode.parentNode;
    parent.removeChild(child)
}
const allTask = [
    {name: "JS", status: true, priority: "high" },
    {name: "HTML", status:false, priority: "high"}
]

const cardItem = () => { 
    tasks.innerHTML = " ";
    for ( let i = 0; i < allTask.length; i++){
    const done = allTask[i].status ? "strikethrough" : " " ;
    const item = `   
                <div class="task">
                    <input type="text" class="text ${done}" readonly value="${allTask[i].priority}" />
                    <div class="actions">
                        <button class="edit"><i class="fas fa-pen"></i></button>
                        <button class="done"><i class="fas fa-check"></i></button>
                        <button class="delete" onclick="ustgah(${i})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    return item;
}
}
const taskAdd = () => { 
    let text = inputText.value;
    if(text === ""){
        alert("Ta utga oruulaagui baina");
    }else{

        taskList.innerHTML += cardItem(text);
    }
}

addBtn.addEventListener("click",taskAdd);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        taskAdd();
    }
})
