let layer = document.querySelector(".main__layer");
let flag = true;

onClick = (e) => {
  if (flag) {
  	e.classList.add("active");
  	e.setAttribute("title", "Выбрано");
  } else {
  	e.classList.remove("active");
  	e.setAttribute("title", "Выбрать");
  }
  flag = !flag;
}

linked = () => {
  flag ? 
  layer.classList.add("active") : 
  layer.classList.remove("active");
  flag = !flag;
}