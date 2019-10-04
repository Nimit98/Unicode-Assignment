var taskList = document.getElementById('task-list');

// Adding New Task

function newElement()
{
    var newTask = document.getElementById('addTask').value;
    var li = document.createElement('li');
    li.className='list-group';
    var text = document.createTextNode(newTask);
    li.appendChild(text);
    var delBtn = document.createElement('button');
    delBtn.className='delBtn';
    var trash = document.createTextNode('X'); // trash &#128465;
    delBtn.appendChild(trash);
    li.appendChild(delBtn);
    taskList.appendChild(li);
    
}
// Remove Task And Adding Completed Task

document.getElementById('task-list').onclick = function(e){
    var i=0;
    if(e.target.classList.contains('delBtn')){
        var li = e.target.parentElement;
        taskList.removeChild(li);
    }
    else{
        
        var li = document.createElement('li');
        var taskDone = e.target;
        taskList.removeChild(taskDone);
        var ul = document.getElementById('complete');
        ul.appendChild(taskDone); 
    }
}
// UNDO

document.getElementById('complete').onclick = function(e){
    var completed = document.getElementById('complete');
        var li = document.createElement('li');
        var undo = e.target;
        taskList.appendChild(undo);
        completed.removeChild(undo);
}

    
