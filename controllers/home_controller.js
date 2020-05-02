const Task = require('../models/task');

module.exports.home = function(req, res){
    Task.find({}, function(err, tasks){
        if (err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('home', {
            title: "TodoList Web App",
            task_list: tasks
        });
    });
    
}