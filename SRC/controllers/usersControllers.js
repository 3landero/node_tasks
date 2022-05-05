const Users = require('../models/userModels')

exports.getAllUsers = async (req, res, next) =>{
    try {
        let users = await Users.findAll();
        res.status(200).json(users)
        next();
    }    
    catch (error) {
        return res.status(500).json({ message: error.message });
        };
    }
    
exports.getUserById = async (req, res)=>{
    try {
        let requested_Id = req.params.id
        let user = await Users.findOne({
            where: {id:requested_Id}
        })
    res.status(200).json(user)    
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }    
}