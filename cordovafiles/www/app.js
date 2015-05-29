// (function () {
//   var serverURL = "http://localhost:3000";
//   var getTasks = function(){
//     $.ajax({
//       url: serverURL + "/tasks",
//       method: "GET",
//       dataType: "json"
//     }).done(function(response){
//       console.log(response);
//       var template = Handlebars.compile($("#task-list-tpl").html());
//       var html = template(response);
//       $('#tasks').append(html);
//     }).error(function(error){
//       console.log(error);
//     });
//   };
//   getTasks();

// }());



