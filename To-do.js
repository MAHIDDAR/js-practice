// This line is just to confirm that our JavaScript file
// is properly connected to the HTML file.
// If you see "JS Connected" in the browser console,
// it means the script is loaded successfully.
console.log("JS Connected");


// Selecting the input field where the user types the task.
// We use querySelector to access the element using its id.
let input = document.querySelector("#taskInput");


// Selecting the button that will be clicked to add a task.
// If this id does not match the HTML, the button will be null.
let button = document.querySelector("#addBtn");


// Selecting the ordered list (<ol>) where all tasks will be displayed.
let list = document.querySelector("#taskList");


// Adding a click event to the button.
// This function will run every time the user clicks "Add Task".
button.addEventListener("click", function () {

    // Reading whatever the user typed inside the input field.
    // This value will become the task text.
    let task = input.value;

    // Checking if the input field is empty.
    // If it is empty, we show an alert and stop further execution.
    if (task === "") {
        alert("Please enter a task");
        return; // exit the function
    }

    // Creating a new <li> element dynamically.
    // This represents one task in the to-do list.
    let li = document.createElement("li");

    // Setting the text of the <li> to the user's input.
    li.innerText = task;

    // Adding some inline styling so the task looks clickable.
    li.style.color = "blue";
    li.style.cursor = "pointer";

    // Appending the newly created <li> into the ordered list.
    // This makes the task visible on the page.
    list.append(li);

    // Adding a click event to the list item itself.
    // When the user clicks on a task, it will be removed.
    li.addEventListener("click", function () {
        li.remove(); // removes the clicked task from the DOM
    });

    // Clearing the input field after adding the task.
    // This improves user experience so they can type a new task.
    input.value = "";
});
