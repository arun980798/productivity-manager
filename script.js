function openclosecard() {
  const alelement = document.querySelectorAll('.elem')//it give the all element in the form of nodelist 
  const fullblock = document.querySelectorAll('.fullelem'); //it give full block nodelist 
  const back = document.querySelectorAll(".backo")






  //it select all element 
  //to open full screen page 
  alelement.forEach(function (ele) {
    //it do click opration where we click 
    //ye lisner kam karega jispe click keya h usko handel karega 
    ele.addEventListener('click', function () {

      fullblock[ele.id].style.display = "block"
    })
  })



  //to close full screen and go back
  back.forEach(function (eleo) {

    eleo.addEventListener("click", function () {
      fullblock[eleo.id].style.display = "none"

    })


  })
}
openclosecard()



function todo() {
  let form = document.querySelector('#forme')//target todo form
  let input = document.querySelector(' #forme input'); //target todo form input 
  let textarea = document.querySelector(' #forme textarea')// target todo form textarea
  let taskceckbox = document.querySelector('.markimp input') //target imp check in form todo
  let currenttask = [] //hold all  tasklist of the todo 



  if (localStorage.getItem("currenttask")) {
    currenttask = JSON.parse(localStorage.getItem("currenttask"))

  }
  else {
    console.log("task list is empty")
  }



  //use to open close task 



  //use to render todo list 
  function rendertask() {
    localStorage.setItem("currenttask", JSON.stringify(currenttask))


    let allshowtask = document.querySelector('.showtodo')


    let sum = ' '

    currenttask.forEach(function (ele, idx) {
      sum = sum + ` <div class="taskso  ">
     <div id="left">
      <h2  class="">${ele.task} <span class="${ele.imp}">imp </span></h2>
       <p>${ele.details}</p>
     </div>
   <button id ="${idx}">remove</button>
  
  </div>`

    })
    allshowtask.innerHTML = sum;


    let remove = document.querySelectorAll(".taskso  button");
    remove.forEach(function (btn) {
      btn.addEventListener("click", function () {
        currenttask.splice(btn.id, "1")
        rendertask();

      })

    })

  }
  rendertask();

  form.addEventListener("submit", function (eme) {
    eme.preventDefault();

    currenttask.push({
      task: input.value,
      details: textarea.value,
      imp: taskceckbox.checked,
    })


    console.log(currenttask)
    input.value = ''
    textarea.value = ''
    taskceckbox.checked = false;
    rendertask();
  })//form submit and add task to  lest 
}
todo();
function dailyplaner() {
  let dayplandata = JSON.parse(localStorage.getItem('dayplanerdata')) || {}
  let dailyshediv = document.querySelector(".dailyshediv");
  let hours = Array.from({ length: 18 }, (ele, idx) => { return `${6 + idx}:00 - ${7 + idx}:00 ` })
  let sum = "";
  hours.forEach(function (ele, idx) {
    let savedata = dayplandata[idx] || ''
    sum = sum + `<div class="dayplanertime">
  <p>${ele}</p>
  <input id="${idx}" type="text" value ="${savedata}" placeholder="...">
</div>`
  })
  dailyshediv.innerHTML = sum;
  let dailyinput = document.querySelectorAll(".dailyshediv input")
  dailyinput.forEach(function (ele) {
    ele.addEventListener('input', function () {
      dayplandata[ele.id] = ele.value;
      localStorage.setItem('dayplanerdata', JSON.stringify(dayplandata))
    })
  })
}
dailyplaner()



function motivation(){
  
let motiqute  = document.querySelector(" .moto2 h2 ")
let motiaurt  = document.querySelector(" .moto3 h3 ")



 async function fet() {
  let responce = await fetch("https://api.quotable.io/random")
let data = await responce.json()
console.log(data) 

motiqute.innerHTML = data.content
motiaurt.innerHTML = data.author
  
  

}



fet()
}

motivation()