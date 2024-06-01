const Task = require ('../models/task');

let Tasks=[
    (new Task(1,"Task 1", "Primera tarea")),
    (new Task(2,"Task 2", "Segunda tarea "))
];

//Obtener todas las tareas 
function getAllTasks(){
    return Tasks
}
//Obtener una tarea en especifico por ID
function getSpecificTask(id){
    return Tasks.find(task => task.id===parseInt(id));
}
//Crear una nueva tarea 
function createTask(title, description) {
    const newTask = new Task(Tasks.length + 1, title, description);
    Tasks.push(newTask);
    return newTask;
}

//Editar una tarea por su Id 
function updateTask(id,title,description,done){
    const task = Tasks.find(task=>task.id===parseInt(id));
    if(task){
        task.title=title;
        task.description=description;
        task.done=done;
        return task;
    }
    return null; 
}
//eliminar una tarea 
function deleteTask(id) {
    const index = Tasks.findIndex(task => task.id === parseInt(id));
    if (index !== -1) {
        Tasks.splice(index, 1);
        return true;
    } else {
        throw new Error('Task not found'); 
    }
}


module.exports={
    getAllTasks,
    getSpecificTask,
    createTask,
    updateTask,
    deleteTask
}




