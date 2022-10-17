const Project = require('../models/project');

module.exports.home = function(req,res){
  Project.find({},function(err,projects){
    if(err){
      console.log(`Error in fetching the projects from db ${err}`);
      return;
    }
    return res.render('home',{
      title: "Issue Tracker | Home",
      projects: projects
    });
  });
}
