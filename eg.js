AOS.init();
var typed = new Typed('#element', {
    strings: ['I am into Web-Development ',' I am into frontend development', ' I am into backend development'],
    typeSpeed: 80,
  });
const hidden=true;
const btn = document.querySelector(".top2");
const body = document.querySelector('body')
const fun = ()=>{
  btn.classList.remove('hidden');
}

if(hidden==true){

  body.addEventListener("mouseover",(e)=>{
  e.preventDefault();
  let y=e.pageY;
  if(900>y){
    btn.classList.add("hidden");
  }
  else{
    fun();
  }
  });

};


const inmenu = document.querySelector(".inmenu") ;
const navbar = document.querySelector("navbar")
inmenu.addEventListener("click" , ()=>{
  inmenu.classList.toggle('hide');
  navbar.classList.toggle("hidenav")
  
})