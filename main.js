//유저가 값을 입력한다
// +버튼을 입력하면 할일이 추가된다
//delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다
//진행중 끝남 탭을 누르면 언더바가 이동한다
//끝남탭은 끝난 아이템만, 진행중탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let mode = "";
let filterList = [];
addButton.addEventListener("click", addTask);
3;

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let list = [];
  if (mod == "all") {
    list = taskList;
  } else if (mode == "processing") {
    list = filterList;
  }
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task">
      <div class="task-done">${list[i].taskContent}</div>
      <div><button onClick="toggleComplete('${list[i].id}')">Check</button> <button onClick="deleteTask('${list[i].id}')">Delete</button></div>
    </div>`;
    } else {
      resultHTML += `<div class="task">
    <div>${list[i].taskContent}</div>
    <div><button onClick="toggleComplete('${list[i].id}')">Check</button> <button onClick="deleteTask('${list[i].id}')">Delete</button></div>
  </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      list[i].isComplete = !list[i].isComplete;
      break;
    }
  }
  render();
  console.log(list);
}

function deleteTask(id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      list.splice(i, 1);
      break;
    }
  }
  render();
}

function filter(event) {
  mode = event.target.id;
  filterList = [];
  if (mode == "all") {
    render();
  } else if (mode == "processing") {
    for (let i = 0; i < list.length; i++) {
      if (list[i].isComplete == false) {
        filterList.push(list[i]);
      }
    }
    taskList = filterList;
    render();
  }
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
