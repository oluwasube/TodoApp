const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// load event listeners
loadEventListeners();

function loadEventListeners()
{
    // Add task eventlistener
    form.addEventListener('submit', addTask);

    // remove task eventlistener
    taskList.addEventListener('click', removeTask);

    // clear btn eventlistener
    clearBtn.addEventListener('click', clearTask);
    
    // filter task eventlistener
    filter.addEventListener('keyup', filterTask);
}

function addTask(e)
{
   if (taskInput.value === '') {
       alert('Please put in a valid response');
   }
   
    // create an li
    const li = document.createElement('li');

    li.className = 'collection-item';
    
    li.appendChild(document.createTextNode(taskInput.value));

    // create link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = ' <i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);

    taskList.appendChild(li);

    // store task in local storage
    storeTaskInLocalStorage(taskInput.value);

    // clear input
    taskInput.value = '';

    e.preventDefault();

}

    function storeTaskInLocalStorage(task){
        let tasks;

        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }


// remove task

function removeTask(e) {
    
   if (e.target.parentElement.classList.contains('delete-item')) {
       
       e.target.parentElement.parentElement.remove();
   }
    
};

// clearTask

function clearTask() {
    // taskList.innerHTML = '';

 while (tasklist.firstChild) {
     tasklist.removeChild(tasklist.firstChild);
 }

}

// filter task
function filterTask(e){

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';

        } else {
            task.style.display = 'none';
        }
    })

}