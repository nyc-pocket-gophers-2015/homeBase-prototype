(function () {
  var serverURL = "http://localhost:3000";
  console.log(serverURL);
  var getTasks = function(){
    $.ajax({
      url: serverURL + "/tasks",
      method: "GET",
      dataType: "jsonp"
    }).done(function(response){
      console.log(response);
      var template = Handlebars.compile($("#task-list-tpl").html());
      var html = template(response);
      $('body').append(html);
    }).error(function(error){
      console.log(error);
    });
  };
  getTasks();

}());



