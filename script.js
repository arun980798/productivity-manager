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
back.forEach(function(eleo){
  console.log(eleo)
  eleo.addEventListener("click",function(){
    fullblock[eleo.id].style.display = "none"

  })


})