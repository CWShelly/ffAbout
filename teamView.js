(function(module){
  var teamView ={};

var render = function(article){
  var template = Handlebars.compile($('#about-template').text());
  return template(article);
};

teamView.initAboutPage = function(articles){
  articles.forEach(function(a){
    $('#articles').append(render(a));
  });
};






module.teamView = teamView;
})(window);
