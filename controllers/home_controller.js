const Task = require('../models/task');

module.exports.home = function(req, res){
    Task.find({}, function(err, taskList){
        if (err){
            console.log('Error in fetching tasks from db');
            return;
        }

        return res.render('home', {
            title: "TodoList Web App",
            task_list: taskList
        });
    });
    
}