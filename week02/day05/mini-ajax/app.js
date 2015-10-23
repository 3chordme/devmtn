$(document).ready(function() {



  $('body').on('click', '.js-get-users', function() {

    function handleSuccess(res){
      console.log(res);
      insertData(res.data);
    }

    return $.ajax({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=1'
    }).then(handleSuccess);
  });

  var insertData = function(arr) {
    var tpl = '<div>' +
                'User Info: <ul>' +
                  '<li>First name: <span class="js-first">none</span></li>' +
                  '<li>Last name: <span class="js-last">none</span></li>' +
                '</ul>' +
                '<hr>' +
              '</div>';

    arr.forEach(function(item, index) {
      var $copy = $(tpl);
      $copy.find('.js-first').text(item.first_name);
      $copy.find('.js-last').text(item.last_name);

      $('js-user-info-' + (index +1)).html($copy);
    });

  }

  $('body').on('submit', '.js-add-user', function(ev) {
    ev.preventDefault(); //stops the click from going any farther up, so none of the parents hear the event
  })

  $('body').on('click', '.js-add-user', function() {
    var userName = $('js-name').val();
    var userJob = $('.js-job').val();

    return $.ajax({
      method: 'POST', //adding, you are posting data online
      url: 'http://regress.in/api/users'
      data: { name: userName, job: userJob }
    }).then(function(res){
      var tpl = '<li>name: <span class="js-name">none</span></li>' +
        '<li>job: <span class="js-job">none</span></li>' +
        '<li>id: <span class="js-id">none</span></li>' +
        '<li>created at:  <span class="js-created-at">none</span></li>'
        ;

        $copy = $(tpl);
        $copy.find('.js-name').text(res.name);
        $copy.find('.js-job').text(res.job);
        $copy.find('.js-id').text(res.id);
        $copy.find('.js-created-at').text(res.createdAt);

        $('js-recent-user').html($copy);
    });
  })

});
