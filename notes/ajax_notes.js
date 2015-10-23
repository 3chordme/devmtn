JQUERY DAY 02

html/css is static. jquery is dynamic.

Data. This is the real power of why we are going through this program

Make websites and drive things because of data.

There are only 5 things you can do with an app:

Make data,
change data,
check data,
move data,
delete data.

DOMO is the biggest funded company in utah $800 million. Qualtrex is not too far behind $500 million.
DOMO makes smart dashboards that any company could use. Interacting with data.

React.js second most popular front end library, from facebook. Different data flow. Not back and forth,
circular.

Today we are going to learn how to ask server for data, how to ask user for data and give it to server.

FTP (file transfer protocol) gets and gives files to a server. Good interview question.


AJAX. Asynchronous Javascript And XML (except most don't use xml anymore?)
html is a subset of xml. if you write it correctly you can something something xml that's called xhtml.

Before ajax what we had to do when the user clicked a button was ask for the data get back
all of the data and refresh the whole page instead of one little part. We dont have to reload
and refresh the entire page. Feels better for the user.

CRUD Create Read Update Delete. Things you can do with the server and your database.
Go make me a crud of the dev mountain student.

Create = POST
Read = GET
Update = PUT
Delete = DELETE

Those capitals are our methods.
Ajax is built into jquery.

var ajaxParams = {
  method: 'GET'
  url: 'http://www.twitter.com/api/timeline/?user=31213' //may not be correct format
}

//promises in javascript

$.ajax(ajaxParams).then(function(dataWeAskedFor) {

});

cyclomatic complexity. the longer your function is, the higher the odds of you writing a bug.
smaller is better. You can separate your functions into functions that do something, and then
functions that ask others to do something. May be easier.
