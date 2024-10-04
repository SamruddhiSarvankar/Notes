console.log("hii");
function load() {
  let str = "";
  let getitemjson = localStorage.getItem("itemjson");
  a = JSON.parse(getitemjson);
  let colCount = 0;
  let all = localStorage.getItem("itemjson")
  let print = JSON.parse(all)
  if (print == null) {
    str += `<h1>No Items</h1>`
    var allnotes = document.getElementById("allnotes")
    allnotes.innerHTML = str
  } else {
    for (let i = 0; i < print.length; i++) {

      let p = print[i]
      let t = p[0]
      let d = p[1]
    let input=p[2]
    let date=p[3]
    let ho=p[4]
    let mo=p[5]
      colCount++;
      str += `<div class="col" id="col${colCount}";>
    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
      <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h3 class="pt-2 m-2 display-10 lh-1 fw-bold" id="t${colCount}">${t}</h3>
        <i><p id="d${colCount}">${d}</p></i>
        <p id="i${colCount}">${input}</p>
        <ul class="d-flex list-unstyled mt-auto">
          <li class="d-flex align-items-center me-auto">
          <button class="btn btn-primary m-2" type="button" id="edit${colCount}" onclick="edit1(${colCount})">Edit</button> 
          <button class="btn btn-danger del" type="button" onclick="delete1(${colCount})" id="delete${colCount}";>Delete</button>
          </li>
          <li class="d-flex align-items-center me-1">
            <small>${date + " on " + ho + ":" + mo}</small>
          </li>
        </ul>
      </div>
    </div>
  </div>`
   sendFiles();
  
  // const fileSelect = document.getElementById("fileSelect");
  // const fileElem = document.getElementById("fileElem");
      var allnotes = document.getElementById("allnotes")
      allnotes.innerHTML = str
    }
  }
  
 
}
  
// fileSelect.addEventListener(
//   "click",
//   (e) => {
//     if (fileElem) {
//       fileElem.click();
//     }
//   },
//   false,
// );
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}


function fun() {
  console.log("hii");
  var title = document.getElementById("title").value;
  var des = document.getElementById("des").value;
  var inp = document.getElementById("input").value;

  let a = [];
  let str = "";
  let time = new Date()
  let ti = time.getDate()
  let h = time.getHours()
  let m = time.getMinutes()
  if (localStorage.getItem("itemjson") == null) {
    a.push([title, des,inp,ti,h,m]);
    localStorage.setItem("itemjson", JSON.stringify(a));
  }
  else{
    let getitemjson = localStorage.getItem("itemjson");
    a = JSON.parse(getitemjson);
    a.push([title, des,inp,ti,h,m]);
    localStorage.setItem("itemjson", JSON.stringify(a));
  }
  let all = localStorage.getItem("itemjson")
  let print = JSON.parse(all)
  let colCount = 0;
  for (let i = 0; i < print.length; i++) {

    let p = print[i]
    let t = p[0]
    let d = p[1]
    let input=p[2]
    let date=p[3]
    let ho=p[4]
    let mo=p[5]
   
    colCount++;
    str += `<div class="col" id="col${colCount}">
  <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
      <h3 class="pt-2 m-2 display-10 lh-1 fw-bold" id="t${colCount}">${t}</h3>
      <i><p id="d${colCount}">${d}</p></i>
      <p id="i${colCount}">${input}</p>
      <ul class="d-flex list-unstyled mt-auto">
      <li class="d-flex align-items-center me-auto">
      <button class="btn btn-primary m-2" type="button" id="edit${colCount}" onclick="edit1(${colCount})">Edit</button> 
      <button class="btn btn-danger del" type="button" onclick="delete1(${colCount})" id="delete${colCount}">Delete</button>
      </li>
        <li class="d-flex align-items-center me-1">
          <small>${date + " on " + ho + ":" + mo}</small>
        </li>
      </ul>
    </div>
  </div>
</div>`
    var allnotes = document.getElementById("allnotes")
    allnotes.innerHTML = str
  }

}

function delete1(colNumber) {
  var title = document.getElementById("title").value;
  var des = document.getElementById("des").value;
  const colId = 'col' + colNumber;
  const colToRemove = document.getElementById(colId);
  if (colToRemove) {
    colToRemove.remove();
  }
  let getitemjson = localStorage.getItem("itemjson");
  a = JSON.parse(getitemjson);
  a.pop([title, des]);
  localStorage.setItem("itemjson", JSON.stringify(a));
  load();
}
var col;
function edit1(colNumber) {
  // Subtract 1 to adjust to 0-based indexing
  const colIndex = colNumber - 1;
  let getItemJson = localStorage.getItem("itemjson");
  let a = JSON.parse(getItemJson);
  document.getElementById("title").value = a[colIndex][0];
  document.getElementById("des").value = a[colIndex][1];
  document.getElementById("file").innerHTML = a[colIndex][2];
  console.log("coln"+colNumber)
  col=colNumber;
  return colNumber;
}

function update1() {
const colIndex = col- 1;
console.log(col)
  var title1 = document.getElementById("title").value;
  var des1 = document.getElementById("des").value;
  var input1 = document.getElementById("input").value;
  let getItemJson = localStorage.getItem("itemjson");
  let a = JSON.parse(getItemJson);
  for (let i = 0; i < a.length; i++) {  
    col++
  }
  let time = new Date()
  let ti = time.getDate()
  let h = time.getHours()
  let m = time.getMinutes()
    if (a && Array.isArray(a) && a[colIndex]) {
      a[colIndex][0] = title1; 
      a[colIndex][1] = des1;  
      a[colIndex][2] = input1; 
      a[colIndex][3] = ti;   
      a[colIndex][4] = h;   
      a[colIndex][5] = m;  
      localStorage.setItem("itemjson", JSON.stringify(a));
    }
  load();
  localStorage.setItem("itemjson", JSON.stringify(a));
}

function search() {
  var input = document.getElementById("searchid");
  var filter = input.value.toUpperCase();
  var allNotes = document.getElementById("allnotes");
  var colElements = allNotes.getElementsByClassName("col");

  for (var i = 0; i < colElements.length; i++) {
    var titleElement = colElements[i].querySelector(".col h3");
    if (titleElement) {
      var txtValue = titleElement.textContent || titleElement.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        colElements[i].style.display = ""; // Show the element
      } else {
        colElements[i].style.display = "none"; // Hide the element
      
      }
    }
  }
}

