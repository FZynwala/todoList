console.log('%cWelcam! This is your To Do Lista', 'color:forestgreen');

const todo = [];
let taskId = 1;

show();

function Task(name) {
    this.content = name;
    this.createDate = new Date();
    this['Last modified'] = new Date();
    this.done = false;
    this.id = taskId;
}

function addTask(name) {
    todo.push(new Task(name));
    taskId++;
    show();
}

function deleteTask(taskid) {
    for(let i = 0; i < todo.length; i++) {
        if(todo[i].id === taskid) {
            todo.splice(i, 1);
        }
    }
    show();
}

function markAsDone(taskid) {
    for(let i = 0; i < todo.length; i++) {
        if(todo[i].id === taskid) {
            todo[i].done = true;
        }
    }
    show();
}

function modifyTask(taskid, newName) {
    for(let i = 0; i < todo.length; i++) {
        if(todo[i].id === taskid) {
            todo[i].content = newName;
            todo[i]['Last modified'] = new Date();
        }
    }
    show();
}

function show() {
    console.table(todo);
    console.log('addTask('+"'"+'taskContent'+"'"+')                             --> dodaj zadanie do listy')
    console.log('deleteTask(taskId)                                 --> usuń zadanie z listy')
    console.log('modifyTask(taskId, '+"'"+'newTaskContent'+"'"+')               --> zmodyfikuj zadanie z listy')
    console.log('markAsDone(taskId)                                 --> oznacz zadanie jako zrobione')
    console.log('showDone()                                         --> pokaż zrobione zadania')
    console.log('showActive()                                       --> pokaż jeszcze nie zrobione zadania')
    console.log('show()                                             --> pokaż wszystkie zadania')

}

function showDone() {
    let todoDone = [];

    for(let i = 0; i < todo.length; i++) {
        if(todo[i].done === true) {
            todoDone.push(todo[i]);
            
        }
    }
    console.table(todoDone);
}

function showActive() {
    let todoActive = [];

    for(let i = 0; i < todo.length; i++) {
        if(todo[i].done === false) {
            todoActive.push(todo[i]);
            
        }
    }
    console.table(todoActive);
}

function showTask(taskid) {
    for(let i = 0; i < todo.length; i++) {
        if(todo[i].id === taskid) {
            console.log(`%cContent: `,'color:dodgerblue;'); console.log(`${todo[i].content}`);
            console.log(`%cCreate date:`,'color:dodgerblue;'); console.log(`${todo[i].createDate}`);
        }
    }
}

