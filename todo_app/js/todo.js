/*This function gets the task from the input!*/

function get_todos()
{
    /*this creates an array of tasks that are inputted*/
    var todos = new Array;

    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');

    /*if the input is not null then JSON.parse will communicate with the web browser to make the task a javascript object*/
    if (todos_str !== null)
        {
            todos = JSON.parse(todos_str);
        }
    return todos;
}

/*This function adds the inputted task to the get_todos function array*/
function add()
{
    /*this takes the inputted task and creates a variable of it */
    var task = document.getElementById('task').value;

    var todos = get_todos();

    /*this adds a new task to the end of the array */
    todos.push(task);

    /*this converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}
    
/*this function keeps the tasks permanently displayed on the screen*/
function show()
{
    /*this sets the task that was retrieved as a variable*/
    var todos = get_todos();

    /*this sets up each task as an unordered list*/
    var html = '<ul>';

    /*this displays a task to the list in the order that it was inputted*/
    for (var i = 0; i < todos.length; i++)
        {
            /*this also displays the task as a list and creates the button with the 'x' */
            html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
        };
    html += '<ul>';
    /*this displays the task as a list*/
       document.getElementById('todos').innerHTML = html;
}

/*this displays the inputted task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this will keep the elements permanently displayed on the screen*/
show();
        