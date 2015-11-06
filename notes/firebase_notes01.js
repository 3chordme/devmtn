FIREBASE NOTES

Firebase relies on a javascript library. Install by adding a script tag in the
head of your HTML like so:

<script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>

Firebase has realtime database, and authentication and hosting services.

To access database, create a reference using a URL specifying which data you want
to access in a script tag in your HTML body. Example:

<script>
  var myDataRef = new Firebase('https://mdf9bn93ytf.firebaseio-demo.com/');
</script>

Now myDataRef references your Firebase database at https://mdf9bn93ytf.firebaseio-demo.com/

Every piece of data has its own url. You can access your data in three ways.

1) From any Firebase client library.
2) From the Firebase REST API.
3) By entering the URL in any browser.

You can use the reference to write data to your Firebase database using the .set() function.
You can add Booleans, strings, and number data types. Also objects. Anything that
can be written as JSON. So I assume arrays too. Heres an object being added:

myDataRef.set({name: name, text: text});

This is still inside the same script tag where myDataRef was created.

To make a list use .push()

myDataRef.push({name: name, text: text});

Lists use chronologically ordered, globally unique IDs as the keys for items. This
means that many clients can add to the same list without conflict.

You can have the database notify you when info arrives:

myDataRef.on('child_added', function(snapshot) {
  //We'll fill this in later.
});

You always read data using callbacks, which ensures Firebase applications always
update in real time. Note that when you app starts, Firebase will call your callback
for all existing chat messages (in this example) and continue to call it for any
new messages that arrive.

Event types: value, child_added, child_removed, child_changed, child_moved
