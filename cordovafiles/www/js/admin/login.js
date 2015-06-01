$('document').ready(function() {
  $('#normaltrigger').on('click', switchMode);
  $('.create-member').on('submit', createMember);
  $('a.login-window').on('click', loginWindow);
  $(document).on('click', 'a.close, #mask, .submit', function() {
  $('#mask , .login-popup').fadeOut(300, function() {
          $('#mask').remove();
      });
      return false;
  });
});

$(function() {
  $('#login-form').submit(function(e) {



    e.preventDefault();

    $.ajax({
      url: e.target.action,
      method: e.target.method,
      data: $(e.target).serialize(),
      dataType: "json",
      xhrFields: { withCredentials: true },
    })

    .then(function(body, s, thing){
        console.log(thing.getAllResponseHeaders())
        return $.ajax({
          url: "http://10.0.0.53:3000/families.json",
          method: 'get',
          dataType: 'json',
          xhrFields: { withCredentials: true },
        });
    })
      .done(function(response) {
      console.log(response);
    }).fail(function(error) {
      console.log(error);
    });
  });
});


var loginWindow = function(e){
  var loginBox = ('.login-popup');
  $(loginBox).fadeIn(300);
  var popMargTop = ($(loginBox).height() + 24) / 2;
  var popMargLeft = ($(loginBox).width() + 24) / 2;
  $(loginBox).css({
    'margin-top': -popMargTop,
    'margin-left': -popMargLeft
  });
  $('body').append('<div id="mask"></div>');
  $('#mask').fadeIn(300);
  return false;
};

var switchMode = function(e) {
  e.preventDefault();
  $.ajax({
    url: "sessions/normal",
    method: "GET"
  }).done(function(response) {
    location.reload(false);
    console.log(response);
  }).fail(function(error) {
    console.log(error);
  });
};

var parentMode = function(e) {
  e.preventDefault();
  $.ajax({
    url: "sessions/admin",
    method: "GET"
  }).done(function(response) {
       location.reload(false);
  }).fail(function(error) {
      console.log(error);
  });
};

var createMember = function(event){
  event.preventDefault();
  $.ajax({
    url: "/members",
    method: "POST",
    data: $(event.target).serialize(),
  }).done(function(response){
    location.reload(false);
  }).fail(function(error){
    location.reload(false);
    console.log(error, "hello");
  });
};
