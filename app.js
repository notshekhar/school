var file = document.getElementById('imag');
var uploaded = document.getElementById('sum');
file.addEventListener('change', upload);

function upload(event){
selectedFile = event.target.files[0];
}
uploaded.addEventListener('click', uploadFile);

function uploadFile(){
var path = document.getElementById("imag").value;
var fileName = path.match(/[^\/\\]+$/);
  
var storageRef = firebase.storage().ref('/stantschool/' + fileName);
  var uploadTask = storageRef.put(selectedFile);
  
storageRef.child('stantschool/').getDownloadURL().then(function(url) {
var today = new Date();
var dd = today.getDate();
  var postKey = firebase.database().ref('posts/').push().key;
  
  var updates = {};
  var postData = {
    usr: dd;
    caption: document.getElementById('cap').value;
    name: document.getElementById('put').value;
    url: url;
  } 
  updates[''/posts/+postKey] = postData;
 firebase.database().ref('posts/' + postKey);
  
});
  
}
