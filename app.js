document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#movie-list ul");
  const form = document.forms;

  // Delete movie
  list.addEventListener("click", (e) => {
    if (e.target.className === "delete") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
      alert(`Deleted successfully!`);
    }
  });

  // Add movie
  const addForm = form["add-movie"];
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the input value
    const value = addForm.querySelector('input[type="text"]').value.trim();

    // Checking empty string!
    if (value === "") {
      alert("Please enter a movie name.");
      return;
    }

    // Create elements for dynamic list
    const li = document.createElement("li");
    const movieName = document.createElement("span");
    const deleteBtn = document.createElement("span");
    const visitBtn = document.createElement("span");

    // Adding Text content
    movieName.textContent = value;
    deleteBtn.textContent = "Delete";
    visitBtn.textContent = "Visit";

    // Add CSS classes
    movieName.classList.add("name");
    deleteBtn.classList.add("delete");
    visitBtn.classList.add("visit");

    // Finally append to the list
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    li.appendChild(visitBtn);
    list.appendChild(li); // bug(1): li was not working!
    alert("Added Successfully!!");
  });
});
