document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#movie-list ul");
  const form = document.forms;

  //delete movie
  list.addEventListener("click", (e) => {
    if (e.target.className === "delete") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
      alert(`Deleted successfully!`);
    }
  });

  //add movie
  const addForm = form["add-movie"];
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();

    //create elements for dynamic adding
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement("li");
    const movieName = document.createElement("span");
    const deleteBtn = document.createElement("span");
    const visitBtn = document.createElement("span");

    //text content
    movieName.textContent = value;
    deleteBtn.textContent = "Delete";
    visitBtn.textContent = "Visit";

    //adding css class
    movieName.classList.add("name");
    deleteBtn.classList.add("delete");
    visitBtn.classList.add("visit");

    //finally append to list
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    li.appendChild(visitBtn);
    list.appendChild(li); //bug(1):- li didn't work
    alert("Added Successfully!!");
  });
});
