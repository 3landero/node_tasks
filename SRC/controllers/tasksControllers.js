const Tasks = require('../models/taskModels')


exports.getAllTasks = async (req, res) =>{
    try {
        let tasks = await Tasks.findAll();
        res.status(200).json(tasks);
    }    
    catch (error) {
        return res.status(500).json({ message: error.message });
        };
    }
    
exports.getTaskById = async (req, res)=>{
    try {
        let requested_Id = req.params.id
        let task = await Tasks.findOne({
            where: {id:requested_Id}
        });
    res.status(200).json(task);    
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }    
}
