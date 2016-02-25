(function(module){
var mainController ={};

Team.createTable();
  mainController.index = function(ctx, next){
  teamView.initAboutPage(ctx.articles);
};

mainController.loadAll = function(ctx, next){
  var teamData = function(allArticles){
    ctx.articles = Team.all;
    next();
  };

 if(Team.all.length){
   ctx.articles = Team.all;
   next();
 } else{
   Team.fetchAll(teamData);
 }

};

module.mainController = mainController;

})(window);
