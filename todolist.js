console.log('%cWelcam! This is your To Do List', 'color:forestgreen');

let todo = [];

if(JSON.parse(localStorage.getItem('todo')) === null) {
    localStorage.setItem('todo', JSON.stringify(todo))
}

let taskId = localStorage.getItem('taskID');

show();

function Task(name) {
    this.content = name;
    this['Create date'] = new Date();
    this['Last modified'] = new Date();
    this['Status'] = 'active';
    this.id = taskId;
}

function addTask(name) {
    taskId = localStorage.getItem('taskID');
    taskId++;
    localStorage.setItem('taskID', taskId);
    
    todo = JSON.parse(localStorage.getItem('todo'));
    todo.push(new Task(name));
    localStorage.setItem('todo', JSON.stringify(todo))

    show();
}

function deleteTask(taskid) {
    todo = JSON.parse(localStorage.getItem('todo'));
    for(let i = 0; i < todo.length; i++) {
        if(todo[i].id === taskid) {
            todo.splice(i, 1);
        }
    }
    localStorage.setItem('todo', JSON.stringify(todo));
    show();
}

function markAsDone(taskid) {
    todo = JSON.parse(localStorage.getItem('todo'));
    for(let i = 0; i < todo.length; i++) {
        if(todo[i].id === taskid) {
            todo[i]['Status'] = 'done';
        }
    }
    localStorage.setItem('todo', JSON.stringify(todo));
    show();
}

function modifyTask(taskid, newName) {
    todo = JSON.parse(localStorage.getItem('todo'));
    for(let i = 0; i < todo.length; i++) {
        if(todo[i].id === taskid) {
            todo[i].content = newName;
            todo[i]['Last modified'] = new Date();
        }
    }
    localStorage.setItem('todo', JSON.stringify(todo));
    show();
}

function show() {
    console.table(JSON.parse(localStorage.getItem('todo')));
    console.log('addTask('+"'"+'taskContent'+"'"+')                             --> dodaj zadanie do listy')
    console.log('deleteTask(taskId)                                 --> usuń zadanie z listy')
    console.log('modifyTask(taskId, '+"'"+'newTaskContent'+"'"+')               --> zmodyfikuj zadanie z listy')
    console.log('markAsDone(taskId)                                 --> oznacz zadanie jako zrobione')
    console.log('showDone()                                         --> pokaż zrobione zadania')
    console.log('showActive()                                       --> pokaż jeszcze nie zrobione zadania')
    console.log('show()                                             --> pokaż wszystkie zadania')
    console.log('showTask(taskId)                                   --> pokaż szczegóły konkretnego zadania')

}

function showDone() {
    let todoDone = [];
    todo = JSON.parse(localStorage.getItem('todo'));

    for(let i = 0; i < todo.length; i++) {
        if(todo[i]['Status'] === 'done') {
            todoDone.push(todo[i]);
            
        }
    }
    console.table(todoDone);
    console.log('addTask('+"'"+'taskContent'+"'"+')                             --> dodaj zadanie do listy')
    console.log('deleteTask(taskId)                                 --> usuń zadanie z listy')
    console.log('modifyTask(taskId, '+"'"+'newTaskContent'+"'"+')               --> zmodyfikuj zadanie z listy')
    console.log('markAsDone(taskId)                                 --> oznacz zadanie jako zrobione')
    console.log('showDone()                                         --> pokaż zrobione zadania')
    console.log('showActive()                                       --> pokaż jeszcze nie zrobione zadania')
    console.log('show()                                             --> pokaż wszystkie zadania')
    console.log('showTask(taskId)                                   --> pokaż szczegóły konkretnego zadania')
}

function showActive() {
    let todoActive = [];
    todo = JSON.parse(localStorage.getItem('todo'));

    for(let i = 0; i < todo.length; i++) {
        if(todo[i]['Status'] === 'active') {
            todoActive.push(todo[i]);
            
        }
    }
    console.table(todoActive);
    console.log('addTask('+"'"+'taskContent'+"'"+')                             --> dodaj zadanie do listy')
    console.log('deleteTask(taskId)                                 --> usuń zadanie z listy')
    console.log('modifyTask(taskId, '+"'"+'newTaskContent'+"'"+')               --> zmodyfikuj zadanie z listy')
    console.log('markAsDone(taskId)                                 --> oznacz zadanie jako zrobione')
    console.log('showDone()                                         --> pokaż zrobione zadania')
    console.log('showActive()                                       --> pokaż jeszcze nie zrobione zadania')
    console.log('show()                                             --> pokaż wszystkie zadania')
    console.log('showTask(taskId)                                   --> pokaż szczegóły konkretnego zadania')
}

function showTask(taskid) {
    todo = JSON.parse(localStorage.getItem('todo'));
    for(let i = 0; i < todo.length; i++) {
        if(todo[i].id === taskid) {
            console.log('**************************')
            console.log(`%cContent: `,'color:dodgerblue;'); console.log(`${todo[i].content}`);
            console.log(`%cCreate date:`,'color:dodgerblue;'); console.log(`${todo[i]['Create date']}`);
            console.log(`%cStatus:`,'color:dodgerblue;'); console.log(`${todo[i]['Status']}`);
            console.log(`%cLast modified:`,'color:dodgerblue;'); console.log(`${todo[i]['Last modified']}`);
            console.log('**************************')
            console.log(' ')
            console.log('addTask('+"'"+'taskContent'+"'"+')                             --> dodaj zadanie do listy')
            console.log('deleteTask(taskId)                                 --> usuń zadanie z listy')
            console.log('modifyTask(taskId, '+"'"+'newTaskContent'+"'"+')               --> zmodyfikuj zadanie z listy')
            console.log('markAsDone(taskId)                                 --> oznacz zadanie jako zrobione')
            console.log('showDone()                                         --> pokaż zrobione zadania')
            console.log('showActive()                                       --> pokaż jeszcze nie zrobione zadania')
            console.log('show()                                             --> pokaż wszystkie zadania')
            console.log('showTask(taskId)                                   --> pokaż szczegóły konkretnego zadania')
        }
    }
}

