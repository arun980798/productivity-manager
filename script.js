let form = document.querySelector('#forme')//target todo form
let input = document.querySelector(' #forme input'); //target todo form input 
let textarea = document.querySelector(' #forme textarea')// target todo form textarea
let taskceckbox = document.querySelector('.markimp input') //target imp check in form todo
let currenttask = [
  {
    task: "mandir jao",
    details: "subja jana h ",
    imp: true,
  },
  {
    task: "padne  jao",
    details: "dophar me  jana h ",
    imp: false,
  },
  {
    task: "ghumne  jao",
    details: "sham ko  jana h ",
    imp: true,
  }
] //hold all  tasklist of the todo 



//use to open close task 
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


//use to render todo list 
function rendertask() {


  let allshowtask = document.querySelector('.showtodo')


  let sum = ' '

  currenttask.forEach(function (ele) {
    sum = sum + ` <div class="taskso  ">
     <div id="left">
      <h2  class="">${ele.task} <span class="${ele.imp}">imp </span></h2>
       <p>${ele.details}</p>
     </div>
   <button>remove</button>
  
  </div>`

  })
  allshowtask.innerHTML = sum;

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

