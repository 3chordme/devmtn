$(document).ready(function() {

  $('#tweet-controls').hide();
  $('.tweet-actions').hide();
  $('#profile-summary p').text('Shia Le Boof');
  $('.stats').hide(); //hides the timestamp and retweets etc
  $('.reply').hide(); //hides the reply box

  $('.tweet-compose').focus(function(){
    $('.tweet-compose').css('height', '5em');
    $('#tweet-controls').show();

    var charactersNum = parseInt($('#char-count').text());
    //console.log(charactersNum);

    $('.tweet-compose').keydown(function(key) {
      //if not delete keycode == 43
      //WRONG in mac it is keyCode 8
      //doesn't work if you hold down delete or highlight and delete or paste into.
      //use $('.tweet-compose').val().length(); maybe
      //character count of tweet box is changing when you type in reply box

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
          $('#tweet-submit').attr('disabled', true);
        }

        if (charactersNum > 0) {
          $('#tweet-submit').attr('disabled', false);
        }

        if (charactersNum > 10) {
          $('#char-count').css('color', '#999');
        }

    });//end of keydown function
  });

    $('#tweet-submit').on('click', function(ev) {
      ev.preventDefault();

      var tweetText = $('.tweet-compose').val();
      //console.log(tweetText + " is my tweet");

      var myTweet = $('.tweet:first').clone().prependTo('#stream'); //copy the first .tweet and put into front of #stream
      //console.log(tweeted)

      $('.tweet:first .avatar').attr('src', 'img/alagoon.jpg');
      $('.tweet:first .fullname').text('Shia Le Boof');
      $('.tweet:first .username').text('@theRealBoof');
      $('.tweet:first .tweet-text').text(tweetText);
      $('.tweet:first p.num-retweets').text('0');
      $('.tweet:first p.num-favorites').text('0');
      $('.tweet:first .tweet-compose').attr('placeholder', 'Reply to @theRealBoof');
      $('.tweet:first .users-interact div').empty();

    });//end of click (the tweeting function)


    $('.tweet').mouseenter(function showInteract() {
      console.log('coming')
      $('.stats').show();
      $('.reply').show();
    });

    $('.tweet').mouseleave(function hideInteract() {
      console.log('leaving');
      $('.stats').hide();
      $('.reply').hide();
    });

});
