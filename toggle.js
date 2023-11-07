// 책장 회전하기

var rotateBtn = document.querySelector(".rotate-btn");
var bookShelf = document.querySelector("#bookshelf");

rotateBtn.addEventListener('click', () => {
  console.log("회전 클릭");
  if (bookShelf.style.transform === "rotate(-90deg)") {
    bookShelf.style.transform = "rotate(0deg)";
  } else {
    bookShelf.style.transform = "rotate(-90deg)";
  }
});

// ---

var addBtn = document.querySelector(".addBtn");
let toggleBtn = document.querySelectorAll(".book-sentence");

addBtn.addEventListener('click', () => {
  // 첫번째 인풋값
  var button = document.createElement("button");
  var inputValue = document.getElementById("input-sentence").value;
  var t = document.createTextNode(inputValue);

  button.classList.add("book-sentence");
  button.appendChild(t);

  if (inputValue === '') {
    alert("문장을 찾아 써주세요.");
  } else {
    document.getElementById("bookshelf").appendChild(button);

    button.addEventListener('click', ()=>{
      OpenChild(button);
    });
  }
  document.getElementById("input-sentence").value = "";

  // 두번째 인풋값
  var p = document.createElement("p");
  var inputValue = document.getElementById("input-info").value;
  var t = document.createTextNode(inputValue);

  p.classList.add("book-info");
  p.appendChild(t);

  if (inputValue === '') {
    alert("책을 찾아 써주세요.");
  } else {
    document.getElementById("bookshelf").appendChild(p);
  }
  document.getElementsByClassName("book-info").value = "";
  document.getElementById("input-info").value = "";
});

//토글 되는 부분
toggleBtn.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    OpenChild(btn);
  })
})
 
function OpenChild(name){
  name.classList.toggle("active");
  var panel = name.nextElementSibling;
  if (panel.style.display === "flex") {
    panel.style.display = "none";
  } else {
    panel.style.display = "flex";
  }
}

