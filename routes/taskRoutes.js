const express = require ('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');
const authUtils = require('../middleware/authUtilities');
const tokenAuth = require('../middleware/authMiddleware');


router.get("/", tokenAuth, (req,res) => {
    try{
    res.json(taskController.getAllTasks());
    } catch (error){
        res.status(406);
    }
});

router.get("/first", tokenAuth, (req,res) => {
    try{
    res.json(taskController.getSpecificTask(1));
    } catch (error) {
        res.status(406);
    }
});

router.get("/latest", tokenAuth, (req,res) => {
    try {
    res.json(taskController.getSpecificTask(taskController.getTotalTasks()));
    } catch (error) {
        res.status(406);
    }
});

router.get("/notdone", tokenAuth, (req, res) => {
    try{
        let tasksNotDone = taskController.getTasksNotDone();
        if(tasksNotDone.length === 0){
            res.json({message: "All tasks are done"});
        } else {
            res.json(tasksNotDone);
        }
    }catch (error) {
    res.status(406);
    }
})

router.post("/", tokenAuth, (req,res) => {
    try {
        const {tiitle, description} = req.body;
        const newTask = taskController.createTask(tiitle, description);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(406);
    }
});

router.get("/:id", tokenAuth, (req,res) => {
    try {
        const {id} = req.params;
        res.json(taskController.getSpecificTask(id));
    } catch (error) {
        res.status(406);
    }
});

router.put("/:id", tokenAuth, (req,res) => {
    try{
        const {id} = req.params;
        const {title, description, done} = req.body;
        const updateTask = taskController.updateTask(id, title, description, done);
        res.status(202).json(updateTask);
    }catch (error) {
        res.status(406);
    }
});

router.delete("/:id", tokenAuth, (req,res) => {
    try {
        const {id} = req.params;
        const deleteTask = taskController.deleteTask(id); 
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(404).json({ error: error.message }); // Enviar un error con el mensaje del error capturado
    }
});



module.exports = router;