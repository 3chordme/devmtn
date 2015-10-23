$(document).ready(function() {
  //step1
  $('#tweet-controls').hide();
  //step2
  $('.tweet-compose').focus(function(){
    $('.tweet-compose').css('height', '5em');
    $('#tweet-controls').show();

    var charactersNum = parseInt($('#char-count').text());
    //console.log(charactersNum);

    $('.tweet-compose').keyup(function(key) {
      //if not delete keycode == 43
      //WRONG in mac it is keyCode 8
      //doesn't work if you hold down delete or highlight and delete or paste into.
      //use $(this).val().length(); maybe


        if (key.keyCode !== 8) {
          //console.log(key.keyCode)
          charactersNum -= 1;
          $('#char-count').text(charactersNum.toString());
        }
        else if (charactersNum < 140 && key.keyCode === 8) {
          charactersNum += 1;
          $('#char-count').text(charactersNum.toString());
        }

        if (charactersNum <= 10) {
          $('#char-count').css('color', 'red');
        }

        if (charactersNum < 0) {
          $('#tweet-submit').hide();
        }

        if (charactersNum > 0) {
          $('#tweet-submit').show();
        }

        if (charactersNum > 10) {
          $('#char-count').css('color', '#999');
        }

    });

  });





})
