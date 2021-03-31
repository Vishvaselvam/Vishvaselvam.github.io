let wrapper = document.querySelector(".wrapper");
let searchinput = document.querySelector(".search-input");
let autocompletebox = searchinput.querySelector(".autocompletebox");
let input = wrapper.querySelector(".input");
let keyindex = -1;
input.onkeyup = (event) => {
  let data = event.target.value;
  let emptyarray = [];
  if (data) {
    emptyarray = suggestion.filter((dat) => {
      return dat.toLocaleLowerCase().startsWith(data.toLocaleLowerCase());
    });
    emptyarray = emptyarray.map((dat) => {
      return "<li>" + dat + "</li>";
    });
    searchinput.classList.add("active");
    showList(emptyarray);
    let alllist = autocompletebox.querySelectorAll("li");
    for (let i = 0; i < alllist.length; i++) {
      alllist[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchinput.classList.remove("active");
  }
  if (event.keyCode == "38") {
    keyindex--;
    showKey(keyindex);
  } else if (event.keyCode == "40") {
    // down arrow
    keyindex++;
    showKey(keyindex);
    console.log("key down");
  } else if (event.keyCode == "13") {
    let alllist = autocompletebox.querySelectorAll("li");
    select(alllist[keyindex]);
    keyindex = -1;
  }
};
function showList(list) {
  let listdata;
  if (!list.length) {
    listdata = "<li>" + input.value + "<li>";
    suggestion.push(input.value);
  } else {
    listdata = list.join("");
  }
  autocompletebox.innerHTML = listdata;
}
function select(element) {
  searchinput.classList.remove("active");
  input.value = "";
  nextpage();
}
document.querySelector(".icon").addEventListener("click", () => {
  nextpage();
});
document.querySelector("body").addEventListener("click", () => {
  searchinput.classList.remove("active");
  input.value = "";
});
function showKey(inputindex) {
  let alllist = autocompletebox.querySelectorAll("li");
  alllist[inputindex].classList.add("liactive");
}
function nextpage() {
  searchinput.classList.remove("active");
  window.location.href = "ans.html";
}
